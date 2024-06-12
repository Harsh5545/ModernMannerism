"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const HomeConsultation = () => {
  // State variables for form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="flex  dark:bg-[#00001F] p-10 gap-4 flex-col justify-center items-center">
        <h1 className="text-xl md:text-4xl">
          Request Your Coaching Session<hr />
        </h1>
        <p>
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
        <div className="flex rounded-sm md:flex-row flex-col justify-center items-center">
          <div className="">
            <Image src="/assets/course2.jpg" width={400} height={400} />
          </div>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 flex-col md:flex-row outline-none border-none">
                {" "}
                <div className="md:p-6 p-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name *"
                    required
className="p-3 w-56"
                  />
                </div>
                <div className="md:p-6 p-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone *"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
className="p-3 w-56"
                  />
                </div>
              </div >
              <div className="flex gap-4 flex-col md:flex-row outline-none border-none">
                <div className="md:p-6 p-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email *"
                    required
className="p-3 w-56"
                  />
                </div>
                <div className="md:p-6 p-2">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
className="p-3 w-56 "
                  >
                    <option c value="">Select Service</option>
                    <option>Personality Enhancement Programme</option>
                    <option>Business Etiquette & Corporate Image Programme</option>
<option>Children’s Etiquette Programme</option>
<option>Ladies Grooming & Image Enhancement Programme</option>
<option>Fine Dining & Table Etiquette</option>
<option>Young Adult Finishing Programme</option>
<option>Communication & Soft Skills Training</option>


                  </select>
                </div>
              </div>
              <div className="p-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  required
className="pl-3 py-6 w-96"
                ></textarea>
              </div>
              <div className="p-5">
            <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeConsultation;
