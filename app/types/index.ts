// Types for portfolio data

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree?: string;
  description?: string;
  year?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
  year?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  published: boolean;
}
