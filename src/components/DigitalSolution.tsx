import React from 'react';

interface DigitalSolutionFeature {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface DigitalSolutionProps {
  features: DigitalSolutionFeature[];
}

const DigitalSolution: React.FC<DigitalSolutionProps> = ({ features }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">פתרון דיגיטלי מושלם לניהול העסק שלך</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            אפליקציה מתקדמת המאפשרת ניהול פיננסי מלא של העסק בכל זמן ומכל מקום
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-indigo-800/50 backdrop-blur-sm rounded-lg p-8 hover:bg-indigo-800 transition duration-300 border border-indigo-700 hover:border-cyan-500">
              <div className="bg-indigo-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <div className="text-cyan-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-4 text-center text-white">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 text-lg">
            הצטרף עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalSolution;