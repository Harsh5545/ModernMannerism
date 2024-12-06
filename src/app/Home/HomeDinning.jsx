import React from "react";
import { Button } from "@nextui-org/react";
import { Cormorant_Garamond, Lato } from "next/font/google";
const dm_Sans = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  // Add weights if needed
});
const HomeDinning = () => {
  return (
    <div className="relative w-full h-full bg-gray-100 dark:bg-gray-900">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "    url('/assets/DiningSection.jpg')",
        }}
      >
        {/* Overlay - covering only the right side */}
        <div className="absolute inset-0 md:w-1/2 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col   md:flex-row justify-end items-center md:h-full text-center md:text-right gap-8">
        {/* Empty Left Side for Larger Screens */}
        <div className="hidden md:block md:w-1/2"></div>

        {/* Content on the Right Side */}
        <div className="md:w-1/2 w-full h-full bg-opacity-50 dark:bg-opacity-70 bg-[#793600] dark:bg-[#060507] ">
          <div className=" flex h-full gap-14 py-24 md:gap-28 justify-between items-center   text-center flex-col">
            <h2
              className={`${dm_Sans.className} uppercase text-xl  md:text-4xl font-semibold text-white dark:text-gray-300 `}
            >
              Want to create a good
              <br /> impression during networking
              <br /> or business dinners?
            </h2>

            <h5
              className={`${dm_Sans.className} text-3xl md:text-7xl font-bold text-white dark:text-gray-100 `}
            >
              Fine Dining <br/> Etiquette Workshop
            </h5>

            <p
              className={`${dm_Sans.className} text-lg md:text-2xl text-white dark:text-gray-300 font-light  max-w-[80%] md:max-w-[60%]`}
            >
              Learn the dos and don’ts to create a lasting impression.
            </p>

            <Button className={`${dm_Sans.className} bg-[#ffffff] text-[#793600] text-base md:text-2xl px-8 py-3 rounded-full hover:bg-white hover:text-[#910A67] dark:hover:bg-[#910A67] dark:hover:text-white transition-all duration-300 transform hover:scale-105`}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDinning;
