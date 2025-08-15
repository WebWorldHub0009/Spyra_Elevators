import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import logo from "../assets/images/logonew.png";
import footerBg from "../assets/images/bg.avif"; // ✅ Your background image

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative text-gray-800 px-6 md:px-16 pt-20 pb-10 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-2]"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#ffffff62] z-[-1]" />

      {/* Glowing Accents */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-red-700 blur-[130px] opacity-20 rounded-full -z-10" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-red-700 blur-[150px] opacity-20 rounded-full -z-10" />

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm z-10 relative">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <img src={logo} alt="Spyra Elevators Logo" className="w-[120px] md:w-[200px] h-[45px] md:h-[70px]" />
          <h4 className="text-gray-900 font-semibold mb-2">About Spyra Elevators</h4>
          <p className="leading-relaxed">
            Spyra Elevators Private Limited is a trusted name in elevator services, 
            specializing in maintenance, repair, and modernization. Since 2020, 
            we have been serving Aligarh, Delhi, Noida, Gurugram, and Ghaziabad, 
            delivering safety, reliability, and excellence in every project.
          </p>
          <div className="mt-4">
            <a
              href="https://www.justdial.com/Aligarh/Spyra-Elevators-Opposite-Trendy-Wear/9999PX571-X571-240808210201-Z4Z3_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-red-700 text-red-700 rounded hover:bg-red-700 hover:text-white transition duration-300 text-sm font-medium"
            >
              Find Us on Justdial
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact"],
              ["Our Certificates", "/documents"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link to={link} className="hover:text-red-700 transition duration-300">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-gray-900 font-semibold">Emails</h4>
          <ul className="mt-2 space-y-2">
            {["spyraelevators304@gmail.com", "info@spyraelevators.com"].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-red-700 transition duration-300"
                >
                  <FaEnvelope className="text-red-700" /> <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            {[
              "Passenger Elevators",
              "Goods & Freight Elevators",
              "Hospital Elevators",
              "Hydraulic Elevators",
              "Home Elevators",
              "MRL (Machine Room-Less) Elevators",
              "Capsule Elevators",
              "Elevator Maintenance",
              "Elevator Modernization",
            ].map((svc, i) => (
              <li key={i}>
                <Link to="/services" className="hover:text-red-700 transition duration-300">
                  {svc}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Socials */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Our Address</h4>
          <address className="not-italic leading-relaxed mb-4">
            Quarsi ByPass Road,<br />
            Shop No. B-7, Ground Floor,<br />
            Lifestyle Commercial Complex,<br />
            Opposite Trendy Wear,<br />
            Aligarh, Uttar Pradesh – 202001, India
          </address>

          <div className="flex -ml-24 md:ml-0">
            <Translator className="mb-4" />
            <div className="w-18"></div>
          </div>

          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-700 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-700 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-700 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-700 transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-700 transition"
            >
              <FaSearchLocation size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-300 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Spyra Elevators Private Limited. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red-700 hover:text-blue-500 transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
