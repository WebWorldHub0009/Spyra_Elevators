import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  FaUserTie,
  FaProjectDiagram,
  FaStar,
  FaChevronDown,
  FaCogs,
} from 'react-icons/fa';
import aboutImg from '../assets/images/g5.jpg'; // Elevator-related image
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600 mb-1">Welcome to Spyra Elevators</p>
          <h2 className="text-4xl font-extrabold text-[#D32F2F] leading-snug font-serif">
            Lifting Standards, Elevating Lives
          </h2>
          <p className="text-gray-600 text-lg max-w-md mt-4">
            Since 2020, Spyra Elevators has been delivering safe, reliable, and
            innovative vertical mobility solutions across Aligarh, Delhi, Noida,
            Gurugram, and Ghaziabad — ensuring smooth rides with unmatched quality.
          </p>

          <Link to="/services">
            <button className="cursor-pointer mt-6 bg-[#D32F2F] hover:bg-red-800 transition px-6 py-3 rounded-full text-white text-sm font-medium shadow-md">
              Explore Services
            </button>
          </Link>

          {/* Services Summary */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                title: 'Passenger Lifts',
                icon: <FaCogs />,
                desc: 'Smooth & stylish travel',
              },
              {
                title: 'Freight Lifts',
                icon: <FaProjectDiagram />,
                desc: 'Heavy-duty reliability',
              },
              {
                title: 'Capsule Lifts',
                icon: <FaUserTie />,
                desc: 'Luxury glass designs',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2"
              >
                <div className="text-[#D32F2F] text-3xl transition-transform duration-300 hover:scale-110 hover:-rotate-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Tilt Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center items-center"
        >
          {/* Decorative Overlay */}
          <div className="absolute w-24 h-24 -top-6 -left-4 z-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
            >
              <pattern
                id="dots"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1"
                  cy="1"
                  r="1"
                  className="text-gray-400"
                  fill="currentColor"
                />
              </pattern>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareColor="#fff"
            glareMaxOpacity={0.1}
          >
            <div className="relative z-10 w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutImg}
                alt="Spyra Elevators"
                className="object-cover w-full h-auto"
              />
            </div>
          </Tilt>

          {/* Floating Stats */}
          <div className="absolute -top-6 -left-6 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaProjectDiagram className="text-[#D32F2F]" />
            <p className="font-semibold text-gray-800">500+ Projects</p>
          </div>

          <div className="absolute top-4 right-0 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaStar className="text-[#D32F2F]" />
            <p className="font-semibold text-gray-800">4.9 Rating</p>
          </div>

          <div className="absolute bottom-0 left-4 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaUserTie className="text-[#D32F2F]" />
            <div>
              <p className="font-semibold text-gray-800">5+ Years</p>
              <p className="text-gray-500 text-xs">Industry Experience</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-10 flex justify-center relative z-10"
      >
        <FaChevronDown className="text-[#D32F2F] text-xl" />
      </motion.div>
    </section>
  );
};

export default AboutSection;
