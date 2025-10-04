import { UserProfile, Project, ChatMessage } from '../types';

export function generateAIResponse(
  userMessage: string,
  userProfile: UserProfile,
  projects: Project[],
  conversationHistory: ChatMessage[]
): string {
  const messageLower = userMessage.toLowerCase();

  if (messageLower.includes('hello') || messageLower.includes('hi') || messageLower.includes('hey')) {
    return `Hello ${userProfile.name}! I'm your AI Career Tutor, here to help you transition into AI/ML roles.

Based on your profile, I've created a personalized 6-month roadmap with 5 projects that leverage your Amazon compliance and AI prototyping experience.

You have ${projects.filter(p => p.status === 'completed').length} of 5 projects completed. ${projects.find(p => p.status === 'in_progress') ? `You're currently working on "${projects.find(p => p.status === 'in_progress')?.title}".` : `Ready to start your first project: "${projects[0].title}"?`}

How can I help you today? You can ask me:
• About your next project
• For help with a specific milestone
• About the tech stack
• For learning resources
• To update your progress`;
  }

  if (messageLower.includes('progress') || messageLower.includes('status')) {
    const completed = projects.filter(p => p.status === 'completed').length;
    const inProgress = projects.find(p => p.status === 'in_progress');
    const totalWeeks = projects.reduce((sum, p) => sum + p.durationWeeks, 0);
    const completedWeeks = projects.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.durationWeeks, 0);
    const currentWeek = inProgress ? projects.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.durationWeeks, 0) + 1 : completedWeeks;

    return `Your Progress Summary:

📊 Overall Progress: ${completed}/5 projects completed (${Math.round(completedWeeks/totalWeeks * 100)}%)
📅 Timeline: Week ${currentWeek} of ${totalWeeks}
⏱️ Weekly commitment: ${userProfile.weeklyHours} hours

${inProgress ? `🔄 Current Project: "${inProgress.title}"
   Status: ${inProgress.milestones.filter(m => m.status === 'completed').length}/${inProgress.milestones.length} milestones completed` : '✅ No project in progress - ready to start the next one!'}

${projects.filter(p => p.status === 'completed').length > 0 ? `✅ Completed Projects:
${projects.filter(p => p.status === 'completed').map(p => `   • ${p.title}`).join('\n')}` : ''}

${projects.filter(p => p.status === 'not_started').length > 0 ? `📋 Upcoming Projects:
${projects.filter(p => p.status === 'not_started').slice(0, 2).map(p => `   • ${p.title} (${p.durationWeeks} weeks)`).join('\n')}` : ''}

Keep up the great work! What would you like to focus on next?`;
  }

  if (messageLower.includes('first project') || messageLower.includes('project 1') || messageLower.includes('brand protection') || messageLower.includes('chatbot')) {
    const project = projects[0];
    return `Let's talk about your first project: "${project.title}"!

🎯 What You'll Build:
${project.description}

⏱️ Timeline: ${project.durationWeeks} weeks (${project.estimatedHours} hours total)
🎓 Difficulty: ${project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}

📚 Tech Stack:
${project.techStack.map(tech => `• ${tech}`).join('\n')}

✅ Skills You'll Demonstrate:
${project.skillsDemonstrated.map(skill => `• ${skill}`).join('\n')}

📋 Milestones:
${project.milestones.map((m, i) => `${i + 1}. Week ${m.weekNumber}: ${m.title} (${m.estimatedHours}h)`).join('\n')}

💡 Why This Project is Perfect for You:
This directly showcases your AWS PartyRock and persona design experience from Amazon! You've already prototyped similar AI assistants internally - now you'll build a production-ready version for your portfolio.

Ready to start? I can guide you through Week 1: "${project.milestones[0].title}"`;
  }

  if (messageLower.includes('week 1') || messageLower.includes('milestone 1') || messageLower.includes('getting started') || messageLower.includes('start')) {
    const currentProject = projects.find(p => p.status === 'in_progress') || projects[0];
    const firstMilestone = currentProject.milestones[0];

    return `Week 1: ${firstMilestone.title}

⏱️ Estimated time: ${firstMilestone.estimatedHours} hours
📅 With ${userProfile.weeklyHours} hours/week, you can complete this milestone this week!

📝 Step-by-Step Guide:

**Day 1-2: Define Your Chatbot Persona**
Create a document answering:
• Chatbot purpose: "Help Brand Protection investigators assess counterfeit listings"
• Target users: New investigators (training) + Experienced investigators (decision support)
• Key capabilities: Diagnostic questions, red flag identification, investigation checklist
• Tone: Professional but friendly, methodical, educational

**Day 3-4: Design Conversation Flow**
Map out 3 conversation paths:
1. New Product Listing Review
2. Escalation Investigation
3. Training Mode

**Day 5: Write Master Prompt**
This is your chatbot's "brain" - the system prompt that guides all responses.

💡 Tips from Your Experience:
• Think about the investigation workflows you've documented at Amazon
• Use your SOP writing skills to structure the conversation flow
• Apply your persona design experience from AgentZ/PartyRock prototypes

📦 Deliverables:
✓ Persona definition document
✓ Conversation flow diagrams (can be simple text)
✓ Master prompt (system instructions)

Need help with any specific part? Ask me:
• "How do I write a good master prompt?"
• "What should the conversation flow look like?"
• "Show me an example"`;
  }

  if (messageLower.includes('tech stack') || messageLower.includes('technology') || messageLower.includes('tools')) {
    return `Here's your complete tech stack across all 5 projects (all free!):

☁️ **Cloud & AI Services:**
• AWS PartyRock - No-code AI app builder
• AWS Bedrock - Generative AI service
• AWS SageMaker - ML model training & deployment
• AWS QuickSight - Data visualization
• HuggingFace - ML models & APIs

💻 **Development:**
• React + Vite - Frontend (you're using this now!)
• Python - Backend & ML (you'll learn basics)
• FastAPI - Python web framework
• Supabase - Database & authentication
• Tailwind CSS - Styling (already configured!)

🛠️ **Tools:**
• GitHub - Version control & portfolio
• VS Code - Code editor
• Google Colab - Python notebooks (free GPUs!)
• Loom - Demo videos
• Canva - Project thumbnails

📚 **Learning Resources:**
• AWS Skill Builder (free courses)
• freeCodeCamp (Python tutorials)
• React.dev (official React docs)
• HuggingFace tutorials

All services have generous free tiers that are perfect for learning and portfolio projects. You won't need to spend money!

Need help setting up any specific tool?`;
  }

  if (messageLower.includes('learning') || messageLower.includes('resource') || messageLower.includes('tutorial') || messageLower.includes('course')) {
    return `Personalized Learning Resources for You:

🎯 **For Project 1 (Brand Protection Chatbot):**
• AWS PartyRock Getting Started: partyrock.aws
• Prompt Engineering Guide: promptingguide.ai
• Your internal Amazon experience with AgentZ & PartyRock!

🐍 **Python Basics (for Projects 3-5):**
• freeCodeCamp Python Course (4-5 hours): youtube.com/watch?v=rfscVS0vtbw
• Python for Data Analysis: kaggle.com/learn/python

🤖 **Machine Learning Fundamentals:**
• Google's ML Crash Course (free): developers.google.com/machine-learning/crash-course
• AWS SageMaker tutorials: aws.amazon.com/getting-started/hands-on/build-train-deploy-machine-learning-model-sagemaker

📊 **Data Visualization:**
• AWS QuickSight tutorials: aws.amazon.com/quicksight/resources
• Dashboard Design Best Practices: your own experience building dashboards at Amazon!

⚛️ **React (for advanced projects):**
• React Official Tutorial: react.dev/learn
• You're already using React in this app!

📺 **AWS Certifications (you already have these! 🎉):**
Your AWS Cloud Practitioner and AI Practitioner certifications give you a huge advantage.

Would you like detailed resources for a specific project or skill?`;
  }

  if (messageLower.includes('next') || messageLower.includes('what should i')) {
    const inProgress = projects.find(p => p.status === 'in_progress');
    const nextProject = projects.find(p => p.status === 'not_started');

    if (inProgress) {
      const nextMilestone = inProgress.milestones.find(m => m.status === 'pending');
      if (nextMilestone) {
        return `Your next step: Continue with "${inProgress.title}"

📍 Current Milestone: ${nextMilestone.title}
⏱️ Estimated time: ${nextMilestone.estimatedHours} hours
📅 Week ${nextMilestone.weekNumber} of ${inProgress.durationWeeks}

${nextMilestone.description}

Would you like detailed guidance for this milestone? Just ask:
"Help me with [milestone name]"`;
      } else {
        return `Great progress on "${inProgress.title}"! 🎉

All milestones are complete. Next steps:
1. ✅ Mark the project as completed
2. 📝 Create your GitHub repository
3. 📱 Post on LinkedIn
4. 🚀 Start your next project: "${nextProject?.title}"

Ready to move to the next project?`;
      }
    } else if (nextProject) {
      return `Ready to start your next project: "${nextProject.title}"!

🎯 Overview:
${nextProject.description}

⏱️ Duration: ${nextProject.durationWeeks} weeks
🎓 Difficulty: ${nextProject.difficulty.charAt(0).toUpperCase() + nextProject.difficulty.slice(1)}

This builds on skills from your previous projects. Would you like:
• Detailed project breakdown
• Week 1 guidance
• Setup instructions`;
    } else {
      return `Congratulations! 🎉 You've completed all 5 projects!

Now it's time to:
1. 📝 Polish your GitHub portfolio
2. 📱 Update your LinkedIn with all projects
3. 📄 Update your resume
4. 🎯 Start applying to AI/ML roles!

You've built:
${projects.map(p => `✓ ${p.title}`).join('\n')}

These projects demonstrate end-to-end AI/ML skills. You're ready!

Need help with:
• Interview preparation
• Portfolio optimization
• Resume updates
• Job search strategy`;
    }
  }

  if (messageLower.includes('help') || messageLower.includes('stuck') || messageLower.includes('problem')) {
    return `I'm here to help! What are you working on?

I can assist with:

📚 **Project Guidance:**
• Understanding project requirements
• Breaking down milestones
• Tech stack explanations
• Best practices

💻 **Technical Help:**
• Setting up tools
• Finding tutorials
• Understanding concepts
• Debugging approaches

📊 **Progress & Planning:**
• Tracking your progress
• Adjusting timeline
• Prioritizing tasks
• Managing weekly hours

🎯 **Career Strategy:**
• Portfolio optimization
• LinkedIn showcase
• Interview preparation
• Resume updates

Tell me specifically what you're working on or struggling with, and I'll provide targeted guidance!`;
  }

  if (messageLower.includes('portfolio') || messageLower.includes('github') || messageLower.includes('showcase')) {
    return `Portfolio Showcase Strategy:

📂 **GitHub Structure:**
Your GitHub should have:
• 1 repo per project (5 total)
• Professional README for each
• Screenshots/demo videos
• Clear documentation
• Live demo links where applicable

📝 **README Template:**
\`\`\`
# [Project Name]

## Problem Statement
[What problem does this solve?]

## Solution
[Your approach]

## Technical Implementation
• Platform/Tech Stack
• Key Features
• AI/ML components

## Results & Impact
[Metrics and outcomes]

## Demo
[Link to live demo]

## Skills Demonstrated
[List key skills]
\`\`\`

📱 **LinkedIn Strategy:**
Post about each project when completed:
• 🎯 Problem you solved
• ✅ What you built
• 🛠️ Tech stack used
• 📊 Results/impact
• 🔗 Links to demo & GitHub
• #hashtags: #AI #MachineLearning #AWS

💼 **Resume Addition:**
Each project becomes a bullet point:
"[Project Name] | [Tech Stack]
• [Key achievement with metric]
• [Technical implementation highlight]
• [Business impact]
• [Links]"

Your Amazon experience + these projects = compelling AI/ML candidate!

Ready to showcase your first project?`;
  }

  return `I'm your AI Career Tutor, here to guide you through your personalized AI/ML learning journey!

Based on your question, I can help with:

• **Project guidance** - Ask about any of your 5 projects
• **Technical help** - Questions about tools, concepts, or implementation
• **Progress tracking** - Check your status and next steps
• **Learning resources** - Get tutorials and courses
• **Portfolio strategy** - GitHub, LinkedIn, resume tips
• **Career planning** - Timeline, goals, interview prep

Try asking:
• "Tell me about my first project"
• "What should I do next?"
• "Show me my progress"
• "Help me with [specific topic]"
• "What learning resources do you recommend?"

How can I help you today, ${userProfile.name}?`;
}
