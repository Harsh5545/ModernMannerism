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
    <div>
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/assets/Website-Background.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-25 dark:bg-opacity-60 dark:bg-[#060507] bg-[#FAE7F3]"></div>
    
            {/* Content */}
            <div className="flex   md:flex-row flex-col h-72 gap-5 p-4 md:p-24 justify-evenly items-center">
              <p style={{ wordSpacing: "0.1rem" }} className="p-1 font-semibold text-xl md:text-2xl w-[85%] md:w-[60%] leading-loose text-center text-black ">
                Become a part of Modern Mannerism community to keep up to date with
                our courses, articles and news.  <br />  <br /> Become a better, more confident and
                professional you!
              </p>
              <Button className={`${dm_Sans.className} tracking-widest  bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] font-extrabold text-white`}>JOIN NOW</Button>
            </div>
          </div>
        </div>
  )
};

export default HomeSection;
