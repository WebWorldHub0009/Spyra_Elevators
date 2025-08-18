import React, { useState } from "react";
import { FaPhoneAlt, FaEye, FaDownload } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import DocumentHero from "../Components/DocumentHero";

// Import your actual document files
import authLetter from "../assets/documents/auth.pdf";
import incorporationCert from "../assets/documents/incop.pdf";
import gstCert from "../assets/documents/gst.pdf";
import companyBoard from "../assets/documents/board.pdf";
import udyamReg from "../assets/documents/udyam1.pdf";
import annexureUdyam from "../assets/documents/udyam2.pdf";

// Updated document list for Spyra Elevators
const documents = [
  {
    id: 1,
    name: "Authorization Letter",
    description:
      "Official authorization letter empowering Spyra Elevators to represent and conduct operations as per government and industry regulations.",
    file: authLetter,
  },
  {
    id: 2,
    name: "Certificate of Incorporation",
    description:
      "Government-issued Certificate of Incorporation confirming Spyra Elevators' legal registration as a corporate entity.",
    file: incorporationCert,
  },
  {
    id: 3,
    name: "GST Certificate",
    description:
      "Our official Goods and Services Tax registration ensuring compliance with Indian taxation laws.",
    file: gstCert,
  },
  {
    id: 4,
    name: "Company Board",
    description:
      "Complete company board document containing key information about Spyra Elevators’ directors, structure, and operations.",
    file: companyBoard,
  },
  {
    id: 5,
    name: "Udyam Registration",
    description:
      "Our official Udyam Registration certificate under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India.",
    file: udyamReg,
  },
  {
    id: 6,
    name: "Annexure - Udyam Registration",
    description:
      "Annexure to our Udyam Registration providing detailed business classifications and compliance information.",
    file: annexureUdyam,
  },
];

const DocumentsPage = () => {
  const [openPdfId, setOpenPdfId] = useState(null);

  const togglePdf = (id) => {
    setOpenPdfId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <DocumentHero />

      {/* Tagline Section */}
      <section className="bg-white py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D32F2F] leading-tight mb-4">
          “Certified. Transparent. Reliable.”
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          At Spyra Elevators, every document reflects our unwavering dedication
          to quality, compliance, and trust.
        </p>
      </section>

      {/* Documents Section */}
      <section className="min-h-screen bg-gradient-to-br from-white via-[#fdf3f3] to-white px-4 py-16">
        <div
          id="docs"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10"
        >
          {documents.map(({ id, name, description, file }) => (
            <div
              key={id}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Title */}
              <div className="flex items-center gap-4 mb-4">
                <HiDocumentText className="text-[#D32F2F] text-4xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  {name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <button
                  onClick={() => togglePdf(id)}
                  className="w-full sm:w-auto flex-1 bg-[#D32F2F] hover:bg-red-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow transition"
                >
                  <FaEye />
                  {openPdfId === id ? "Hide" : "View"}
                </button>

                <a
                  href={file}
                  download
                  className="w-full sm:w-auto flex-1 border border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow"
                >
                  <FaDownload />
                  Download
                </a>
              </div>

              {/* PDF Preview */}
              {openPdfId === id && (
                <div className="mt-6">
                  <iframe
                    src={file}
                    title={name}
                    className="w-full h-96 border rounded-lg shadow-inner"
                  />
                </div>
              )}

              {/* Contact Info */}
              <div className="mt-6 pt-4 flex items-center gap-3 border-t border-gray-200">
                <FaPhoneAlt className="text-gray-600 text-lg" />
                <p className="text-gray-700 text-sm">
                  Need assistance?{" "}
                  <a
                    href="tel:+918587069355"
                    className="text-[#D32F2F] font-semibold hover:underline"
                  >
                    Call Us Now
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DocumentsPage;
