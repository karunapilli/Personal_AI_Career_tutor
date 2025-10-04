import { useState } from 'react';
import { BookOpen, MessageSquare, LayoutDashboard, GraduationCap } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';
import ProgressDashboard from './components/ProgressDashboard';
import { defaultUserProfile } from './data/userProfile';
import { defaultProjects } from './data/projects';
import { generateAIResponse } from './utils/aiTutor';
import { ChatMessage, Project } from './types';

type Tab = 'dashboard' | 'projects' | 'chat';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [projects, setProjects] = useState(defaultProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleSendMessage = (message: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    const aiResponse = generateAIResponse(
      message,
      defaultUserProfile,
      projects,
      chatMessages
    );

    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date()
    };

    setChatMessages([...chatMessages, userMessage, assistantMessage]);
  };

  const handleUpdateMilestone = (
    projectId: string,
    milestoneId: string,
    newStatus: 'pending' | 'in_progress' | 'completed'
  ) => {
    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === projectId) {
          const updatedMilestones = project.milestones.map(milestone =>
            milestone.id === milestoneId
              ? { ...milestone, status: newStatus, completedAt: newStatus === 'completed' ? new Date().toISOString() : undefined }
              : milestone
          );

          const allCompleted = updatedMilestones.every(m => m.status === 'completed');
          const anyInProgress = updatedMilestones.some(m => m.status === 'in_progress');

          let projectStatus = project.status;
          if (allCompleted) {
            projectStatus = 'completed';
          } else if (anyInProgress || updatedMilestones.some(m => m.status === 'completed')) {
            projectStatus = 'in_progress';
          } else {
            projectStatus = 'not_started';
          }

          const updatedProject = {
            ...project,
            milestones: updatedMilestones,
            status: projectStatus
          };

          if (selectedProject?.id === projectId) {
            setSelectedProject(updatedProject);
          }

          return updatedProject;
        }
        return project;
      })
    );
  };

  const tabs = [
    { id: 'dashboard' as Tab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects' as Tab, label: 'Projects', icon: BookOpen },
    { id: 'chat' as Tab, label: 'AI Tutor', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Career Tutor</h1>
                <p className="text-sm text-gray-600">Your Personalized AI/ML Learning Path</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium border border-green-200">
                {projects.filter(p => p.status === 'completed').length}/{projects.length} Projects
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <ProgressDashboard userProfile={defaultUserProfile} projects={projects} />
        )}

        {activeTab === 'projects' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Project Roadmap</h2>
              <p className="text-gray-600">
                5 carefully designed projects to showcase your AI/ML skills
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelectProject={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="h-[calc(100vh-16rem)]">
            <ChatInterface messages={chatMessages} onSendMessage={handleSendMessage} />
          </div>
        )}
      </main>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onUpdateMilestone={handleUpdateMilestone}
        />
      )}
    </div>
  );
}

export default App;
