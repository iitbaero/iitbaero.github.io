import React from 'react';
// Reusing the same CSS as InternshipsPage
import '../InternshipsPage/InternshipsPage.css'; 
// import { jobs } from '../../data/jobs';
// import JobCard from '../../components/JobCard/JobCard';
import './JobPage.css'

function JobsPage({ onJobSelect }) {
  return (
    // <div className="animate-fade-in">
    //   <h1 className="page-main-title">Job Experiences</h1>
    //   <div className="internships-grid">
    //     {jobs.map(experience => (
    //       <JobCard 
    //         key={experience.id} 
    //         experience={experience} 
    //         onCardClick={onJobSelect}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="animate-fade-in coming-soon-container">
      <h1 className="page-main-title">Job Experiences</h1>
      <div className="coming-soon-content">
        <h2 className="coming-soon-text"> Coming Soon </h2>
        <p className="coming-soon-subtext">
          This section is under construction. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}

export default JobsPage;
