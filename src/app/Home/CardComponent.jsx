    import React from "react";
    import Image from "next/image";
    import { FaStar } from "react-icons/fa"; // Importing an icon from react-icons
    import { MdOutlineArrowForwardIos } from "react-icons/md"; // Importing another icon
    import styles from "./styles.module.css"; // Import the CSS module

    const CardComponent = () => {
    const courses = [
        {
        image: "/assets/Personality Development.jpeg",
        title: "Personality Enhancement Programme",
        description:
            "Unlock your full potential with our Personality Enhancement Programme.",
        isBestSelling: false,
        },
        {
        image: "/assets/BusinessHandshake.jpg",
        title: "Business Etiquette & Corporate Image Programme",
        description:
            "Master the art of business etiquette and elevate your corporate image.",
        isBestSelling: true,
        },
        {
        image: "/assets/Etiquettechildren.jpg",
        title: "Children’s Etiquette Programme",
        description:
            "Teach your children essential etiquette skills in a fun and engaging way.",
        isBestSelling: false,
        },
    ];

    return (
        <div className="w-full dark:bg-[#00001F] h-full flex flex-col justify-center items-center py-10">
        <div className="w-[90%]">
            <div className="flex flex-col items-center justify-center">
            <h4 className="py-10 text-4xl flex flex-col gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#933469] to-[#5185c0]">
                Our Services
                <hr className="bg-gradient-to-r from-[#933469] to-[#5185c0] h-1 rounded-full w-16 self-center" />
            </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-4">
            {courses.map((course, index) => (
                <div
                key={index}
                className={`relative ${styles.container} w-full md:w-[90%] bg-[#708090] bg-opacity-25 dark:bg-[#122031] rounded-3xl text-black p-4 text-center flex flex-col items-center justify-between gap-3 h-[500px] dark:hover:bg-[#0e1a2b] shadow-2xl hover:shadow-md hover:shadow-[#8c9c88] dark:hover:shadow-[#3a4e4f]  transform hover:scale-105 transition-transform duration-300 ease-in-out`}>
                {course.isBestSelling && (
    //                 <div className={`${styles.card_box} absolute flex items-center  top-3  left-3  text-white py-1 px-3 rounded-full z-10`} >
    //                   {/* <FaStar className="text-yellow-400" />
    //                   <span>Best Selling</span> */}
    // <span></span>
    //                 </div>

        <div className={`${styles.card_box}`}>
            <span></span>
        
    </div>
                )}
                <div className=" w-full  mb-4 flex justify-center items-center dark:bg-[#021625] rounded-2xl overflow-hidden">
                    <Image
                    alt={course.title}
                    className="object-cover  w-full"
                    height={300}
                    width={300}
                    src={course.image}
                    />
                    <div className=" inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                    <p className="font-semibold text-xl dark:text-white text-[#2c3e50]">
                    {course.title}
                    </p>
                    <p className="dark:text-gray-400 text-gray-700">
                    {course.description}
                    </p>
                </div>
                <button className="flex items-center justify-center bg-[#933469] hover:bg-[#d664b6] text-white font-bold p-3 px-6 rounded-xl  transition-colors duration-300 ease-in-out">
                    See more <MdOutlineArrowForwardIos className="ml-2" />
                </button>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default CardComponent;
