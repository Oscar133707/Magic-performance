import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Check, ChevronDown, ArrowLeft, ArrowRight, Users, Target, Zap } from 'lucide-react';
import Button from '../components/Button';
import { useInView } from '../hooks/useInView';
import { SERVICES, TESTIMONIALS } from '../constants';

const whoIcons = [Target, Users, Zap, Check];

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [heroRef, heroInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [problemRef, problemInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [phasesRef, phasesInView] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [whoRef, whoInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [includesRef, includesInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [testimonialRef, testimonialInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  if (!service) return <Navigate to="/services" replace />;

  const serviceIndex = SERVICES.findIndex(s => s.id === id);
  const testimonial = TESTIMONIALS[serviceIndex % TESTIMONIALS.length];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-black min-h-[80vh] flex items-end overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Breadcrumb */}
          <div className={`flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest font-bold mb-10 reveal-ready reveal-up ${heroInView ? 'is-visible' : ''}`}>
            <Link to="/services" className="hover:text-[#14a2ff] transition-colors flex items-center gap-1">
              <ArrowLeft size={12} /> Programs
            </Link>
            <span>/</span>
            <span className="text-white/60">{service.name}</span>
          </div>

          <p className={`text-[#14a2ff] text-xs font-bold uppercase tracking-[4px] mb-4 reveal-ready reveal-up stagger-2 ${heroInView ? 'is-visible' : ''}`}>
            {service.recommendedFor}
          </p>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-none mb-6 reveal-ready reveal-up stagger-2 ${heroInView ? 'is-visible' : ''}`}>
            {service.name}
          </h1>
          <p className={`text-xl text-white/60 font-light max-w-2xl leading-relaxed mb-10 reveal-ready reveal-up stagger-3 ${heroInView ? 'is-visible' : ''}`}>
            {service.tagline}
          </p>

          {/* Price + Duration badge */}
          <div className={`inline-flex items-center gap-4 border border-white/20 px-6 py-3 mb-10 reveal-ready reveal-up stagger-3 ${heroInView ? 'is-visible' : ''}`}>
            <span className="text-2xl font-black text-white tracking-tighter">{service.price}</span>
            <span className="w-px h-6 bg-white/20" />
            <span className="text-white/50 text-sm uppercase tracking-widest">{service.duration}</span>
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 reveal-ready reveal-up stagger-4 ${heroInView ? 'is-visible' : ''}`}>
            <Button to="/contact" variant="primary">Apply Now</Button>
            <Link
              to="/services"
              className="btn-shimmer inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase border border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Compare Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Validation */}
      <section className="py-24 bg-black text-white border-t border-white/10">
        <div ref={problemRef} className="max-w-7xl mx-auto px-6">
          <div className={`mb-14 reveal-ready reveal-up ${problemInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
              Does This Sound<br />Familiar?
            </h2>
            <div className={`w-16 h-1 bg-[#14a2ff] accent-bar ${problemInView ? 'is-visible' : ''}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {service.problemPoints.map((point, i) => (
              <div
                key={i}
                className={`bg-black p-8 hover:bg-[#0a0a0a] transition-colors duration-300 reveal-ready reveal-up stagger-${Math.min(i + 1, 6)} ${problemInView ? 'is-visible' : ''}`}
              >
                <span className="text-[#14a2ff] text-xs font-bold uppercase tracking-widest block mb-3">
                  0{i + 1}
                </span>
                <p className="text-white/80 text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-white">
        <div ref={phasesRef} className="max-w-7xl mx-auto px-6">
          <div className={`mb-14 reveal-ready reveal-up ${phasesInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
              The Program Structure
            </h2>
            <div className={`w-16 h-1 bg-[#14a2ff] accent-bar ${phasesInView ? 'is-visible' : ''}`} />
          </div>

          <div className="flex flex-col gap-0 border border-gray-200">
            {service.phases.map((phase, i) => (
              <div
                key={i}
                className={`group flex flex-col md:flex-row border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-300 reveal-ready reveal-up stagger-${Math.min(i + 1, 6)} ${phasesInView ? 'is-visible' : ''}`}
              >
                <div className="flex-shrink-0 md:w-[120px] flex items-center justify-center p-8 md:border-r border-gray-200 border-b md:border-b-0">
                  <span className="text-4xl font-black tracking-tighter text-gray-200 group-hover:text-[#14a2ff] transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-8 md:p-10 flex-grow">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">{phase.name}</h3>
                  <p className="text-gray-500 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div ref={whoRef} className="max-w-7xl mx-auto px-6">
          <div className={`mb-14 reveal-ready reveal-up ${whoInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
              Who It's For
            </h2>
            <div className={`w-16 h-1 bg-[#14a2ff] accent-bar ${whoInView ? 'is-visible' : ''}`} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whoIsItFor.map((who, i) => {
              const Icon = whoIcons[i % whoIcons.length];
              return (
                <div
                  key={i}
                  className={`bg-white border border-gray-200 p-8 hover:border-[#14a2ff] hover:shadow-[0_4px_20px_rgba(20,162,255,0.1)] transition-all duration-300 reveal-ready reveal-scale stagger-${Math.min(i + 1, 6)} ${whoInView ? 'is-visible' : ''}`}
                >
                  <Icon size={28} className="text-[#14a2ff] mb-4" />
                  <p className="font-bold text-base uppercase tracking-tight">{who}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div ref={includesRef} className="max-w-7xl mx-auto px-6">
          <div className={`mb-14 reveal-ready reveal-up ${includesInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
              What's Included
            </h2>
            <div className={`w-16 h-1 bg-[#14a2ff] accent-bar ${includesInView ? 'is-visible' : ''}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {service.detailSections.map((section, i) => (
              <div
                key={i}
                className={`reveal-ready ${i === 0 ? 'reveal-left' : 'reveal-right'} stagger-${i + 1} ${includesInView ? 'is-visible' : ''}`}
              >
                <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#14a2ff] mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <Check size={18} className="text-[#14a2ff] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-black text-white">
        <div ref={testimonialRef} className="max-w-4xl mx-auto px-6 text-center">
          <div className={`reveal-ready reveal-up ${testimonialInView ? 'is-visible' : ''}`}>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-white/80 italic mb-10">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#14a2ff]"
              />
              <div className="text-left">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-[#14a2ff] text-sm">{testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className={`mb-14 text-center reveal-ready reveal-up ${includesInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Common Questions</h2>
          </div>

          <div className="space-y-2">
            {[
              { q: 'How do I get started?', a: "After applying via the contact form, we'll schedule an onboarding call to discuss your goals, training history, and competitive schedule. Programming begins within 5 business days." },
              { q: 'Do I need special equipment?', a: "Most programs can be adapted to your available equipment. During onboarding we'll assess what you have access to and build your programming around it." },
              { q: 'How are adjustments made week to week?', a: "You'll complete a brief daily readiness check-in. Based on your responses and session data, we adjust the upcoming week's volume and intensity in real time." },
              { q: 'Can I upgrade my program later?', a: "Yes. You can move to a longer program at any point. We'll transfer your training history and adjust the macrocycle accordingly." },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className={`font-bold text-base transition-colors ${openFaq === i ? 'text-[#14a2ff]' : 'text-black'}`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 ml-4 text-[#14a2ff] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openFaq === i ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>
                <div className={`grid faq-body-transition ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-4 text-gray-600 leading-relaxed border-t border-gray-100 text-sm">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-32">
        <div ref={ctaRef} className="max-w-4xl mx-auto px-6 text-center">
          <p className={`text-[#14a2ff] text-xs font-bold uppercase tracking-[4px] mb-6 reveal-ready reveal-up ${ctaInView ? 'is-visible' : ''}`}>
            {service.name}
          </p>
          <h2 className={`text-5xl md:text-6xl font-black tracking-tighter uppercase text-white leading-tight mb-8 reveal-ready reveal-up stagger-2 ${ctaInView ? 'is-visible' : ''}`}>
            Ready to Elevate<br />Your Performance?
          </h2>
          <p className={`text-white/50 text-lg font-light mb-12 reveal-ready reveal-up stagger-3 ${ctaInView ? 'is-visible' : ''}`}>
            {service.price} · {service.duration}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center reveal-ready reveal-up stagger-4 ${ctaInView ? 'is-visible' : ''}`}>
            <Button to="/contact" variant="primary">
              Apply Now <ArrowRight size={16} className="ml-2" />
            </Button>
            <Link
              to="/services"
              className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={14} /> All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
