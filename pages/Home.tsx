import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, TrendingUp, Shield, Star, Check, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import { useInView } from '../hooks/useInView';
import { ARTICLES, TESTIMONIALS, FAQS } from '../constants';

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  // Section in-view refs
  const [expertiseRef, expertiseInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView<HTMLElement>({ threshold: 0.15 });
  const [articlesRef, articlesInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [testimonialsRef, testimonialsInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [faqRef, faqInView] = useInView<HTMLElement>({ threshold: 0.05 });

  // Hero parallax
  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D tilt handler factory (shared by expertise and testimonial cards)
  const makeTiltHandlers = useCallback((maxDeg = 8) => {
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateY = ((x - cx) / cx) * maxDeg;
      const rotateX = ((cy - y) / cy) * maxDeg;
      card.style.transition = 'transform 0.1s linear, box-shadow 0.1s linear';
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
      card.style.boxShadow = `0 20px 40px rgba(0,0,0,0.12), 0 0 30px rgba(20,162,255,0.1)`;
    };
    const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      card.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.6s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      card.style.boxShadow = '';
    };
    return { onMouseMove, onMouseLeave };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* ── Hero Section ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            ref={heroImgRef}
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Athlete training with intensity"
            className="w-full h-full object-cover object-center hero-parallax"
            style={{ height: '130%', top: '-15%', position: 'absolute' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-black tracking-tighter uppercase text-white leading-[1.1] mb-6 drop-shadow-2xl animate-fade-in-up delay-100 max-w-5xl">
            Unlock Your <br className="hidden md:block" /> Athletic Potential
          </h1>
          <p className="text-base md:text-[20px] text-white/90 max-w-[700px] leading-[1.6] mb-12 font-medium animate-fade-in-up delay-200">
            Evidence-based strength and conditioning programs designed to elevate athletic performance through systematic training and sports science principles.
          </p>
          <div className="animate-fade-in-up delay-300">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#14a2ff] text-white text-[16px] font-bold tracking-[1.5px] uppercase rounded-[4px] transition-all duration-300 hover:bg-[#2BB0FF] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(20,162,255,0.3)]"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* ── Expertise Cards ── */}
      <section ref={expertiseRef} className="py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            {[
              { icon: Activity, title: "Evidence Based", desc: "We don't guess. Every aspect of your program is built upon current sports science research and biomechanical principles." },
              { icon: TrendingUp, title: "Data Driven", desc: "Utilization of Velocity Based Training (VBT) and load monitoring to ensure precise adaptations and reduce injury risk." },
              { icon: Shield, title: "Individualized", desc: "No templates. Your physiology, injury history, and competitive schedule dictate the programming architecture." }
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className={`reveal-ready reveal-scale stagger-${index + 1} ${expertiseInView ? 'is-visible' : ''} cursor-default`}
                >
                  <item.icon
                    className="text-[#14a2ff] mb-6 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(20,162,255,0.6)]"
                    size={40}
                  />
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Philosophy Section ── */}
      <section ref={philosophyRef} className="w-full grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-2 bg-white">
        {/* Left: Image */}
        <div className={`relative min-h-[500px] h-full w-full order-1 md:order-1 reveal-ready reveal-left ${philosophyInView ? 'is-visible' : ''}`}>
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
            alt="Athletic training facility"
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Right: Content */}
        <div className={`flex items-center justify-start py-20 px-8 lg:py-[100px] lg:px-[80px] order-2 md:order-2 reveal-ready reveal-right stagger-2 ${philosophyInView ? 'is-visible' : ''}`}>
          <div className="max-w-[520px]">
            <h2 className="text-[48px] font-bold mb-6 text-black leading-tight">
              The <span className="text-[#14a2ff]">Magic</span> Philosophy
            </h2>
            <div className={`w-20 h-2 bg-[#14a2ff] mb-8 accent-bar ${philosophyInView ? 'is-visible' : ''}`}></div>
            <p className="text-[18px] text-[#333333] leading-[1.6] mb-8 font-normal">
              We believe excellence in athletic performance requires a systematic, evidence-based approach. Our coaching methodology combines cutting-edge sports science with proven strength and conditioning principles to help you unlock your full potential.
            </p>
            <ul className="space-y-[12px] mb-10">
              {[
                "Individualized programming based on sports science",
                "Evidence-based strength and conditioning methods",
                "Long-term athletic development focus"
              ].map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center reveal-ready reveal-up stagger-${i + 3} ${philosophyInView ? 'is-visible' : ''}`}
                >
                  <div className="mr-3 flex-shrink-0">
                    <Check className="text-[#14a2ff]" size={20} strokeWidth={3} />
                  </div>
                  <span className="text-[16px] text-black">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              to="/services"
              className="!bg-[#14a2ff] !border-[#14a2ff] !text-white !hover:bg-[#1189E6] !hover:border-[#1189E6] tracking-widest font-bold px-8 py-4 rounded-[6px]"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* ── Latest Articles ── */}
      <section ref={articlesRef} className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex justify-between items-end mb-16 reveal-ready reveal-up ${articlesInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">THE SCIENCE.</h2>
            <Link to="/resources" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest hover:text-[#14a2ff] transition-colors group">
              View All Research <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.slice(0, 3).map((article, i) => (
              <Link
                to="/resources"
                key={article.id}
                className={`group cursor-pointer reveal-ready reveal-scale stagger-${i + 1} ${articlesInView ? 'is-visible' : ''}`}
              >
                <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-100 shadow-sm group-hover:shadow-xl transition-shadow duration-300 relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Blue energy overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14a2ff]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>
                </div>
                <p className="text-[#14a2ff] text-xs font-bold uppercase tracking-widest mb-2">{article.category}</p>
                <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-[#14a2ff] transition-colors">{article.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Button to="/resources" variant="outline" className="w-full">View All Research</Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`text-center mb-16 reveal-ready reveal-up ${testimonialsInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-[42px] font-bold text-black mb-4">
              What <span className="text-[#14a2ff]">Champions</span> Say
            </h2>
            <p className="text-[18px] text-[#666666] max-w-2xl mx-auto">
              Real results from real athletes who've transformed their performance with evidence-based coaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => {
              const { onMouseMove, onMouseLeave } = makeTiltHandlers(5);
              return (
                <div
                  key={testimonial.id}
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                  className={`group bg-white rounded-[12px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col reveal-ready reveal-scale stagger-${i + 1} ${testimonialsInView ? 'is-visible' : ''}`}
                  style={{ willChange: 'transform' }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        className={`text-[#14a2ff] fill-[#14a2ff] transition-transform duration-200 ${testimonialsInView ? 'scale-100' : 'scale-0'}`}
                        style={{ transitionDelay: `${i * 160 + j * 55}ms` }}
                      />
                    ))}
                  </div>

                  <blockquote className="text-[16px] md:text-[18px] leading-[1.6] text-[#333333] italic mb-8 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-[60px] h-[60px] rounded-full object-cover border-2 border-gray-100 group-hover:border-[#14a2ff] transition-colors duration-300"
                    />
                    <div>
                      <div className="font-bold text-[16px] text-black">{testimonial.name}</div>
                      <div className="text-[14px] text-[#14a2ff] font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-[#F8F9FA] py-[100px] px-6">
        <div className="max-w-[900px] mx-auto">
          <div className={`text-center mb-[60px] reveal-ready reveal-up ${faqInView ? 'is-visible' : ''}`}>
            <h2 className="text-[36px] md:text-[42px] font-bold text-black mb-[16px]">
              Frequently Asked Questions
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#666666]">
              Everything you need to know about training with Magic Performance
            </p>
          </div>

          <div ref={faqRef} className="space-y-[16px]">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden reveal-ready reveal-up stagger-${Math.min(index + 1, 6)} ${faqInView ? 'is-visible' : ''} ${openFaqIndex === index ? 'shadow-md' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-[20px] md:p-[24px_28px] text-left hover:bg-[#FAFBFC] transition-colors cursor-pointer group"
                >
                  <span className={`text-[16px] md:text-[18px] font-bold transition-colors ${openFaqIndex === index ? 'text-[#14a2ff]' : 'text-black'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`flex-shrink-0 ml-4 text-[#14a2ff] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openFaqIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                <div className={`grid faq-body-transition ${openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className={`p-[0_20px_20px_20px] md:p-[0_28px_24px_28px] border-t border-[#E5E7EB] ${openFaqIndex === index ? 'border-l-2 border-l-[#14a2ff]' : ''}`}>
                      <p className="text-[15px] md:text-[16px] text-[#333333] leading-[1.7] mt-[24px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-[60px] text-center reveal-ready reveal-up stagger-6 ${faqInView ? 'is-visible' : ''}`}>
            <Button to="/contact" variant="primary">Start Your Journey</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
