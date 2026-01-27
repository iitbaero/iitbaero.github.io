import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="page-card animate-fade-in contact-form-container">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle-muted">For admissions, research, or general inquiries.</p>
            <form>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-input" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" rows="4" className="form-input" placeholder="Your message..."></textarea>
                </div>
                <div className="form-actions">
                    <button className="button button-primary" type="button">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactPage;
