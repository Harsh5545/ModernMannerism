"use client"


import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination } from "swiper";


const HeroCarosel = () => {
const swiperRef = useRef(null);
const [currentSlide, setCurrentSlide] = useState(0);

const handleSlideChange = (swiper) => {
  setCurrentSlide(swiper.realIndex);
};

const slides = [
  {
    id: 1,
    image: "/assets/image1.jpg",
    text: "Welcome to our Luxury",
    button: "Enter",
  },
  {
    id: 2,
    image: "/assets/image2.jpg",
    text: "A World of Elegance",
    button: "Explore",
  },
  {
    id: 3,
    image: "/assets/image3.jpg",
    text: "Discover the Art of Living",
    button: "Start",
  },
];

const styles = {
  container: `h-screen w-full bg-cover z-0`,
  slide: `h-full w-full flex flex-col justify-center items-center`,
  leftContent: `h-full w-[35%] flex flex-col justify-center items-center text-center bg-black bg-opacity-70 z-10`,
  text: `text-white text- [5rem] leading-[5rem]`,
  button: `px-8 py-4 bg-white text-black rounded-full mt-10`,
};
  return (
    <div className={styles.container}>
      <Swiper
        direction={"vertical"}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        ref={swiperRef}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <Image
                src={slide.image}
                alt={slide.text}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.leftContent}>
              <h1 className={styles.text}>{slide.text}</h1>
              <Button className={styles.button} ghost>
                {slide.button}
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarosel;