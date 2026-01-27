import React from 'react';
// Reusing the same CSS as InternshipCard for a consistent look
import '../InternshipCard/InternshipCard.css';

function MastersCard({ experience, onCardClick }) {
  return (
    <div className="internship-card" onClick={() => onCardClick(experience)}>
      <img src={experience.photoUrl} alt={experience.name} className="internship-photo" />
      <div className="internship-summary">
        <h3 className="internship-name">{experience.name}</h3>
        {/* Displaying university and program */}
        <p className="internship-detail">{experience.university} | {experience.program}</p>
        <span className="internship-year">{experience.year}</span>
      </div>
    </div>
  );
}

export default MastersCard;
