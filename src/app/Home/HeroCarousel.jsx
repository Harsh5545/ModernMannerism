"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const slides = [
    {
      id: 1,
      image: "/assets/image1.jpg",
      text: "Sign Up Now To Become The Polished Professional",
      button: "Sign Up Now",
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
    container: `md:h-screen  w-full bg-cover z-0 relative`,
    slide: `md:h-screen h-[50vh] w-full relative`,
    image: `object-cover w-full md:h-full h-[50vh]`,
    overlay: `absolute inset-0 dark:bg-[#060507] bg-[#BEBEBE] dark:bg-opacity-60 bg-opacity-40`,
    content: `absolute left-0 w-full z-10 p-4`,
    text: `md:text-2xl font-bold sm:text-xl text-black lato-font`,
    button: `px-8 py-4 bg-black w-[50%] md:w-[25%] text-white rounded-full mt-4 sm:mt-10`,
  };

  return (
    <div className={styles.container}>
      <style jsx>{`
        @media (max-width: 767px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #ff0000; /* Customize this color as needed */
        }
        .swiper-pagination-bullet {
          background-color: #0000ff; /* Customize this color as needed */
        }
        .swiper-pagination-bullet-active {
          background-color: #ff0000; /* Customize active dot color */
        }
      `}</style>
      <Swiper
        onSlideChange={handleSlideChange}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={100}
        loop={true}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="mySwiper"
        ref={swiperRef}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <Image
                src={slide.image}
                alt={slide.text}
                className={styles.image}
                layout="fill"
              />
              <div className={styles.overlay}></div>
              <div className="absolute flex flex-col md:w-[50%] text-center items-center justify-center h-full z-10 p-8">
                <h1 className={styles.text}>{slide.text}</h1>
                <Button className={styles.button}>{slide.button}</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
