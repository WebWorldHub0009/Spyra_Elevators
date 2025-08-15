import React from "react";
import { Link } from "react-router-dom";
import { FaTools, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/aboutbg.jpg"; // Ensure image exists

const AboutHero = () => {
  return (
    <section
      className="relative h-[60vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "scroll", // Faster load than fixed
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0" />

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white">
          About <span className="text-[#D32F2F]">Spyra Elevators</span>
        </h1>

        {/* Short Subtext */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Delivering safe, reliable, and stylish elevator solutions across
          Aligarh, Delhi, Noida, Gurugram, and Ghaziabad since 2020.
        </p>

        {/* Features */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#D32F2F] text-lg sm:text-xl" />
            <span className="font-medium">Premium Safety</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTools className="text-[#D32F2F] text-lg sm:text-xl" />
            <span className="font-medium">Expert Maintenance</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/services"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-[#D32F2F] text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300 flex items-center gap-2"
          >
            Explore Our Services <FaArrowRight />
          </Link>
          <a
            href="https://www.justdial.com/Aligarh/Spyra-Elevators-Opposite-Trendy-Wear/9999PX571-X571-240808210201-Z4Z3_BZDET"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 border-2 border-white text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
          >
            Contact Us <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
