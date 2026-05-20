import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | IPL Insights</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
        <div className="glass-card p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-300 text-sm md:text-base">We collect information you provide directly to us, such as when you subscribe to our newsletter or contact us. This may include your name, email address, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 text-sm md:text-base">We use the information we collect to provide, maintain, and improve our services, to communicate with you about updates and announcements, and to comply with legal obligations.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-300 text-sm md:text-base">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-300 text-sm md:text-base">We use cookies and similar tracking technologies to track activity on our platform and hold certain information to improve user experience.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 text-sm md:text-base">If you have any questions about this Privacy Policy, please contact us at privacy@iplinsights.com</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;