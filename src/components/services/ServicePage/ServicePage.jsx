"use client";

import React, { useEffect, useState } from "react";
import { servicesDataPage } from "@/data";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ServicePage = ({ params }) => {
  const { id } = params;
  const [foundService, setFoundService] = useState(null);
  const [expandedPoint, setExpandedPoint] = useState(null);

  useEffect(() => {
    if (id) {
      const service = servicesDataPage.find((service) => service.id === id);
      setFoundService(service);
    }
  }, [id]);

  if (!foundService) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  const {
    title,
    headline,
    subheadline,
    overview,
    programOptions,
    learningPoints,
    highlights,
    testimonials,
    faqData,
    heroImage,
  } = foundService;

  const carouselResponsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <div className="flex items-center pb-4 md:pb-10 justify-center w-full flex-col  bg-gray-200">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] lg:h-[60vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-2xl lg:text-4xl font-bold uppercase">{title}</h1>
          <h2 className="mt-4 text-lg lg:text-xl font-serif">"{headline}"</h2>
          <p className="mt-4 w-[70%] text-center text-lg lg:text-md">{subheadline}</p>
        </div>
      </div>
    <div className="w-full md:w-[60%] ">
      {/* Overview Section */}
      <section className="mt-14 text-center">
        <h2 className="text-4xl font-semibold text-black">Overview</h2>
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            
          <p className="text-gray-700">{overview}</p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-4">
                <h4 className="text-gray-700 text-xl font-bold text-start">This program offers: </h4>
            {programOptions.map((option, index) => (
              <li
                key={index}
                className="bg-gray-100 rounded-md text-gray-600 flex items-center gap-2"
              > 
                {option}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What They’ll Learn Section */}
    <section className="mt-14  text-center">
  <h2 className="text-4xl  font-semibold text-black">
    What They’ll Learn
  </h2>
  <div className="mt-8 flex bg-white rounded-lg shadow-md py-6 px-6 justify-center flex-col gap-6">
    {learningPoints.map((point, index) => (
      <div key={index} className="flex items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
        <span className="ml-2 text-lg text-gray-800">{point.title}</span>
      </div>
    ))}
  </div>
</section>

    <section className="mt-14 ">
  <h2 className="text-4xl font-semibold text-black text-center mb-8">
    Program Details
  </h2>
  <div className="bg-gray-50 shadow-lg rounded-lg p-6 md:p-10 space-y-6">
    {/* Age Group */}
    <div className="flex items-start gap-4">
      <span className="w-4 h-4 rounded-full bg-black mt-1"></span>
      <p className="text-lg">
        <strong>Age Group:</strong> 10–15 years
      </p>
    </div>

    {/* Format */}
    <div>
      <p className="text-lg font-semibold text-black">Format:</p>
      <ul className="mt-2 space-y-2">
        <li className="flex items-start gap-4">
          <span className="w-4 h-4 rounded-full bg-black mt-1"></span>
          <p>
            <strong>Group Workshops:</strong> Fun, collaborative learning with peers.
          </p>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-4 h-4 rounded-full bg-black mt-1"></span>
          <p>
            <strong>Private Sessions:</strong> Personalized, focused coaching.
          </p>
        </li>
      </ul>
    </div>

    {/* Duration */}
    <div>
      <p className="text-lg font-semibold text-black">Duration:</p>
      <ul className="mt-2 space-y-2">
        <li className="flex items-start gap-4">
          <span className="w-4 h-4 rounded-full bg-black mt-1"></span>
          <p>
            <strong>Group Workshops:</strong> 2–3 hours per session.
          </p>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-4 h-4 rounded-full bg-black mt-1"></span>
          <p>
            <strong>Private Sessions:</strong> 1-hour sessions, scheduled as per convenience.
          </p>
        </li>
      </ul>
    </div>

    {/* Location */}
    <div>
      <p className="text-lg font-semibold text-black">Location:</p>
      <ul className="mt-2 space-y-2">
        <li className="flex items-start gap-4">
          <span className="w-4 h-4 rounded-full bg-black mt-1"></span>
          <p>In-person at designated venues.</p>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-4 h-4 rounded-full bg-black mt-1"></span>
          <p>Online options available upon request.</p>
        </li>
      </ul>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="mt-14 text-center">
        <h2 className="text-4xl font-semibold text-black">
          Testimonials
        </h2>
        <div className="mt-6">
          <Carousel
            responsive={carouselResponsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            showDots={true}
            arrows={false}
            className="py-0"
            
          >
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md mx-2"
              >
                <p className="italic">"{testimonial.quote}"</p>
                <footer className="text-right mt-4">- {testimonial.author}</footer>
              </Box>
            ))}
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-14 text-center">
        <h2 className="text-4xl font-semibold text-black">FAQs</h2>
        <div className="mt-6">
          {faqData.map((faq, index) => (
            <Accordion key={index} className="shadow-md">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="text-lg font-semibold text-black flex items-center gap-2">
                  <HelpOutlineIcon />
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-14 text-center">
        <h2 className="text-4xl font-bold text-black">
          Help Your Child Shine with Confidence and Polished Manners!
        </h2>
        <Button
          variant="contained"
          className="mt-6 bg-black hover:bg-indigo-700"
        >
          Register Now
        </Button>
      </section>
</div>
    </div>
  );
};

export default ServicePage;
