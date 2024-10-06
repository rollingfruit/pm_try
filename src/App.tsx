import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProjectProvider } from './contexts/ProjectContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProjectKanban from './components/ProjectKanban';
import BudgetAllocation from './components/BudgetAllocation';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/projects" element={<PrivateRoute><ProjectKanban /></PrivateRoute>} />
                <Route path="/budget" element={<PrivateRoute><BudgetAllocation /></PrivateRoute>} />
              </Routes>
            </div>
          </div>
        </Router>
      </ProjectProvider>
    </AuthProvider>
  );
}

export default App;