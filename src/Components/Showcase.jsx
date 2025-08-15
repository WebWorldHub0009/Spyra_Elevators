import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaHospital,
  FaBoxOpen,
  FaUtensils,
  FaIndustry,
  FaUserFriends,
  FaGlassMartiniAlt,
  FaCogs,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

import e1 from "../assets/images/gallery/g1.jpg";
import e2 from "../assets/images/gallery/g2.jpg";
import e3 from "../assets/images/gallery/g3.jpg";
import e4 from "../assets/images/gallery/g4.jpg";
import e5 from "../assets/images/gallery/g5.jpg";
import e6 from "../assets/images/gallery/g6.jpg";
import e7 from "../assets/images/gallery/g7.jpg";
import e8 from "../assets/images/gallery/g8.jpg";
import bgShowcase from "../assets/images/bg.avif";

const images = [
  {
    src: e1,
    title: "Glass Capsule Lift",
    icon: <FaGlassMartiniAlt className="text-[#D32F2F] text-xl" />,
    points: [
      "Panoramic design for a luxurious feel",
      "Smooth and whisper-quiet operation",
      "Perfect for malls, hotels, and high-end residences",
    ],
  },
  {
    src: e2,
    title: "Industrial Goods Lift",
    icon: <FaIndustry className="text-[#D32F2F] text-xl" />,
    points: [
      "Heavy-duty load capacity",
      "Reinforced structure for durability",
      "Designed for warehouses & factories",
    ],
  },
  {
    src: e3,
    title: "Residential Comfort Lift",
    icon: <FaBuilding className="text-[#D32F2F] text-xl" />,
    points: [
      "Compact design for small spaces",
      "Energy-efficient motor system",
      "Elegant interiors for modern homes",
    ],
  },
  {
    src: e4,
    title: "Hospital Patient Lift",
    icon: <FaHospital className="text-[#D32F2F] text-xl" />,
    points: [
      "Extra-wide cabin for stretchers",
      "Smooth, jerk-free rides for patients",
      "Hygienic and easy-to-clean interiors",
    ],
  },
  {
    src: e5,
    title: "Hydraulic Low-Rise Elevator",
    icon: <FaCogs className="text-[#D32F2F] text-xl" />,
    points: [
      "Ideal for low-rise buildings",
      "Advanced hydraulic mechanism",
      "Low maintenance & eco-friendly",
    ],
  },
  {
    src: e6,
    title: "Luxury Private Lift",
    icon: <FaUserFriends className="text-[#D32F2F] text-xl" />,
    points: [
      "Custom-designed interiors",
      "Silent, high-speed operation",
      "Premium finish for elite spaces",
    ],
  },
  {
    src: e7,
    title: "Warehouse Cargo Lift",
    icon: <FaBoxOpen className="text-[#D32F2F] text-xl" />,
    points: [
      "High load capacity for bulky goods",
      "Safe and stable lifting",
      "Long-lasting heavy-duty design",
    ],
  },
  {
    src: e8,
    title: "Restaurant Service Lift",
    icon: <FaUtensils className="text-[#D32F2F] text-xl" />,
    points: [
      "Quick and efficient food transport",
      "Space-saving design",
      "Perfect for hotels & catering",
    ],
  },
];

const Showcase = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgShowcase})` }}
    >
      <section className="py-24 px-6 md:px-16 backdrop-brightness-95 bg-gradient-to-br from-white/90 via-[#fff7f7cc] to-white/90 text-black font-sans">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#D32F2F] leading-tight"
          >
            “Elevating Safety, <br className="hidden md:block" />
            Style, and Comfort.”
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg"
          >
            Explore our showcase of premium elevators — blending technology,
            elegance, and safety that Spyra Elevators brings to every space.
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-[#000000a6] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                {img.icon}
                <p className="text-white text-lg font-bold mt-2">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 flex justify-center"
        >
          <Link to="/gallery">
            <button className="cursor-pointer bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300">
              See More →
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-lg relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="cursor-pointer absolute top-3 right-3 text-white hover:text-[#D32F2F] text-xl"
              >
                <FaTimes />
              </button>

              {/* Image */}
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {selected.icon}
                  <h3 className="text-2xl font-bold text-[#D32F2F]">
                    {selected.title}
                  </h3>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  {selected.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Showcase;
