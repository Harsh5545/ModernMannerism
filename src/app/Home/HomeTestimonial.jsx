"use client";

import { Button } from "@nextui-org/react";
import TestimonialData from "@/data";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

const HomeTestimonial = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: "url('/assets/image2.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-25 dark:bg-opacity-60 dark:bg-[#060507] bg-[#b3bdca]"></div>

      {/* Content */}
      <div className="flex h-[90vh] gap-5 flex-col p-5 justify-center items-center">
        <h1 className="p-1 font-semibold text-xl md:text-4xl w-[100%] md:w-[100%] text-center text-black">
          What My Clients Say
        </h1>
        <div
          className="bg-white w-[85%] md:w-[50%] shadow-xl shadow-slate-400 dark:shadow-black dark:bg-[#00001F] relative p-2 md:p-24"
          style={{ maxWidth: "100%", overflowX: "hidden" }}
        >
          <Swiper
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            speed={5000}
            loop={true}
            navigation={true}
            modules={[Autoplay, Keyboard, Pagination, Navigation]}
            className="mySwiper"
            ref={swiperRef}
          >
            {TestimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center mt-5 md:mt-0 items-center gap-8">
                  <p className="text-sm w-[85%] md:w-[60%] text-center dark:text-white text-[#06273A]">
                    {testimonial.Description}
                  </p>

                  <Image
                    src={testimonial.Image}
                    width={100}
                    height={60}
                    alt={testimonial.Name}
                    className=" rounded-full mb-3"
                  />
<div className="flex flex-col gap-2">
                  <h3 className="text-lg  font-semibold text-center dark:text-white text-[#06273A]">
                    {testimonial.Name}  
                  </h3>
<h3 className="text-lg font-semibold text-center dark:text-white text-[#06273A]">
                    {testimonial.City}  
                  </h3>

</div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
