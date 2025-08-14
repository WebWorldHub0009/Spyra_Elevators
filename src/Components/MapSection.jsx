import React from "react";

const MapSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 text-black py-20 px-4 lg:px-24 font-sans border-t border-gray-300">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E30613] mb-3">
          Locate Us on the Map
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Visit{" "}
          <span className="font-semibold text-black">
            Spyra Elevators Private Limited
          </span>{" "}
          at our official office location in Aligarh, Uttar Pradesh.
        </p>
      </div>

      <div className="w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden shadow-xl border border-gray-300">
        <iframe
          title="Spyra Elevators Location"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112818.65943833903!2d78.01440496544966!3d27.91476398753197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3974a55b7ea5c7ad%3A0x28a28519fa7bd447!2sQuarsi%20ByPass%20Road%2C%20Shop%20No.B-7%20Ground%20Floor%20Lifestyle%20Commercial%20Complex%2C%20opposite%20trendy%20Wear%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!3m2!1d27.9147885!2d78.09680639999999!5e0!3m2!1sen!2sin!4v1755188544320!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
