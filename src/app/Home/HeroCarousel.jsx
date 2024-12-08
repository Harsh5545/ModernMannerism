"use client";

import { Button } from "@nextui-org/react";
import "../globals.css";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Lato } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import Head from "next/head";

const dm_Sans = Lato({
  subsets: ["latin"],
  weight: ["400"],
  // Add weights if needed
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
});
const HeroCarousel = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const slides = [
    {
      id: 1,
      image: "/assets/ModernHomeHero.jpg",
      text: "Welcome to Modern Mannerism!",
      description: "A sophisticated guide to cultural manner & etiquette.",
      description2: "We help individuals and professionals from all walks of life enhance their image, communication, and etiquette to succeed in personal and professional settings.",
      button: "Explore",
    },
    {
      id: 2,
      image: "/assets/One-on-One Consulting.jpeg",
      text: "One-on-One Consulting",
      description: "Help individuals refine their personal and professional image, develop strong communication skills, and boost their confidence. Our one-on-one sessions are customized to meet the unique needs of each client.",
      button: "Book an appointment",
    },
    {
      id: 3,
      image: "/assets/Corporate Workshops & Training.jpeg",
      text: "Corporate Workshops & Training",
      description: "We offer customized training programs designed to improve workplace professionalism, communication, and team dynamics. These workshops are perfect for teams, managers, and executives who want to refine their professional image and etiquette.",
      button: "Know more",
    },
    {
      id: 4,
      image: "/assets/Young Adult Grooming Programme.jpeg",
      text: "Young Adult Grooming Programmee",
      description: "Prepare teens and young adults for success by teaching them essential grooming, communication, and etiquette skills. This program is ideal for young adults entering the workforce, preparing for interviews, or simply wanting to build confidence in their daily lives.",
      button: "Know more",
    },
    {
      id: 5,
      image: "/assets/Children's Etiquette Programme.jpeg",
      text: "Children's Etiquette Programmee",
      description: "Help children learn good manners, respect, and social skills in a fun and engaging way. This program focuses on building the foundation for positive behavior and respectful interactions, preparing children for both social and school environments.",
      button: "Know more",
    },
    {
      id: 6,
      image: "/assets/Online Courses & Workshops.jpeg",
      text: "Online Courses & Webinars",
      description: "Our online offerings allow you to learn at your own pace or join live sessions to enhance your skills in image, etiquette, and communication.",
      button: "Know more",
    },
  ];
  const styles = {
    container: `md:h-screen  w-full bg-cover z-0 relative`,
    slide: `md:h-screen h-[65vh] w-full relative`,
    image: `md:object-cover   w-full md:h-full h-[65vh]`,
    overlay: `absolute inset-0 dark:bg-[#060507]  bg-[#3a4e5d] dark:bg-opacity-60 bg-opacity-50`,
    content: `absolute left-0 w-full z-10 p-4`,
    text: `md:text-4xl ${cormorant.className} dark:text-white text-white font-bold text-2xl  text-black lato-font`,
    button: `px-8 ${dm_Sans.className}  py-4 tracking-widder bg-gradient-to-r  from-[#c3965d] via-[#eabf91] to-[#c3965d] text-md w-[50%] md:w-[25%] text-white rounded-full mt-4 sm:mt-10`,
  };

  return (
    <> <Head>
        <title>Modern Mannerism - Enhance Your Professional & Personal Etiquette</title>
        <meta
          name="description"
          content="Modern Mannerism offers personalized consulting, workshops, and programs to help individuals and professionals master etiquette, communication, and image-building skills."
        />
        <meta
          name="keywords"
          content="etiquette, communication, personal image, professional image, workshops, consulting, children etiquette, young adult grooming"
        />
        <meta name="author" content="Modern Mannerism" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Modern Mannerism" />
        <meta
          property="og:description"
          content="Empowering individuals with the skills to succeed through refined etiquette and communication."
        />
        <meta property="og:image" content="/assets/One-on-One Consulting.jpeg" />
        <meta property="og:url" content="https://modernmannerism.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
          delay: 6000,
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
              <div className="absolute text-white flex gap-3 md:gap-8 flex-col text-center items-center justify-center h-full z-10 p-8">
                <h1 className={styles.text}>{slide.text}</h1>
                <div className="flex flex-col md:w-[50%] text-xs font-medium md:text-lg">
                  <p className="">
                    {slide.description}
                  </p>
                  <p className="">
                    {slide.description2}
                  </p>
                </div>

                <Button className={styles.button}>{slide.button}</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div></>
  );
};

export default HeroCarousel;
