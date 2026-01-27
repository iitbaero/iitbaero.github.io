import React from 'react';
// Reusing the same CSS as InternshipsPage
import '../InternshipsPage/InternshipsPage.css'; 
// import { researchExperiences } from '../../data/research';
// import ResearchCard from '../../components/ResearchCard/ResearchCard';

function ResearchPage({ onResearchSelect }) {
  return (
    // <div className="animate-fade-in">
    //   <h1 className="page-main-title">Research Experiences</h1>
    //   <div className="internships-grid">
    //     {researchExperiences.map(experience => (
    //       <ResearchCard 
    //         key={experience.id} 
    //         experience={experience} 
    //         onCardClick={onResearchSelect}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="animate-fade-in coming-soon-container">
      <h1 className="page-main-title">Research Experiences</h1>
      <div className="coming-soon-content">
        <h2 className="coming-soon-text"> Coming Soon </h2>
        <p className="coming-soon-subtext">
          This section is under construction. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}

export default ResearchPage;
