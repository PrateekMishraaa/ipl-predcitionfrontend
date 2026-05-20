import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappNumber = "91XXXXXXXXXX"; // Replace with your WhatsApp number
  
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=Hi!%20I%20want%20to%20join%20IPL%20updates`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        boxShadow: ["0 0 0 0 rgba(34,197,94,0.7)", "0 0 0 20px rgba(34,197,94,0)"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Join WhatsApp Updates
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;