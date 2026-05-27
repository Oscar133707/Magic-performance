import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICES } from '../constants';

const ProgramCard: React.FC<{ service: typeof SERVICES[0]; index: number; inView: boolean }> = ({ service, index, inView }) => {
  return (
    <Link
      to={`/services/${service.id}`}
      className={`group flex flex-col md:flex-row min-h-[400px] border border-gray-200 overflow-hidden bg-white
        reveal-ready reveal-up stagger-${Math.min(index + 1, 6)} ${inView ? 'is-visible' : ''}
        hover:border-[#14a2ff] hover:shadow-[0_8px_40px_rgba(20,162,255,0.12)] transition-all duration-500`}
      style={{ textDecoration: 'none' }}
    >
      {/* Image */}
      <div className="relative md:w-[45%] min-h-[260px] md:min-h-0 overflow-hidden bg-gray-900 flex-shrink-0">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-90"
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14a2ff] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
        <div className="absolute top-6 left-6 bg-[#14a2ff] text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
          {service.duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-10 md:p-12 flex-grow">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{service.recommendedFor}</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#14a2ff] transition-colors duration-300">
            {service.name}
          </h2>
          <p className="text-lg text-gray-500 font-light mb-5 leading-relaxed">{service.tagline}</p>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg">{service.description}</p>
        </div>

        <div className="flex items-end justify-between mt-10">
          <div>
            <span className="text-3xl font-black tracking-tighter">{service.price}</span>
            <span className="text-gray-400 text-sm ml-2 uppercase">/ {service.duration}</span>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#14a2ff] group-hover:gap-4 transition-all duration-300">
            View Program <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  const [heroRef, heroInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [ctaRef, ctaInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-black min-h-[60vh] flex items-end pb-20 overflow-hidden pt-40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
            alt="Elite training"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className={`text-[#14a2ff] text-xs font-bold uppercase tracking-[4px] mb-6 reveal-ready reveal-up ${heroInView ? 'is-visible' : ''}`}>
            Magic Performance
          </p>
          <h1 className={`text-6xl md:text-8xl font-black tracking-tighter uppercase text-white leading-none mb-8 reveal-ready reveal-up stagger-2 ${heroInView ? 'is-visible' : ''}`}>
            Our<br />Programs
          </h1>
          <p className={`text-xl text-white/60 font-light max-w-xl leading-relaxed reveal-ready reveal-up stagger-3 ${heroInView ? 'is-visible' : ''}`}>
            Choose the coaching architecture that matches your competitive season and ambitions.
          </p>
          <div className={`mt-12 reveal-ready reveal-up stagger-4 ${heroInView ? 'is-visible' : ''}`}>
            <ChevronDown size={24} className="text-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20 bg-white">
        <div ref={cardsRef} className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
          {SERVICES.map((service, index) => (
            <ProgramCard key={service.id} service={service} index={index} inView={cardsInView} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div ref={ctaRef} className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className={`reveal-ready reveal-left ${ctaInView ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-3">
              Not sure which program fits?
            </h2>
            <p className="text-gray-500 text-lg font-light">
              We'll help you figure out the right starting point.
            </p>
          </div>
          <div className={`reveal-ready reveal-right stagger-2 ${ctaInView ? 'is-visible' : ''} flex-shrink-0`}>
            <Link
              to="/contact"
              className="btn-shimmer inline-flex items-center gap-3 bg-[#14a2ff] text-white text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-black transition-colors duration-300"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
