import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | IPL Insights</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Terms & Conditions</h1>
        <div className="glass-card p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300 text-sm md:text-base">By accessing and using IPL Insights, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, please do not use our platform.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">User Conduct</h2>
            <p className="text-gray-300 text-sm md:text-base">You agree to use our platform for lawful purposes only. You must not:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm md:text-base">
              <li>Use the platform for any gambling or betting activities</li>
              <li>Misrepresent or manipulate predictions or data</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-300 text-sm md:text-base">All content, features, and functionality on IPL Insights are owned by us and are protected by copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 text-sm md:text-base">IPL Insights shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-300 text-sm md:text-base">We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-gray-300 text-sm md:text-base">These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;