import React from 'react';
import { Server, Code, Database, Cloud, PieChart, FileCode, Globe, Lock } from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: Skill[] = [
    {
      category: 'Backend Development',
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['Node.js', 'Python', 'Java', 'Go'],
    },
    {
      category: 'Frontend Development',
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['React', 'TypeScript', 'Vue.js', 'Angular'],
    },
    {
      category: 'Database Technologies',
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      category: 'Data Analytics',
      icon: <PieChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['SQL', 'Power BI', 'Python (Pandas)', 'Data Visualization'],
    },
    {
      category: 'Architecture',
      icon: <FileCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['Microservices', 'API Design', 'System Design', 'Performance Optimization'],
    },
    {
      category: 'Web Technologies',
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['RESTful APIs', 'GraphQL', 'WebSockets', 'Progressive Web Apps'],
    },
    {
      category: 'Security',
      icon: <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['OAuth/OIDC', 'Penetration Testing', 'Secure Coding', 'Encryption'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            A comprehensive overview of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-50 dark:hover:bg-slate-700 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3 p-3 bg-blue-100 dark:bg-slate-600 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-slate-500 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center text-slate-700 dark:text-slate-300 py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 group-hover:bg-white dark:group-hover:bg-slate-600 transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;