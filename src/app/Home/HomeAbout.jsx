import Image from "next/image";
import React from "react";
import { Divider } from "@nextui-org/react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

const HomeAbout = () => {
  return (
    <div className="flex mt-10 gap-10 justify-center flex-col md:flex-row items-center">
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-[#06273A] rounded-xl pl-2 pb-2">
          <Image
            isZoomed
            width={500}
            height={400}
            alt="modern Mannerism image "
            src="/assets/course2.jpg"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2 justify-center">
          <h1 className="text-black dark:text-white text-center text-4xl font-bold  ">ABOUT OUR COMPANY</h1>
          <hr className="h-1 bg-[#d664b6] w-16" />
        </div>
        <p className=" text-gray-800 dark:text-white-200 p-2 text-center">
          About Modern Mannerism Modern Mannerism provides professional-quality
          training and learning globally. We help professionals, corporates, and
          organizations to embrace transformation and accomplish breakthrough
          performance by becoming proficient at the skills.
        </p>

        <Divider className="my-4" />
        <div className="flex justify-around items-center w-full">
          <div className="p-1 flex items-center flex-col gap-4">
            <StarOutlineIcon />
            <h2>Vision</h2>
          </div>
          <Divider orientation="vertical" />
          <div className="p-1 flex items-center flex-col gap-4">
            <WorkspacePremiumIcon />
            <h2>Missions</h2>
          </div>
          <Divider orientation="vertical" />
          <div className="p-1 flex items-center flex-col gap-4">
            <FlagCircleIcon />
            <h2>Goals</h2>
          </div>
          <Divider className="w-1" orientation="vertical" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
