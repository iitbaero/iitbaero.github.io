import React from 'react';
import './MemberCard.css';

function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img 
        src={member.imageUrl} 
        alt={`Portrait of ${member.name}`} 
        className="member-photo"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/ff0000/ffffff?text=Error'; }}
      />
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-email">{member.email}</p>
      </div>
    </div>
  );
}

export default MemberCard;
