import React from 'react';
import './FacultyCard.css';
import { User } from 'lucide-react';

// Ensure this component accepts the "advisor" prop
function FacultyCard({ advisor }) {
  // Add a check to prevent crashes if the prop is missing
  if (!advisor) {
    return null; 
  }

  return (
    <div className="faculty-card">
      <div className="faculty-icon">
        <User size={24} />
      </div>
      <div className="faculty-info">
        <h3 className="faculty-name">{advisor.name}</h3>
        <p className="faculty-email">{advisor.email}</p>
      </div>
    </div>
  );
}

export default FacultyCard;
