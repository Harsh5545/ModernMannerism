import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

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

const CardComponent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
        <div><h1 className="py-10 text-4xl font-bold">Course <hr className="bg-[#d664b6] h-1"/> </h1> </div>

      <div className="flex flex-col justify-center space-y-4 gap-10 py-16 w-full  h-[25rem] md:flex-row md:space-y-0 md:space-x-4">
        {courses.map((course, index) => (
          <div class=" h-[30rem] w-[25%] bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-pink-500 transition-shadow">
            <div class=" bg-sky-300 rounded-2xl">  
            <Image
              alt={course.title}

              className="object-cover"
              height={200}
             src={course.image}
             width={300}
          /></div>
            <div class="">
              <p class="font-extrabold">{course.title}</p>
              <p class="">{course.description}</p>
            </div>
            <button class="bg-sky-700 text-center font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
              See more
            </button>
          </div>

          // <Card
          //   key={index}
          //   isFooterBlurred
          //   radius="lg"
          //   className="border-none  "
          // >
          //   <Image
          //     alt={course.title}

          //     className="object-cover"
          //     height={500}
          //     src={course.image}
          //     width={450}
          //   />
          //   <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          //     <p className="text-tiny text-black/80">{course.title}</p>
          //     <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          //       {course.isBestSelling && <span className="text-xs md:text-tiny">Best Selling</span>}
          //       Notify me
          //     </Button>
          //   </CardFooter>
          // </Card>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
