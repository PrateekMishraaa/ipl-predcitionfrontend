import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ nextMatchDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const matchTime = new Date(nextMatchDate).getTime();
      const difference = matchTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (86400000)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (3600000)) / (1000 * 60)),
          seconds: Math.floor((difference % (60000)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextMatchDate]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="glass-card p-6 max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">Next Match Countdown</h3>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <motion.div
                key={value}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-2xl md:text-3xl font-bold text-primary"
              >
                {value}
              </motion.div>
              <div className="text-xs text-gray-400 capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;