import React from 'react';
import './MentalHealthPage.css';
import { resources } from '../../data/mentalHealthResources';

function MentalHealthPage() {
  return (
    <div className="mental-health-container animate-fade-in">
      <header className="mh-header">
        <h1>Mental Matters: Your Well-being is a Priority</h1>
        <p className="mh-subtitle">
          In the demanding world of academics and innovation, it's crucial to talk about mental health. Let's break the silence, end the stigma, and understand that it's okay not to be okay.
        </p>
      </header>

      <section className="mh-section">
        <h2>What is Mental Well-being?</h2>
        <p>
          It's more than just the absence of illness. Mental well-being is a state where you can realize your potential, cope with the normal stresses of life, work productively, and contribute to the community. It's about balance—feeling content, having purpose, and maintaining healthy relationships with yourself and others.
        </p>
      </section>

      <section className="mh-section">
        <h2>Navigating Student Life</h2>
        <p>
          The pressure cooker of college life is real. Juggling coursework, projects, social expectations, and personal goals can feel overwhelming. Remember, you're not alone in this. Many students face challenges like:
        </p>
        <ul className="mh-list">
          <li>The pressure to excel academically and build a perfect resume.</li>
          <li>Comparing your journey with your peers, especially on social media.</li>
          <li>Managing time between demanding projects, PoRs, and personal life.</li>
          <li>Feeling isolated or struggling to find your place.</li>
        </ul>
      </section>
      
      <section className="mh-section">
        <h2>Taking the First Step</h2>
        <p>
          Acknowledging your feelings is a sign of strength. If you're struggling, consider these steps. There's no timeline for betterment—the perfect day to reach out is whenever you decide you're ready.
        </p>
        <div className="steps-container">
            <div className="step-card"><strong>Talk to Someone:</strong> Share what you're feeling with a close friend, family member, or mentor. Voicing your thoughts can be incredibly therapeutic.</div>
            <div className="step-card"><strong>Reconnect with Hobbies:</strong> Engaging in activities you love can provide a much-needed mental break and a sense of accomplishment.</div>
            <div className="step-card"><strong>Seek Professional Help:</strong> Counsellors and therapists are trained to provide support and guidance. Reaching out is a courageous step towards well-being.</div>
        </div>
      </section>

      <section className="mh-section resources-section">
        <h2>Resources & Helplines</h2>
        <p>You are not alone. Help is available.</p>
        <div className="resources-list">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <h3 className="resource-name">{resource.name}</h3>
              <p className="resource-description">{resource.description}</p>
              <p className="resource-contact">{resource.contact}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MentalHealthPage;
