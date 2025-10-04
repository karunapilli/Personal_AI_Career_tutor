import { Target, Calendar, TrendingUp, Award } from 'lucide-react';
import { UserProfile, Project } from '../types';

interface ProgressDashboardProps {
  userProfile: UserProfile;
  projects: Project[];
}

export default function ProgressDashboard({ userProfile, projects }: ProgressDashboardProps) {
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const inProgressProjects = projects.filter(p => p.status === 'in_progress').length;
  const totalProjects = projects.length;
  const overallProgress = totalProjects > 0 ? (completedProjects / totalProjects) * 100 : 0;

  const totalWeeks = projects.reduce((sum, p) => sum + p.durationWeeks, 0);
  const completedWeeks = projects
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.durationWeeks, 0);

  const inProgressProject = projects.find(p => p.status === 'in_progress');
  const currentWeek = inProgressProject
    ? completedWeeks + (inProgressProject.milestones.filter(m => m.status === 'completed').length)
    : completedWeeks;

  const weeksRemaining = totalWeeks - currentWeek;
  const estimatedCompletionWeeks = Math.ceil(weeksRemaining);

  const totalSkills = new Set(
    projects.flatMap(p => p.skillsDemonstrated)
  ).size;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {userProfile.name}!</h2>
        <p className="text-blue-100">
          Keep up the great work on your AI/ML learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Overall Progress</span>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-gray-900">{Math.round(overallProgress)}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              {completedProjects} of {totalProjects} projects completed
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Timeline</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">Week {currentWeek}</p>
          <p className="text-sm text-gray-600 mt-2">of {totalWeeks} total weeks</p>
          <p className="text-sm text-gray-600">~{estimatedCompletionWeeks} weeks remaining</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Weekly Hours</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{userProfile.weeklyHours}h</p>
          <p className="text-sm text-gray-600 mt-2">per week committed</p>
          <p className="text-sm text-gray-600">
            {inProgressProject ? `Working on: ${inProgressProject.title.slice(0, 20)}...` : 'Ready to start!'}
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Skills Building</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalSkills}</p>
          <p className="text-sm text-gray-600 mt-2">unique skills across projects</p>
          <p className="text-sm text-gray-600">Portfolio-ready competencies</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Career Goals</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Target Roles</p>
            <div className="flex flex-wrap gap-2">
              {userProfile.targetRoles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Career Goals</p>
            <p className="text-sm text-gray-600">{userProfile.careerGoals}</p>
          </div>
          {userProfile.targetDate && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Target Application Date</p>
              <p className="text-sm text-gray-600">
                {new Date(userProfile.targetDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{completedProjects}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{inProgressProjects}</p>
            <p className="text-sm text-gray-600">In Progress</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-600">{totalProjects - completedProjects - inProgressProjects}</p>
            <p className="text-sm text-gray-600">Upcoming</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">{userProfile.certifications.length}</p>
            <p className="text-sm text-gray-600">Certifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
