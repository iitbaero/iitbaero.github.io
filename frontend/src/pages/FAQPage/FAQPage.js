import React from 'react';
import './FAQPage.css';
import { faqs } from '../../data/faqs';
import FAQForm from '../../components/FAQForm/FAQForm';
import FAQItem from '../../components/FAQItem/FAQItem';

function FAQPage() {
  return (
    <div className="animate-fade-in">
      <FAQForm />
      <div className="faq-list">
        {faqs.map(faq => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
