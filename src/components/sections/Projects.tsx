import React, { useState } from 'react';
import { ExternalLink, Code, Users, BarChart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise Resource Planning System',
      category: 'enterprise',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Developed a comprehensive ERP solution for a manufacturing company with modules for inventory, HR, and finance.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      link: '#'
    },
    {
      id: 2,
      title: 'Healthcare Analytics Platform',
      category: 'data',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Built a data analytics platform for healthcare providers to visualize patient outcomes and operational metrics.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      link: '#'
    },
    {
      id: 3,
      title: 'E-commerce Microservices',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Designed and implemented a microservices architecture for a high-traffic e-commerce platform.',
      technologies: ['Java', 'Spring Boot', 'Kubernetes', 'MongoDB'],
      link: '#'
    },
    {
      id: 4,
      title: 'Financial Trading Platform',
      category: 'enterprise',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Created a real-time trading platform with low-latency data processing and secure transaction handling.',
      technologies: ['Go', 'React', 'Redis', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 5,
      title: 'IoT Device Management',
      category: 'iot',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Developed a scalable IoT device management platform handling millions of connected devices.',
      technologies: ['Node.js', 'MQTT', 'InfluxDB', 'React'],
      link: '#'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      category: 'data',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Built a real-time analytics dashboard for social media campaigns with sentiment analysis.',
      technologies: ['Python', 'React', 'Kafka', 'Elasticsearch'],
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Code size={16} /> },
    { id: 'enterprise', label: 'Enterprise', icon: <Users size={16} /> },
    { id: 'web', label: 'Web Apps', icon: <ExternalLink size={16} /> },
    { id: 'data', label: 'Data & Analytics', icon: <BarChart size={16} /> },
    { id: 'iot', label: 'IoT', icon: <Code size={16} /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            Explore some of my most significant projects and technical achievements.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;