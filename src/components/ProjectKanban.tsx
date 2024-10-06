import React, { useState } from 'react';
import { useProjects } from '../contexts/ProjectContext';
import { Plus } from 'lucide-react';

const ProjectKanban: React.FC = () => {
  const { projects, addProject, updateProjectStatus } = useProjects();
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProjectName.trim()) {
      addProject({ name: newProjectName, status: 'To Do', budget: 0 });
      setNewProjectName('');
    }
  };

  const handleDragStart = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData('text/plain', id.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, status: 'To Do' | 'In Progress' | 'Done') => {
    e.preventDefault();
    const id = Number(e.dataTransfer.getData('text'));
    updateProjectStatus(id, status);
  };

  const renderColumn = (status: 'To Do' | 'In Progress' | 'Done') => (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, status)}
    >
      <h3 className="font-bold mb-4">{status}</h3>
      {projects
        .filter((project) => project.status === status)
        .map((project) => (
          <div
            key={project.id}
            className="bg-white p-3 mb-2 rounded shadow cursor-move"
            draggable
            onDragStart={(e) => handleDragStart(e, project.id)}
          >
            {project.name}
          </div>
        ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Kanban Board</h1>
      <form onSubmit={handleAddProject} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            placeholder="New project name"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderColumn('To Do')}
        {renderColumn('In Progress')}
        {renderColumn('Done')}
      </div>
    </div>
  );
};

export default ProjectKanban;