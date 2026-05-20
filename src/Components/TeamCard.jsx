import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ team }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-4 text-center cursor-pointer transition-all"
    >
      <div className="text-5xl mb-3">{team.logo}</div>
      <h3 className="font-bold text-lg">{team.name}</h3>
      <p className="text-xs text-gray-400">{team.shortName}</p>
      <div className="mt-2 text-xs">
        <span className="text-primary">🏆 {team.championships} titles</span>
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Form: {team.recentForm}
      </div>
    </motion.div>
  );
};

export default TeamCard;