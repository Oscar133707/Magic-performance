import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-extrabold tracking-tighter uppercase mb-6">
              Magic<span className="text-[#14a2ff]">.</span>Performance
            </h3>
            <p className="text-gray-600 max-w-sm mb-6 font-light leading-relaxed">
              Elite-level strength and conditioning coaching backed by scientific rigor. 
              Serving dedicated athletes who demand measurable results.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#14a2ff] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-[#14a2ff] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-[#14a2ff] transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:contact@magicperformance.com" className="text-gray-500 hover:text-[#14a2ff] transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#14a2ff]">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-black transition-colors">Services</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-black transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#14a2ff]">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Waiver</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Magic Performance. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;