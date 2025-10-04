import { UserProfile } from '../types';

export const defaultUserProfile: UserProfile = {
  id: '1',
  name: 'Pilli Karuna',
  email: 'karunakaru246@gmail.com',
  location: 'Chimakurthy, Andhra Pradesh, India',
  professionalSummary: 'Operations and compliance specialist with 3+ years of experience at Amazon, experienced in process ownership, investigations, SOP development and cross-functional coordination. AWS Cloud Practitioner and AWS AI Practitioner certified, with practical experience prototyping AI personas and automations using internal AI tools and GenAI app builders.',
  coreSkills: [
    'AI-assisted Process Prototyping & Persona Design',
    'Automation Workflow Design',
    'Process & Compliance Operations',
    'SOP / Runbook Development',
    'Root Cause Analysis & Incident Management',
    'Operational Reporting & Dashboards',
    'Stakeholder Management & Training',
    'Prompt & Persona Design',
    'Basic SQL, Excel (advanced)',
    'Documentation & Knowledge Base Management'
  ],
  experience: [
    {
      title: 'Senior Product Compliance Associate',
      company: 'Amazon India',
      location: 'Hyderabad',
      period: 'Apr 2022 - Present',
      highlights: [
        'Managed operations for 8+ compliance processes',
        'Led RCA and deep-dive investigations',
        'Authored and maintained SOPs and runbooks',
        'Built weekly/monthly dashboards and executive reports',
        'Reduced compliance error rate by 15%',
        'Designed and prototyped domain-specific AI personas (last 6 months)',
        'Created automation agent using internal platform (AgentZ)',
        'Experimented with GenAI app builder (PartyRock)'
      ]
    }
  ],
  education: [
    {
      degree: 'MBA in Finance',
      institution: 'Institute of Management Studies, Hyderabad',
      period: '2019-2021'
    },
    {
      degree: 'MA in Economics',
      institution: 'Sri Padmavathi Mahila Visva Vidyalayam, Tirupati',
      period: '2017-2019'
    }
  ],
  certifications: [
    'AWS Certified Cloud Practitioner',
    'AWS Certified AI Practitioner',
    'LearnTube.ai - Project Management Assessment',
    'PGDCA - Computer Applications'
  ],
  careerGoals: 'Transition into AI/ML roles combining operational expertise with AWS cloud services',
  targetRoles: ['AI Product Manager', 'ML Operations Specialist', 'AI Solutions Architect', 'Cloud AI Engineer'],
  weeklyHours: 7.5,
  targetDate: '2025-10-04'
};
