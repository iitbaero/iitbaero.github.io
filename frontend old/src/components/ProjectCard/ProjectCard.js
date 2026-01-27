import React from 'react';
// Imports its own CSS file
import './ProjectCard.css'; 
// Added Building2 icon import
import { User, Book, Building, Building2 } from 'lucide-react';

function ProjectCard({ project, onProjectSelect }) {
  const { topic, professor, studentName, anonymous, department } = project;
  
  const displayName = anonymous ? 'Anonymous' : studentName;

  return (
    // Updated className to match ProjectCard.css
    <div className="project-card" onClick={() => onProjectSelect(project)}>
      {/* Header: Topic */}
      <div className="project-card-header">
        <Book size={20} className="project-card-icon" />
        <h3 className="project-card-title">{topic}</h3>
      </div>
      
      {/* Department Row */}
      <div className="info-row2">
          <Building2 size={16} />
          <span>{department}</span>
        </div>

      {/* Body: Student & Prof */}
      <div className="project-card-body">
        <div className="info-row">
          <User size={16} />
          <span>{displayName}</span>
        </div>
        <div className="info-row">
          <Building size={16} />
          <span>Prof. {professor}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
