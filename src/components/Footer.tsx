
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ms. Johnson</h3>
            <p className="text-gray-400 mb-4">
              Dedicated elementary school teacher committed to creating engaging learning experiences for every student.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#philosophy" className="text-gray-400 hover:text-white transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#subjects" className="text-gray-400 hover:text-white transition-colors">Subjects</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Classroom Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Educational Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Parent Portal</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">School Calendar</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            © {new Date().getFullYear()} Ms. Johnson's Portfolio. Made with 
            <Heart size={14} className="mx-1 text-red-500" /> 
            for education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
