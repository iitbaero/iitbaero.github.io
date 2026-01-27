import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FAQForm.css';

function FAQForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_75t5aeo', 'template_65yomsr', form.current, {
        publicKey: 'VzM4ZpgEKVAI9dgTb',
      })
      .then(
        () => {
          alert('Your doubt has been submitted successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div className="form-container page-card">
      <h2 className="form-title">Ask a Doubt</h2>
      <form ref={form} onSubmit={sendEmail}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="user_name" className="form-label">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Roll Number */}
        <div className="form-group">
          <label htmlFor="roll_number" className="form-label">Roll Number</label>
          <input
            type="text"
            id="roll_number"
            name="roll_number"
            className="form-input"
            placeholder="e.g., 22b0001"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="user_email" className="form-label">Your Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="form-input"
            placeholder="Enter your IITB email"
            required
          />
        </div>

        {/* Topic */}
        <div className="form-group">
          <label htmlFor="topic" className="form-label">Topic</label>
          <input
            type="text"
            id="topic"
            name="topic"
            className="form-input"
            placeholder="e.g., BTP Projects, Internships, Placements"
            required
          />
        </div>

        {/* Detail */}
        <div className="form-group">
          <label htmlFor="detail" className="form-label">Detail</label>
          <textarea
            id="detail"
            name="detail"
            rows="4"
            className="form-input"
            placeholder="Enter your question here..."
            required
          ></textarea>
        </div>

        <div className="form-actions">
          <button className="button button-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default FAQForm;
