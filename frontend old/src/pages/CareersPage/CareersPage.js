import React from 'react';
import './CareersPage.css';
import CareerCard from '../../components/CareerCard/CareerCard';
import { Briefcase, BookOpen, FlaskConical, GraduationCap } from 'lucide-react';

// Accept 'onNavigate' prop
function CareersPage({ onNavigate }) {
  const careerPaths = [
    {
      title: 'Internships',
      description: 'View experiences from company and research internships.',
      icon: <Briefcase size={32} />,
      page: 'internships', // Page to navigate to
    },
    {
      title: 'Jobs',
      description: 'Explore full-time job experiences from graduated seniors.',
      icon: <BookOpen size={32} />,
      page: 'jobs',
    },
    {
      title: 'Research',
      description: 'Read about research projects, in-house and abroad.',
      icon: <FlaskConical size={32} />,
      page: 'research',
    },
    {
      title: 'Higher Studies (Masters/PhD)',
      description: 'Learn about university applications and higher-ed paths.',
      icon: <GraduationCap size={32} />,
      page: 'masters',
    },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Career Paths</h1>
      <p className="page-subtitle">
        Learn from the experiences of senior students and alumni about various career opportunities after B.Tech.
      </p>

      <div className="careers-grid">
        {careerPaths.map((path) => (
          <CareerCard
            key={path.title}
            icon={path.icon}
            title={path.title}
            description={path.description}
            // Use onNavigate to set the hash
            onClick={() => onNavigate(path.page)}
          />
        ))}
      </div>
    </div>
  );
}

export default CareersPage;
