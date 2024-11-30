import React from 'react';
import { Brain, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001f3f]/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-[#39CCCC]" />
              <span className="ml-2 text-xl font-bold">Ron AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming healthcare through intelligent automation and AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#39CCCC] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#39CCCC] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#39CCCC] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#39CCCC] transition-colors">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-[#39CCCC] transition-colors">Features</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[#39CCCC] transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#39CCCC] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@ronai.com</li>
              <li>1-800-RON-AI-00</li>
              <li>123 AI Street</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ron AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;