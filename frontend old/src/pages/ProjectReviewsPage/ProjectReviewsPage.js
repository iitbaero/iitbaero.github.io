import React from 'react';
import './ProjectReviewsPage.css';
import { projects } from '../../data/projects'; // Import the new data
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Import the new card

function ProjectReviewsPage({ onProjectSelect }) {
  
  // Categorize projects based on the new data structure
  const categorizedProjects = projects.reduce((acc, project) => {
    const type = project.projectType;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(project);
    return acc;
  }, {});

  // Define the order of categories
  const categories = [
    { key: 'SLP', title: 'SLP (Supervised Learning Project)' },
    { key: 'BTP', title: 'BTP (B.Tech. Project)' },
    { key: 'DDP', title: 'DDP (Dual Degree Project)' },
    { key: 'Other Projects', title: 'Other Projects (R&D, etc.)' },
    { key: 'SURP', title: 'SURP (Summer Undergraduate Research Program)' },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Project Reviews</h1>
      
      {categories.map(category => (
        // Only render the category if it has projects
        categorizedProjects[category.key] && (
          <div key={category.key} className="category-section">
            <h2 className="category-title">{category.title}</h2>
            <div className="category-grid">
              {categorizedProjects[category.key].map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onProjectSelect={onProjectSelect} 
                />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default ProjectReviewsPage;