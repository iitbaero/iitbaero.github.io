import React from 'react';
// Reusing the same CSS as InternshipCard for a consistent look
import '../InternshipCard/InternshipCard.css';

function JobCard({ experience, onCardClick }) {
  return (
    <div className="internship-card" onClick={() => onCardClick(experience)}>
      {/* Corrected alt text */}
      <img src={experience.photoUrl} alt={experience.name} className="internship-photo" />
      <div className="internship-summary">
        <h3 className="internship-name">{experience.name}</h3>
        <p className="internship-detail">{experience.company} | {experience.profile}</p>
        <span className="internship-year">{experience.year}</span>
      </div>
    </div>
  );
}

export default JobCard;
