import React, { useState } from 'react';
import './FAQItem.css';
import { ChevronDown } from 'lucide-react';

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{faq.question}</span>
        <ChevronDown className={`faq-icon ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;
