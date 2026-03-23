export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Experience {
  period: string;
  role: string;
  color: string;
  projects: string[];
  desc: string;
}

export interface Project {
  name: string;
  tag: string;
  desc: string;
  color: string;
}

export type Theme = 'dark' | 'light';
