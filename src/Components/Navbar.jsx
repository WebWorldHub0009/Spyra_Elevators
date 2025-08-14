import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logonew.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
    { name: "Our Certificates", path: "/documents" },
  ];

  return (
    <header className="w-full top-0 left-0 z-50 shadow-md relative">
      {/* Top Info Bar */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 px-4 md:px-12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 text-center">
        <div className="space-x-2 sm:space-x-4">
          <span>📞 +91 9350242481</span>
          <span>📞 +91 8587069355</span>
          <span>📧 spyraelevators@gmail.com</span>
          <span>📧 info@spyraelevators.com</span>
        </div>
        <div className="hidden lg:flex space-x-4 text-[10px] sm:text-sm">
          <span>GSTIN: #######</span>
          <span>UDYAM: #######</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:px-6">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Spyra Elevators Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-black hover:text-[#E30613] transition-all duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            {/* Get Enquiry Button */}
            <Link
              to="/contact"
              className="ml-6 bg-[#E30613] text-white py-2 px-5 rounded-md font-semibold hover:bg-red-800 transition"
            >
              Get Enquiry
            </Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <button onClick={() => setIsOpen(true)} className="md:hidden ml-3">
            <Menu size={24} color="#E30613" />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Row */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src={logo} alt="Spyra Elevators Logo" className="h-8" />
          <button onClick={() => setIsOpen(false)}>
            <X size={24} color="#E30613" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-4 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-[#E30613] font-medium text-base"
            >
              {link.name}
            </Link>
          ))}

          {/* Enquiry Button */}
          <Link
            to="/contact"
            className="mt-6 inline-block bg-[#E30613] text-white py-2 px-6 rounded-md text-center font-semibold hover:bg-red-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Get Enquiry
          </Link>

          {/* Certifications Section */}
          <div className="mt-10 text-xs text-gray-700 border-t pt-4 space-y-2">
            <p>
              <span className="font-semibold text-[#E30613]">GSTIN:</span>{" "}
              #######
            </p>
            <p>
              <span className="font-semibold text-[#E30613]">UDYAM:</span>{" "}
              #######
            </p>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
