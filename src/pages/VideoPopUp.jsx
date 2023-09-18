import React, { useState } from 'react';
import about from '/home-1.png';

const VideoPopUp = ({ videoUrl, imageSrc, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <img className='w-full' src={about} />
      <button onClick={openModal} type="button" class="md:h-[4rem] h-[1rem] absolute top-1/3 right-1/3 md:top-1/2 md:-right-10  transform -translate-y-1/2">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="50" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 50C9.375 27.5634 27.5634 9.375 50 9.375C72.4366 9.375 90.625 27.5634 90.625 50C90.625 72.4366 72.4366 90.625 50 90.625C27.5634 90.625 9.375 72.4366 9.375 50ZM67.8091 45.9026C71.0238 47.6885 71.0238 52.3118 67.8091 54.0978L44.464 67.0673C41.3396 68.8031 37.5 66.5438 37.5 62.9697V37.0307C37.5 33.4565 41.3396 31.1973 44.464 32.9331L67.8091 45.9026Z" fill="#FF4545" />
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[999]">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="relative">

            {/*close button*/}
            <button onClick={closeModal} type="button" class="absolute -right-10 -top-10 text-white bg-primary hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            {/*body*/}
            <iframe
              class="md:w-[800px] w-full aspect-video "
              src="https://www.youtube.com/embed/W3XLJV0FqvM"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopUp;
