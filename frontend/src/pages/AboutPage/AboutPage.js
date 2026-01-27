import React from 'react';

/**
 * AboutPage component - DAMP ebong Aerospace Engineering bishoye tottho prodon kore.
 * Styling ekhon ei file-ei thakbe jate resolution error na hoy.
 */
function AboutPage() {
  return (
    <div className="animate-fade-in min-h-screen py-8">

      <div className="page-card">
        <h1 className="page-title">
          About DAMP & Aerospace Engineering
        </h1>

        <p className="page-text">
          The Department Academic Mentorship Program (DAMP) is a student-driven initiative 
          aimed at supporting the academic, professional, and personal growth of students 
          within the Aerospace Engineering Department at IIT Bombay. Through structured 
          peer mentorship, DAMP connects students with experienced seniors who provide 
          guidance on coursework, projects, research opportunities, and navigating life 
          at the institute, fostering a supportive and collaborative environment.
        </p>

        <h2 className="page-title" style={{ fontSize: '1.75rem', marginTop: '2.5rem' }}>
          Welcome to the Department
        </h2>

        <p className="page-text">
          The Department of Aerospace Engineering offers a rigorous, multidisciplinary 
          curriculum designed to meet the needs of the aerospace industry and research 
          laboratories. A balanced mix of core and elective courses enables students 
          to build strong fundamentals while developing expertise in their chosen areas.
        </p>

        <p className="page-text">
          Students apply theory to practice through exploratory projects (SLPs) and 
          B.Tech Projects (BTPs), gaining exposure to cutting-edge research and 
          real-world problem solving. With a diverse student community and ample 
          opportunities for collaboration and growth, the department encourages 
          students to make the most of their academic journey at IIT Bombay.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;