export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  location?: string;
  professionalSummary: string;
  coreSkills: string[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  careerGoals: string;
  targetRoles: string[];
  weeklyHours: number;
  targetDate?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationWeeks: number;
  techStack: string[];
  skillsDemonstrated: string[];
  status: 'not_started' | 'in_progress' | 'completed';
  githubUrl?: string;
  demoUrl?: string;
  startDate?: string;
  completionDate?: string;
  orderIndex: number;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  weekNumber: number;
  estimatedHours: number;
  status: 'pending' | 'in_progress' | 'completed';
  completedAt?: string;
  orderIndex: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  projectId?: string;
}
