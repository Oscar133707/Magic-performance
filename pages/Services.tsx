import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24 max-w-3xl animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
            Coaching <br/>Architecture
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Our coaching is not a subscription to an app; it is a professional relationship designed to 
            optimize your biology for sport. We offer flexible timeframes to match your competitive season.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`relative flex flex-col bg-white border ${index === 1 ? 'border-black shadow-2xl scale-100 lg:scale-105 z-10' : 'border-gray-200'} p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#14a2ff] text-white px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{service.recommendedFor}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-black tracking-tighter">{service.price}</span>
                  <span className="ml-2 text-gray-500 text-sm uppercase">/ {service.duration}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-8 leading-relaxed border-b border-gray-100 pb-8">
                {service.description}
              </p>

              <ul className="space-y-4 mb-12 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-[#14a2ff] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button to="/contact" variant={index === 1 ? 'primary' : 'outline'} className="w-full">
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-32 border-t border-gray-200 pt-20 animate-fade-in-up delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase">The Methodology</h2>
              <div className="w-20 h-2 bg-[#14a2ff] mb-8"></div>
            </div>
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <p>
                The Magic Performance system is built on the hierarchy of athletic development. 
                We prioritize movement quality and structural integrity before layering on load and velocity.
              </p>
              <p>
                Programming is dynamic. Using daily readiness questionnaires and velocity data from your sessions, 
                we adjust volume and intensity in real-time. This "cybernetic" approach prevents overtraining 
                and ensures you are always stimulating the adaptation we want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;