import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);
  const itemsPerPage = 3; // Number of items to display per slide

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalItems - itemsPerPage ? 0 : prevIndex + itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - itemsPerPage));
  };

  return (
    <div className="relative mx-4 w-full h-20">
      <div className="overflow-hidden ">
      <div className="flex transition-transform ease-in-out duration-300 transform" style={{ width: `${totalItems * (100 / itemsPerPage)}%`, transform: `translateX(-${currentIndex * (100 / totalItems)}%)`, marginLeft: "80px", marginRight: "100px" }}>
          {React.Children.map(children, (child, index) => (
            <div key={index} className="w-full  flex-shrink-0" style={{ width: `${100 / totalItems}%` }}>{child}</div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center justify-center">
        <button className=" px-4 py-2 mr-2 rounded-md" onClick={handlePrev}>
        <CircleChevronLeft />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center">
        <button className="  px-4 py-2 ml-2 rounded-md" onClick={handleNext}>
        <CircleChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
