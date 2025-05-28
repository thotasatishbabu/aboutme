import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2020 - Present',
      title: 'Lead Solutions Architect',
      company: 'TechForward Inc.',
      location: 'San Francisco, CA',
      description: 'Leading the architecture and design of enterprise-level solutions for Fortune 500 clients.',
      achievements: [
        'Designed and implemented a microservices architecture that reduced system latency by 40%',
        'Led a team of 12 engineers across 3 international offices',
        'Introduced DevOps practices that cut deployment time by 60%',
        'Architected cloud migration strategy resulting in 30% cost reduction'
      ]
    },
    {
      period: '2017 - 2020',
      title: 'Senior Full Stack Developer',
      company: 'InnovateTech Solutions',
      location: 'Seattle, WA',
      description: 'Developed robust web applications and services for clients in healthcare and finance sectors.',
      achievements: [
        'Built and deployed a HIPAA-compliant patient management system',
        'Optimized database queries resulting in 50% faster application performance',
        'Implemented CI/CD pipeline reducing release cycles from weeks to days',
        'Mentored junior developers and led technical knowledge sharing sessions'
      ]
    },
    {
      period: '2014 - 2017',
      title: 'Backend Developer',
      company: 'DataDriven Systems',
      location: 'Boston, MA',
      description: 'Developed scalable backend services and APIs for data-intensive applications.',
      achievements: [
        'Created RESTful APIs serving 10M+ daily requests',
        'Implemented data processing pipelines handling 5TB of daily data',
        'Reduced server costs by 35% through optimization',
        'Integrated machine learning models for predictive analytics'
      ]
    },
    {
      period: '2012 - 2014',
      title: 'Software Engineer',
      company: 'StartUp Innovations',
      location: 'Austin, TX',
      description: 'Worked as a full-stack developer for an early-stage startup building user-facing applications.',
      achievements: [
        'Developed frontend interfaces using Angular and backend services with Node.js',
        'Implemented authentication and authorization systems',
        'Optimized application performance and user experience',
        'Collaborated with UX designers to implement responsive designs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            My professional journey spanning over a decade in the tech industry.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-slate-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-800 z-10"></div>
                
                {/* Date on mobile */}
                <div className="md:hidden bg-blue-100 dark:bg-slate-700 text-blue-800 dark:text-blue-200 px-4 py-1 rounded-full mb-4 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  {/* Date on desktop */}
                  <div className={`hidden md:flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}>
                    <Calendar size={16} className={index % 2 === 0 ? 'ml-2' : 'mr-2'} />
                    {exp.period}
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex items-center mb-4 text-slate-600 dark:text-slate-300">
                      <Briefcase size={16} className="mr-2" />
                      <span>{exp.company}, {exp.location}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for opposite side */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;