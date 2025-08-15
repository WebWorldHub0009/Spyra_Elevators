// src/pages/ServicesPage.jsx
import React from "react";
import { motion } from "framer-motion";
import servicesData from "../data/servicesData";
import {
  FaUsers,
  FaBoxOpen,
  FaHospitalSymbol,
  FaWater,
  FaHome,
  FaCogs,
  FaEye,
  FaWrench,
  FaSyncAlt,
  FaQuoteLeft,
  FaQuoteRight,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceHero from "../Components/ServiceHero";

// Map service IDs to icons and labels
const serviceIcons = {
  "passenger-elevators": [
    { icon: <FaUsers />, label: "Passenger" },
    { icon: <FaHome />, label: "Residential" },
  ],
  "goods-freight-elevators": [
    { icon: <FaBoxOpen />, label: "Goods" },
    { icon: <FaCogs />, label: "Heavy Duty" },
  ],
  "hospital-elevators": [
    { icon: <FaHospitalSymbol />, label: "Hospital" },
    { icon: <FaUsers />, label: "Patient" },
  ],
  "hydraulic-elevators": [
    { icon: <FaWater />, label: "Hydraulic" },
    { icon: <FaCogs />, label: "Durable" },
  ],
  "home-elevators": [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaUsers />, label: "Compact" },
  ],
  "mrl-elevators": [
    { icon: <FaCogs />, label: "Machine-less" },
    { icon: <FaHome />, label: "Modern" },
  ],
  "capsule-elevators": [
    { icon: <FaEye />, label: "Panoramic" },
    { icon: <FaHome />, label: "Stylish" },
  ],
  "elevator-maintenance": [
    { icon: <FaWrench />, label: "Maintenance" },
    { icon: <FaCogs />, label: "Reliable" },
  ],
  "elevator-modernization": [
    { icon: <FaSyncAlt />, label: "Modernize" },
    { icon: <FaCogs />, label: "Upgrade" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
        {/* Fancy Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Decorative top line */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-[2px] bg-red-600 w-12"></div>
            <FaTools className="mx-3 text-red-600 text-lg" />
            <div className="h-[2px] bg-red-600 w-12"></div>
          </div>

          {/* Quote-style main heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 flex items-center justify-center gap-3">
            <FaQuoteLeft className="text-red-500" />
            Elevating Experiences, One Floor at a Time
            <FaQuoteRight className="text-red-500" />
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Discover our complete range of elevator solutions — from design and
            installation to maintenance and modernization — crafted to move you
            higher.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>

                {/* Short Description */}
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {service.shortDescription}
                </p>

                {/* Icons inline with labels */}
                <div className="flex flex-wrap gap-3 text-red-600 text-sm mb-6">
                  {serviceIcons[service.id]?.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-red-50 px-3 py-1 rounded-full hover:bg-red-100 transition"
                    >
                      <span className="text-xs">{item.icon}</span>
                      <span className="text-gray-700 text-xs">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  to={`/services/${service.id}`}
                  className="mt-auto w-full inline-block px-5 py-3 text-sm font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-md hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.02] text-center"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
