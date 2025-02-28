import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-900">רואה חשבון ישראלי</h1>
          </div>
          
          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center text-gray-600 ml-auto mr-10 space-x-6">
            <div className="flex items-center">
              <Phone size={18} className="ml-2 text-indigo-600" />
              <span className="font-medium">03-1234567</span>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="ml-2 text-indigo-600" />
              <span className="font-medium">info@israelicpa.co.il</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 ml-8 font-medium">דף הבית</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 ml-8 font-medium">שירותים</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 ml-8 font-medium">סימולטורים</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 ml-8 font-medium">מאמרים</a>
            <a href="#" className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium">צור קשר</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Phone size={18} className="ml-2 text-indigo-600" />
                <span className="font-medium">03-1234567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={18} className="ml-2 text-indigo-600" />
                <span className="font-medium">info@israelicpa.co.il</span>
              </div>
            </div>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">דף הבית</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">שירותים</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">סימולטורים</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">מאמרים</a>
              <a href="#" className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 inline-block w-max font-medium">צור קשר</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;