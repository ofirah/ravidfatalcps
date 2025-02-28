import React from 'react';
import { Building2, Calculator, CreditCard, FileText, LineChart, Wallet } from 'lucide-react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import DigitalSolution from './components/DigitalSolution';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const services = [
    {
      title: 'מיסוי קריפטו',
      icon: <CreditCard size={48} />,
      description: 'פתרונות מיסוי מקיפים לנכסים דיגיטליים ומטבעות קריפטוגרפיים'
    },
    {
      title: 'עצמאים מיסוי יחיד',
      icon: <Wallet size={48} />,
      description: 'ייעוץ מס מותאם אישית לעצמאים ובעלי עסקים קטנים'
    },
    {
      title: 'מיסוי ותכנון פרישה',
      icon: <LineChart size={48} />,
      description: 'תכנון פיננסי לפרישה עם אופטימיזציה מיסויית'
    },
    {
      title: 'החזרי מס לשכירים',
      icon: <Calculator size={48} />,
      description: 'מיצוי זכויות והחזרי מס מקסימליים לשכירים'
    },
    {
      title: 'ליווי והקמת עסקים',
      icon: <Building2 size={48} />,
      description: 'ליווי מקצועי בהקמת עסק חדש וייעוץ מיסויי'
    },
    {
      title: 'הנהלת חשבונות דיגיטלית',
      icon: <FileText size={48} />,
      description: 'שירותי הנהלת חשבונות מתקדמים בפלטפורמה דיגיטלית'
    }
  ];

  const digitalSolutionFeatures = [
    {
      title: 'הנהלת חשבונות אונליין',
      icon: <FileText size={32} />,
      description: 'ניהול חשבונות דיגיטלי מלא עם גישה 24/7'
    },
    {
      title: 'הפקת חשבוניות',
      icon: <Calculator size={32} />,
      description: 'מערכת הפקת חשבוניות אוטומטית וקלה לשימוש'
    },
    {
      title: 'דוחות פיננסיים',
      icon: <LineChart size={32} />,
      description: 'דוחות מפורטים ותובנות עסקיות בזמן אמת'
    },
    {
      title: 'ניהול הוצאות',
      icon: <Wallet size={32} />,
      description: 'מעקב וניהול הוצאות עסקיות בקלות'
    },
    {
      title: 'התראות וחיובים',
      icon: <CreditCard size={32} />,
      description: 'התראות אוטומטיות לתשלומים ומועדי דיווח'
    },
    {
      title: 'תמיכה מקצועית',
      icon: <Building2 size={32} />,
      description: 'תמיכה אישית מצוות רואי חשבון מנוסים'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              פתרונות מיסוי <span className="text-cyan-400">מתקדמים</span> לעסקים ויחידים
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              ליווי מקצועי, אישי ודיגיטלי בכל תחומי המיסוי והחשבונאות
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
                צור קשר עכשיו
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
                השירותים שלנו
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="רואה חשבון מקצועי" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-900 mb-2">+500</p>
              <p className="text-gray-600">לקוחות מרוצים</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-900 mb-2">15+</p>
              <p className="text-gray-600">שנות ניסיון</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-900 mb-2">100%</p>
              <p className="text-gray-600">שביעות רצון</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-900 mb-2">24/7</p>
              <p className="text-gray-600">תמיכה זמינה</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">שירותי המשרד</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנו מציעים מגוון רחב של שירותי מיסוי וחשבונאות המותאמים לצרכים הייחודיים שלך
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Solution Section */}
      <DigitalSolution features={digitalSolutionFeatures} />
      
      {/* Simulators Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">סימולטורים חינמיים</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              כלים חינמיים שיעזרו לך לקבל החלטות פיננסיות מושכלות
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-10 hover:shadow-2xl transition duration-300 border border-gray-100 hover:border-cyan-200">
              <div className="bg-indigo-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Wallet className="text-indigo-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-indigo-900">סימולטור לעצמאים</h3>
              <p className="text-gray-600 mb-8 text-center">חישוב הפקדות לפנסיה וקרן השתלמות עבור עצמאים</p>
              <div className="text-center">
                <button className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300">
                  לסימולטור
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-10 hover:shadow-2xl transition duration-300 border border-gray-100 hover:border-cyan-200">
              <div className="bg-cyan-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Calculator className="text-cyan-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-indigo-900">בדיקת זכאות להחזר מס</h3>
              <p className="text-gray-600 mb-8 text-center">בדיקה מהירה לשכירים האם הם זכאים להחזרי מס</p>
              <div className="text-center">
                <button className="bg-cyan-600 text-white py-3 px-8 rounded-lg hover:bg-cyan-700 transition duration-300">
                  לבדיקה
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">מאמרים ועדכוני חקיקה</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              מידע מקצועי ועדכני בנושאי מיסוי, חשבונאות וכלכלה
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 hover:border-cyan-200">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="מאמר מיסוי" 
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-4">
                  עדכוני חקיקה
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">שינויים במיסוי עצמאים לשנת 2025</h3>
                <p className="text-gray-600 mb-6">סקירה של השינויים העיקריים במיסוי עצמאים שנכנסו לתוקף השנה</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                  קרא עוד 
                  <span className="mr-2">&larr;</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 hover:border-cyan-200">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="מאמר קריפטו" 
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-sm font-medium rounded-full mb-4">
                  מדריכים
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">מדריך למיסוי השקעות בקריפטו</h3>
                <p className="text-gray-600 mb-6">כל מה שצריך לדעת על מיסוי רווחים מהשקעות במטבעות דיגיטליים</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                  קרא עוד 
                  <span className="mr-2">&larr;</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 hover:border-cyan-200">
              <img 
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="מאמר פרישה" 
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-4">
                  תכנון פיננסי
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">אסטרטגיות מיסוי לקראת פרישה</h3>
                <p className="text-gray-600 mb-6">טיפים לתכנון פרישה חכם שיחסוך לכם אלפי שקלים במיסים</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                  קרא עוד 
                  <span className="mr-2">&larr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">מה הלקוחות אומרים עלינו</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-indigo-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-cyan-400 mr-2">★★★★★</div>
                <div className="text-gray-300 text-sm">5.0</div>
              </div>
              <p className="text-gray-300 mb-6">"שירות מקצועי ואדיב. קיבלתי ייעוץ מעולה בנושא מיסוי עסקי והצלחנו לחסוך סכום משמעותי. ממליץ בחום!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-full mr-3 flex items-center justify-center text-white font-bold">
                  א
                </div>
                <div>
                  <p className="font-bold">אבי כהן</p>
                  <p className="text-gray-400 text-sm">בעל עסק</p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-cyan-400 mr-2">★★★★★</div>
                <div className="text-gray-300 text-sm">5.0</div>
              </div>
              <p className="text-gray-300 mb-6">"הפלטפורמה הדיגיטלית מעולה ונוחה לשימוש. חוסכת לי המון זמן בניהול החשבונות של העסק. צוות התמיכה תמיד זמין לעזור."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-full mr-3 flex items-center justify-center text-white font-bold">
                  מ
                </div>
                <div>
                  <p className="font-bold">מיכל לוי</p>
                  <p className="text-gray-400 text-sm">עצמאית</p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-cyan-400 mr-2">★★★★★</div>
                <div className="text-gray-300 text-sm">5.0</div>
              </div>
              <p className="text-gray-300 mb-6">"קיבלתי החזר מס משמעותי שלא ידעתי שמגיע לי. תהליך פשוט ומהיר. שווה כל שקל!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-full mr-3 flex items-center justify-center text-white font-bold">
                  י
                </div>
                <div>
                  <p className="font-bold">יוסי אברהם</p>
                  <p className="text-gray-400 text-sm">שכיר</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactForm />
      
      <Footer />
    </div>
  );
}

export default App;