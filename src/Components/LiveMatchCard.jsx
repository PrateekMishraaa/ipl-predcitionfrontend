import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTint, FaWind } from 'react-icons/fa';
import { format } from 'date-fns';

const LiveMatchCard = ({ match }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 max-w-4xl mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">{match.matchTitle}</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mt-2">
          <span className="flex items-center gap-1"><FaCalendarAlt /> {format(new Date(match.matchDate), 'PPP')}</span>
          <span className="flex items-center gap-1"><FaClock /> {match.matchTime}</span>
          <span className="flex items-center gap-1"><FaMapMarkerAlt /> {match.venue}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Teams */}
        <div className="flex justify-around items-center">
          <div className="text-center">
            <div className="text-2xl font-bold">{match.team1.name}</div>
            <div className="text-xs text-gray-400 mt-2">Recent: {match.team1.recentForm.join(', ')}</div>
          </div>
          <div className="text-xl font-bold text-primary">VS</div>
          <div className="text-center">
            <div className="text-2xl font-bold">{match.team2.name}</div>
            <div className="text-xs text-gray-400 mt-2">Recent: {match.team2.recentForm.join(', ')}</div>
          </div>
        </div>

        {/* Toss Prediction */}
        <div className="bg-white/5 rounded-xl p-4">
          <h4 className="font-semibold mb-3 text-primary">Toss Prediction</h4>
          <div className="text-center mb-3">
            <div className="text-xl font-bold">{match.tossPrediction.team}</div>
            <div className="text-sm text-gray-400">{match.tossPrediction.probability}% probability based on trends</div>
          </div>
          <p className="text-xs text-gray-300">{match.tossPrediction.analysis}</p>
        </div>
      </div>

      {/* Match Insight */}
      <div className="mt-6 p-4 bg-white/5 rounded-xl">
        <h4 className="font-semibold mb-3 text-accent">Match Insight</h4>
        <p className="text-sm text-gray-300 mb-4">{match.matchInsight.summary}</p>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span>Win Probability:</span>
            <div className="flex-1 mx-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                style={{ width: `${match.matchInsight.winProbability.team1}%` }}
              />
            </div>
            <span className="text-xs">
              {match.matchInsight.winProbability.team1}% - {match.matchInsight.winProbability.team2}%
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {match.matchInsight.keyFactors.map((factor, idx) => (
              <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-full">{factor}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Weather & Pitch */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-white/5 rounded-xl">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm"><FaTint /> Weather Overview</h4>
          <p className="text-sm">{match.weather.condition}, {match.weather.temperature}</p>
          <p className="text-xs text-gray-400 mt-1">{match.weather.impact}</p>
        </div>
        <div className="p-4 bg-white/5 rounded-xl">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm"><FaWind /> Pitch Report</h4>
          <p className="text-sm">{match.pitchReport.condition}</p>
          <p className="text-xs text-gray-400 mt-1">Average Score: {match.pitchReport.averageScore} runs</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>* Predictions are based on statistical analysis and are for entertainment purposes only.</p>
        <p className="mt-1">No betting or gambling services are provided.</p>
      </div>
    </motion.div>
  );
};

export default LiveMatchCard;