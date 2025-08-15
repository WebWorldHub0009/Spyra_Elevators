import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const OwnersInfo = () => {
  return (
    <section className="relative w-full py-16 px-4 md:px-10 overflow-hidden bg-[#fff5f5]">
      {/* Hollow Glowing SVG Circles */}
      <div className="absolute -top-40 -left-40 z-0">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="glowRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#D32F2F" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#glowRed)"
            strokeWidth="4"
          >
            <animate
              attributeName="r"
              values="160;180;160"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="absolute -bottom-40 -right-40 z-0">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="glowGold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#FFD54F" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="url(#glowGold)"
            strokeWidth="5"
          >
            <animate
              attributeName="r"
              values="140;160;140"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Main Card */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-[#D32F2F]/30"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left - Owners Info */}
        <motion.div
          className="flex-1 w-full rounded-2xl p-8 text-center border border-[#D32F2F]/40 bg-white shadow-lg hover:shadow-2xl transition duration-500 relative"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 text-[#D32F2F] text-4xl">
            <FaUserTie />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#D32F2F] mb-3">
            Message from Our Leaders
          </h2>
          <p className="text-gray-700 text-base md:text-lg italic mb-5 leading-relaxed">
            "At Spyra Elevators, innovation meets reliability. Our mission is to
            deliver world-class vertical transportation solutions that combine
            safety, performance, and elegance — empowering spaces and people
            alike."
          </p>
          <p className="text-[#D32F2F] font-bold uppercase text-sm tracking-wide mb-2">
            — Shamshad Khan & Irfan Ahmad
          </p>
          <div className="text-gray-700 text-sm md:text-base space-y-1 mt-3">
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#D32F2F]" /> +91 93502 42481
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#D32F2F]" /> info@spyraelevators.com
            </p>
          </div>
        </motion.div>

        {/* Right - CTA */}
        <motion.div
          className="flex-1 w-full text-center md:text-left"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#D32F2F] mb-4">
            Elevating Excellence, Every Step of the Way
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Led by industry veterans Shamshad Khan and Irfan Ahmad, Spyra
            Elevators has rapidly emerged as a trusted name in the elevator
            industry. With a commitment to quality, safety, and customer
            satisfaction, we are redefining how the world moves — one floor at a
            time.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 text-white bg-[#D32F2F] rounded-full text-base md:text-lg font-semibold group hover:bg-[#B71C1C] hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Get In Touch
              <span className="absolute -inset-1 rounded-full border border-[#D32F2F]/30 opacity-0 group-hover:opacity-100 transition"></span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OwnersInfo;
