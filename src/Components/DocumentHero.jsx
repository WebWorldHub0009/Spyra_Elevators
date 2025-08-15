// src/Components/DocumentHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaDownload, FaArrowRight } from "react-icons/fa";
import bgDocs from "../assets/images/dbg.jpg"; // Replace with actual document hero image

const DocumentHero = () => {
  return (
    <section
      className="relative h-[50vh] sm:h-[60vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgDocs})`,
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0" />

      {/* Content */}
      <div className="z-10 text-center px-3 sm:px-6 md:px-8 max-w-4xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-white">
          Important <span className="text-[#D32F2F]">Documents</span>
        </h1>

        {/* Subtext */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Access essential documents, certifications, user manuals, and
          technical specifications for Spyra Elevators. Download the resources
          you need anytime.
        </p>

        {/* Features */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white">
          <div className="flex items-center gap-2">
            <FaFileAlt className="text-[#D32F2F] text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm font-medium">PDF Resources</span>
          </div>
          <div className="flex items-center gap-2">
            <FaDownload className="text-[#D32F2F] text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm font-medium">Easy Downloads</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#docs"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#D32F2F] text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300 flex items-center gap-2"
          >
            View Documents <FaArrowRight className="text-xs sm:text-sm md:text-base" />
          </a>
          <Link
            to="/contact"
            className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
          >
            Request Information <FaArrowRight className="text-xs sm:text-sm md:text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DocumentHero;
