export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  role: string;
  repository: string;
  liveUrl: string | null;
  image: string;
  badge: string;
  metrics?: string[];
  screenshots?: { title: string; image: string }[];
}

export type TechCategory =
  | "Languages"
  | "Frameworks"
  | "Databases"
  | "Database"
  | "Frontend"
  | "Backend"
  | "Tools"
  | "AI Tools";

export interface TechItem {
  name: string;
  tag: string;
  category: TechCategory;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface AchievementItem {
  title: string;
  year: string;
  award: string;
  organization: string;
  description: string;
}

export interface EducationInfo {
  school: string;
  degree: string;
  major: string;
  period: string;
  graduationYear: string;
  gpa: string;
  toeic: string;
  focus: string[];
}

