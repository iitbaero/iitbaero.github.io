import React from 'react';
import './CouncilPage.css';
import { councilMembers } from '../../data/councilMembers';
import MemberCard from '../../components/MemberCard/MemberCard';

function CouncilPage() {
  // Filter members into their respective categories
  const dampcMembers = councilMembers.filter(m => m.category === 'DAMPC');
  const continuingDampMembers = councilMembers.filter(m => m.category === 'Continuing DAMP');
  const dampMembers = councilMembers.filter(m => m.category === 'DAMP');

  return (
    <div className="animate-fade-in">
      <h1 className="page-main-title">DAMP Council</h1>

      {/* --- DAMPC Section --- */}
      <div className="category-section">
        <h2 className="category-title">DAMPC</h2>
        <div className="members-grid dampc-grid">
          {dampcMembers.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* --- Continuing DAMP Section --- */}
      <div className="category-section">
        <h2 className="category-title">Continuing DAMPs</h2>
        <div className="members-grid continuing-damp-grid">
          {continuingDampMembers.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* --- DAMP Section --- */}
      <div className="category-section">
        <h2 className="category-title">DAMP Members</h2>
        <div className="members-grid damp-grid">
          {dampMembers.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default CouncilPage;
