import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { motion } from 'framer-motion';
import { tossTrendsData, venueStats } from '../data/sampleData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: 'white', font: { size: 12 } }
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-center">Toss Win Trends</h3>
        <div className="h-64">
          <Bar data={tossTrendsData} options={options} />
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">Last 2 seasons data</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-center">Venue Scoring Patterns</h3>
        <div className="h-64">
          <Bar data={venueStats} options={options} />
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">Average first innings score</p>
      </motion.div>
    </div>
  );
};

export default StatsChart;