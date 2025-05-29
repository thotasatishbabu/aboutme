import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Email',
      value: 'satish.thota@example.com',
      link: 'mailto:satish.thota@example.com'
    },
    {
      icon: <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'GitHub',
      value: 'github.com/satishthota',
      link: 'https://github.com/satishthota'
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/satishthota',
      link: 'https://linkedin.com/in/satishthota'
    },
    {
      icon: <Instagram className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Instagram',
      value: '@satishthota',
      link: 'https://instagram.com/satishthota'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Have a project in mind or want to discuss potential opportunities? Let's connect!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="group p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-slate-600 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-slate-500 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <a 
                        href={info.link} 
                        className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;