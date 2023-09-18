import React from "react";
import careers from "/careers-1.png";
import check from "/check.svg";
import Accordion from './Accordion';
import { motion } from 'framer-motion'

const Careers = () => {
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
      <section
        id="careers"
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
              Careers
            </motion.h1>

            <motion.p className='max-w-xl text-left md:text-left text-white text-14 md:text-16 my-15 md:my-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              New Media Services is an Information Technology Company focusing on back-end operations for small, medium and large-scale companies.Join our team and find the job most suited to your talents!
            </motion.p>

          </div>
        </div>
      </section>

      <section className='bg-bgcolor'>
        <div className='container flex flex-col items-center mx-auto space-y-0 md:space-y-0 md:flex-row py-40 md:py-70'>
          {/* Image */}
          <div class="relative md:w-1/2 mx-16px md:ml-100px mb-15">
            <img src={careers} />
          </div>

          {/* Left Item */}
          <div className='flex flex-col md:w-1/2 mx-16px md:mr-100px w-full'>

            <motion.h2 className='text-h3 font-semibold text-center md:text-h2 md:text-left text-accent md:mb-20 mb-15'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              Features and Benefits
            </motion.h2>
            <motion.div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mx-16px md:mx-0">
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

              <div className="mx-16px md:mx-0">
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className='bg-bgcolor'>
        <div className='container items-center mx-auto py-40 md:py-70'>
          <motion.h2 className='text-h3 font-semibold text-center md:text-h2 md:text-center text-accent mb-15 md:mb-20'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            Available Position
          </motion.h2>

          <motion.div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div class="flex flex-col mx-16px md:ml-100px space-y-4">
            <div className="container mx-auto">
                <Accordion items={faqItems1} />
              </div>
            </div>

            <div class="relative mx-16px md:mr-100px mb-15 space-y-4">
            <div className="container mx-auto">
                <Accordion items={faqItems2} />
              </div>
            </div>

          </motion.div>

          <div className='container items-center mx-auto'>
            <div className='flex justify-center md:justify-center mt-20 md:mt-40'>
              <a href="https://nmsrecruitment.nmsapps.com/"><motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="rounded-lg bg-primary text-white text-14 md:text-16 w-sm-button h-sm-button md:w-lg-button md:h-lg-button hover:bg-primary/80"
              >
                Apply Now
              </motion.button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;