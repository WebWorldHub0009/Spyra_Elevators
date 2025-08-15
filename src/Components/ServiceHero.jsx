import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCogs, FaTruckLoading, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/slider/s1.jpg"; // Replace with actual service background image

const ServiceHero = () => {
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
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-snug text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our <span className="text-[#D32F2F]">Services</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From installation to maintenance, Spyra Elevators delivers reliable, 
          safe, and stylish vertical transport solutions tailored to residential, 
          commercial, and industrial needs.
        </motion.p>

        {/* Features */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <FaCogs className="text-[#D32F2F] text-xl" />
            <span className="text-sm font-medium">Custom Installations</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTruckLoading className="text-[#D32F2F] text-xl" />
            <span className="text-sm font-medium">Modernization & Upgrades</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#D32F2F] text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300 flex items-center gap-2"
          >
            Get a Free Quote <FaArrowRight />
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
          >
            View Our Work <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
