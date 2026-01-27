import React from 'react';
import './CourseReviewCard.css';

function CourseReviewCard({ review, onCardClick }) {
  return (
    <div className="course-review-card" onClick={() => onCardClick(review)}>
      <div className="card-header">
        <h3 className="card-course-name">{review.courseName}</h3>
        <span className="card-semester">{review.semester}</span>
      </div>
      <p className="card-instructor">Instructor: {review.instructor}</p>
      <div className="card-footer">
        <span>Difficulty: {review.difficulty}/5</span>
        <span>Effort: {review.effort}</span>
      </div>
    </div>
  );
}

export default CourseReviewCard;
