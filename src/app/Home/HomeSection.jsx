import { Button } from "@nextui-org/react";
import React from "react";
import { Lato } from "next/font/google";
const dm_Sans = Lato({
  subsets: ["latin"],
  weight: ["400"], 
    // Add weights if needed
});

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
      <div className="absolute inset-0 bg-[#3a4e5d]  dark:bg-opacity-60 bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex h-72 gap-5 flex-col p-5 justify-center items-center">
        <h1 className="p-1 font-semibold text-xl md:text-4xl w-[85%] md:w-[60%] text-center text-white">
          We provide high-quality services & innovative solutions for reliable
          growth.
        </h1>
        <Button className={`${dm_Sans.className}  bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] font-extrabold text-white`}>GET A QUOTE</Button>
      </div>
    </div>
  );
};

export default HomeSection;
