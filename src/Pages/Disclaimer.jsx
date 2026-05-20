import React from 'react';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | IPL Insights</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Disclaimer</h1>
        <div className="glass-card p-6 md:p-8 space-y-6">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <p className="text-yellow-400 font-semibold">Important Notice:</p>
            <p className="text-gray-300 mt-2 text-sm md:text-base">This platform does not provide gambling, betting, or casino services. All content is for entertainment and informational purposes only.</p>
          </div>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Entertainment Purpose Only</h2>
            <p className="text-gray-300 text-sm md:text-base">All predictions, analysis, and insights provided on IPL Insights are based on statistical data, historical performance, and expert opinions. These are for entertainment purposes only and should not be considered as financial or betting advice.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">No Guarantees</h2>
            <p className="text-gray-300 text-sm md:text-base">Cricket is an unpredictable sport, and we do not guarantee the accuracy of any predictions or analysis provided. Users are advised to enjoy the sport responsibly.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Responsible Usage</h2>
            <p className="text-gray-300 text-sm md:text-base">We strongly encourage responsible consumption of sports content. Do not engage in any form of gambling or betting activities based on our content.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">External Links</h2>
            <p className="text-gray-300 text-sm md:text-base">Our platform may contain links to external websites. We are not responsible for the content or practices of these websites.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;