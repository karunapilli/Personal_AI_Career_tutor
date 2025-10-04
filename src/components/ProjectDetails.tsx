import { X, Calendar, Clock, TrendingUp, CheckCircle2, Circle, PlayCircle, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  onUpdateMilestone: (projectId: string, milestoneId: string, newStatus: 'pending' | 'in_progress' | 'completed') => void;
}

export default function ProjectDetails({ project, onClose, onUpdateMilestone }: ProjectDetailsProps) {
  const completedMilestones = project.milestones.filter(m => m.status === 'completed').length;
  const totalMilestones = project.milestones.length;
  const progress = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;

  const milestoneStatusConfig = {
    pending: {
      icon: Circle,
      color: 'text-gray-400',
      bg: 'bg-gray-100',
      text: 'Pending'
    },
    in_progress: {
      icon: PlayCircle,
      color: 'text-blue-500',
      bg: 'bg-blue-100',
      text: 'In Progress'
    },
    completed: {
      icon: CheckCircle2,
      color: 'text-green-500',
      bg: 'bg-green-100',
      text: 'Completed'
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Duration</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{project.durationWeeks} weeks</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-2 text-green-700 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Total Hours</span>
              </div>
              <p className="text-2xl font-bold text-green-900">
                {project.milestones.reduce((sum, m) => sum + m.estimatedHours, 0)}h
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-2 text-orange-700 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Difficulty</span>
              </div>
              <p className="text-2xl font-bold text-orange-900 capitalize">{project.difficulty}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-gray-700">Overall Progress</span>
              <span className="font-medium text-gray-900">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {completedMilestones} of {totalMilestones} milestones completed
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills Demonstrated</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.skillsDemonstrated.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Milestones</h3>
            <div className="space-y-3">
              {project.milestones.map((milestone) => {
                const config = milestoneStatusConfig[milestone.status];
                const MilestoneIcon = config.icon;

                return (
                  <div
                    key={milestone.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                          <MilestoneIcon className={`w-5 h-5 ${config.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span>Week {milestone.weekNumber}</span>
                            <span>{milestone.estimatedHours} hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {milestone.status !== 'pending' && (
                        <button
                          onClick={() => onUpdateMilestone(project.id, milestone.id, 'pending')}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                        >
                          Mark as Pending
                        </button>
                      )}
                      {milestone.status !== 'in_progress' && (
                        <button
                          onClick={() => onUpdateMilestone(project.id, milestone.id, 'in_progress')}
                          className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                        >
                          Start Working
                        </button>
                      )}
                      {milestone.status !== 'completed' && (
                        <button
                          onClick={() => onUpdateMilestone(project.id, milestone.id, 'completed')}
                          className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                        >
                          Mark Complete
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {(project.githubUrl || project.demoUrl) && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Links</h3>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    GitHub Repository
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
