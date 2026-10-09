export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl?: string;
  avatarUrl?: string;
  socials: SocialLink[];
}

export interface About {
  paragraphs: string[];
  highlights: { value: string; label: string }[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Education {
  institution: string;
  qualification: string;
  status: string;
}

export interface Portfolio {
  profile: Profile;
  about: About;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}
