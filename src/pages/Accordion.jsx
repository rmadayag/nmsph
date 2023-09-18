import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-5 rounded-lg shadow-shadow  ${
            activeIndex === index ? 'bg-primary' : 'bg-white'
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex justify-between items-center">
            <h3
              className={`md:text-16 text-14 font-semibold ${
                activeIndex === index ? 'text-white' : 'text-black'
              }`}
            >
              {item.question}
            </h3>
            <div className="ml-5">
              <img
                src={activeIndex === index ? 'minus.svg' : 'plus.svg'}
                alt={activeIndex === index ? 'Collapse' : 'Expand'}
              />
            </div>
          </div>
          {activeIndex === index && (
            <p className="mt-[15px] md:text-16 text-14 ">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
