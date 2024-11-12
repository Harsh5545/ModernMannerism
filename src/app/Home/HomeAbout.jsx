import Image from "next/image";
import React from "react";
import { Divider } from "@nextui-org/react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

const HomeAbout = () => {
  return (
    <div className="flex dark:bg-[#00001F] md:p-24 p-10  gap-6 justify-center flex-col md:flex-row items-center">
      <div className="flex-1 flex justify-center m-2 items-center">
        <div className="">
          <Image
            isZoomed
            width={500}
            height={400}
            alt="modern Mannerism image "
            src="/assets/course2.jpg"
            className=" shadow-2xl p-1 shadow-[#859199]"
style={{boxShadow: "black 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(167, 20, 154) 10px -10px"}}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2 justify-center">
          <h1 className="text-black dark:text-white text-center text-4xl font-bold  ">ABOUT OUR COMPANY</h1>
          <hr className="h-1 bg-[#933469] w-16" />
        </div>
        <p className=" text-gray-800 dark:text-white p-2 text-center">
          About Modern Mannerism Modern Mannerism provides professional-quality
          training and learning globally. We help professionals, corporates, and
          organizations to embrace transformation and accomplish breakthrough
          performance by becoming proficient at the skills.
        </p>

        <Divider className="my-4 " />
        <div className="flex justify-around items-center w-full">
          <div className="p-1 flex items-center flex-col gap-4">
            <StarOutlineIcon style={{ fontSize: 40, color:'#933469' }} /> 
            <span className="font-semibold dark:text-white md:text-2xl text-xl text-[#06273A]">Vision</span>
          </div>
          <Divider orientation="vertical" style={{ height: 100, width:2 }} /> 
          <div className="p-1 flex items-center flex-col gap-4">
            <WorkspacePremiumIcon style={{ fontSize: 40, color:'#933469' }} /> 
            <span className="font-semibold dark:text-white md:text-2xl text-xl text-[#06273A]">Missions</span>
          </div>
          <Divider orientation="vertical" style={{ height: 100, width:2 }} /> 
          <div className="p-1 flex items-center flex-col gap-4">
            <FlagCircleIcon style={{ fontSize: 40, color:'#933469' }} /> 
            <span className="font-semibold dark:text-white md:text-2xl text-xl text-[#06273A]">Goals</span>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
