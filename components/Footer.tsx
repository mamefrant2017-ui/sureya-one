import React from 'react';
// Import Link component for navigation.
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center text-white mr-2">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <span className="text-xl font-bold text-white font-serif">Sureya Academy</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering the next generation of innovators through rigorous academic excellence and character development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram text-xl"></i></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link to="/courses" className="hover:text-indigo-400">Our Courses</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Admissions</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400">How to Apply</a></li>
              <li><a href="#" className="hover:text-indigo-400">Scholarships</a></li>
              <li><a href="#" className="hover:text-indigo-400">Student Life</a></li>
              <li><a href="#" className="hover:text-indigo-400">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-indigo-500 text-white"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 rounded-r-lg px-4 py-2 transition-colors">
                <i className="fas fa-paper-plane text-white"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Sureya Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;