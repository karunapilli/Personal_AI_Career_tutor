import { Project } from '../types';

export const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Brand Protection AI Chatbot',
    description: 'AI-powered chatbot using AWS Bedrock that helps investigators identify counterfeit products through conversational guidance, red flag detection, and risk scoring.',
    difficulty: 'beginner',
    durationWeeks: 3,
    techStack: ['AWS PartyRock', 'AWS Bedrock', 'Claude 3', 'Prompt Engineering'],
    skillsDemonstrated: [
      'AI persona design',
      'Prompt engineering',
      'AWS Bedrock/Generative AI',
      'Domain expertise (fraud detection)',
      'User experience design'
    ],
    status: 'not_started',
    orderIndex: 1,
    milestones: [
      {
        id: '1-1',
        title: 'Design & Prototype',
        description: 'Define chatbot persona, conversation flows, and master prompt',
        weekNumber: 1,
        estimatedHours: 5,
        status: 'pending',
        orderIndex: 1
      },
      {
        id: '1-2',
        title: 'Build in AWS PartyRock',
        description: 'Set up PartyRock, configure bot, and test with real scenarios',
        weekNumber: 2,
        estimatedHours: 6,
        status: 'pending',
        orderIndex: 2
      },
      {
        id: '1-3',
        title: 'Documentation & Portfolio',
        description: 'Create project documentation, GitHub repo, and LinkedIn post',
        weekNumber: 3,
        estimatedHours: 4,
        status: 'pending',
        orderIndex: 3
      }
    ]
  },
  {
    id: '2',
    title: 'Compliance SOP Dashboard',
    description: 'Interactive dashboard showing compliance process metrics with automated data visualization and reporting capabilities.',
    difficulty: 'beginner',
    durationWeeks: 4,
    techStack: ['AWS QuickSight', 'Google Looker Studio', 'SQL', 'Data Visualization'],
    skillsDemonstrated: [
      'Data visualization',
      'AWS analytics services',
      'Dashboard design',
      'Process metrics tracking',
      'Automation'
    ],
    status: 'not_started',
    orderIndex: 2,
    milestones: [
      {
        id: '2-1',
        title: 'Data collection & preparation',
        description: 'Identify metrics, collect sample data, clean and structure data',
        weekNumber: 1,
        estimatedHours: 6,
        status: 'pending',
        orderIndex: 1
      },
      {
        id: '2-2',
        title: 'Dashboard design',
        description: 'Design layout, choose visualizations, build initial dashboard',
        weekNumber: 2,
        estimatedHours: 7,
        status: 'pending',
        orderIndex: 2
      },
      {
        id: '2-3',
        title: 'Automation & refinement',
        description: 'Set up data refresh automation, add filters and interactions',
        weekNumber: 3,
        estimatedHours: 6,
        status: 'pending',
        orderIndex: 3
      },
      {
        id: '2-4',
        title: 'Documentation & showcase',
        description: 'Document insights, create portfolio materials',
        weekNumber: 4,
        estimatedHours: 4,
        status: 'pending',
        orderIndex: 4
      }
    ]
  },
  {
    id: '3',
    title: 'Fake Review Detector',
    description: 'Web application that analyzes product reviews using NLP and sentiment analysis to flag suspicious patterns and fake reviews.',
    difficulty: 'intermediate',
    durationWeeks: 5,
    techStack: ['Python', 'HuggingFace', 'React', 'FastAPI', 'NLP'],
    skillsDemonstrated: [
      'NLP & sentiment analysis',
      'ML model integration',
      'API development',
      'Basic Python coding',
      'Web app development'
    ],
    status: 'not_started',
    orderIndex: 3,
    milestones: [
      {
        id: '3-1',
        title: 'Learn Python basics & NLP concepts',
        description: 'Complete Python fundamentals, understand NLP and sentiment analysis',
        weekNumber: 1,
        estimatedHours: 8,
        status: 'pending',
        orderIndex: 1
      },
      {
        id: '3-2',
        title: 'Build detection logic',
        description: 'Integrate HuggingFace models, create detection algorithms',
        weekNumber: 2,
        estimatedHours: 8,
        status: 'pending',
        orderIndex: 2
      },
      {
        id: '3-3',
        title: 'Create backend API',
        description: 'Build FastAPI endpoints, handle data processing',
        weekNumber: 3,
        estimatedHours: 7,
        status: 'pending',
        orderIndex: 3
      },
      {
        id: '3-4',
        title: 'Build frontend interface',
        description: 'Create React UI, connect to API, add visualizations',
        weekNumber: 4,
        estimatedHours: 8,
        status: 'pending',
        orderIndex: 4
      },
      {
        id: '3-5',
        title: 'Testing & deployment',
        description: 'Test with real data, deploy to production, create documentation',
        weekNumber: 5,
        estimatedHours: 6,
        status: 'pending',
        orderIndex: 5
      }
    ]
  },
  {
    id: '4',
    title: 'Seller Risk Scoring System',
    description: 'Machine learning model that predicts seller fraud risk scores based on historical data, patterns, and behavioral analysis.',
    difficulty: 'intermediate',
    durationWeeks: 6,
    techStack: ['AWS SageMaker', 'Python', 'Pandas', 'Scikit-learn', 'ML'],
    skillsDemonstrated: [
      'Feature engineering',
      'ML model training',
      'AWS SageMaker',
      'Model evaluation',
      'Production ML deployment'
    ],
    status: 'not_started',
    orderIndex: 4,
    milestones: [
      {
        id: '4-1',
        title: 'Data collection & exploration',
        description: 'Gather seller data, exploratory data analysis, identify features',
        weekNumber: 1,
        estimatedHours: 8,
        status: 'pending',
        orderIndex: 1
      },
      {
        id: '4-2',
        title: 'Feature engineering',
        description: 'Create features, handle missing data, normalize and scale',
        weekNumber: 2,
        estimatedHours: 9,
        status: 'pending',
        orderIndex: 2
      },
      {
        id: '4-3',
        title: 'Model training',
        description: 'Train multiple models, compare performance, tune hyperparameters',
        weekNumber: 3,
        estimatedHours: 9,
        status: 'pending',
        orderIndex: 3
      },
      {
        id: '4-4',
        title: 'Model evaluation',
        description: 'Validate model, test on holdout set, analyze errors',
        weekNumber: 4,
        estimatedHours: 7,
        status: 'pending',
        orderIndex: 4
      },
      {
        id: '4-5',
        title: 'AWS SageMaker deployment',
        description: 'Deploy model to SageMaker, create API endpoint',
        weekNumber: 5,
        estimatedHours: 8,
        status: 'pending',
        orderIndex: 5
      },
      {
        id: '4-6',
        title: 'Documentation & portfolio',
        description: 'Document methodology, create visualizations, write case study',
        weekNumber: 6,
        estimatedHours: 6,
        status: 'pending',
        orderIndex: 6
      }
    ]
  },
  {
    id: '5',
    title: 'AI Investigation Platform',
    description: 'End-to-end AI-powered brand protection platform combining chatbot, review analysis, risk scoring, and automated workflows in a production-ready application.',
    difficulty: 'advanced',
    durationWeeks: 10,
    techStack: ['React', 'Supabase', 'AWS Bedrock', 'Python', 'FastAPI', 'Docker', 'CI/CD'],
    skillsDemonstrated: [
      'Full-stack development',
      'Cloud architecture',
      'System integration',
      'Production deployment',
      'DevOps & CI/CD',
      'End-to-end AI system'
    ],
    status: 'not_started',
    orderIndex: 5,
    milestones: [
      {
        id: '5-1',
        title: 'System architecture design',
        description: 'Design overall architecture, plan integrations, database schema',
        weekNumber: 1,
        estimatedHours: 10,
        status: 'pending',
        orderIndex: 1
      },
      {
        id: '5-2',
        title: 'Backend development',
        description: 'Build FastAPI backend, integrate all ML models and AI services',
        weekNumber: 2,
        estimatedHours: 10,
        status: 'pending',
        orderIndex: 2
      },
      {
        id: '5-3',
        title: 'Database & authentication',
        description: 'Set up Supabase, implement authentication, create RLS policies',
        weekNumber: 3,
        estimatedHours: 9,
        status: 'pending',
        orderIndex: 3
      },
      {
        id: '5-4',
        title: 'Frontend dashboard',
        description: 'Build main dashboard, investigation workspace, reporting views',
        weekNumber: 4,
        estimatedHours: 10,
        status: 'pending',
        orderIndex: 4
      },
      {
        id: '5-5',
        title: 'AI integrations',
        description: 'Integrate chatbot, review detector, risk scoring into unified UI',
        weekNumber: 5,
        estimatedHours: 10,
        status: 'pending',
        orderIndex: 5
      },
      {
        id: '5-6',
        title: 'Workflow automation',
        description: 'Build automated investigation workflows, notification system',
        weekNumber: 6,
        estimatedHours: 9,
        status: 'pending',
        orderIndex: 6
      },
      {
        id: '5-7',
        title: 'Testing & quality assurance',
        description: 'Comprehensive testing, bug fixes, performance optimization',
        weekNumber: 7,
        estimatedHours: 9,
        status: 'pending',
        orderIndex: 7
      },
      {
        id: '5-8',
        title: 'Production deployment',
        description: 'Set up CI/CD, deploy to production, configure monitoring',
        weekNumber: 8,
        estimatedHours: 9,
        status: 'pending',
        orderIndex: 8
      },
      {
        id: '5-9',
        title: 'Documentation & demo',
        description: 'Complete documentation, create demo video, user guide',
        weekNumber: 9,
        estimatedHours: 8,
        status: 'pending',
        orderIndex: 9
      },
      {
        id: '5-10',
        title: 'Portfolio showcase',
        description: 'Final polish, case study, LinkedIn campaign, GitHub optimization',
        weekNumber: 10,
        estimatedHours: 8,
        status: 'pending',
        orderIndex: 10
      }
    ]
  }
];
