import React from 'react';
import './StarRating.css';
import { Star } from 'lucide-react';

// Renders a 5-star rating based on a numerical value
function StarRating({ rating = 0 }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <Star
            key={starIndex}
            className={`star-icon ${rating >= starIndex ? 'filled' : ''}`}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
