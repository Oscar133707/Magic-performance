import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, MapPin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sport: '',
    goals: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application. We will review your profile and contact you within 48 hours.');
    // In a real app, this would send data to backend
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-none">
              Start The<br/>Process.
            </h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
              We accept a limited number of athletes each season to ensure the highest quality of service. 
              Please fill out the form to schedule your initial consultation.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", value: "contact@magicperformance.com", sub: "Response time: 24-48 hours" },
                { icon: MapPin, title: "Location", value: "Helsinki, Finland", sub: "Available worldwide via remote coaching" },
                { icon: Instagram, title: "Social", value: "@magicperformance" }
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="bg-white p-3 shadow-sm border border-gray-100 mr-6 transition-all duration-300 group-hover:shadow-md group-hover:border-[#14a2ff]">
                    <item.icon className="text-[#14a2ff]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wide mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.value}</p>
                    {item.sub && <p className="text-xs text-gray-400 mt-1">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 shadow-xl border border-gray-100 animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Athlete Application</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-[#14a2ff] transition-colors">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#14a2ff] focus:ring-1 focus:ring-[#14a2ff] transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-[#14a2ff] transition-colors">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#14a2ff] focus:ring-1 focus:ring-[#14a2ff] transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="sport" className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-[#14a2ff] transition-colors">Sport / Discipline</label>
                <input
                  type="text"
                  id="sport"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#14a2ff] focus:ring-1 focus:ring-[#14a2ff] transition-all duration-300"
                  placeholder="e.g. Ice Hockey, MMA, Sprinting"
                />
              </div>

              <div className="group">
                <label htmlFor="goals" className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-[#14a2ff] transition-colors">Primary Goals</label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#14a2ff] focus:ring-1 focus:ring-[#14a2ff] transition-all duration-300 resize-none"
                  placeholder="Tell us about your current level and what you want to achieve..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;