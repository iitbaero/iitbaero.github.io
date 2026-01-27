import React from 'react';
import './InternshipsPage.css';
import { internships } from '../../data/internships';
import InternshipCard from '../../components/InternshipCard/InternshipCard';

function InternshipsPage({ onInternshipSelect }) {
  
  // Sort internships alphabetically by company name
  const sortedInternships = [...internships].sort((a, b) => 
    a.company.localeCompare(b.company)
  );

  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Internship Experiences</h1>

      {/* Removed the category grouping logic */}
      {/* All internships are now rendered in a single grid */}
      <div className="internship-grid">
        {sortedInternships.map(experience => (
          <InternshipCard 
            key={experience.id} 
            experience={experience} 
            onCardClick={onInternshipSelect} 
          />
        ))}
      </div>
    </div>
  );
}

export default InternshipsPage;

