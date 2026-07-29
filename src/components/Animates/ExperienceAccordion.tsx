import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

const ExperienceAccordion = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const experiences = [
    {
      id: uuidv4(),
      title: 'Backend Developer - Recipe Web Platform',
      date: '2023 FEB - 2024 FEB',
      description: 'Spearheaded the backend development of a recipe web platform using a robust dual-framework architecture with **Laravel** and **Django REST Framework**, powered by a **PostgreSQL** database. Engineered video mirroring functionality by integrating the YouTube API, and built a real-time comment system to foster user engagement. Architected a scalable and reliable infrastructure by containerizing the application with **Docker** and implementing **Celery** for efficient asynchronous task processing. Deployed the entire system on **Amazon Web Services (AWS)** to ensure high availability and performance. Maintained clean, maintainable code by applying software design patterns throughout the development lifecycle, utilizing **Git** for version control and **JIRA** for agile project tracking and sprint management.',
      achievements: [
        "Integrated YouTube API for seamless video mirroring and content management",
        "Implemented a dynamic comment system to boost user engagement",
        "Designed and deployed a secure authentication system with Role-Based Access Control (Admin/User)",
        "Built scalable RESTful APIs using Django REST Framework and Laravel"
      ]
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto p-4">
      {experiences.map((exp) => {
        const isExpanded = expandedId === exp.id;

        return (
          <div 
            key={exp.id} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleExpand(exp.id)}
              className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {exp.date}
                </p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700/50">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  {exp.description}
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceAccordion;