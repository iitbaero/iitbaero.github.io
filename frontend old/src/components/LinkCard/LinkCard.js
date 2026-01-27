import React from 'react';
import './LinkCard.css';
import { ArrowUpRight } from 'lucide-react';

function LinkCard({ link }) {
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-card">
      <div className="link-info">
        <h3 className="link-name">{link.name}</h3>
        <p className="link-description">{link.description}</p>
      </div>
      <ArrowUpRight className="link-icon" />
    </a>
  );
}

export default LinkCard;
