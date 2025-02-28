import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6 border-r-4 border-cyan-500 pr-4">רואה חשבון ישראלי</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              פתרונות מיסוי מתקדמים לעסקים ויחידים. ליווי מקצועי, אישי ודיגיטלי בכל תחומי המיסוי והחשבונאות.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-indigo-800 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-indigo-800 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-indigo-800 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-indigo-800 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-r-4 border-cyan-500 pr-4">שירותים</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">מיסוי קריפטו</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">עצמאים מיסוי יחיד</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">מיסוי ותכנון פרישה</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">החזרי מס לשכירים</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">ליווי והקמת עסקים</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">הנהלת חשבונות דיגיטלית</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-r-4 border-cyan-500 pr-4">קישורים מהירים</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">דף הבית</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">אודות</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">שירותים</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">סימולטורים</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">מאמרים</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 block">צור קשר</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-r-4 border-cyan-500 pr-4">צור קשר</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-start">
                <span className="ml-2 text-cyan-500">&#9679;</span>
                רחוב הרצל 123, תל אביב
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="ml-2 text-cyan-500">&#9679;</span>
                טלפון: 03-1234567
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="ml-2 text-cyan-500">&#9679;</span>
                פקס: 03-7654321
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="ml-2 text-cyan-500">&#9679;</span>
                אימייל: info@israelicpa.co.il
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} רואה חשבון ישראלי. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;