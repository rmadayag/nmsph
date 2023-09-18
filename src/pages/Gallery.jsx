import React, { useState } from 'react';
import { motion } from 'framer-motion'
import GalleryItem from './GalleryItem';

const Gallery = () => {
  // Define animation variants for left and right animations
  const leftVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const images = [];
  return (
    <>
      <motion.section
        id="gallery"
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-center bg-cover bg-banner h-[400px] lg:h-[500px] bg-no-repeat relative'>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[530px] m-auto absolute p-4'>
            <h1 className='text-h2 font-semibold text-left md:text-display md:text-left text-white '>
              Gallery
            </h1>
            <p className='max-w-xl text-left md:text-left text-white text-14 md:text-16 my-15 md:my-20'>
              The sights and sounds of life in New Media Services
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={rightVariants} // Apply left animation
        className='bg-white'>
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] grid lg:grid-cols-1'>
          <div className='flex flex-col h-full justify-center'>
            <GalleryItem images={images} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Gallery;