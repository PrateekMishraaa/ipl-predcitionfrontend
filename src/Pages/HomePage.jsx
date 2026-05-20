import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import LiveMatchCard from '../components/LiveMatchCard';
import TeamCard from '../components/TeamCard';
import StatsChart from '../components/StatsChart';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import CountdownTimer from '../components/CountdownTimer';
import { samplePrediction, sampleTeams } from '../data/sampleData';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>IPL Toss & Match Insights | Cricket Analysis Platform</title>
        <meta name="description" content="Get data-driven IPL match insights, toss analysis, and cricket statistics. Entertainment-based predictions powered by analytics." />
        <meta name="keywords" content="IPL predictions, cricket analysis, toss insights, match statistics" />
        <meta property="og:title" content="IPL Toss & Match Insights" />
        <meta property="og:description" content="Professional cricket analysis platform" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">IPL Toss & Match Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Daily cricket analysis, toss trends, and match predictions powered by stats and recent performance.
              Entertainment-based insights for cricket enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                onClick={() => document.getElementById('matches')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Today's Prediction
              </motion.button>
              <motion.a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Join WhatsApp Channel
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Match Cards */}
      <section id="matches" className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Today's <span className="gradient-text">Match Analysis</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <LiveMatchCard match={samplePrediction} />
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: 'Data-Driven Analysis', icon: '📊', desc: 'Statistical insights based on historical data' },
            { title: 'Daily Updates', icon: '🔄', desc: 'Fresh predictions for every match' },
            { title: 'Mobile-Friendly', icon: '📱', desc: 'Access insights on any device' },
            { title: 'Fast Insights', icon: '⚡', desc: 'Real-time match analysis' },
            { title: 'Expert Research', icon: '🎯', desc: 'Professional cricket analysis' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IPL Teams Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          IPL <span className="gradient-text">Teams</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {sampleTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>

      {/* Stats & Analytics */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Stats & <span className="gradient-text">Analytics</span>
        </h2>
        <StatsChart />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Countdown Timer */}
      <CountdownTimer nextMatchDate={samplePrediction.matchDate} />
    </>
  );
};

export default HomePage;