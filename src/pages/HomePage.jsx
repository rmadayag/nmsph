
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import lifestyles from '/home-2.png';
import services from '/illustration.svg';
import messaging from '/messaging.svg';
import design from '/design.svg';
import moderate from '/moderate.svg';
import voice from '/voice.svg';
import employee1 from '/employee1.png';
import employee2 from '/employee2.png';
import employee3 from '/employee3.png';
import VideoPopUp from './VideoPopUp';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';


import TextTransition, { presets } from 'react-text-transition';
import axios from 'axios';


function HomePage() {
  // Define animation variants for left and right animations
  const leftVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const apiKey = 'AIzaSyDd2LWEgAI9fFnDpv-dYQoQ62SfCg0PpSo'; // Replace with your Google Drive API key

  useEffect(() => {
    const parentFolderId = '1wfWWlxPAUeamaDqg-EV0cONoPOdw5eqh';
    fetchImagesFromFolder(parentFolderId);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      // Make the body not scrollable when the modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Make the body scrollable again when the modal is closed
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  const fetchImagesFromFolder = async (folderId) => {
    try {
      const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`;
      const response = await axios.get(apiUrl);
      const childImages = response.data.files.filter((file) => file.mimeType.startsWith('image/'));

      if (childImages.length > 0) {
        // Limit to 5 images
        setImages((prevImages) => [...prevImages, ...childImages.slice(0, 5)]);
      }

      const childFolders = response.data.files.filter((file) => file.mimeType === 'application/vnd.google-apps.folder');

      for (const folder of childFolders) {
        await fetchImagesFromFolder(folder.id);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  // Function to open the modal and set the current image index
  const handleImageClick = (index) => {
    setModalOpen(true);
    setCurrentImageIndex(index);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Function to navigate to the previous image
  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Function to navigate to the next image
  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };


  const texts = ['We Manage Communication', 'We Build Messaging Platforms', 'We Design & Develop Apps', 'We Moderate & improve websites', 'We do voice customer service', 'We are NMS Philippines', 'We Achieve the Impossible'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <section
        id="home"
        className='bg-center bg-cover bg-hero min-h-[40vh] lg:h-[948px] bg-no-repeat relative'>
        <div className='w-full h-screen'>
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[530px] m-auto absolute p-4'>
              <h1 className='md:text-display text-h2 font-semibold text-left text-accent'>
                <TextTransition springConfig={presets}>{texts[index % texts.length]}</TextTransition>
              </h1>
              <p className='max-w-[600px] text-accent text-14 md:text-16 py-5'>
                We Manage Communications and Content of Consumers through SMS, IM, Email and Voice Solutions using our cloud based Messaging Platforms
              </p>
              <a href="/careers">
                <button
                  className="rounded-30px bg-primary text-white font-semibold text-14 md:text-16 w-sm-button h-sm-button md:w-lg-button md:h-lg-button hover:bg-primary/80">
                  Join Our Team
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={rightVariants} // Apply right animation
        className='bg-white'>
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] flex flex-col lg:flex-row gap-10'>
          {/* Left Side */}
            <VideoPopUp />
         
          {/* Right Side */}
          <div className='flex flex-col justify-center gap-5 w-full'>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent'>NMS-PH is the operations center of New Media Services Pty. Ltd.</h3>
            <p className='text-center md:text-left text-accent text-14 md:text-16'>
              We are a mix of people from all walks of life, contrasting backgrounds, different languages and distinct characters all working as one under the core philosophy that "we can achieve the impossible together.
            </p>
            <p className='text-center md:text-left text-accent text-14 md:text-16'>
              Established here in the Philippines in the year 2011 as an IT Services company with initial focus on Design and Programming, our growth has been constant in the years following. By May 2013, we had achieved PEZA*** Accreditation. Upon realizing the broad scope of Information Technology as not just solely design and programming, we have extended our coverage to all back-end services under the Information Technology field.
            </p>
            <p className='text-center md:text-left text-accent text-14 md:text-16'>
              NMS-PH aims to generate even more jobs for Filipinos, to build connections, achieve the impossible through commitment to teamwork and to continue giving back to the community through NMS-Cares.
            </p>
            <div>
              <a href='/about'>
                <button
                  className="rounded-30px font-semibold bg-primary text-white text-14 md:text-16 w-sm-button h-sm-button md:w-lg-button md:h-lg-button hover:bg-primary/80">
                  Read more
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-bgcolor'>
        <div className='container items-center mx-auto py-40 md:py-70'>
          <div class="flex flex-wrap mx-16px md:mx-100px">
            <div className="md:rounded-full rounded-15px bg-primary relative px-5 lg:max-w-5xl w-full ml-auto min-h-[24rem] flex lg:flex-row flex-col-reverse items-center">
              <Swiper className='md:rounded-30px rounded-15px w-full md:w-[454px] h-169 md:h-[240px] lg:absolute md:bottom-50 md:-left-60 object-cover shadow-shadow cursor-pointer'
                spaceBetween={40}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  // Responsive breakpoints
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="md:rounded-30px rounded-15px bg-white text-accent relative px-5 py-5 flex lg:flex-row flex-col-reverse items-center h-169 md:h-[240px]">
                    <div>
                      <h2 className="text-14 md:text-16 font-semibold mb-5 ">
                        Equal Opportunity Hiring
                      </h2>
                      <p className="lg:text-left text-justify max-w-lg text-14 md:text-16">
                        Here at New Media Services Philippines (NMS-PH) we care more about ability rather than pure academic achievement. We welcome anyone who can prove his/her quality as part of our team.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="md:rounded-30px rounded-15px bg-white text-accent relative px-5 py-5 flex lg:flex-row flex-col-reverse items-center h-169 md:h-[240px]">
                    <div>
                      <h2 className="text-14 md:text-16 font-semibold mb-5 ">
                        Strong Company Culture
                      </h2>
                      <p className="lg:text-left text-justify max-w-lg text-14 md:text-16">
                        We help build lives by constantly reviewing our successes and failures. Through this knowledge we have built a company culture that is both professional and fun, therefore creating a solid bond within the workforce.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="md:rounded-30px rounded-15px bg-white text-accent relative px-5 py-5 flex lg:flex-row flex-col-reverse items-center h-169 md:h-[240px]">
                    <div>
                      <h2 className="text-14 md:text-16 font-semibold mb-5 ">
                        Forward-Thinking
                      </h2>
                      <p className="lg:text-left text-justify max-w-lg text-14 md:text-16">
                        A good company is comprised of good employees. NMS-PH encourages our workforce regardless of rank or tenure to give constructive ideas for operations improvement, workplace morale and business development.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="md:rounded-30px rounded-15px bg-white text-accent relative px-5 py-5 flex lg:flex-row flex-col-reverse items-center h-169 md:h-[240px]">
                    <div>
                      <h2 className="text-14 md:text-16 font-semibold mb-5 ">
                        Knowledge Development
                      </h2>
                      <p className="lg:text-left text-justify max-w-lg text-14 md:text-16">
                        There are no dead-end jobs in NMS-PH. As long as you are open to learning, we are open to teaching. Our staff is trained in all services as a way to reduce monotony and open other career paths.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="md:rounded-30px rounded-15px bg-white text-accent relative px-5 py-5 flex lg:flex-row flex-col-reverse items-center h-169 md:h-[240px]">
                    <div>
                      <h2 className="text-14 md:text-16 font-semibold mb-5 ">
                        Harmony in Diversity
                      </h2>
                      <p className="lg:text-left text-justify max-w-lg text-14 md:text-16">
                        We value diversity and recognize the unique opportunities this opens. We are an all-inclusive company that takes into consideration the rare and remarkable differences of people, genders and beliefs that directly contribute to our growth.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="md:rounded-30px rounded-5px bg-white text-accent relative px-5 py-5 flex lg:flex-row flex-col-reverse items-center h-169 md:h-[240px]">
                    <div>
                      <h2 className="text-14 md:text-16 font-semibold mb-5 ">
                        Work Hard, Party Harder
                      </h2>
                      <p className="lg:text-left text-justify max-w-lg text-14 md:text-16">
                        We understand that not everything is about work and deliverables; which is why we hold various events throughout the year in an effort to relieve employee-stress and increase social interactions within the whole workforce.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="md:rounded-30px rounded-15px bg-white text-accent relative px-5 py-5 flex lg:flex-row flex-col-reverse items-center h-169 md:h-[240px]">
                    <div>
                      <h2 className="text-14 md:text-16 font-semibold mb-5 ">
                        Earning and Giving Back
                      </h2>
                      <p className="lg:text-left text-justify max-w-lg text-14 md:text-16">
                        We not only provide jobs but also work to help the community through our Charitable Organization "NMS Cares" by providing IT programs, sign-language classes, fund-raising and various other activities for the Deaf community.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="md:rounded-30px rounded-15px bg-white text-accent relative px-5 py-5 flex lg:flex-row flex-col-reverse items-center h-169 md:h-[240px]">
                    <div>
                      <h2 className="text-14 md:text-16 font-semibold mb-5 ">
                        Comfortable Work Environment
                      </h2>
                      <p className="lg:text-left text-justify max-w-lg text-14 md:text-16">
                        Working at NMS-PH is a challenging but enjoyable experience. We offer a workplace where superiors are approachable, benefits are fitting, and company events are fun.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
              <div>
                <h2 className="text-h3 md:text-h2 font-semibold text-white md:mx-60 md:w-2/5">
                  Modern People with Modern Lifestyles
                </h2>
                <p className="lg:text-left text-justify max-w-lg text-14 md:text-16 md:my-20 my-15 text-white leading-6 md:mx-60 md:w-2/5">
                  "Be part of our constantly growing family and help us by becoming a valued building block for our innovative, unique and progressive services."
                </p>
              </div>
              <img
                src={lifestyles}
                alt=""
                className="lg:h-[25rem] h-80 lg:absolute bottom-0 -right-0 object-cover rounded-30px"
              />
            </div>

          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={rightVariants} // Apply left animation
        className='bg-secondary'>
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] grid lg:grid-cols-2 gap-10'>
          {/* Left Side */}
          <div class="relative">
            <img src={services} alt="Your Image" class="w-full h-full" />
            <div class="absolute inset-0 flex items-center justify-center">
              <h3 class="text-h3 md:text-[37px] text-white font-bold">
                Our <br />Services
              </h3>
            </div>
          </div>
          {/* Right Side */}
          <div className='flex flex-col h-full justify-center gap-5'>
            <h3 className='text-h3 font-semibold text-center md:text-h3 md:text-center text-accent'> We provide the best services for our customers</h3>
            <motion.div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row-2 gap-5">
              <div className=' bg-white hover:bg-primary text-accent hover:text-white rounded-sm md:rounded-30px shadow-shadow py-20 md:py-20 px-20 md:px-20'>
                <motion.div className='md:w-1/2 mx-auto pb-15 md:pb-20'>
                  <img src={messaging} class="mx-auto" />
                </motion.div>
                <motion.h3 className='text-h3 font-semibold text-center md:text-h3 md:text-center mb-15 md:mb-20'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  Build Messaging Platforms
                </motion.h3>

                <motion.p className='text-14 md:text-16 max-w-xl text-center md:text-center mb-15 md:mb-20'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  This platform allows users to exchange messages, media files, and other types of information.
                </motion.p>
              </div>

              <div className=' bg-white hover:bg-primary text-accent hover:text-white rounded-sm md:rounded-30px shadow-shadow py-20 md:py-20 px-20 md:px-20'>
                <motion.div className='md:w-1/2 mx-auto pb-15 md:pb-20'>
                  <img src={design} class="mx-auto" />
                </motion.div>
                <motion.h3 className='text-h3 font-semibold text-center md:text-h3 md:text-center mb-15 md:mb-20'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  Design & Develop Apps
                </motion.h3>

                <motion.p className='text-14 md:text-16 max-w-xl text-center md:text-center mb-15 md:mb-20'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  We have the opportunity to create innovative and user-friendly apps that meet our clients' needs and contribute to a positive user experience.
                </motion.p>
              </div>

              <div className=' bg-white hover:bg-primary text-accent hover:text-white rounded-sm md:rounded-30px shadow-shadow py-20 md:py-20 px-20 md:px-20'>
                <motion.div className='md:w-1/2 mx-auto pb-15 md:pb-20'>
                  <img src={moderate} class="mx-auto" />
                </motion.div>
                <motion.h3 className='text-h3 font-semibold text-center md:text-h3 md:text-center mb-15 md:mb-20'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  Moderate & improve websites
                </motion.h3>

                <motion.p className='text-14 md:text-16 max-w-xl text-center md:text-center mb-15 md:mb-20'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  Stay responsive to user feedback and industry trends to ensure your website remains relevant and valuable to its audience
                </motion.p>
              </div>

              <div className=' bg-white hover:bg-primary text-accent hover:text-white rounded-sm md:rounded-30px shadow-shadow py-20 md:py-20 px-20 md:px-20'>
                <motion.div className='md:w-1/2 mx-auto pb-15 md:pb-20'>
                  <img src={voice} class="mx-auto" />
                </motion.div>
                <motion.h3 className='text-h3 font-semibold text-center md:text-h3 md:text-center mb-15 md:mb-20'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  Voice customer service
                </motion.h3>

                <motion.p className='text-14 md:text-16 max-w-xl text-center md:text-center mb-15 md:mb-20'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  Setting up a voice customer service involves creating a reliable and efficient to handle incoming customer calls and provide them with the support they need.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-white'>
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] grid lg:grid-cols-1 gap-10'>
          <div className='flex flex-col h-full justify-center gap-5'>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-center text-accent'>Our Gallery</h3>
            <p className='text-center md:text-center text-accent text-14 md:text-16'>
              Here are some of our Latest gallery images taken from the recent business events
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full md:h-full h-[200px] p-1 md:p-2">
                {images.length > 0 && (
                  <img
                    src={`https://drive.google.com/uc?id=${images[0].id}`}
                    alt={images[0].name}
                    className='block h-full w-full rounded-sm md:rounded-30px object-cover object-center cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out'
                    onClick={() => handleImageClick(index)}
                  />
                )}
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              {images.slice(1, 5).map((image) => (
                <div key={image.id} className="w-1/2 h-1/2 p-1 md:p-2">
                  <img
                    src={`https://drive.google.com/uc?id=${image.id}`}
                    alt={image.name}
                    className='block h-full w-full rounded-sm md:rounded-30px object-cover object-center cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out'
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
            {modalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                <div className="max-w-full max-h-full">
                  <div className="relative">
                    {currentImageIndex > 0 && (
                      <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
                      >
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="27" height="27" rx="13.5" fill="#FF4545" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4681 13.8756C10.2606 13.6682 10.2606 13.3318 10.4681 13.1243L15.7806 7.81185C15.9881 7.60438 16.3244 7.60438 16.5319 7.81185C16.7394 8.01932 16.7394 8.35568 16.5319 8.56315L11.5951 13.5L16.5319 18.4368C16.7394 18.6443 16.7394 18.9807 16.5319 19.1882C16.3244 19.3956 15.9881 19.3956 15.7806 19.1882L10.4681 13.8756Z" fill="white" />
                        </svg>
                      </button>
                    )}
                    {currentImageIndex < images.length - 1 && (
                      <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
                      >
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="27" height="27" rx="13.5" fill="#FF4545" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5319 13.1244C16.7394 13.3318 16.7394 13.6682 16.5319 13.8757L11.2194 19.1882C11.0119 19.3956 10.6756 19.3956 10.4681 19.1882C10.2606 18.9807 10.2606 18.6443 10.4681 18.4368L15.4049 13.5L10.4681 8.56315C10.2606 8.35568 10.2606 8.01932 10.4681 7.81185C10.6756 7.60438 11.0119 7.60438 11.2194 7.81185L16.5319 13.1244Z" fill="white" />
                        </svg>
                      </button>
                    )}
                    <button onClick={handleCloseModal} type="button" class="absolute -right-10 -top-10 text-white bg-primary hover:bg-gray-200 hover:text-gray-900 rounded-30px text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                    <img
                      src={`https://drive.google.com/uc?id=${images[currentImageIndex].id}`}
                      alt={images[currentImageIndex].name}
                      className="md:w-auto w-full md:h-[600px] h-auto mx-auto"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='flex justify-center'>
            <a href='/gallery'>
              <button
                className="rounded-30px font-semibold bg-primary text-white text-14 md:text-16 w-sm-button h-sm-button md:w-lg-button md:h-lg-button hover:bg-primary/80">
                View more
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={rightVariants} // Apply left animation
        className='bg-secondary'>
        <div className='bg-secondary py-40 md:py-70'>
          <div className='container items-center mx-auto'>
            <motion.h2 className='text-h3 font-semibold text-center md:text-h2 md:text-center text-accent mb-15 md:mb-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              Testimonial
            </motion.h2>

            <motion.p className='text-14 md:text-16 text-center md:text-center text-accent mb-15 md:mb-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              Our Happy Employees Tell About Us
            </motion.p>
          </div>
          <div className='flex items-center relative text-accent w-screen'>
            <Swiper
              modules={[EffectCoverflow, Pagination]}
              effect={'coverflow'}
              loop={true}
              spaceBetween={40}
              slidesPerView={3}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              centeredSlides={true}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                slideShadows: false,
              }}
              className="coverflow"
              breakpoints={{
                // Responsive breakpoints
                375: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div class="rounded-30px bg-white hover:bg-primary text-accent hover:text-white p-4 w-full shadow-shadow">
                  <div class="flex items-center">
                    <img
                      src={employee1}
                      alt=""
                      className="lg:h-[5rem] h-[4rem] rounded-full"
                    />
                    <div class="ml-5 md:text-16 text-14">
                      <p> I've been with NMS for seven years now. Working here has made me stronger, more confident. You know how they say that you're on the road to success when you find a job you'd do even without pay? I found that job here. Thank you so much NMS!</p>
                      <p class="mt-5 font-semibold">Rosanna Canilang Leal</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="rounded-30px bg-white hover:bg-primary text-accent hover:text-white p-4 w-full shadow-shadow">
                  <div class="flex items-center">
                    <img
                      src={employee2}
                      alt=""
                      className="lg:h-[5rem] h-[4rem] rounded-full"
                    />
                    <div class="ml-5 md:text-16 text-14">
                      <p> In the five years that I've worked at NMS, I've discovered that it's a very people-oriented company. They value you not only as an employee but as a person. It truly feels good to be needed and valued; that's why I chose to stay and work for NMS.</p>
                      <p class="mt-5 font-semibold">Christian Noel G. Reyes</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="rounded-30px bg-white hover:bg-primary text-accent hover:text-white p-4 w-full shadow-shadow">
                  <div class="flex items-center">
                    <img
                      src={employee3}
                      alt=""
                      className="lg:h-[5rem] h-[4rem] rounded-full"
                    />
                    <div class="ml-5 md:text-16 text-14">
                      <p>When I joined NMS as a Customer Service representative, I found it difficult to adjust to the job's demands. But the encouragement I received from the NMS family helped me handle the pressure better and they also taught me how to save for my future.</p>
                      <p class="mt-5 font-semibold">Cher R. Lagura</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              .
            </Swiper>
          </div>
        </div>
      </motion.section>

    </>
  )
}

export default HomePage