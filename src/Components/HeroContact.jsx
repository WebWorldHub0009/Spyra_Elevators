import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/bg2.jpg"; // Replace with actual contact hero image

const HeroContact = () => {
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
          Get in <span className="text-[#D32F2F]">Touch</span> With Us
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Whether you need a quick repair, regular maintenance, or a complete 
          elevator modernization, our team at Spyra Elevators is ready to assist. 
          We’re committed to delivering safe, reliable, and efficient solutions 
          tailored to your needs.
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
            <FaPhoneAlt className="text-[#D32F2F] text-xl" />
            <span className="text-sm font-medium">24/7 Customer Support</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#D32F2F] text-xl" />
            <span className="text-sm font-medium">Quick Response Times</span>
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
            to="/contact-form"
            className="px-6 py-3 bg-[#D32F2F] text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300 flex items-center gap-2"
          >
            Send a Message <FaArrowRight />
          </Link>
          <a
            href="tel:+911234567890"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
          >
            Call Now <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContact;
