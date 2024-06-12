import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

function AboutHero() {
  return (
    <div className=' w-full bg-cover'>
      <div className="bg-[url('/assets/manasi-about1.jpg')] bg-no-repeat bg-center w-full bg-cover min-h-[40vh] md:min-h-[60vh] flex items-center relative justify-center">
        {/* Content goes here */}
        <div className="w-full px-16 relative z-50 text-white">
          <h1 className='p-1 font-bold text-8xl'>About Us</h1>
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
