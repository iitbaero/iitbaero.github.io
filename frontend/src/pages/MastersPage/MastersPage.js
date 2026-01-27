import React from 'react';
// Reusing the same CSS as InternshipsPage
import '../InternshipsPage/InternshipsPage.css'; 
// import { mastersExperiences } from '../../data/masters';
// import MastersCard from '../../components/MastersCard/MastersCard';

function MastersPage({ onMastersSelect }) {
  return (
    // <div className="animate-fade-in">
    //   <h1 className="page-main-title">Higher Studies Experiences</h1>
    //   <div className="internships-grid">
    //     {mastersExperiences.map(experience => (
    //       <MastersCard 
    //         key={experience.id} 
    //         experience={experience} 
    //         onCardClick={onMastersSelect}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="animate-fade-in coming-soon-container">
    <h1 className="page-main-title">Masters Experiences</h1>
    <div className="coming-soon-content">
      <h2 className="coming-soon-text"> Coming Soon </h2>
      <p className="coming-soon-subtext">
        This section is under construction. Stay tuned for updates!
      </p>
    </div>
  </div>
  );
}

export default MastersPage;
