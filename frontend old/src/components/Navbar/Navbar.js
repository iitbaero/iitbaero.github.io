import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css";
import { 
  Home, 
  Info, 
  GraduationCap, 
  Briefcase, 
  Users, 
  HelpCircle, 
  Link, 
  MoreHorizontal, 
  ChevronDown, 
  BookOpen,
  University, 
  FlaskConical, 
  HeartPulse,
  Menu,
  X 
} from 'lucide-react';

const NavItem = ({ icon, label, onClick, hasDropdown, isOpen }) => (
  <button onClick={onClick} className="nav-item">
    {icon}
    <span className="nav-item-label">{label}</span>
    {hasDropdown && <ChevronDown size={16} className={`dropdown-arrow ${isOpen ? 'is-open' : ''}`} />}
  </button>
);

const DropdownItem = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="dropdown-item">
    {icon}
    <span className="dropdown-item-label">{label}</span>
  </button>
);

const MoreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleItemClick = (page) => {
    window.location.hash = page;
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="nav-item-dropdown-container" ref={dropdownRef}>
      <NavItem 
        icon={<MoreHorizontal size={20} />} 
        label="More"
        onClick={toggleDropdown}
        hasDropdown
        isOpen={isOpen}
      />

      {isOpen && (
        <div className="dropdown-menu dropdown-menu-right">
          <DropdownItem icon={<University size={16} />} label="Faculty Advisors" onClick={() => handleItemClick('facultyAdvisors')} />
          <DropdownItem icon={<FlaskConical size={16} />} label="NPTEL Courses" onClick={() => handleItemClick('nptelCourses')} />
          <DropdownItem icon={<HeartPulse size={16} />} label="Wellness" onClick={() => handleItemClick('mentalHealth')} />
          <DropdownItem icon={<BookOpen size={16} />} label="Handbook" onClick={() => handleItemClick('handbook')} />
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (hash) => {
    window.location.hash = hash;
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-content-full">
        {/* Logo Section (DAMP Logo Image ebong Text) */}
        <div className="logo" onClick={() => navigate('home')}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="DAMP Logo" className="logo-icon" />
          <span className="logo-text">
            DAMP <span className="logo-text-light">Aerospace</span>
          </span>
        </div>

        {/* Desktop Navigation (Boro screen-er jonno) */}
        <div className="nav-links desktop-only">
          <NavItem icon={<Home size={20} />} label="Home" onClick={() => navigate('home')} />
          <NavItem icon={<Info size={20} />} label="About" onClick={() => navigate('about')} />
          <NavItem icon={<GraduationCap size={20} />} label="Courses" onClick={() => navigate('reviews')} />
          <NavItem icon={<Briefcase size={20} />} label="Projects" onClick={() => navigate('projects')} />
          <NavItem icon={<Briefcase size={20} />} label="Careers" onClick={() => navigate('careers')} />
          <NavItem icon={<Users size={20} />} label="Council" onClick={() => navigate('council')} />
          <NavItem icon={<Link size={20} />} label="Links" onClick={() => navigate('links')} />
          <NavItem icon={<HelpCircle size={20} />} label="FAQ" onClick={() => navigate('faq')} />
          <NavItem icon={<BookOpen size={20} />} label="Handbook" onClick={() => navigate('handbook')} />
          <div className="nav-divider"></div>
          <MoreDropdown />
        </div>

        {/* Mobile Toggle Button (Hamburger menu) */}
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown (Choto screen-er jonno) */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <DropdownItem icon={<Home size={18} />} label="Home" onClick={() => navigate('home')} />
            <DropdownItem icon={<Info size={18} />} label="About" onClick={() => navigate('about')} />
            <DropdownItem icon={<GraduationCap size={18} />} label="Courses" onClick={() => navigate('reviews')} />
            <DropdownItem icon={<Briefcase size={18} />} label="Projects" onClick={() => navigate('projects')} />
            <DropdownItem icon={<Briefcase size={18} />} label="Careers" onClick={() => navigate('careers')} />
            <DropdownItem icon={<Users size={18} />} label="Council" onClick={() => navigate('council')} />
            <DropdownItem icon={<Link size={18} />} label="Links" onClick={() => navigate('links')} />
            <DropdownItem icon={<HelpCircle size={18} />} label="FAQ" onClick={() => navigate('faq')} />
            <DropdownItem icon={<BookOpen size={18} />} label="Handbook" onClick={() => navigate('handbook')} />
            <div className="mobile-divider"></div>
            <DropdownItem icon={<University size={18} />} label="Faculty Advisors" onClick={() => navigate('facultyAdvisors')} />
            <DropdownItem icon={<FlaskConical size={18} />} label="NPTEL Courses" onClick={() => navigate('nptelCourses')} />
            <DropdownItem icon={<HeartPulse size={18} />} label="Wellness" onClick={() => navigate('mentalHealth')} />
          </div>
        )}
      </div>
    </nav>
  );
}