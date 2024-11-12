import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

function AboutHero() {
  return (
    <div className=' w-full bg-cover'>
      <div className="bg-[url('/assets/ModernMannerismAbout.jpg')] bg-no-repeat bg-center w-full bg-cover min-h-[30vh] md:min-h-[40vh] flex items-center relative justify-center">
        {/* Content goes here */}
<div className='absolute inset-0 dark:bg-[#060507] bg-[#BEBEBE] dark:bg-opacity-60 bg-opacity-80'></div>
        <div className="w-full px-16 relative z-50 dark:text-white text-black ">
          {/* <h1 className='p-1 font-bold text-5xl md:text-6xl'>About Us</h1> */}
          <Breadcrumbs className=" text-black p-4">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>About Us</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
