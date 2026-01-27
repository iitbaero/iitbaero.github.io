import React from 'react';
import './CourseCard.css';
import { BookOpen } from 'lucide-react';

// Receive onCardClick function as a prop
function CourseCard({ course, onCardClick }) {
  return (
    // Call the passed-in function with the course data
    <div className="course-card" onClick={() => onCardClick(course)}>
      <div className="course-card-icon">
        <BookOpen size={32} />
      </div>
      <div className="course-card-content">
        <h3 className="course-card-title">{course.code} - {course.name}</h3>
        <p className="course-card-description">{course.description}</p>
      </div>
    </div>
  );
}

export default CourseCard;
