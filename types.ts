export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  tagline: string;
  features: string[];
  recommendedFor: string;
  imageUrl: string;
  phases: { name: string; description: string }[];
  problemPoints: string[];
  whoIsItFor: string[];
  detailSections: { title: string; items: string[] }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}