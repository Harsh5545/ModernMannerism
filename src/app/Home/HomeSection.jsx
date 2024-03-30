import { Button } from "@nextui-org/react";
import React from "react";

const HomeSection = () => {
  return (
    <div className="relative w-full" style={{ backgroundImage: "url('/assets/image1.jpg')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-25 dark:bg-opacity-25 dark:bg-[#06273A] bg-[#FAE7F3]"></div>     

      {/* Content */}
      <div className="flex h-72 gap-5 flex-col p-5 justify-center items-center">
        <h1 className="p-1 font-semibold text-xl md:text-4xl w-[85%] md:w-[60%] text-center text-black">
          We provide high quality services & innovative solutions for the reliable growth
        </h1>
        <Button>GET A QUOTE</Button>
      </div>
    </div>
  );
};

export default HomeSection;
