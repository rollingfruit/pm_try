import React from 'react';
import { useProjects } from '../contexts/ProjectContext';
import { BarChart, Users, DollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { projects } = useProjects();

  const totalProjects = projects.length;
  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0);
  const completedProjects = projects.filter(project => project.status === 'Done').length;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Projects</p>
              <p className="text-3xl font-bold">{totalProjects}</p>
            </div>
            <BarChart className="h-10 w-10 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Budget</p>
              <p className="text-3xl font-bold">${totalBudget.toLocaleString()}</p>
            </div>
            <DollarSign className="h-10 w-10 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Completed Projects</p>
              <p className="text-3xl font-bold">{completedProjects}</p>
            </div>
            <Users className="h-10 w-10 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;