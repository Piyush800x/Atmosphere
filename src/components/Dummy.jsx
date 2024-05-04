import React, { useState, useEffect } from 'react';
import SunnyIcon from '../assets/icons/sunny.svg'

const WeatherCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numSlides = 2; // Adjust this value based on the number of duplicate divs

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + numSlides) % numSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % numSlides);
  };

  return (
    <div className="absolute bottom-10 right-10">
      <div className='relative'>
        <div
          className="flex flex-col px-3 pt-3 text-white justify-center items-center absolute transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <span className="ml-2 mb-1 text-white text-lg">Now</span>
          <img className="ml-3 mb-1" width={20} height={20} src={SunnyIcon} alt="Sunny Icon" />
          <h1 className="ml-2 mb-1 text-lg">12°C</h1>
        </div>
        <div
          className="flex flex-col px-3 pt-3 text-white justify-center items-center absolute transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex + 1) % numSlides * 100}%)` }}
        >
          <span className="ml-2 mb-1 text-white text-lg">Now</span>
          <img className="ml-3 mb-1" width={20} height={20} src={SunnyIcon} alt="Sunny Icon" />
          <h1 className="ml-2 mb-1 text-lg">12°C</h1>
        </div>
        

        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            onClick={prevSlide}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            onClick={nextSlide}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCarousel;