import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    img: "./feature-2.png",
    title: "FAST DELIVERY",
    desc: "Get your orders delivered quickly with our optimized logistics and express shipping options.",
  },
  {
    img: "./feature-2.png",
    title: "FREE SHIPPING",
    desc: "Enjoy free shipping on all orders with no hidden charges or extra fees.",
  },
  {
    img: "./feature-3.png",
    title: "BEST QUALITY",
    desc: "We ensure the highest quality standards for all our products, backed by expert craftsmanship and rigorous testing.",
  },
  {
    img: "./feature-4.png",
    title: "24X7 SUPPORT",
    desc: "Our customer support team is available round the clock to assist you with any queries or issues.",
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-black py-16 text-center border-t border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide uppercase">
        Our Services
      </h2>

      {/* Flex Container */}
      <div className="flex justify-center gap-8 px-6 md:px-20 flex-col items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-full sm:w-[45%] md:w-[70%] p-6 bg-gray-900 rounded-xl shadow-lg transition-all hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            <img src={service.img} alt={service.title} className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
