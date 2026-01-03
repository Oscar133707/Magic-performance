import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { Article } from '../types';
import { ArrowUpRight, User, Clock, Calendar } from 'lucide-react';

const Resources: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // If an article is selected, show detail view (simulating routing to detail page)
  if (selectedArticle) {
    return (
      <article className="pt-32 pb-20 min-h-screen animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-6">
          <button 
            onClick={() => setSelectedArticle(null)}
            className="text-sm text-gray-500 hover:text-[#14a2ff] mb-8 font-bold uppercase tracking-widest flex items-center transition-colors group"
          >
            <span className="mr-2 transform transition-transform group-hover:-translate-x-1">←</span> Back to Resources
          </button>
          
          <div className="mb-10 animate-fade-in-up delay-100">
            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              <span className="text-[#14a2ff]">{selectedArticle.category}</span>
              <span className="flex items-center"><Calendar size={12} className="mr-1" /> {selectedArticle.date}</span>
              <span className="flex items-center"><Clock size={12} className="mr-1" /> {selectedArticle.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              {selectedArticle.title}
            </h1>
            <div className="flex items-center space-x-4 border-b border-gray-200 pb-10 mb-10">
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                 <User size={20} className="text-gray-500" />
               </div>
               <span className="font-bold text-sm">{selectedArticle.author}</span>
            </div>
          </div>

          <div className="mb-12 animate-fade-in-up delay-200">
            <img 
              src={selectedArticle.imageUrl} 
              alt={selectedArticle.title} 
              className="w-full h-[400px] object-cover shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none font-light text-gray-800 leading-loose animate-fade-in-up delay-300">
            <p className="text-xl font-medium text-black mb-8">{selectedArticle.excerpt}</p>
            {/* Render article content with proper formatting */}
            <div className="article-content">
              {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                
                // Check if paragraph is a heading (starts with ##)
                if (trimmed.startsWith('## ')) {
                  const headingText = trimmed.substring(3);
                  return (
                    <h2 key={idx} className="text-2xl font-bold mt-10 mb-4 text-black">
                      {headingText}
                    </h2>
                  );
                }
                
                // Check if paragraph is a numbered list (starts with "1.")
                if (trimmed.match(/^\d+\.\s/)) {
                  const lines = trimmed.split('\n').filter(line => line.trim());
                  return (
                    <ol key={idx} className="list-decimal list-inside mb-6 space-y-2 ml-4">
                      {lines.map((line, lineIdx) => {
                        const cleanLine = line.replace(/^\d+\.\s*/, '');
                        return <li key={lineIdx}>{cleanLine}</li>;
                      })}
                    </ol>
                  );
                }
                
                // Check if paragraph starts with bullet points
                if (trimmed.startsWith('•')) {
                  const lines = trimmed.split('\n').filter(line => line.trim());
                  return (
                    <ul key={idx} className="list-disc list-inside mb-6 space-y-2 ml-4">
                      {lines.map((line, lineIdx) => {
                        const cleanLine = line.replace(/^•\s*/, '');
                        return <li key={lineIdx}>{cleanLine}</li>;
                      })}
                    </ul>
                  );
                }
                
                // Regular paragraph
                return (
                  <p key={idx} className="mb-6">
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // List View
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 border-b border-black pb-8 flex flex-col md:flex-row justify-between md:items-end animate-fade-in-up">
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">RESOURCES</h1>
            <p className="text-lg text-gray-500 max-w-xl">
              Deep dives into strength and conditioning methodology, sports science, and performance optimization.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             {/* Filter placeholder */}
             <span className="text-xs font-bold uppercase tracking-widest text-[#14a2ff]">Showing All Articles</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {ARTICLES.map((article, i) => (
            <div 
              key={article.id} 
              className="group cursor-pointer flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative overflow-hidden mb-6 aspect-[16/9] shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <ArrowUpRight size={18} />
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                <span className="text-[#14a2ff] transition-colors duration-300 group-hover:text-black">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-[#14a2ff] transition-colors duration-300 leading-tight">
                {article.title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {article.excerpt}
              </p>

              <div className="flex items-center text-xs font-bold uppercase tracking-widest border-t border-gray-100 pt-6 group-hover:border-[#14a2ff] transition-colors duration-300">
                 <span className="group-hover:translate-x-2 transition-transform duration-300">Read Article</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;