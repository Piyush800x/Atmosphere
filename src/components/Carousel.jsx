import React, { useRef } from 'react';

const Carousel = ({ children }) => {
  const containerRef = useRef(null);

  const handleLeftClick = () => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
  };

  const handleRightClick = () => {
    containerRef.current.scrollLeft += containerRef.current.offsetWidth;
  };

  return (
    <div className="relative w-5/6 flex no-scrollbar">
      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth flex scrollbar-hide"
      >
        {children}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full z-10"
          onClick={handleLeftClick}
        >
          L
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full z-10"
          onClick={handleRightClick}
        >
          R
        </button>
      </div>
    </div>
  );
};

export default Carousel;