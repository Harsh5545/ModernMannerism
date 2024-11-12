import { Button } from "@nextui-org/react";
import React from "react";

const HomeSection = () => {
  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage:
          "url('/assets/modern-office-room-with-white-walls.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 dark:bg-[#060507] bg-[#BEBEBE] dark:bg-opacity-60 bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex h-72 gap-5 flex-col p-5 justify-center items-center">
        <h1 className="p-1 font-semibold text-xl md:text-4xl w-[85%] md:w-[60%] text-center dark:text-white text-black">
          We provide high-quality services & innovative solutions for reliable
          growth.
        </h1>
        <Button className="bg-[#910A67] text-white">GET A QUOTE</Button>
      </div>
    </div>
  );
};

export default HomeSection;
