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
  features: string[];
  recommendedFor: string;
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