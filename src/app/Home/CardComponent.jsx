import React from "react";
import Image from "next/image";

const CardComponent = () => {
  const courses = [
    {
      image: "/assets/course3.jpg",
      title: "Personality Enhancement Programme",
      description:
        "Unlock your full potential with our Personality Enhancement Programme.",
      isBestSelling: false,
    },
    {
      image: "/assets/course2.jpg",
      title: "Business Etiquette & Corporate Image Programme",
      description:
        "Master the art of business etiquette and elevate your corporate image.",
      isBestSelling: true,
    },
    {
      image: "/assets/course1.jpg",
      title: "Children’s Etiquette Programme",
      description:
        "Teach your children essential etiquette skills in a fun and engaging way.",
      isBestSelling: false,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div>
        <h1 className="py-10 text-4xl font-bold">
          Explore Course&apos;s <hr className="bg-[#d664b6] h-1" />{" "}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 py-16 w-full md:flex-row md:space-y-0 md:space-x-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative w-[90%] md:w-[25%] bg-[#AB3B8C] bg-opacity-25 dark:bg-neutral-800 rounded-3xl text-black md:p-4 p-2 text-center flex flex-col items-center justify-center gap-3 dark:hover:bg-gray-900  shadow-2xl hover:shadow-lg hover:shadow-pink-500  dark:hover:shadow-pink-200 transition-shadow"
          >
            {course.isBestSelling && (
              <div className="absolute top-2 left-2 bg-red-500 text-black dark:text-white py-1 px-3 rounded-lg z-10">
                Best Selling
              </div>
            )}
            <div className="bg-pink-500  flex justify-center items-center rounded-2xl overflow-hidden">
              <Image
                alt={course.title}
                className="object-cover relative"
                height={100}
                src={course.image}
                width={300}
              />
            </div>
            <div>
              <p className="font-extrabold">{course.title}</p>
              <p className="">{course.description}</p>
            </div>
            <button className="bg-[#AB3B8C] text-center text-white font-extrabold p-2 px-6 rounded-xl hover:bg-[#d664b6]  transition-colors">
              See more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
