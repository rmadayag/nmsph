
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const GalleryFromDrive = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [apiKey] = useState('AIzaSyDd2LWEgAI9fFnDpv-dYQoQ62SfCg0PpSo'); // Replace with your Google Drive API key
  const [itemsPerPage] = useState(9);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Inside your component
  const imageStyles = {
    cursor: 'pointer', // Change cursor to pointer on hover
    transition: 'transform 0.2s ease', // Add a smooth transition effect for scaling
  };

  const clickableImageStyles = {
    ...imageStyles,
    transform: 'scale(1.0)', // Scale up on hover
    boxShadow: '0 2px 4px rgba(0, 123, 255, 0.2)', // Add a shadow to create depth
  };

  useEffect(() => {
    const parentFolderId = '1wfWWlxPAUeamaDqg-EV0cONoPOdw5eqh'; // Replace with your Google Drive parent folder ID
    fetchImagesFromFolder(parentFolderId);
  }, []);

  const fetchImagesFromFolder = async (folderId) => {
    setLoading(true);
    try {
      const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`;
      const response = await axios.get(apiUrl);
      const childFolders = response.data.files.filter((file) => file.mimeType === 'application/vnd.google-apps.folder');
      const childImages = response.data.files.filter((file) => file.mimeType.startsWith('image/'));

      setImages((prevImages) => [...prevImages, ...childImages]);

      // Fetch images from child folders recursively
      for (const folder of childFolders) {
        await fetchImagesFromFolder(folder.id);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    if (activeTab === 'year') {
      // Filter images for the current year and the previous year
      const filteredImagesByYear = images.filter((image) => {
        const imageYear = new Date(image.createdTime).getFullYear();
        return imageYear === currentYear || imageYear === currentYear - 1;
      });

      // Set the filtered images and selected year
      setFilteredImages(filteredImagesByYear);
      setSelectedYear(currentYear);
      setSelectedMonth(null);
    } else if (activeTab === 'months') {
      // Filter images for the current month and the previous month
      const filteredImagesByMonth = images.filter((image) => {
        const imageDate = new Date(image.createdTime);
        const imageYear = imageDate.getFullYear();
        const imageMonth = imageDate.getMonth();

        return (
          (imageYear === currentYear && imageMonth === currentMonth) ||
          (imageYear === currentYear && imageMonth === currentMonth - 0) ||
          (imageYear === currentYear - 0 && imageMonth === 11)
        );
      });

      // Set the filtered images, selected year, and selected month
      setFilteredImages(filteredImagesByMonth);
      setSelectedYear(currentYear);
      setSelectedMonth(currentMonth);
    } else if (activeTab === 'all') {
      // Show all photos
      setFilteredImages(images);
      setSelectedYear(null);
      setSelectedMonth(null);
    }
  }, [activeTab, images]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Hide the "Load More" button when all images are displayed
  const isLoadMoreHidden = page >= totalPages;

  const loadMoreImages = () => {
    setPage(page + 1);
  };


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setPage(1); // Reset page when changing tabs
  };

  const openImageViewer = (image) => {
    setSelectedImage(image);
    // Disable scrolling when the modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
    // Enable scrolling when the modal is closed
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    const currentIndex = filteredImages.findIndex((image) => image.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    const currentIndex = filteredImages.findIndex((image) => image.id === selectedImage.id);
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };



  return (
    <div className='flex flex-col gap-5'>
      <div className="flex justify-left space-x-5">
        {['all', 'year', 'months'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`${activeTab === tab ? 'bg-primary text-white' : 'bg-white text-accent'
              } font-semibold text-14 md:text-16 px-4 py-2 rounded-full hover:bg-primary hover:text-white`}
          >
            {tab === 'year' ? 'Year' : tab === 'months' ? 'Months' : 'All Photos'}
          </button>
        ))}
      </div>

      {selectedYear !== null && activeTab === 'year' && (
        <div>
          <h2 className="font-semibold mt-2 text-h3 md:text-h2 text-accent">{selectedYear}</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.slice(0, page * itemsPerPage).map((image) => (
              <img
              src={`https://drive.google.com/uc?id=${image.id}`}
              alt={image.name}
              className="w-full md:rounded-lg rounded-sm md:h-[200px] h-[76px] object-cover cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out"
              onClick={() => openImageViewer(image)}
              style={selectedImage === image ? clickableImageStyles : imageStyles}
            />
            ))}
          </div>
        </div>
      )}

      {selectedMonth !== null && activeTab === 'months' && (
        <div>
          <h2 className=" font-semibold mt-2 text-h3 md:text-h2 text-accent">
            {new Date().toLocaleDateString(undefined, { month: 'long' })}
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.slice(0, page * itemsPerPage).map((image) => (
              <img
              src={`https://drive.google.com/uc?id=${image.id}`}
              alt={image.name}
              className="w-full md:rounded-lg rounded-sm md:h-[200px] h-[76px] object-cover cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out"
              onClick={() => openImageViewer(image)}
              style={selectedImage === image ? clickableImageStyles : imageStyles}
            />
            ))}
          </div>
        </div>
      )}

      {(activeTab === 'all' || activeTab === 'year' || activeTab === 'months') && (
        <div className="grid grid-cols-3 gap-4">
          {filteredImages.slice(0, page * itemsPerPage).map((image) => (
            <div key={image.id}>
              <img
                src={`https://drive.google.com/uc?id=${image.id}`}
                alt={image.name}
                className="w-full md:rounded-lg rounded-sm md:h-[200px] h-[76px] object-cover cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out"
                onClick={() => openImageViewer(image)}
                style={selectedImage === image ? clickableImageStyles : imageStyles}
              />
            </div>
          ))}

        </div>
      )}

      <div className="flex justify-center">
        {loading ? (
          <p className='text-accent/50'>Loading...</p>
        ) : (
          // Conditionally render the button
          !isLoadMoreHidden && (
            <button
              onClick={loadMoreImages}
              className="rounded-lg bg-secondary text-accent font-semibold text-14 md:text-16 w-sm-button h-sm-button md:w-lg-button md:h-lg-button hover:bg-primary hover:text-white"
            >
              Load More
            </button>
          )
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-[999]">
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"></div>
          <div className="relative">
            <button onClick={closeImageViewer} type="button" class="absolute -right-10 -top-10 text-white bg-primary hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <img
              src={`https://drive.google.com/uc?id=${selectedImage.id}`}
              alt={selectedImage.name}
              className="md:w-auto w-full md:h-[600px] h-auto mx-auto"
            />
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
            >
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="13.5" fill="#FF4545" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4681 13.8756C10.2606 13.6682 10.2606 13.3318 10.4681 13.1243L15.7806 7.81185C15.9881 7.60438 16.3244 7.60438 16.5319 7.81185C16.7394 8.01932 16.7394 8.35568 16.5319 8.56315L11.5951 13.5L16.5319 18.4368C16.7394 18.6443 16.7394 18.9807 16.5319 19.1882C16.3244 19.3956 15.9881 19.3956 15.7806 19.1882L10.4681 13.8756Z" fill="white" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
            >
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="13.5" fill="#FF4545" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5319 13.1244C16.7394 13.3318 16.7394 13.6682 16.5319 13.8757L11.2194 19.1882C11.0119 19.3956 10.6756 19.3956 10.4681 19.1882C10.2606 18.9807 10.2606 18.6443 10.4681 18.4368L15.4049 13.5L10.4681 8.56315C10.2606 8.35568 10.2606 8.01932 10.4681 7.81185C10.6756 7.60438 11.0119 7.60438 11.2194 7.81185L16.5319 13.1244Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryFromDrive;