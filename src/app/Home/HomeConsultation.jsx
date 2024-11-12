"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const HomeConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center dark:bg-[#00001F] p-8 md:p-10 gap-6 justify-center">
      <h1 className="text-2xl md:text-4xl text-center font-semibold text-gray-800 dark:text-white">
        Request Your Coaching Session
        <hr className="border-t-2 border-[#910A67] w-1/4 mx-auto mt-2" />
      </h1>
      <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8">
        <Image
          src="/assets/course2.jpg"
          alt="Modern Mannerism Consultation"
          width={400}
          height={400}
          className="rounded-lg shadow-md"
        />

        <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name *"
              required
              className="p-3 w-full border border-gray-300 dark:border-gray-700 outline-none rounded-lg focus:ring-2 focus:ring-[#910A67]"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone *"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              className="p-3 w-full border border-gray-300 outline-none dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#910A67]"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              required
              className="p-3 w-full border border-gray-300 outline-none dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#910A67]"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="p-3 w-full border border-gray-300 outline-none dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#910A67]"
            >
              <option value="">Select Service</option>
              <option>Personality Enhancement Programme</option>
              <option>Business Etiquette & Corporate Image Programme</option>
              <option>Children’s Etiquette Programme</option>
              <option>Ladies Grooming & Image Enhancement Programme</option>
              <option>Fine Dining & Table Etiquette</option>
              <option>Young Adult Finishing Programme</option>
              <option>Communication & Soft Skills Training</option>
            </select>
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
              className="p-3 w-full border outline-none border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#910A67]"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#910A67] text-white p-3 rounded-lg hover:bg-pink-600 transition-all duration-300"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HomeConsultation;
