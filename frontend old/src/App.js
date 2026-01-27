import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CourseReviewsPage from './pages/CourseReviewsPage/CourseReviewsPage';
import CourseDetailPage from './pages/CourseDetailPage/CourseDetailPage';
import ProjectReviewsPage from './pages/ProjectReviewsPage/ProjectReviewsPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';
import CouncilPage from './pages/CouncilPage/CouncilPage';
import FAQPage from './pages/FAQPage/FAQPage';
import MentalHealthPage from './pages/MentalHealthPage/MentalHealthPage';
import FacultyAdvisorsPage from './pages/FacultyAdvisorsPage/FacultyAdvisorsPage';
import NptelCoursesPage from './pages/NptelCoursesPage/NptelCoursesPage';
import CareersPage from './pages/CareersPage/CareersPage';
import InternshipsPage from './pages/InternshipsPage/InternshipsPage';
import InternshipDetailPage from './pages/InternshipDetailPage/InternshipDetailPage';
import JobsPage from './pages/JobsPage/JobsPage';
import JobDetailPage from './pages/JobDetailPage/JobDetailPage';
import ResearchPage from './pages/ResearchPage/ResearchPage';
import ResearchDetailPage from './pages/ResearchDetailPage/ResearchDetailPage';
import MastersPage from './pages/MastersPage/MastersPage';
import MastersDetailPage from './pages/MastersDetailPage/MastersDetailPage';
import LinksPage from './pages/LinksPage/LinksPage';
import ApodPage from './pages/ApodPage/ApodPage';
import HandbookPage from './pages/HandbookPage/HandbookPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourseCode, setSelectedCourseCode] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [selectedMasters, setSelectedMasters] = useState(null);

  // This effect runs on page load and when the hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Get hash value, remove '#'
      const [page, id] = hash.split('/'); // Split 'courseDetail/AE241'

      // If no hash, default to home
      if (!page) {
        setCurrentPage('home');
        return;
      }

      // Update state based on hash
      setCurrentPage(page);

      // Handle detail pages
      if (page === 'courseDetail' && id) setSelectedCourseCode(id);
      // Note: Other detail pages use objects, which we can't store in a URL.
      // We will handle them with the 'select' functions below.
      // This implementation will restore the main page (e.g., 'reviews')
      // but not the specific item.
    };

    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', handleHashChange);
    
    // Run on initial load
    handleHashChange();

    // Clean up listener
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // Empty array means this runs once on mount and sets up listener

  // --- Navigation Handlers (Updated to set hash) ---

  const handleCourseSelect = (courseCode) => {
    setSelectedCourseCode(courseCode);
    window.location.hash = `courseDetail/${courseCode}`;
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    window.location.hash = 'projectDetail';
  };

  const handleInternshipSelect = (internship) => {
    setSelectedInternship(internship);
    window.location.hash = 'internshipDetail';
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    window.location.hash = 'jobDetail';
  };

  const handleResearchSelect = (research) => {
    setSelectedResearch(research);
    window.location.hash = 'researchDetail';
  };

  const handleMastersSelect = (masters) => {
    setSelectedMasters(masters);
    window.location.hash = 'mastersDetail';
  };

  // Generic "back" handler
  const goBack = (hash) => {
    window.location.hash = hash;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'reviews':
        return <CourseReviewsPage onCourseSelect={handleCourseSelect} />;
      case 'courseDetail':
        return <CourseDetailPage courseCode={selectedCourseCode} onBackClick={() => goBack('reviews')} />;
      case 'projects':
        return <ProjectReviewsPage onProjectSelect={handleProjectSelect} />;
      case 'projectDetail':
        return <ProjectDetailPage project={selectedProject} onBackClick={() => goBack('projects')} />;
      case 'council':
        return <CouncilPage />;
      case 'faq':
        return <FAQPage />;
      case 'mentalHealth':
        return <MentalHealthPage />;
      case 'facultyAdvisors':
        return <FacultyAdvisorsPage />;
      case 'nptelCourses':
        return <NptelCoursesPage />;
      case 'careers':
        // We pass a simple function to set the hash
        return <CareersPage onNavigate={(page) => window.location.hash = page} />;
      case 'internships':
        return <InternshipsPage onInternshipSelect={handleInternshipSelect} />;
      case 'internshipDetail':
        return <InternshipDetailPage experience={selectedInternship} onBackClick={() => goBack('internships')} />;
      case 'jobs':
        return <JobsPage onJobSelect={handleJobSelect} />;
      case 'jobDetail':
        return <JobDetailPage job={selectedJob} onBackClick={() => goBack('jobs')} />;
      case 'research':
        return <ResearchPage onResearchSelect={handleResearchSelect} />;
      case 'researchDetail':
        return <ResearchDetailPage research={selectedResearch} onBackClick={() => goBack('research')} />;
      case 'masters':
        return <MastersPage onMastersSelect={handleMastersSelect} />;
      case 'mastersDetail':
        return <MastersDetailPage masters={selectedMasters} onBackClick={() => goBack('masters')} />;
      case 'links':
        return <LinksPage />;
      case 'apod':
        return <ApodPage onBackClick={() => goBack('home')} />;
      case 'handbook':
        return <HandbookPage />;
      case 'home':
      default:
        // Pass the navigation function
        return <HomePage onNavigate={(page) => window.location.hash = page} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content container">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
