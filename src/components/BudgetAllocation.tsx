import React from 'react';
import { useProjects } from '../contexts/ProjectContext';
import { DollarSign } from 'lucide-react';

const BudgetAllocation: React.FC = () => {
  const { projects, updateProjectBudget } = useProjects();

  const handleBudgetChange = (id: number, budget: string) => {
    updateProjectBudget(id, Number(budget));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Budget Allocation</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="number"
                      value={project.budget}
                      onChange={(e) => handleBudgetChange(project.id, e.target.value)}
                      className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetAllocation;