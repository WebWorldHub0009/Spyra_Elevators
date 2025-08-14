import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCogs, FaBuilding, FaCity } from "react-icons/fa";
import { Link } from "react-router-dom";
import passengerLift from "../assets/images/lift.jpg";
import freightLift from "../assets/images/g11.jpg";
import capsuleLift from "../assets/images/g6.jpg";

// Image Data List
const liftImages = [
  { id: 1, label: "Passenger Lift", src: passengerLift },
  { id: 2, label: "Freight Lift", src: freightLift },
  { id: 3, label: "Capsule Lift", src: capsuleLift },
];

const AboutShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(liftImages[0]);

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-white relative">
      {/* Left Side Large Image */}
      <div className="md:w-1/2 w-full flex items-center justify-center py-8 px-4 relative">
        <div className="rounded-2xl shadow-lg overflow-hidden mt-12 w-full max-w-[90%] md:max-w-[90%] ">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage.id}
              src={selectedImage.src}
              alt={selectedImage.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Cards Overlapping at Bottom on Mobile */}
        <div className="md:hidden absolute -bottom-20 left-0 w-full flex justify-center">
          <div className="flex justify-center w-full max-w-[90%] gap-4">
            {liftImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`flex-1 bg-white border border-black rounded-lg shadow-md cursor-pointer transition duration-300 hover:scale-[1.04] hover:shadow-xl ${
                  selectedImage.id === item.id ? "ring-2 ring-[#D32F2F]" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="rounded-t-lg w-full h-24 object-cover"
                />
                <p className="p-2 text-center text-sm font-semibold text-black">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2 w-full px-6 py-24 md:py-20 flex flex-col justify-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 font-medium mb-2"
        >
          Excellence in Every Rise
        </motion.p>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-[#D32F2F] mb-6 leading-tight"
        >
          Elevating Standards with Spyra Elevators
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-800 mb-6"
        >
          Spyra Elevators Private Limited delivers innovative, safe, and reliable elevator
          solutions. From residential to commercial projects, we specialize in installation,
          maintenance, repair, and modernization. Serving across Aligarh, Delhi, Noida, Gurugram,
          and Ghaziabad, our commitment to quality ensures your journey is smooth — every time.
        </motion.p>

        {/* Stats with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <div className="flex flex-col items-center bg-white border border-black py-4 rounded shadow-sm">
            <FaCogs size={24} className="text-[#D32F2F] mb-2" />
            <p className="text-lg font-semibold text-black">1200+</p>
            <p className="text-sm text-gray-700">Lifts Installed</p>
          </div>
          <div className="flex flex-col items-center bg-white border border-black py-4 rounded shadow-sm">
            <FaBuilding size={24} className="text-black mb-2" />
            <p className="text-lg font-semibold text-black">650+</p>
            <p className="text-sm text-gray-700">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center bg-white border border-black py-4 rounded shadow-sm">
            <FaCity size={24} className="text-[#D32F2F] mb-2" />
            <p className="text-lg font-semibold text-black">25+</p>
            <p className="text-sm text-gray-700">Cities Served</p>
          </div>
        </motion.div>

        {/* Cards Grid (Visible on md+) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {liftImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`bg-white border border-black rounded-lg shadow-md cursor-pointer transition duration-300 hover:scale-[1.04] hover:shadow-xl ${
                selectedImage.id === item.id ? "ring-2 ring-[#D32F2F]" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="rounded-t-lg w-full h-36 object-cover"
              />
              <p className="p-3 font-semibold text-center text-black">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      
        
      </div>
    </section>
  );
};

export default AboutShowcase;
