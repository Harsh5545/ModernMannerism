import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section id="home" className="flex pt-28 px-2 md:px-8 md:flex-row justify-between items-center flex-col bg-white">
        <div className="container flex-1 flex flex-wrap items-center justify-center mx-auto mt-10 md-flex-row">
          <div className="mb-14 lg:mb-0 ">
            <h1 className="max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
              A sophisticated guide to cultural etiquette & manners.
            </h1>    
            <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
              We're different. ModernaMannerism is the only.
            </p>
            <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
              PERSONALITY DEVELOPMENT CLASSES AND MANY MORE LIKE ETIQUETTE N ALL ALSO
            </p>
            <div className="flex justify-center mt-14 lg:justify-start">
              <Button className="text-white bg-indigo-500 font-medium rounded-lg px-5 py-4 text-center hover:bg-indigo-400 hover:drop-shadow-md transi duration-300 ease-in-out">Signup</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 rounded-lg justify-center items-center overflow-hidden">
          <Image className="rounded-lg" src="/assets/manasikadam.png" width={550} height={550} alt="image manasi kadam"/>
        </div>
      </section>
    </>
  );
};

export default Hero;
