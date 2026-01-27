import React, { useState, useMemo } from 'react';
import './CourseReviewsPage.css';
import { courseReviews } from '../../data/courseReviews';
import CourseSummaryCard from '../../components/CourseSummaryCard/CourseSummaryCard';

function CourseReviewsPage({ onCourseSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Group reviews by course code to get unique courses
  const uniqueCourses = useMemo(() => {
    const coursesMap = new Map();
    courseReviews.forEach(review => {
      if (!coursesMap.has(review.courseCode)) {
        coursesMap.set(review.courseCode, {
          courseCode: review.courseCode,
          courseName: review.courseName,
          instructor: review.instructor,
          reviewCount: 0,
        });
      }
      coursesMap.get(review.courseCode).reviewCount++;
    });
    return Array.from(coursesMap.values());
  }, []);

  const filteredCourses = uniqueCourses.filter(course =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by course name or instructor..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseSummaryCard
              key={course.courseCode}
              course={course}
              onCardClick={onCourseSelect}
            />
          ))
        ) : (
          <p className="no-results-text">No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default CourseReviewsPage;
