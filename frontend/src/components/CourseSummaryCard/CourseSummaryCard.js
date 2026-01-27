import React from 'react';
import './CourseSummaryCard.css';
import { BookOpen, Star } from 'lucide-react';

function CourseSummaryCard({ course, onCardClick }) {
  return (
    <div className="course-summary-card" onClick={() => onCardClick(course.courseCode)}>
      <div className="summary-icon">
        <BookOpen size={28} />
      </div>
      <div className="summary-info">
        <h3 className="summary-course-name">{course.courseName}</h3>
        <p className="summary-instructor">Taught by: {course.instructor}</p>
      </div>
      <div className="summary-reviews">
        <Star size={16} />
        <span>{course.reviewCount} Reviews</span>
      </div>
    </div>
  );
}

export default CourseSummaryCard;
