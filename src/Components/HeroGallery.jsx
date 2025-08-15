import React from "react";
import { Link } from "react-router-dom";
import { FaCameraRetro, FaImages, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/bg2.jpg"; // Replace with actual gallery hero image

const HeroGallery = () => {
  return (
    <section
      className="relative h-[60vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0" />

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-8 max-w-4xl">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-snug text-white">
          Our <span className="text-[#D32F2F]">Gallery</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Take a look at some of our finest elevator installations, upgrades, 
          and custom designs. Each project showcases our commitment to 
          precision, safety, and style.
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <FaCameraRetro className="text-[#D32F2F] text-xl" />
            <span className="text-sm font-medium">High-Quality Images</span>
          </div>
          <div className="flex items-center gap-2">
            <FaImages className="text-[#D32F2F] text-xl" />
            <span className="text-sm font-medium">Project Highlights</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#D32F2F] text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300 flex items-center gap-2"
          >
            Book a Consultation <FaArrowRight />
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
          >
            Explore Services <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;
