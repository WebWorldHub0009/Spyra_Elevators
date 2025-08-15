import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowLeft, FaStar, FaPaperPlane } from "react-icons/fa";

export default function SingleServicePage() {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">Service Not Found</h1>
        <Link
          to="/services"
          className="mt-6 inline-block px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[30vh] flex flex-col items-center justify-center text-center text-white px-6 sm:px-12 lg:px-20"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#00000096] backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            {service.shortDescription}
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Image - Equal Height */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-xl shadow-lg flex"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About {service.title}
            </h2>
            <p className="text-gray-700 mb-6">{service.longDescription}</p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Advantages
            </h3>
            <ul className="space-y-2 mb-6">
              {service.advantages.map((adv, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-red-600" /> {adv}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Rating */}
          <div>
            <div className="flex flex-wrap gap-6 items-center mb-8">
              <div className="bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
                <span className="block text-sm text-gray-600">Starting From</span>
                <span className="text-xl font-bold text-red-600">
                  ₹{service.pricing.startingFrom.toLocaleString()} {service.pricing.currency}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.round(service.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 text-gray-700">
                  {service.rating.toFixed(1)} / 5
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg shadow hover:from-red-700 hover:to-red-800 transition-all duration-300"
              >
                <FaArrowLeft /> Back to Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-lg shadow hover:from-gray-900 hover:to-black transition-all duration-300"
              >
                <FaPaperPlane /> Get Enquiry
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
