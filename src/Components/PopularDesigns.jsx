import React from "react";
import img1 from "../assets/images/elevators/l1.jpg";
import img2 from "../assets/images/elevators/l2.jpg";
import img3 from "../assets/images/elevators/l3.jpg";
import img4 from "../assets/images/elevators/l4.jpg";
import img5 from "../assets/images/elevators/l5.jpg";
import img6 from "../assets/images/elevators/l6.jpg";

const designs = [
  {
    title: "Passenger Elevator",
    image: img1,
    description:
      "Smooth, silent, and safe – Spyra’s passenger elevators deliver unmatched comfort, advanced control systems, and superior reliability.",
  },
  {
    title: "Capsule Elevator",
    image: img2,
    description:
      "A statement of luxury — capsule lifts with panoramic glass, silent operation, and premium aesthetics for modern spaces.",
  },
  {
    title: "Hydraulic Elevator",
    image: img3,
    description:
      "Perfect for low-rise buildings — hydraulic lifts provide smooth operation, space efficiency, and high load capacity.",
  },
  {
    title: "Freight & Industrial Lift",
    image: img4,
    description:
      "Engineered for heavy-duty performance, our freight lifts handle tough industrial transport with strength and safety.",
  },
  {
    title: "Luxury Glass Elevator",
    image: img5,
    description:
      "Stylish and functional — glass elevators from Spyra add elegance while maintaining exceptional performance.",
  },
  {
    title: "Service & Dumbwaiter",
    image: img6,
    description:
      "Reliable and efficient material transport for hotels, hospitals, and restaurants — designed for speed and safety.",
  },
];

const PopularDesigns = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#f8fafc] to-[#eef2f7] px-4 lg:px-16 py-20">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-[#DB202F] uppercase relative inline-block after:content-[''] after:w-16 after:h-1 after:bg-[#DB202F] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2">
          Popular Designs
        </h2>
        <p className="text-[#444] max-w-xl mx-auto mt-4 text-lg font-medium">
          Explore Spyra Elevators’ most in-demand designs, blending safety,
          technology, and aesthetics for every building type.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {designs.map((design, index) => (
          <div
            key={index}
            className={`relative h-[500px] w-full overflow-hidden shadow-lg rounded-xl group transition-all duration-500 border border-[#d4d8e2] ${
              index % 3 === 1
                ? "md:mt-20"
                : index % 3 === 2
                ? "md:mt-40"
                : "md:mt-0"
            }`}
          >
            {/* Image */}
            <img
              src={design.image}
              alt={design.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Text */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-6 
                opacity-100 md:opacity-0 md:group-hover:opacity-100 
                bg-transparent md:bg-[#000000b0] transition-all duration-500"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md mb-2">
                {design.title}
              </h3>
              <p className="text-sm text-white drop-shadow-md">
                {design.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDesigns;
