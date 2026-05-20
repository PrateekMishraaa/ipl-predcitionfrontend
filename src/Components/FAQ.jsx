import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How are predictions generated?",
      a: "Our predictions are generated using statistical analysis of historical data, player performance metrics, pitch conditions, weather forecasts, and head-to-head records. All insights are for entertainment purposes only."
    },
    {
      q: "Is this a betting platform?",
      a: "No, absolutely not. IPL Insights is strictly a cricket analysis and entertainment platform. We do not promote, facilitate, or encourage any form of gambling or betting."
    },
    {
      q: "Are predictions guaranteed?",
      a: "No predictions are guaranteed. Cricket is an unpredictable sport, and our analysis is provided for entertainment and informational purposes only. Always enjoy the game responsibly."
    },
    {
      q: "How often are predictions updated?",
      a: "We update our predictions daily for each IPL match, incorporating the latest team news, player availability, and weather conditions."
    },
    {
      q: "Can I share these insights?",
      a: "Yes! Feel free to share our analysis with fellow cricket enthusiasts. We encourage responsible discussion about the sport."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left"
            >
              <span className="font-semibold text-sm md:text-base">{faq.q}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-300 text-sm">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;