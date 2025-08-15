// src/pages/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import bgContact from "../assets/images/bg2.jpg"; // Ensure image exists
import MapSection from "../Components/MapSection";
import HeroContact from "../Components/HeroContact";

const ContactPage = () => {
  return (
    <>
      <HeroContact />
      <section className="w-full min-h-screen flex flex-col lg:flex-row text-black font-sans bg-white">
        {/* Left Side */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 bg-[#F3F4F6] px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between shadow-md"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6 border-b-4 border-[#D32F2F] inline-block pb-2 text-[#000000]">
                Let’s Get in Touch
              </h1>
              <p className="text-lg font-medium text-gray-700 mb-10">
                We’re here to answer your queries and help you with your elevator needs.
              </p>

              <div className="space-y-6 text-sm sm:text-base text-gray-800">
                <div>
                  <h4 className="font-bold text-black">Phone</h4>
                  <p>+91 9350242481</p>
                  <p>+91 8587069355</p>
                </div>
                <div>
                  <h4 className="font-bold text-black">Email</h4>
                  <p>spyraelevators@gmail.com</p>
                  <p>info@spyraelevators.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-black">Address</h4>
                  <p>
                    Quarsi ByPass Road, Shop No. B-7, Ground Floor,<br />
                    Lifestyle Commercial Complex, opposite Trendy Wear,<br />
                    Aligarh, Uttar Pradesh 202001, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4 text-lg text-gray-600">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D32F2F] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D32F2F] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D32F2F] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D32F2F] transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D32F2F] transition"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center shadow-md"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000b4] opacity-70"></div>

          {/* Form Content */}
          <form
            action="https://formsubmit.co/info@spyraelevators.com"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-white"
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#D32F2F] pb-1 inline-block">
              Contact Form
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-gray-400 p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-gray-400 p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-gray-400 p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <textarea
                name="message"
                placeholder="Tell us what you're interested in"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-gray-400 p-2 focus:outline-none resize-none h-24 text-white placeholder-gray-300"
              ></textarea>
              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-[#D32F2F] text-white font-semibold py-3 mt-4 hover:bg-red-800 transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {/* Hidden Inputs for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://spyraelevators.com/thank-you"
            />
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <MapSection />
    </>
  );
};

export default ContactPage;
