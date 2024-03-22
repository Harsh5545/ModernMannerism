import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="pt-24 bg-white w-auto  dark:bg-black">
            <div className="flex flex-col md:flex-row h-[90vh] md:h-auto  justify-between">
                <div className="flex flex-1 flex-col justify-center items-center">
                    <h1 className="md:p-10 p-2 text-black dark:text-white font-bold text-center text-2xl md:text-4xl ">A sophisticated guide to cultural
                        etiquette & manners.</h1>
                    <Button className="mt-4" ghost>Signup</Button>
                </div>
                <div className="flex-1 flex justify-center items-end"> <Image
                    src="/assets/ManasiKadamPic.png"
                    alt="Modern Mannerism Image"
                    width={650} height={650}

                /></div>
            </div></div>
    );
};

export default Hero;
