import React from 'react';
import './InternshipCard.css'; 
import { User, Briefcase, BarChart2 } from 'lucide-react';

function InternshipCard({ experience, onCardClick }) {
  const { name, company, domain } = experience;

  return (
    <div className="internship-card" onClick={() => onCardClick(experience)}>
      {/* Header: Company */}
      <div className="internship-card-header">
        <Briefcase size={20} className="internship-card-icon" />
        <h3 className="internship-card-title">{company}</h3>
      </div>
      
      {/* Body: Domain & Student Name */}
      {/* Both info rows are now inside the body, which removes the large gap */}
      <div className="internship-card-body">
        <div className="info-row2">
            <BarChart2 size={16} />
            <span>{domain}</span>
        </div>
        <div className="info-row">
          <User size={16} />
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}

export default InternshipCard;
