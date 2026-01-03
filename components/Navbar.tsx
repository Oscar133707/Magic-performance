import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Services', path: '/services' },
  ];

  // Text color logic: White if on Home AND not scrolled, otherwise Black
  const getTextColor = () => {
    if (isOpen) return 'text-black'; // Mobile menu always black text
    if (isHome && !scrolled) return 'text-white';
    return 'text-black';
  };

  const getHoverColor = () => {
    if (isHome && !scrolled) return 'group-hover:text-[#14a2ff]';
    return 'group-hover:text-[#14a2ff]';
  };

  const textColorClass = getTextColor();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Left Side */}
        <Link to="/" className={`text-2xl font-extrabold tracking-tighter uppercase z-50 group ${textColorClass} transition-colors duration-300`}>
          Magic<span className="text-[#14a2ff] transition-transform duration-300 group-hover:scale-150 inline-block">.</span>Performance
        </Link>

        {/* Right Side - Nav Links and Contact Button */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Desktop Nav Links */}
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-bold tracking-wide uppercase transition-colors duration-300 relative group ${textColorClass}`}
              >
                <span className={getHoverColor()}>{link.name}</span>
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14a2ff] transition-all duration-300 group-hover:w-full ${location.pathname === link.path && !isHome ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link 
            to="/contact" 
            className="bg-[#14a2ff] hover:bg-[#1189E6] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-[4px] transition-all duration-300 shadow-lg hover:shadow-[#14a2ff]/40 hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden z-50 p-2 transition-colors ${textColorClass} hover:text-[#14a2ff]`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 cubic-bezier(0.77,0,0.175,1) ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center space-y-8`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-3xl font-black tracking-tighter uppercase hover:text-[#14a2ff] transition-colors ${location.pathname === link.path ? 'text-[#14a2ff]' : 'text-black'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-[#14a2ff] text-white text-lg font-bold uppercase tracking-widest px-10 py-4 rounded-[4px] mt-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;