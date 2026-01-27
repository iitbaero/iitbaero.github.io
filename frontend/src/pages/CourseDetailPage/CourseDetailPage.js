import React from 'react';
import './CourseDetailPage.css';
import StarRating from '../../components/StarRating/StarRating';

// Helper component for rating bars
const RatingBar = ({ label, value, max = 5 }) => (
    <div className="rating-item">
        <span className="rating-label">{label}</span>
        <div className="rating-bar-container">
            <div className="rating-bar" style={{ width: `${(value / max) * 100}%` }}></div>
        </div>
        <span className="rating-value">{value}/{max}</span>
    </div>
);

// Helper component for tags
const Tag = ({ children }) => <span className="tag">{children}</span>;

// Helper component for star ratings to keep the main component clean
const LabeledStarRating = ({ label, rating }) => (
    <div className="labeled-star-rating">
        {/* Capitalize the first letter of the label */}
        <span>{label.charAt(0).toUpperCase() + label.slice(1).replace(/([A-Z])/g, ' $1')}</span>
        <StarRating rating={rating} />
    </div>
);

function CourseDetailPage({ courseCode, reviews, onBackClick }) {
  // Find all reviews for the selected course
  const reviewsForCourse = reviews.filter(r => r.courseCode === courseCode);

  if (reviewsForCourse.length === 0) {
    return <div>Course not found or no reviews available.</div>;
  }

  // Get general course info from the first review
  const courseInfo = reviewsForCourse[0];

  return (
    <div className="animate-fade-in">
      <button onClick={onBackClick} className="back-button-career">&larr; Back to All Courses</button>
      
      <div className="review-container">
        <div className="review-header">
          <div>
            <h1 className="review-course-name">{courseInfo.courseName}</h1>
            <h2 className="review-instructor">with Prof. {courseInfo.instructor}</h2>
          </div>
        </div>
        
        {/* Map over and display each review directly */}
        {reviewsForCourse.map(review => (
          <div key={review.id} className="single-review-container">
            <div className="review-header-meta">
                <span>Reviewed by: <strong>{review.studentName}</strong> ({review.yearOfStudy})</span>
                <span>Taken in: <strong>{review.semester}</strong></span>
            </div>

            {/* Course Overview Section */}
            <div className="review-section">
                <h3>Course Overview</h3>
                <div className="overview-grid">
                    <RatingBar label="Difficulty" value={review.difficulty} />
                    <RatingBar label="Exam Difficulty" value={review.examDifficulty} />
                    <RatingBar label="Assignment Difficulty" value={review.assignmentDifficulty} />
                </div>
                <div className="tags-container">
                    <strong>What made it difficult:</strong>
                    {review.difficultyAspects.map(aspect => <Tag key={aspect}>{aspect}</Tag>)}
                </div>
            </div>

            <div className="review-grid">
                <div className="review-section">
                    <h3>Instructor Evaluation</h3>
                    <div className="ratings-list">
                        {Object.entries(review.instructorRatings).map(([key, value]) => (
                            <LabeledStarRating key={key} label={key} rating={value} />
                        ))}
                    </div>
                </div>
                <div className="review-section">
                    <h3>Course Content</h3>
                    <div className="ratings-list">
                        {Object.entries(review.contentRatings).map(([key, value]) => 
                            typeof value === 'number' ? (
                                <LabeledStarRating key={key} label={key} rating={value} />
                            ) : (
                                <div key={key} className="labeled-star-rating">
                                    <span>{key.replace(/([A-Z])/g, ' $1')}</span>
                                    <strong>{value}</strong>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Exams & Resources Section */}
            <div className="review-section">
                <h3>Exams, Assignments & Resources</h3>
                <p><strong>Formula Sheets:</strong> {review.formulaSheetPolicy}</p>
                <p><strong>Useful References:</strong> {review.usefulReferences.join(', ')}</p>
                <p><strong>Assignments:</strong> {review.assignmentFrequency}. {review.assignmentBrief}</p>
                <p><strong>Weightage:</strong> {review.weightageDistribution}</p>
                <p><strong>Attendance Policy:</strong> {review.attendancePolicy}</p>
            </div>

            <div className="review-section final-thoughts">
                <h3>Comments & Suggestions</h3>
                <p>"{review.improvements}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetailPage;
