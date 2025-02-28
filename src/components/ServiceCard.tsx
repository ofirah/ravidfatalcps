import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100 hover:border-cyan-200 group">
      <div className="bg-indigo-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-all duration-300">
        <div className="text-indigo-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-center text-indigo-900">{title}</h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <div className="text-center">
        <button className="text-indigo-600 font-medium hover:text-indigo-800 border-b-2 border-transparent hover:border-indigo-600 transition duration-300 pb-1 group-hover:border-indigo-600">
          קרא עוד
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;