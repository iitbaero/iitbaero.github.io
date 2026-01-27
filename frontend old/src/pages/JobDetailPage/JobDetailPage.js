import React from 'react';
// Reusing the same CSS as InternshipDetailPage
import '../InternshipDetailPage/InternshipDetailPage.css';

function JobDetailPage({ experience, onBackClick }) {
  if (!experience) {
    return <div>Loading...</div>;
  }

  return (
    <div className="animate-fade-in">
      <button onClick={onBackClick} className="back-button-career">&larr; Back to Jobs</button>
      <div className="detail-container">
        <div className="detail-header">
          {/* Corrected alt text */}
          <img src={experience.photoUrl} alt={experience.name} className="detail-photo" />
          <div className="detail-header-info">
            <h1 className="detail-name">{experience.name}</h1>
            <h2 className="detail-role">{experience.profile} at {experience.company}</h2>
            <span className="detail-year">{experience.year}</span>
          </div>
        </div>
        <div className="detail-section">
          <h3>Preparation Strategy</h3>
          <p>{experience.preparation}</p>
        </div>
        <div className="detail-section">
          <h3>Job Experience</h3>
          <p>{experience.experience}</p>
        </div>
      </div>
    </div>
  );
}

export default JobDetailPage;
