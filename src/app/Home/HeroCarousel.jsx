"use client"

import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

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
        container: `h-screen w-full bg-cover z-0 relative`,
        slide: `h-screen w-full relative`,
        image: `object-cover w-full h-full`,
        overlay: `absolute inset-0 bg-black  opacity-50`, // Overlay to darken the image
        content: `absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center z-10`,
        text: `text-white text-5xl dark:text-black`, // Text color changed to white
        button: `px-8 py-4 bg-white dark:bg-black dark:text-white text-black rounded-full mt-10`, // Button color changed to black
    };

    return (
        <div className={styles.container}>
            <Swiper
                onSlideChange={handleSlideChange}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
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
                                objectFit="cover"
                            />
                            <div className={styles.overlay}></div> {/* Overlay */}
                            <div className={styles.content}>
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

export default HeroCarosel;
