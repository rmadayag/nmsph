import React from "react";
import careers from "/careers-1.png";
import check from "/check.svg";
import Accordion from './Accordion';
import { motion } from 'framer-motion'

const Careers = () => {
  // Define animation variants for left and right animations
  const leftVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const faqItems1 = [
    {
      question: 'Chat Support Representative',
      answer: 'Responsible for chatting with users online, engaging them to provide a personalized experience that meets the subscriber/user’s needs through IM, and/or SMS.',
    },
    {
      question: 'Content Writer',
      answer: 'Actively ensures that the clients’ content is relevant enough to capture consumers interest.',
    },
    {
      question: 'Customer Support Representative',
      answer: 'Assist customers and address concerns and inquiries through inbound call services and email support.',
    },
    {
      question: 'Finance Manager',
      answer: 'The Finance Manager plays a pivotal role in assisting the companys Finance Director in overseeing and managing the financial operations of the organization.',
    },
    {
      question: 'HR Generalist',
      answer: 'The HR Generalist will be responsible for providing support to the HR department in various areas including recruitment, employee relations, performance management, training and development, and policy implementation.',
    },
    {
      question: 'Kitchen Staff',
      answer: 'Aid cooks and oversee the overall cleanliness and orderliness of the kitchen/pantry area.',
    },
    {
      question: 'Node.js Developer',
      answer: 'Responsible for creating GraphQI API with the functionalities such as Mutations, Query, Authorization by bearer token with TTL and Redis for storage, and data registrations through RabbitMQ. ',
    },
    // Add more FAQ items
  ];
  const faqItems2 = [
    {
      question: 'Team Manager',
      answer: 'Responsible for leading and directing the routine functions of the team including executing operational goals and objectives, while supervising all staff and organizing the workflow of the department.',
    },
    {
      question: 'Web Designer',
      answer: 'Constructs the visual aspects of content for company websites in order to present a clean, aesthetically pleasing, and user-friendly interface.',
    },
    {
      question: 'DUTCH IM CHAT Support',
      answer: 'Facilitate interactive and creative communication with customers through Instant Messaging.',
    },
    {
      question: 'German Customer Support Representative',
      answer: 'Facilitate interactive and creative communication with customers through Instant Messaging.',
    },
    {
      question: 'GERMAN IM Chat Support',
      answer: 'Facilitate interactive and creative communication with customers through Instant Messaging.',
    },
    {
      question: 'PORTUGUESE IM Chat Support',
      answer: 'Facilitate interactive and creative communication with customers through Instant Messaging.',
    },
    {
      question: 'Spanish Account Manager',
      answer: 'Responsible for maintaining relations and communication with Spanish clientele and ensures that they receive regular updates from the company.',
    },

    // Add more FAQ items
  ];

  return (
    <>
      <motion.section
        id="careers"
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-center bg-cover bg-banner h-[400px] lg:h-[500px] bg-no-repeat relative'>
        <div className='w-full h-screen'>
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[530px] m-auto absolute p-4'>
              <h1 className='md:text-display text-h2 font-semibold text-left text-white'>
                Careers
              </h1>
              <p className='max-w-[600px] text-white text-14 md:text-16 py-5'>
                New Media Services is an Information Technology Company focusing on back-end operations for small, medium and large-scale companies.Join our team and find the job most suited to your talents!
              </p>
            </div>
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
            <img className="w-full hover:scale-95 transform transition-transform duration-300 ease-in" src={careers} />
          </div>
          {/* Right Side */}
          <div className='flex flex-col h-full justify-center gap-5'>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent'>Features and Benefits</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className='flex flex-row items-center gap-1 mb-15 md:mb-20'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    40 Hours Per Week
                  </p>
                </div>
                <div className='flex flex-row items-center gap-1 mb-15 md:mb-20'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    Free fruits and snacks daily
                  </p>
                </div>
                <div className='flex flex-row items-center gap-1 mb-15 md:mb-20'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    Fun Work Environment
                  </p>
                </div>
                <div className='flex flex-row items-center gap-1 mb-15 md:mb-20'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    Paid SSS, HDMF, PhilHealth
                  </p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    Up to 10 Paid Holidays
                  </p>
                </div>
              </div>

              <div>
                <div className='flex flex-row items-center gap-1 mb-15 md:mb-20'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    Flexible hours
                  </p>
                </div>
                <div className='flex flex-row items-center gap-1 mb-15 md:mb-20'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    Work anywhere
                  </p>
                </div>
                <div className='flex flex-row items-center gap-1 mb-15 md:mb-20'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    Work from your home
                  </p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <img src={check} />
                  <p className='text-center md:text-left text-accent'>
                    Work like a boss
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-secondary'>
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] grid lg:grid-cols-1'>
          <div className='flex flex-col h-full justify-center gap-5'>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-center text-accent'>Available Position</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-2">

              <div class="flex flex-col gap-5">
                <div className="container mx-auto">
                  <Accordion items={faqItems1} />
                </div>
              </div>

              <div class="relative space-y-4">
                <div className="container mx-auto">
                  <Accordion items={faqItems2} />
                </div>
              </div>

            </div>
            <div className='flex justify-center'>
              <a href="https://nmsrecruitment.nmsapps.com/">
                <button
                  className="rounded-lg font-semibold bg-primary text-white text-14 md:text-16 w-sm-button h-sm-button md:w-lg-button md:h-lg-button hover:bg-primary/80">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Careers;