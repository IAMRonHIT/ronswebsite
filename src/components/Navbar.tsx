import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/src/components/The Ron AI Logo.png" 
              alt="Ron AI" 
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#benefits" className="nav-link">Benefits</a>
            <button className="btn-primary">Contact Us</button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-dark/95 backdrop-blur-sm rounded-lg mt-2">
            <a href="#about" className="nav-link block px-3 py-2">About</a>
            <a href="#features" className="nav-link block px-3 py-2">Features</a>
            <a href="#team" className="nav-link block px-3 py-2">Team</a>
            <a href="#benefits" className="nav-link block px-3 py-2">Benefits</a>
            <button className="btn-primary w-full mt-2">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;