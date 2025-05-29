import React from 'react';
import { Award, BookOpen, Code, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Code size={24} />, value: '500+', label: 'Projects Completed' },
    { icon: <Coffee size={24} />, value: '1,000+', label: 'Coffee Cups' },
    { icon: <Award size={24} />, value: '15+', label: 'Awards Won' },
    { icon: <BookOpen size={24} />, value: '20+', label: 'Certifications' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            I'm a passionate tech professional with a decade of experience in designing and implementing innovative solutions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">My Story</h3>
          <p className="text-slate-700 dark:text-slate-300">
            With over 10 years in the IT industry, I've evolved from a junior developer to a solutions architect, 
            working across diverse sectors including finance, healthcare, and e-commerce.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            My approach combines technical expertise with a deep understanding of business needs, 
            allowing me to deliver solutions that drive real value and innovation.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            Outside of work, I'm an active contributor to open-source projects and regularly speak at 
            industry conferences on emerging technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;