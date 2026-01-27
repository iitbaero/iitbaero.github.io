import React from 'react';
import './InternshipDetailPage.css';
import { ArrowLeft, User, Briefcase, BarChart2, Star, CheckCircle, XCircle, FileText, Share2, Clipboard } from 'lucide-react';

function InternshipDetailPage({ experience, onBackClick }) {
  if (!experience) {
    return <div>Loading...</div>;
  }

  // Helper component for text sections
  const DetailSection = ({ title, content }) => (
    <div className="detail-section">
      <h3 className="detail-section-title">{title}</h3>
      <p className="detail-section-content">{content}</p>
    </div>
  );

  // Helper component for stat boxes
  const StatBox = ({ icon, label, value }) => (
    <div className="stat-box">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
      </div>
    </div>
  );

  const getPPOValue = (count) => {
    if (count === -1) return 'N/A (Univ/Research)';
    if (count === 0) return 'No PPOs Offered';
    return `${count} PPO(s) Offered`;
  };

  return (
    <div className="internship-detail-page animate-fade-in">
      <button onClick={onBackClick} className="back-button">
        <ArrowLeft size={18} /> Back to All Internships
      </button>

      {/* --- HEADER --- */}
      <div className="internship-detail-header">
        <h1 className="internship-company">{experience.company}</h1>
        <div className="header-meta">
          <span><BarChart2 size={16} /> <strong>Role:</strong> {experience.domain}</span>
          <span><User size={16} /> <strong>Student:</strong> {experience.name}</span>
        </div>
      </div>

      {/* --- KEY INFO GRID --- */}
      <div className="stats-grid">
        <StatBox 
          icon={experience.source === 'Placement Cell' ? <CheckCircle size={20} /> : <Share2 size={20} />} 
          label="Source" 
          value={experience.source} 
        />
        <StatBox 
          icon={<Star size={20} />} 
          label="PPOs Offered" 
          value={getPPOValue(experience.ppoCount)} 
        />
      </div>

      {/* --- EXPERIENCE --- */}
      <div className="experience-section">
        <DetailSection title="My Role & Experience" content={experience.experience} />
      </div>

      {/* --- PREPARATION & APPLICATION --- */}
      <div className="prep-section">
        <DetailSection title="How I Prepared" content={experience.preparation} />
        <DetailSection title="Application Process & Stages" content={experience.stages} />
        {experience.approach !== 'N/A' && (
           <DetailSection title="How I Secured the Opportunity" content={experience.approach} />
        )}
      </div>

      {/* --- RESUME LINK --- */}
      {experience.resumeLink && (
        <a href={experience.resumeLink} target="_blank" rel="noopener noreferrer" className="report-link-button">
          <FileText size={18} /> View Resume/CV
        </a>
      )}
    </div>
  );
}

export default InternshipDetailPage;
