import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white">Onkar Mahamuni</h3>
            <p className="mt-2">Innovation through technology</p>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-teal-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-teal-400 transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Onkar Mahamuni. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;