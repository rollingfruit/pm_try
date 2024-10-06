import React, { createContext, useState, useContext } from 'react';

interface Project {
  id: number;
  name: string;
  status: 'To Do' | 'In Progress' | 'Done';
  budget: number;
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProjectStatus: (id: number, status: Project['status']) => void;
  updateProjectBudget: (id: number, budget: number) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Omit<Project, 'id'>) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  const updateProjectStatus = (id: number, status: Project['status']) => {
    setProjects(projects.map(p => p.id === id ? { ...p, status } : p));
  };

  const updateProjectBudget = (id: number, budget: number) => {
    setProjects(projects.map(p => p.id === id ? { ...p, budget } : p));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProjectStatus, updateProjectBudget }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};