import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import React from 'react';

function ServicesHero() {
  return (
    <div className='w-full bg-cover'>
      <div className="bg-[url('/assets/ModernMannerismAbout.jpg')] bg-no-repeat bg-center w-full bg-cover min-h-[30vh] md:min-h-[40vh] flex items-center relative justify-center">
        {/* Overlay */}
        <div className='absolute inset-0 dark:bg-[#060507] bg-[#BEBEBE] dark:bg-opacity-90 bg-opacity-90'></div>
        <div className="w-full px-16 relative z-50 dark:text-white text-black">
          {/* <h1 className='p-1 font-bold text-5xl md:text-6xl'>Services</h1> */}
          <Breadcrumbs 
            maxItems={3}
            itemsBeforeCollapse={1}
            itemsAfterCollapse={2} 
            className="text-black p-4"
          >
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Services</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}

export default ServicesHero;
