import React from 'react';
import { Server, Code, Database, Cloud, PieChart, FileCode, Globe, Lock } from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: Skill[] = [
    {
      category: 'Backend Development',
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Go', level: 75 },
      ],
    },
    {
      category: 'Frontend Development',
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'C++'},
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 80 },
        { name: 'Angular', level: 75 },
      ],
    },
    {
      category: 'Database Technologies',
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Elasticsearch', level: 75 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'CI/CD', level: 85 },
      ],
    },
    {
      category: 'Data Analytics',
      icon: <PieChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'Power BI', level: 80 },
        { name: 'Python (Pandas)', level: 85 },
        { name: 'Data Visualization', level: 85 },
      ],
    },
    {
      category: 'Architecture',
      icon: <FileCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'Microservices', level: 90 },
        { name: 'API Design', level: 95 },
        { name: 'System Design', level: 85 },
        { name: 'Performance Optimization', level: 85 },
      ],
    },
    {
      category: 'Web Technologies',
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 85 },
        { name: 'WebSockets', level: 80 },
        { name: 'Progressive Web Apps', level: 85 },
      ],
    },
    {
      category: 'Security',
      icon: <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'OAuth/OIDC', level: 85 },
        { name: 'Penetration Testing', level: 75 },
        { name: 'Secure Coding', level: 90 },
        { name: 'Encryption', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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