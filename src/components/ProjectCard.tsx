import { Calendar, Clock, TrendingUp, CheckCircle2, Circle, PlayCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export default function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const completedMilestones = project.milestones.filter(m => m.status === 'completed').length;
  const totalMilestones = project.milestones.length;
  const progress = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;

  const statusConfig = {
    not_started: {
      icon: Circle,
      color: 'text-gray-400',
      bg: 'bg-gray-100',
      text: 'Not Started',
      badge: 'bg-gray-100 text-gray-700'
    },
    in_progress: {
      icon: PlayCircle,
      color: 'text-blue-500',
      bg: 'bg-blue-100',
      text: 'In Progress',
      badge: 'bg-blue-100 text-blue-700'
    },
    completed: {
      icon: CheckCircle2,
      color: 'text-green-500',
      bg: 'bg-green-100',
      text: 'Completed',
      badge: 'bg-green-100 text-green-700'
    }
  };

  const config = statusConfig[project.status];
  const StatusIcon = config.icon;

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 border-green-200',
    intermediate: 'bg-orange-100 text-orange-700 border-orange-200',
    advanced: 'bg-red-100 text-red-700 border-red-200'
  };

  return (
    <div
      onClick={() => onSelectProject(project)}
      className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg ${config.bg} flex items-center justify-center`}>
              <StatusIcon className={`w-5 h-5 ${config.color}`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <span className={`text-xs px-2 py-1 rounded-full ${config.badge} font-medium`}>
                {config.text}
              </span>
            </div>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full border ${difficultyColors[project.difficulty]} font-medium`}>
            {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{project.durationWeeks} weeks</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{project.milestones.reduce((sum, m) => sum + m.estimatedHours, 0)}h total</span>
            </div>
          </div>

          {project.status !== 'not_started' && (
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">{completedMilestones}/{totalMilestones} milestones</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded border border-gray-200">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <TrendingUp className="w-4 h-4" />
          <span>{project.skillsDemonstrated.length} skills</span>
        </div>
        <button className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
          View Details →
        </button>
      </div>
    </div>
  );
}
