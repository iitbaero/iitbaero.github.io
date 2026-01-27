import React from 'react';
import './FacultyAdvisorsPage.css';
import { facultyAdvisors } from '../../data/facultyAdvisors';
import FacultyCard from '../../components/FacultyCard/FacultyCard';

function FacultyAdvisorsPage() {
  // Group Advisors by batch year
  const groupedAdvisors = facultyAdvisors.reduce((acc, advisor) => {
    (acc[advisor.batch] = acc[advisor.batch] || []).push(advisor);
    return acc;
  }, {});

  // Get sorted batch years, from newest to oldest
  const sortedBatches = Object.keys(groupedAdvisors).sort((a, b) => b - a);

  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Faculty Advisors</h1>
      
      {sortedBatches.map(batch => (
        <div key={batch} className="batch-section">
          <h2 className="batch-title">Batch of {batch}</h2>
          {/* Corrected className to "advisors-grid" (lowercase 'a') */}
          <div className="advisors-grid">
            {groupedAdvisors[batch].map(advisor => (
              // Corrected prop name to "advisor" (lowercase 'a')
              <FacultyCard key={advisor.id} advisor={advisor} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FacultyAdvisorsPage;
