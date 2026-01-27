import React from 'react';
// Make sure this CSS file is imported
import './HandbookPage.css'; 
// Import the PDF file directly
import handbookPdf from './handbook.pdf';

function HandbookPage() {
  // Use the imported PDF variable as the source
  // We add URL parameters to *suggest* a two-page, fit-to-width view
  const pdfUrl = `${handbookPdf}#view=FitH&pagemode=two`;

  return (
    <div className="handbook-container animate-fade-in">
      <h1 className="page-main-title">Aerospace Handbook</h1>

      {/* This is the simple container for the PDF */}
      <div className="pdf-viewer-container">
        <object
          data={pdfUrl} // Use the updated URL
          type="application/pdf"
          width="100%"
          height="100%"
          aria-label="Aerospace Handbook"
        >
          {/* Fallback for browsers that don't support <object> */}
          <p>Your browser doesn't support embedded PDFs. 
             You can <a href={handbookPdf} download="handbook.pdf">download it here</a>.
          </p>
        </object>
      </div>
    </div>
  );
}

export default HandbookPage;
