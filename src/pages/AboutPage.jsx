import React from "react";
import about1 from "/about-1.png";
import about2 from "/about-2.png";
import martin from "/team-martin.png";
import raffy from "/team-raffy.png";
import sheena from "/team-sheena.png";
import ronalyn from "/team-rona.png";
import karlo from "/team-karlo.png";
import virginia from "/team-virginia.png";
import { motion } from 'framer-motion'
import VideoPopUp from './VideoPopUp';

const AboutPage = () => {
  // Define animation variants for left and right animations
  const leftVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <motion.section
        id="about"
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-center bg-cover bg-banner h-[400px] lg:h-[500px] bg-no-repeat relative'>
        <div className='w-full h-screen'>
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[530px] m-auto absolute p-4'>
              <h1 className='md:text-display text-h2 font-semibold text-left text-white'>
                About us
              </h1>
              <p className='max-w-[600px] text-white text-14 md:text-16 py-5'>
                New Media Services specializes in delivering intelligent outsourcing services through a combination of machine learning and human-powered activities.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

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
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-secondary'>
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] grid lg:grid-cols-2 gap-10'>
          {/* Left Side */}
          <div className='flex flex-col h-full justify-center gap-5'>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent'> What we do</h3>
            <p className='text-center md:text-left text-accent text-14 md:text-16'>
              We provide you with cost-effective and world class back end services. Our flexible services include Multilingual Customer Support, Human & AI-powered Content Moderation, Chat Operator Services, and TIRO Conversational AI Platform. We also tailor our services to suit your business needs.
            </p>
          </div>
          {/* Right Side */}
          <div>
            <img className="w-full hover:scale-95 transform transition-transform duration-300 ease-in" src={about1} />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={rightVariants} // Apply left animation
        className='bg-white'>
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] grid lg:grid-cols-2 gap-10'>
          {/* Left Side */}
          <div>
            <img className="w-full hover:scale-95 transform transition-transform duration-300 ease-in" src={about2} />
          </div>
          {/* Right Side */}
          <div className='flex flex-col h-full justify-center gap-5'>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent'>Our Mission</h3>
            <p className='text-center md:text-left text-accent text-14 md:text-16'>
              We aim to conquer the impossible through commitment to teamwork between staff and customers.
            </p>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent'>What we believe in</h3>
            <p className='text-center md:text-left text-accent text-14 md:text-16'>
              Our company stands by the idea of seeing the current view of the situation and creating a better view of it.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-secondary'>
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] grid lg:grid-cols-1 gap-10'>
          <div className='flex flex-col h-full justify-center gap-5'>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-center text-accent'>Meet Our Team Leaders</h3>
            <p className='text-center md:text-center text-accent text-14 md:text-16'>
              Team Members
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 place-content-between">
            <div className='item center pb-20 md:pb-0'>
              <img src={martin} className="w-full pb-[20px] hover:scale-95 transform transition-transform duration-300 ease-in" />
              <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                Martin
              </h3>
              <p className='text-14 md:text-16 text-center md:text-center text-accent'>
                Founder/CEO
              </p>
            </div>

            <div className='item center pb-20 md:pb-0'>
              <img src={raffy} className="w-full pb-[20px] hover:scale-95 transform transition-transform duration-300 ease-in" />
              <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                Raffy
              </h3>
              <p className='text-14 md:text-16 text-center md:text-center text-accent'>
                Chief Global Operations
              </p>
            </div>

            <div className='item center pb-20 md:pb-0'>
              <img src={sheena} className="w-full pb-[20px] hover:scale-95 transform transition-transform duration-300 ease-in" />
              <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                Sheena
              </h3>
              <p className='text-14 md:text-16 text-center md:text-center text-accent'>
                Director of Online Support <br />Services Department
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 place-content-between">
            <div className='item center pb-20 md:pb-0'>
              <img src={ronalyn} className="w-full pb-[20px] hover:scale-95 transform transition-transform duration-300 ease-in" />
              <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                Ronalyn
              </h3>
              <p className='text-14 md:text-16 text-center md:text-center text-accent'>
                Chief Operations <br />Officer - PH
              </p>
            </div>

            <div className='item center pb-20 md:pb-0'>
              <img src={karlo} className="w-full pb-[20px] hover:scale-95 transform transition-transform duration-300 ease-in" />
              <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                Karlo
              </h3>
              <p className='text-14 md:text-16 text-center md:text-center text-accent'>
                Director of IT <br />Department
              </p>
            </div>

            <div className='item center'>
              <img src={virginia} className="w-full pb-[20px] hover:scale-95 transform transition-transform duration-300 ease-in" />
              <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                Virginia
              </h3>
              <p className='text-14 md:text-16 text-center md:text-center text-accent'>
                Director of HR <br />& Admin
              </p>
            </div>

          </div>
        </div>
      </motion.section>

    </>
  );
};

export default AboutPage;