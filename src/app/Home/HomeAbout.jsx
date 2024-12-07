import Image from "next/image";
import React from "react";
import { Divider } from "@nextui-org/react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Cormorant_Garamond } from "next/font/google";

const dm_Sans = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const HomeAbout = () => {
  return (
    <div className="flex flex-col py-6 md:py-16 w-full ">
      {/* Main Content */}
      <div className="flex dark:bg-[#00001F] gap-6  justify-center flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-2/5 flex justify-center m-2 items-center">
          <div>
            <Image
              width={500}
              height={400}
              alt="modern Mannerism image"
              src="/assets/AboutUsModernMannerism.webp"
              className="shadow-2xl p-1 shadow-[#859199]"
              style={{
                boxShadow:
                  "black 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(167, 20, 154) 10px -10px",
              }}
            />
          </div>
        </div>

        {/* About Section */}
        <div className="w-full md:w-3/5  flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 justify-center">
            <h1
              className={`${dm_Sans.className} text-black dark:text-white text-center text-4xl font-bold`}
            >
              About Modern Mannerism
            </h1>
            <hr className="h-1 bg-[#933469] w-16" />
          </div>

          {/* Description */}
          <p className="text-gray-800 dark:text-white p-2 text-center">
            Modern Mannerism provides professional-quality training and learning
            globally. We help professionals, corporates, and organizations to
            embrace transformation and accomplish breakthrough performance by
            becoming proficient at the skills.
          </p>
 <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch p-8">
        {/* Vision Section */}
        <div className="flex-1 flex flex-col items-center gap-4 bg-gray-50 dark:bg-[#1A1A3B] p-6 rounded-lg shadow-lg">
          <StarOutlineIcon style={{ fontSize: 40, color: "#933469" }} />
          <span className={`${dm_Sans.className} font-bold dark:text-white md:text-2xl text-xl text-[#06273A]`}>
            Vision
          </span>
          <p className="text-gray-700 dark:text-gray-300 md:text-sm text-sm text-start">
            We aim to empower individuals with the confidence, polish, and
            grace needed to thrive in today's modern world.
          </p>
        </div>

        {/* Divider for desktop */}
        <Divider
          orientation="vertical"
          className="hidden md:block"
          style={{ height: "auto", width: 2 }}
        />

        {/* Our Values Section */}
        <div className="flex-1 flex flex-col items-center gap-4 bg-gray-50 dark:bg-[#1A1A3B] p-6 rounded-lg shadow-lg">
          <WorkspacePremiumIcon style={{ fontSize: 40, color: "#933469" }} />
          <span className={`${dm_Sans.className}  font-bold dark:text-white md:text-2xl text-xl text-[#06273A]`}  >
            Our Values
          </span>
          <ul className="text-gray-700 dark:text-gray-300 md:text-sm text-sm space-y-2 text-start">
            <li>▫ Professionalism: Excellence in every detail.</li>
            <li>▫ Personalization: Tailored strategies for unique needs.</li>
            <li>▫ Inclusivity: Adapting to cross-cultural environments with ease.</li>
          </ul>

        </div>
      </div>
        </div>
 
      </div>

      {/* Vision and Values Section */}
     
    </div>
  );
};

export default HomeAbout;
