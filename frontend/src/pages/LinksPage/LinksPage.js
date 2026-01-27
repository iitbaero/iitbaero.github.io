import React from 'react';
// Reusing styles from FacultyAdvisorsPage for section titles
import '../FacultyAdvisorsPage/FacultyAdvisorsPage.css'; 
import { importantLinks } from '../../data/links';
import LinkCard from '../../components/LinkCard/LinkCard';

function LinksPage() {
  // Group links by category
  const groupedLinks = importantLinks.reduce((acc, link) => {
    (acc[link.category] = acc[link.category] || []).push(link);
    return acc;
  }, {});

  // Define the order of categories
  const categoryOrder = ['Academic Resources', 'Career Resources', 'Community & Social'];

  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">Important Links</h1>
      
      {categoryOrder.map(category => (
        groupedLinks[category] && (
          <div key={category} className="batch-section">
            <h2 className="batch-title">{category}</h2>
            <div className="advisors-grid" style={{gridTemplateColumns: '1fr'}}>
              {groupedLinks[category].map(link => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default LinksPage;
