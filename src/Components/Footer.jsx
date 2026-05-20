import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darker/90 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">IPL Insights</h3>
            <p className="text-gray-400 text-sm">
              Your trusted platform for IPL match analysis and cricket insights. 
              Predictions are for entertainment purposes only.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Home</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-primary">Disclaimer</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-400 hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaEnvelope />
              <span className="text-sm">support@iplinsights.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-xs">
            © 2024 IPL Insights. All rights reserved. 
            This platform does not promote or facilitate gambling or betting.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;