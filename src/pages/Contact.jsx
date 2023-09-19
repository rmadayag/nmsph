import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const Contact = () => {

  // Define animation variants for left and right animations
  const leftVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [validity, setValidity] = useState({
    name: true,
    email: true,
    phoneNumber: true,
    message: true,
    recaptcha: true,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reCaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const isValid = validateField(name, value);

    setValidity({
      ...validity,
      [name]: isValid,
    });
  };

  const handleRecaptchaChange = (value) => {
    setValidity({
      ...validity,
      recaptcha: !!value,
    });
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        return value.length > 0;
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'phoneNumber':
        // Use a regular expression to validate the phone number
        return /^[0-9]{11}$/.test(value); // This regex checks for a 10-digit number
      case 'message':
        return value.length > 0;
      default:
        return true;
    }
  };

  const isFormValid = () => {
    return (
      Object.values(validity).every((field) => field) &&
      Object.values(formData).every((value) => value.trim() !== '')
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid() || isSubmitting) {
      console.error('Form is not valid or submission is in progress');
      // Display an error message to the user or handle the validation error
      return;
    }

    setIsSubmitting(true);

    // Send the email using EmailJS
    emailjs
      .send(
        'service_yqjwm1n', // Replace with your EmailJS service ID
        'template_ehklsjj', // Replace with your EmailJS template ID
        formData,
        '-plm5Hy7095l8Eu6L' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result);
          // You can display a success message or redirect the user here
          setFormSubmitted(true);

          // Reset form data after successful submission
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
          });

          // Reset the formSubmitted state to allow another submission
          setTimeout(() => {
            setFormSubmitted(false);
          }, 3000); // Reset formSubmitted after a delay (e.g., 3 seconds)
        },
        (error) => {
          console.error('Email send failed:', error);
          // You can display an error message to the user here
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <motion.section
          id="contact"
        initial="initial"
        animate="animate"
        variants={leftVariants} // Apply left animation
        className='bg-center bg-cover bg-banner h-[400px] lg:h-[500px] bg-no-repeat relative'>
        <div className='w-full h-screen'>
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[530px] m-auto absolute p-4'>
              <h1 className='md:text-display text-h2 font-semibold text-left text-white'>
              Contact Us
              </h1>
              <p className='max-w-[600px] text-white text-14 md:text-16 py-5'>
              Get in touch and let us kno how we can help
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
        <div className='md:py-[70px] md:px-[10%] py-5 px-[16px] grid lg:grid-row gap-10'>
          <div className='flex flex-col h-full justify-center gap-5'>
            <h3 className='text-h3 font-semibold text-center md:text-h2 md:text-center text-accent'> Get in touch</h3>
            <p className='text-center md:text-center text-accent text-14 md:text-16'>
              We Want to Here from You
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-10'>
            {/* Image */}
            <div class="relative w-full">
              <iframe className="md:w-full w-[350px] md:h-[620px] h-[357px] md:rounded-30px rounded-15px" frameborder="" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nms%20baguio%20city+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
            </div>

            {/* Left Item */}
            <div className='flex flex-col w-full'>
              <div className="bg-bgcolor md:w-full w-full md:rounded-30px rounded-15px px-20 py-20 shadow-shadow mb-15 md:mb-0">

                <form onSubmit={handleSubmit} className="w-full mx-auto p-4">
                  <div className="mb-4">
                    <input
                      placeholder='Name'
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`text-accent w-full p-3 border ${validity.name ? 'border-gray-300' : 'border-red-500'
                        } rounded-30px focus:outline-none focus:border-blue-500`}
                    />
                    {!validity.name && (
                      <p className="text-red-500 text-sm mt-1">Please enter a valid name.</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <input
                      placeholder='Email'
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`text-accent w-full p-3 border ${validity.email ? 'border-gray-300' : 'border-red-500'
                        } rounded-30px focus:outline-none focus:border-blue-500`}
                    />
                    {!validity.email && (
                      <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <input
                      placeholder='Phone'
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`text-accent w-full p-3 border ${validity.phoneNumber ? 'border-gray-300' : 'border-red-500'
                        } rounded-30px focus:outline-none focus:border-blue-500`}
                    />
                    {!validity.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">Please enter a valid phone number.</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <textarea
                      placeholder='Message'
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows="7"
                      className={`text-accent w-full p-3 border  ${validity.message ? 'border-gray-300' : 'border-red-500'
                        } rounded-30px focus:outline-none focus:border-blue-500`}
                    />
                    {!validity.message && (
                      <p className="text-red-500 text-sm mt-1">Please enter a message.</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <ReCAPTCHA
                      ref={reCaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={handleRecaptchaChange}
                    />
                    {!validity.recaptcha && (
                      <p className="text-red-500 text-sm mt-1">Please complete the reCAPTCHA.</p>
                    )}
                  </div>

                  {formSubmitted && (
                    <div className="text-green-500 text-sm my-5">
                      Thank you for your submission!
                    </div>
                  )}

                  <div className="text-left">
                    <button
                      type="submit"
                      className={`rounded-30px bg-primary text-white font-semibold text-14 md:text-16 w-sm-button h-sm-button md:w-lg-button md:h-lg-button hover:bg-primary/80 ${!isFormValid() || isSubmitting || formSubmitted ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                      disabled={!isFormValid() || isSubmitting || formSubmitted}
                    >
                      {isSubmitting ? 'Submitting...' : formSubmitted ? 'Submitted' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </>
  );
};

export default Contact;