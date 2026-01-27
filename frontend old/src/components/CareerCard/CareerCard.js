import React from 'react';
import './CareerCard.css';

function CareerCard({ title, description, icon, onClick }) {
  return (
    <div className="career-card" onClick={onClick}>
      <div className="career-card-icon">{icon}</div>
      <h3 className="career-card-title">{title}</h3>
      <p className="career-card-description">{description}</p>
    </div>
  );
}

export default CareerCard;
