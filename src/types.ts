export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
}

export interface CaseStudy {
  id: string;
  sector: string;
  classification: string;
  summary: string;
  outcomes: string[];
  technologies: string[];
  delivery: string[];
}
