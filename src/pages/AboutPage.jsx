import React from "react";
import about from "/home-1.png";
import about1 from "/about-1.png";
import about2 from "/about-2.png";
import martin from "/team-martin.png";
import raffy from "/team-raffy.png";
import merlene from "/team-merlene.png";
import sheena from "/team-sheena.png";
import ronalyn from "/team-rona.png";
import karlo from "/team-karlo.png";
import virginia from "/team-virginia.png";
import { motion } from 'framer-motion'
import VideoPopUp from './VideoPopUp';

const AboutPage = () => {
  return (
    <>
      <section
        id="about"
        className='bg-center bg-cover bg-banner min-h-[209px] lg:h-[404px] bg-no-repeat relative mt-[64px] lg:mt-[64px]'>
        <div className='container flex flex-col-reverse items-center mx-auto space-y-0 md:space-y-0 md:flex-row py-[40px] lg:py-[100px]'>

          {/* Left Item */}
          <div className='flex flex-col md:w-1/2 mx-16px md:ml-100px'>
            <motion.h1 className='text-h2 font-semibold text-left md:text-display md:text-left text-white '
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 5, ease: 'easeInOut' }}
            >
              About us
            </motion.h1>

            <motion.p className='max-w-xl text-left md:text-left text-white text-14 md:text-16 my-15 md:my-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              New Media Services specializes in delivering intelligent outsourcing services through a combination of machine learning and human-powered activities.
            </motion.p>

          </div>
        </div>
      </section>

      <section
        className='bg-bgcolor'>
        <div className='container flex flex-col items-center mx-auto space-y-0 md:space-y-0 md:flex-row py-40 md:py-70'>
          {/* Image */}
          <div class="relative md:w-1/2 mx-16px md:ml-100px mb-15">
            <VideoPopUp />
            <img src={about} />
          </div>

          {/* Left Item */}
          <div className='flex flex-col md:w-1/2 mx-16px md:mr-100px'>
            <motion.h2 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent mb-15 md:mb-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              NMS-PH is the operations center of New Media Services Pty. Ltd.
            </motion.h2>

            <motion.p className='max-w-xl text-center md:text-left text-accent mb-15 md:mb-20 text-14 md:text-16'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              We are a mix of people from all walks of life, contrasting backgrounds, different languages and distinct characters all working as one under the core philosophy that "we can achieve the impossible together."
            </motion.p>

            <motion.p className='max-w-xl text-center md:text-left text-accent mb-15 md:mb-20 text-14 md:text-16'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              Established here in the Philippines in the year 2011 as an IT Services company with initial focus on Design and Programming, our growth has been constant in the years following. By May 2013, we had achieved PEZA*** Accreditation. Upon realizing the broad scope of Information Technology as not just solely design and programming, we have extended our coverage to all back-end services under the Information Technology field.
            </motion.p>

            <motion.p className='max-w-xl text-center md:text-left text-accent mb-15 md:mb-20 text-14 md:text-16'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >

              NMS-PH aims to generate even more jobs for Filipinos, to build connections, achieve the impossible through commitment to teamwork and to continue giving back to the community through NMS-Cares.
            </motion.p>

          </div>
        </div>
      </section>

      <section
        className='bg-secondary'>
        <div className='container flex flex-col-reverse items-center mx-auto space-y-0 md:space-y-0 md:flex-row py-40 md:py-70'>
          {/* Left Item */}
          <div className='flex flex-col md:w-1/2 mx-16px md:ml-100px'>
            <motion.h2 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent mb-15 md:mb-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              What we do
            </motion.h2>

            <motion.p className='max-w-xl text-center md:text-left text-accent mb-15 md:mb-20 text-14 md:text-16'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              We provide you with cost-effective and world class back end services. Our flexible services include Multilingual Customer Support, Human & AI-powered Content Moderation, Chat Operator Services, and TIRO Conversational AI Platform. We also tailor our services to suit your business needs.
            </motion.p>

          </div>
          {/* Image */}
          <div class="relative md:w-1/2 mx-16px md:mr-100px mb-15">
            <img src={about1} />
          </div>

        </div>
      </section>


      <section
        className='bg-bgcolor'>
        <div className='container flex flex-col items-center mx-auto space-y-0 md:space-y-0 md:flex-row py-40 md:py-70'>
          {/* Image */}
          <div class="relative md:w-1/2 mx-16px md:ml-100px mb-15">
            <img src={about2} />
          </div>
          {/* Left Item */}
          <div className='flex flex-col md:w-1/2 mx-16px md:mr-100px'>
            <motion.h2 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent mb-15 md:mb-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              Our Mission
            </motion.h2>

            <motion.p className='max-w-xl text-center md:text-left text-accent mb-20 md:mb-40 text-14 md:text-16'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              We aim to conquer the impossible through commitment to teamwork between staff and customers.
            </motion.p>

            <motion.h2 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent mb-15 md:mb-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              What we believe in
            </motion.h2>

            <motion.p className='max-w-xl text-center md:text-left text-accent mb-15 md:mb-20 text-14 md:text-16'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              Our company stands by the idea of seeing the current view of the situation and creating a better view of it.
            </motion.p>

          </div>

        </div>
      </section>


      <section className='bg-secondary'>
        <div className='py-40 md:py-70'>
          <div className='container items-center mx-auto space-y-0 md:space-y-0 md:flex-row'>
            <div className='mb-15 md:mb-20'>
              <h2 className='text-h3 md:text-h2 font-semibold text-center md:text-center text-accent'>
                Meet Our Team Leaders
              </h2>
              <p className='text-14 md:text-16 text-center md:text-center text-accent'>
                Team Members
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-5 place-content-between pb-20 md:pb-40 mx-16px md:mx-100px">
              <div className='item center pb-20 md:pb-0'>
                <img src={martin} className="w-full pb-[20px]" />
                <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                  Martin
                </h3>
                <p className='text-14 md:text-16 max-w-xl text-center md:text-center text-accent'>
                  Founder/CEO
                </p>
              </div>

              <div className='item center pb-20 md:pb-0'>
                <img src={raffy} className="w-full pb-[20px]" />
                <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                  Raffy
                </h3>
                <p className='text-14 md:text-16 max-w-xl text-center md:text-center text-accent'>
                  Chief Global Operations
                </p>
              </div>

              <div className='item center pb-20 md:pb-0'>
                <img src={merlene} className="w-full pb-[20px]" />
                <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                  Merlene
                </h3>
                <p className='text-14 md:text-16 max-w-xl text-center md:text-center text-accent'>
                  Director of Global Sales <br />& Marketing
                </p>
              </div>

              <div className='item center pb-20 md:pb-0'>
                <img src={sheena} className="w-full pb-[20px]" />
                <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                  Sheena
                </h3>
                <p className='text-14 md:text-16 max-w-xl text-center md:text-center text-accent'>
                  Director of Online Support <br />Services Department
                </p>
              </div>
            </div>

            <div class="gap-5 md:gap-5 place-content-between mx-16px md:mx-[156px] md:flex md:justify-center items-center">
              <div className='item center pb-20 md:pb-0'>
                <img src={ronalyn} className="w-full pb-[20px]" />
                <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                  Ronalyn
                </h3>
                <p className='text-14 md:text-16 max-w-xl text-center md:text-center text-accent'>
                  Chief Operations <br />Officer - PH
                </p>
              </div>

              <div className='item center pb-20 md:pb-0'>
                <img src={karlo} className="w-full pb-[20px]" />
                <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                  Karlo
                </h3>
                <p className='text-14 md:text-16 max-w-xl text-center md:text-center text-accent'>
                  Director of IT <br />Department
                </p>
              </div>

              <div className='item center'>
                <img src={virginia} className="w-full pb-[20px]" />
                <h3 className='text-h3 md:text-h3 font-semibold text-center md:text-center text-accent pb-[5px] md:pb-[5px]'>
                  Virginia
                </h3>
                <p className='text-14 md:text-16 max-w-xl text-center md:text-center text-accent'>
                  Director of HR <br />& Admin
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;