// src/components/WhyChooseSpyra.jsx
import { motion } from "framer-motion";
import {
  FaCogs,
  FaUsers,
  FaWrench,
  FaShieldAlt,
  FaRegThumbsUp,
  FaTools,
} from "react-icons/fa";
import bgImage from "../assets/images/bg2.jpg"; // Background image

const features = [
  {
    title: "Expert Elevator Engineers",
    description:
      "Our certified engineers bring precision and expertise to every installation, maintenance, and repair project — ensuring smooth, safe, and efficient elevator operations.",
    icon: <FaUsers size={22} />,
    align: "left",
  },
  {
    title: "Uncompromising Safety",
    description:
      "We follow stringent safety protocols and use top-quality components to meet international safety standards for every elevator we service or install.",
    icon: <FaShieldAlt size={22} />,
    align: "right",
  },
  {
    title: "Tailored Elevator Solutions",
    description:
      "From luxury residential complexes to heavy-duty freight systems, we design elevators to match your building’s functionality, aesthetics, and passenger flow.",
    icon: <FaTools size={22} />,
    align: "left",
  },
  {
    title: "On-Time Project Delivery",
    description:
      "Our streamlined installation process ensures your project is completed on or before the deadline, minimizing downtime without compromising quality.",
    icon: <FaWrench size={22} />,
    align: "right",
  },
  {
    title: "24/7 Customer Assistance",
    description:
      "Our support team is available around the clock for emergency services, technical queries, or regular maintenance scheduling — your safety is our priority.",
    icon: <FaCogs size={22} />,
    align: "left",
  },
  {
    title: "Trusted Across 25+ Cities",
    description:
      "With over 1200+ lifts installed and 650+ projects completed, Spyra Elevators is a name recognized for quality, trust, and customer satisfaction.",
    icon: <FaRegThumbsUp size={22} />,
    align: "right",
  },
];

const WhyChooseSpyra = () => {
  return (
    <section
      className="relative pt-48 pb-24 px-4 overflow-visible bg-center bg-no-repeat bg-cover md:bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#00000038] bg-opacity-70 z-0" />

      {/* Vertical Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 border-l-2 border-dotted border-red-600 z-10"
      />

      {/* Top Circular Badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-gradient-to-tr from-red-600 to-black flex items-center justify-center text-white shadow-xl text-xl font-semibold z-20"
      >
        <div className="text-center">
          <div className="text-4xl mb-1 flex justify-center">
            <FaCogs />
          </div>
          Our Edge
        </div>
      </motion.div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-20">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-20">
          Why Choose Spyra Elevators?
        </h2>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid gap-y-10 md:gap-y-8"
        >
          {features.map((item, idx) => {
            const isLeft = item.align === "left";
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 items-center"
              >
                <div
                  className={`flex ${
                    isLeft
                      ? "justify-start md:col-start-1"
                      : "justify-end md:col-start-2"
                  }`}
                >
                  <div className="relative bg-white rounded-2xl shadow-lg px-7 py-6 w-full max-w-[500px] md:max-w-[580px] hover:scale-[1.03] transition-all duration-300 border border-red-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-red-600 to-black p-3 rounded-full text-white shadow-lg ring-4 ring-white">
                        {item.icon}
                      </div>
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-red-600 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSpyra;
