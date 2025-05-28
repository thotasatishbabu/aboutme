import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "John's expertise in system architecture transformed our entire tech infrastructure. His solutions reduced our operational costs by 35% while improving system reliability.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "FinTech Innovations",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "Working with John was a game-changer for our startup. His technical leadership and ability to translate complex concepts into actionable plans helped us secure our Series A funding.",
      name: "Michael Zhang",
      title: "Co-founder",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "John delivered our enterprise platform on time and under budget. His technical skills are matched by his excellent communication and project management abilities.",
      name: "Emily Rodriguez",
      title: "VP of Engineering",
      company: "Enterprise Solutions",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      content: "The microservices architecture John designed for us has been running flawlessly for over two years. His solutions are not just technically sound but built for long-term success.",
      name: "David Wilson",
      title: "Director of Technology",
      company: "RetailTech Global",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            What my clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-8 shadow-lg relative">
                    <div className="absolute top-6 left-6 text-blue-500 opacity-20">
                      <Quote size={48} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-lg mb-8 text-slate-700 dark:text-slate-200 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-14 h-14 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {testimonial.title}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white dark:bg-slate-800 rounded-full p-3 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-slate-700 dark:text-slate-200" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white dark:bg-slate-800 rounded-full p-3 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-slate-700 dark:text-slate-200" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index 
                    ? 'bg-blue-600' 
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;