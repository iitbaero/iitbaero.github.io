import React from 'react';
import './NptelCoursesPage.css';
import { BookOpen, CheckSquare, Link as LinkIcon, AlertTriangle, FileText, HelpCircle } from 'lucide-react';

const NptelCoursesPage = () => {
    return (
        <div className="nptel-page-container animate-fade-in">
            <h1 className="page-main-title">NPTEL Courses via SWAYAM</h1>

            {/* About Section */}
            <div className="info-section">
                <div className="section-header">
                    <BookOpen size={24} className="section-icon" />
                    <h2>About NPTEL & SWAYAM</h2>
                </div>
                <p>
                    SWAYAM is a Government of India initiative to bring academic material online for everyone, covering various domains like engineering, medical, arts, and management. NPTEL (National Programme on Technology Enhanced Learning) is the engineering wing of SWAYAM, offered by a consortium of IITs and IISc.
                </p>
                <div className="course-includes">
                    <h4>Each NPTEL course typically includes:</h4>
                    <ul>
                        <li><FileText size={16} /> Video lectures</li>
                        <li><FileText size={16} /> Notes & Text transcripts</li>
                        <li><CheckSquare size={16} /> Sample Assignments</li>
                    </ul>
                </div>
            </div>

            {/* Process Section */}
            <div className="info-section">
                <div className="section-header">
                    <CheckSquare size={24} className="section-icon" />
                    <h2>Enrollment Process & Formalities</h2>
                </div>
                <ol className="process-steps">
                    <li><strong>Create APAAR ID:</strong> Students must create an APAAR ID to register. (<a href="https://drive.google.com/file/d/1vZgNq2IpVFhfuInH3eQUdv_avorNjxeN/view?usp=sharing" target="_blank" rel="noopener noreferrer">How to create?</a> | <a href="https://www.digilocker.gov.in/" target="_blank" rel="noopener noreferrer">Digilocker Website</a>)</li>
                    <li><strong>Get Approval:</strong> Submit an NPTEL Course Mapping Request Form, signed by your Faculty Advisor and the course instructor, to the DUGC via the General Secretary (GSec).</li>
                    <li><strong>Register & Pay:</strong> After approval, register for the course on the <a href="https://swayam.gov.in/nc_details/NPTEL" target="_blank" rel="noopener noreferrer">SWAYAM portal</a> and pay the ₹1000 exam fee.</li>
                    <li><strong>Complete Formalities:</strong> After passing, submit the printed certificate and the signed NPTEL form to DUGC via GSec for your ASC entry.</li>
                    <li><strong>Follow Timelines:</strong> Refer to the SWAYAM portal for all deadlines and follow them strictly.</li>
                </ol>
            </div>

            {/* Restrictions Section */}
            <div className="info-section">
                 <div className="section-header">
                    <AlertTriangle size={24} className="section-icon" />
                    <h2>Restrictions & Credit Limits</h2>
                </div>
                <p>
                    Students can complete up to <strong>2 elective courses (max 12 credits)</strong> via NPTEL. Extension/ARP students may take up to 24 credits (core and elective) with a DUGC recommendation.
                </p>
            </div>

            {/* Links Section */}
            <div className="info-section">
                <div className="section-header">
                    <LinkIcon size={24} className="section-icon" />
                    <h2>Important Links & Resources</h2>
                </div>
                <div className="links-grid">
                    <a href="https://swayam.gov.in/nc_details/NPTEL" target="_blank" rel="noopener noreferrer" className="link-card">
                        <BookOpen size={20} /> Official NPTEL Site
                    </a>
                    <a href="https://nptel.ac.in/initiative" target="_blank" rel="noopener noreferrer" className="link-card">
                        <HelpCircle size={20} /> How NPTEL Works
                    </a>
                     <a href="https://docs.google.com/document/d/10FmHbdOdeEKnzE00Qc90zKLxgYGAtNHD/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="link-card">
                        <HelpCircle size={20} /> Frequently Asked Questions (FAQs)
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxHuRpCPTN16ho3JJzQQED9JyO06qKTDdipAI8ui2MCSRY3FtQCuqFBozkYoV8vjNOZbhUjA259-SN/pubhtml" target="_blank" rel="noopener noreferrer" className="link-card">
                        <FileText size={20} /> Course List & Timeline
                    </a>
                     <a href="https://docs.google.com/document/d/e/2PACX-1vT5GwJwGh24rFvEp8MeS4BP7A_Rzzb-BBAWBOEcrXxSNMIL6_sX2EsDp403xhsP22fv2uA3N0na5MId/pub?urp=gmail_link" target="_blank" rel="noopener noreferrer" className="link-card">
                        <FileText size={20} /> Important Guidelines
                    </a>
                    <a href="https://drive.google.com/file/d/1Fgt7CbhNPooRSz8t5UhHZysWH638lr1s/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="link-card">
                        <BookOpen size={20} /> SSS Booklet 2025 (Sec 2.11)
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NptelCoursesPage;
