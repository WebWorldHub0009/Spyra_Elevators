import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTools, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/aboutbg.jpg"; // Ensure image exists at this path

const AboutHero = () => {
  return (
    <section
      className="relative h-[60vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "scroll", // Faster than fixed
        backgroundSize: "cover",
      }}
    >
      {/* Dark gradient overlay */}
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
          About <span className="text-[#D32F2F]">Spyra Elevators</span>
        </motion.h1>

        {/* Short Subtext */}
        <motion.p
          className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Delivering safe, reliable, and stylish elevator solutions across
          Aligarh, Delhi, Noida, Gurugram, and Ghaziabad since 2020.
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
            <FaShieldAlt className="text-[#D32F2F] text-xl" />
            <span className="text-sm font-medium">Premium Safety</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTools className="text-[#D32F2F] text-xl" />
            <span className="text-sm font-medium">Expert Maintenance</span>
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
            to="/services"
            className="px-6 py-3 bg-[#D32F2F] text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300 flex items-center gap-2"
          >
            Explore Our Services <FaArrowRight />
          </Link>
          <a
            href="https://www.justdial.com/Aligarh/Spyra-Elevators-Opposite-Trendy-Wear/9999PX571-X571-240808210201-Z4Z3_BZDET"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
          >
            Contact Us <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
