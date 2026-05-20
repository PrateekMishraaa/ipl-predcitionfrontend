import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/sampleData';

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="gradient-text">Users Say</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6"
          >
            <FaQuoteLeft className="text-primary/30 text-2xl mb-4" />
            <p className="text-gray-300 text-sm mb-4">"{testimonial.text}"</p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-xs text-gray-400">{testimonial.role}</p>
              </div>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  i < testimonial.rating ? <FaStar key={i} size={14} /> : <FaStarHalfAlt key={i} size={14} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;