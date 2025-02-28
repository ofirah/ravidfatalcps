import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">צור קשר</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            נשמח לענות על כל שאלה ולהציע פתרונות מותאמים אישית לצרכים שלך
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            <div className="bg-indigo-900 text-white p-10 md:w-1/3">
              <h3 className="text-2xl font-bold mb-8">פרטי התקשרות</h3>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Phone size={20} className="ml-3 text-cyan-400" />
                  <span className="text-lg">טלפון</span>
                </div>
                <p className="text-lg font-light">03-1234567</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Mail size={20} className="ml-3 text-cyan-400" />
                  <span className="text-lg">אימייל</span>
                </div>
                <p className="text-lg font-light">info@israelicpa.co.il</p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <MapPin size={20} className="ml-3 text-cyan-400" />
                  <span className="text-lg">כתובת</span>
                </div>
                <p className="text-lg font-light">רחוב הרצל 123, תל אביב</p>
              </div>
            </div>
            
            <div className="p-10 md:w-2/3">
              <h3 className="text-2xl font-bold mb-8 text-indigo-900">השאירו פרטים ונחזור אליכם בהקדם</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">שם מלא</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="הכנס את שמך המלא"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">טלפון</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="הכנס את מספר הטלפון שלך"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">אימייל</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="הכנס את כתובת האימייל שלך"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">נושא</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">בחר נושא</option>
                    <option value="crypto">מיסוי קריפטו</option>
                    <option value="individual">מיסוי יחיד</option>
                    <option value="retirement">תכנון פרישה</option>
                    <option value="refund">החזרי מס</option>
                    <option value="business">הקמת עסק</option>
                    <option value="accounting">הנהלת חשבונות</option>
                  </select>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">הודעה</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="כתוב את הודעתך כאן"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  שלח הודעה
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;