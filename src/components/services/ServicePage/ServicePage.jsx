"use client"; // Ensure this component is client-side rendered
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { servicesData } from "@/data"; // Your data import
import { useEffect, useState } from "react";
import Image from "next/image";

const ServicePage = ({ params }) => {
  const { id } = params; // Get the dynamic id from the params

  const [foundService, setFoundService] = useState(null);

  useEffect(() => {
    if (id) {
      const service = servicesData.find((service) => service.id === id);
      setFoundService(service);
    }
  }, [id]);

  if (!foundService) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full dark:bg-[#00001F]">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-gradient-to-b from-black via-transparent to-black">
        <Image
          src={foundService.image}
          alt={foundService.title}
          fill
          style={{ objectFit: "cover" }}
          className="z-0 opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold z-10">
            {foundService.title}
          </h1>
          <p className="mt-2 text-xl text-white font-light">
            Duration: {foundService.duration}
          </p>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-8 md:px-20 lg:px-32 dark:text-gray-300">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          {foundService.title}
        </h2>
        <p className="whitespace-pre-line text-md md:text-xl">
          {foundService.description}
        </p>
        <div className="my-8">
          <Button className="bg-[#933469] text-white hover:bg-[#d664b6]">
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
