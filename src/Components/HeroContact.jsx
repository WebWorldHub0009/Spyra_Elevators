import React from "react";
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/cbg.jpg"; // Replace with actual contact hero image

const HeroContact = () => {
  return (
    <section
      className="relative h-[60vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "scroll", // better performance than fixed
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white">
          Get in <span className="text-[#D32F2F]">Touch</span> With Us
        </h1>

        {/* Subtext */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Whether you need a quick repair, regular maintenance, or a complete
          elevator modernization, our team at Spyra Elevators is ready to
          assist. We’re committed to delivering safe, reliable, and efficient
          solutions tailored to your needs.
        </p>

        {/* Features */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#D32F2F] text-lg sm:text-xl" />
            <span className="font-medium">24/7 Customer Support</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#D32F2F] text-lg sm:text-xl" />
            <span className="font-medium">Quick Response Times</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-[#D32F2F] text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300 flex items-center gap-2"
          >
            Send a Message <FaArrowRight />
          </a>
          <a
            href="tel:+911234567890"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 border-2 border-white text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
          >
            Call Now <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
