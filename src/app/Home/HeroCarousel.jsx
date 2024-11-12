"use client";

import { Button } from "@nextui-org/react";
import "../globals.css"
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
      image: "/assets/One-on-One Consulting.jpeg",
      text: "One-on-One Consulting",
      description: "Help individuals refine their personal and professional image, develop strong communication skills, and boost their confidence. Our one-on-one sessions are customized to meet the unique needs of each client.",
      button: "Sign Up Now",
    },
    {
      id: 2,
      image: "/assets/Corporate Workshops & Training.jpeg",
      text: "Corporate Workshops & Training",
      description: "We offer customized training programs designed to improve workplace professionalism, communication, and team dynamics. These workshops are perfect for teams, managers, and executives who want to refine their professional image and etiquette.",
      button: "Explore",
    },
    {
      id: 3,
      image: "/assets/Young Adult Grooming Programme.jpeg",
      text: "Young Adult Grooming Programmee",
      description: "Prepare teens and young adults for success by teaching them essential grooming, communication, and etiquette skills. This program is ideal for young adults entering the workforce, preparing for interviews, or simply wanting to build confidence in their daily lives.",
      button: "Start",
    },
    {
      id: 4,
      image: "/assets/Children's Etiquette Programme.jpeg",
      text: "Children's Etiquette Programmee",
      description: "Help children learn good manners, respect, and social skills in a fun and engaging way. This program focuses on building the foundation for positive behavior and respectful interactions, preparing children for both social and school environments.",
      button: "Start",
    },
    {
      id: 5,
      image: "/assets/Online Courses & Workshops.jpeg",
      text: "Online Courses & Webinars",
      description: "Our online offerings allow you to learn at your own pace or join live sessions to enhance your skills in image, etiquette, and communication.",
      button: "Start",
    },
  ];

  const styles = {
    container: `md:h-screen  w-full bg-cover z-0 relative`,
    slide: `md:h-screen h-[65vh] w-full relative`,
    image: `md:object-cover   w-full md:h-full h-[65vh]`,
    overlay: `absolute inset-0 dark:bg-[#060507] bg-[#b3bdca] dark:bg-opacity-60 bg-opacity-50`,
    content: `absolute left-0 w-full z-10 p-4`,
    text: `md:text-4xl dark:text-white font-bold sm:text-xl text-black lato-font`,
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
          background-color: #c70ba8; /* Customize this color as needed */
        }
        .swiper-pagination-bullet-active {
          background-color: #ff0000 !important; /* Customize active dot color */
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
        navigation={false}
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
              <div className="absolute flex gap-3 md:gap-8 flex-col text-center items-center justify-center h-full z-10 p-8">
                <h1 className={styles.text}>{slide.text}</h1>
                <p className="md:w-[50%]  text-sm font-medium md:text-lg">{slide.description}</p>
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
