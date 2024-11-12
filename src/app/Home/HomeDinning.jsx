import React from 'react';
import { Button } from '@nextui-org/react';

const HomeDinning = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen h-full bg-gray-100">
      <div
        className="relative w-full flex flex-col md:flex-row justify-center md:justify-between items-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('/assets/DiningSection.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50 dark:bg-opacity-70 dark:bg-[#060507] bg-[#BEBEBE] z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 h-full gap-8 md:gap-24 flex-col p-8 md:p-16 justify-center items-center text-center">
          <h2 className="text-2xl md:text-5xl font-semibold text-white font-tan-mon-cheri">
            Want to create a good impression during networking or business dinners?
          </h2>

          <h1 className="text-3xl md:text-7xl font-bold text-white font-season-bold">
            Fine Dining Etiquette Workshop
          </h1>

          <p className="text-lg md:text-2xl text-white font-light font-mill-goudy max-w-[80%] md:max-w-[60%]">
            Learn the dos and don’ts to create a lasting impression.
          </p>

          <Button
            className="bg-[#910A67] text-white text-base md:text-2xl px-8 py-3 rounded-full hover:bg-white hover:text-[#910A67] transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeDinning;
