import React from 'react';
import './ProjectDetailPage.css';
import { ArrowLeft, User, Building,Building2, Calendar, Clock, Star, FileText, Link as LinkIcon } from 'lucide-react';
import StarRating from '../../components/StarRating/StarRating';

function ProjectDetailPage({ project, onBackClick }) {
  if (!project) {
    return (
      <div className="animate-fade-in">
        <button onClick={onBackClick} className="back-button">
          <ArrowLeft size={18} /> Back to Projects
        </button>
        <p>No project selected.</p>
      </div>
    );
  }

  const displayName = project.anonymous ? 'Anonymous' : project.studentName;

  return (
    <div className="project-detail-page animate-fade-in">
      <button onClick={onBackClick} className="back-button">
        <ArrowLeft size={18} /> Back to All Projects
      </button>

      {/* Header */}
      <div className="project-header">
        <span className="project-type-badge">{project.projectType}</span>
        <h1 className="project-topic">{project.topic}</h1>
        <div className="header-meta">
          <span><User size={16} /> By: <strong>{displayName}</strong></span>
          <span><Building size={16} /> Prof. {project.professor} </span>
          <span><Building2 size={16} /> {project.department}</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="project-grid">
        {/* Left Column: Description & Learnings */}
        <div className="project-main-content">
          <div className="detail-section">
            <h2>Project Description</h2>
            <p>{project.description}</p>
          </div>
          <div className="detail-section">
            <h2>What I Learned</h2>
            <p>{project.learning}</p>
          </div>
          <div className="detail-section">
            <h2>Experience with the Professor</h2>
            <p>{project.profExperience}</p>
          </div>
          {project.reportLink && (
            <div className="detail-section">
              <h2>Project Report</h2>
              <a href={project.reportLink} target="_blank" rel="noopener noreferrer" className="report-link">
                <LinkIcon size={18} /> View Report
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Key Details */}
        <aside className="project-sidebar">
          <div className="sidebar-card">
            <h3>Key Details</h3>
            <div className="detail-item">
              <Star size={16} />
              <span><strong>Overall Rating:</strong> <StarRating rating={project.rating} /> ({project.rating}/10)</span>
            </div>
            <div className="detail-item">
              <Calendar size={16} />
              <span><strong>Duration:</strong> {project.duration}</span>
            </div>
            <div className="detail-item">
              <Clock size={16} />
              <span><strong>Weekly Time:</strong> {project.timePerWeek}</span>
            </div>
             <div className="detail-item">
              <FileText size={16} />
              <span><strong>Credits:</strong> {project.credits}</span>
            </div>
            <div className="detail-item">
              <span><strong>Recommend:</strong> {project.recommend}</span>
            </div>
             <div className="detail-item">
              <span><strong>Industry Impact:</strong> {project.impact}</span>
            </div>
            <div className="detail-item">
              <span><strong>Lab Cooperation:</strong> {project.labCooperation}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
