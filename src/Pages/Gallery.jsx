import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/gallery/g1.jpg";
import img2 from "../assets/images/gallery/g2.jpg";
import img3 from "../assets/images/gallery/g3.jpg";
import img4 from "../assets/images/services/s3.jpg";
import img5 from "../assets/images/gallery/g5.jpg";
import img6 from "../assets/images/gallery/g6.jpg";
import img7 from "../assets/images/gallery/g7.jpg";
import img8 from "../assets/images/gallery/g8.jpg";
import img9 from "../assets/images/gallery/g9.jpg";
import img10 from "../assets/images/gallery/g10.jpg";
import img11 from "../assets/images/gallery/g11.jpg";
import img12 from "../assets/images/gallery/g12.jpg";

import HeroGallery from "../Components/HeroGallery";

// Updated Gallery Items with slight rewording
const galleryItems = [
  {
    image: img1,
    title: "Glass Capsule Lift",
    caption: "Panoramic design for a premium passenger experience.",
    details: [
      "360° glass cabin visibility",
      "LED ambient lighting",
      "Silent gearless motor",
      "Ideal for malls, hotels, and luxury lobbies",
    ],
  },
  {
    image: img2,
    title: "Industrial Goods Lift",
    caption: "Heavy-duty solution for industrial and storage facilities.",
    details: [
      "Load capacity up to 5000 kg",
      "Reinforced steel framework",
      "Non-slip flooring & wide door access",
    ],
  },
  {
    image: img3,
    title: "Residential Comfort Lift",
    caption: "Smooth, compact, and stylish for modern homes.",
    details: [
      "Quiet motor technology",
      "Customizable cabin interiors",
      "Soft start/stop for maximum comfort",
    ],
  },
  {
    image: img4,
    title: "Hospital Patient Lift",
    caption: "Engineered for patient safety and stretcher access.",
    details: [
      "Anti-bacterial stainless steel",
      "Emergency backup power",
      "Voice guidance & auto-leveling",
    ],
  },
  {
    image: img5,
    title: "Hydraulic Low-Rise Elevator",
    caption: "Perfect for low-rise buildings with space constraints.",
    details: [
      "No overhead machine room required",
      "Energy-efficient hydraulic drive",
      "Smooth, quiet operation",
    ],
  },
  {
    image: img6,
    title: "Luxury Private Lift",
    caption: "A statement piece for premium residences.",
    details: [
      "Glass + wood designer finishes",
      "Whisper-quiet performance",
      "Auto-rescue system included",
    ],
  },
  {
    image: img7,
    title: "Warehouse Cargo Lift",
    caption: "Efficient vertical transport for heavy loads.",
    details: [
      "Dual access doors",
      "Reinforced control system",
      "Smooth ramp alignment",
    ],
  },
  {
    image: img8,
    title: "Restaurant Service Lift",
    caption: "Streamlines food & utility movement.",
    details: [
      "Fireproof interiors",
      "User-friendly control panel",
      "Compact installation options",
    ],
  },
  {
    image: img9,
    title: "Panoramic Shopping Mall Lift",
    caption: "Show-stopping design for commercial spaces.",
    details: [
      "Ambient LED lighting",
      "Touchscreen control panel",
      "Elegant panoramic glass cabin",
    ],
  },
  {
    image: img10,
    title: "Compact Dumbwaiter Lift",
    caption: "Small but mighty for service needs.",
    details: [
      "Perfect for kitchens, hotels, & libraries",
      "Low-maintenance design",
      "Safety auto-lock system",
    ],
  },
  {
    image: img11,
    title: "Eco Solar Lift",
    caption: "Green technology for sustainable buildings.",
    details: [
      "Solar-powered backup",
      "Energy-saving sleep mode",
      "Environmentally certified",
    ],
  },
  {
    image: img12,
    title: "High-Speed Office Tower Lift",
    caption: "Designed for corporate efficiency & comfort.",
    details: [
      "Fast travel up to 2.5 m/s",
      "Advanced floor-sync tech",
      "Biometric access control",
    ],
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const thumbContainerRef = useRef(null);

  useEffect(() => {
    setFadeKey((prev) => prev + 1);
  }, [activeIndex]);

  const { image, title, caption, details } = galleryItems[activeIndex];

  const scrollThumbnails = (direction) => {
    if (thumbContainerRef.current) {
      const scrollAmount = 100;
      thumbContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <HeroGallery />
      <div className="min-h-screen bg-gradient-to-br from-white to-[#f9f9f9] font-sans">
        {/* Main Gallery */}
        <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={fadeKey}
                  src={image}
                  alt={title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-xl"
                />
              </AnimatePresence>
            </div>

            {/* Text Details + Thumbnails */}
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                Project #{activeIndex + 1}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#D32F2F] mb-4">
                {title}
              </h2>
              <p className="text-gray-700 text-lg mb-6">{caption}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
                {details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4">
                <a
                  href="/services"
                  className="bg-[#2E6EB0] text-white px-6 py-2 rounded-md font-medium hover:bg-[#1d4c83] transition"
                >
                  View Services
                </a>
                <a
                  href="/contact"
                  className="bg-[#D32F2F] text-white px-6 py-2 rounded-md font-medium hover:bg-[#a81824] transition"
                >
                  Contact Us
                </a>
              </div>

              {/* Thumbnails */}
              <div className="mt-16">
                <div
                  ref={thumbContainerRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide px-1 py-4"
                  style={{ scrollBehavior: "smooth", maxWidth: "100%" }}
                >
                  {galleryItems.map((item, idx) => (
                    <motion.img
                      key={idx}
                      src={item.image}
                      alt={item.title}
                      onClick={() => setActiveIndex(idx)}
                      whileHover={{ scale: 1.05 }}
                      className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition duration-300 ${
                        activeIndex === idx
                          ? "border-[#D32F2F] scale-105 shadow-md"
                          : "border-transparent hover:border-[#2E6EB0] opacity-70 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
