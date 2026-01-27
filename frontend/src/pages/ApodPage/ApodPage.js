import React, { useState, useEffect } from 'react';
import { ArrowLeft, Loader2, AlertTriangle } from 'lucide-react';

const getLastYearsDate = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 1);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const API_KEY = 'EsHDb7VCgIKIAgdgcY12VC6wBQtHMuc9ngOMSYoQ'; 

const App = ({ onBackClick }) => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      setLoading(true);
      try {
        const date = getLastYearsDate();
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setApodData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApod();
  }, []);

  if (loading) {
    return (
      <div className="status-container">
        <Loader2 size={48} className="spinner" />
        <p>Scanning deep space for last year's data...</p>
        <style>{`
          .status-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            text-align: center;
            color: var(--color-text-muted);
          }
          .spinner {
            animation: spin 1s linear infinite;
            color: var(--color-primary);
            margin-bottom: 1rem;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container">
        <AlertTriangle size={48} style={{ color: '#ef4444' }} />
        <p style={{ marginTop: '1rem' }}>Could not fetch cosmic data: {error}</p>
        <button onClick={onBackClick} className="back-button" style={{ marginTop: '1rem' }}>Return Home</button>
      </div>
    );
  }

  return (
    <div className="apod-page-container">
      <style>{`
        .apod-page-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          min-height: calc(100vh - 80px);
        }

        .apod-header {
          margin-bottom: 2rem;
        }

        .apod-title-group {
          text-align: center;
          margin-top: 1rem;
        }

        .apod-main-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--color-text);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .apod-date {
          font-size: 1rem;
          color: var(--color-text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .apod-layout {
          display: flex;
          gap: 3rem;
          align-items: flex-start;
        }

        .apod-visual-column {
          flex: 1.2;
          position: sticky;
          top: 100px;
        }

        .image-wrapper {
          width: 100%;
          border-radius: 1rem;
          overflow: hidden;
          background-color: var(--color-surface);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .apod-media {
          width: 100%;
          height: auto;
          display: block;
        }

        .apod-video {
          aspect-ratio: 16 / 9;
        }

        .apod-copyright {
          padding: 0.75rem 1rem;
          font-size: 0.8rem;
          font-style: italic;
          color: var(--color-text-muted);
          background: rgba(0, 0, 0, 0.05);
          margin: 0;
        }

        .apod-info-column {
          flex: 1;
        }

        .apod-explanation-card {
          background-color: var(--color-surface);
          padding: 2.5rem;
          border-radius: 1rem;
          border: 1px solid var(--color-border);
        }

        .section-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .apod-explanation-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text-muted);
          text-align: justify;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: none;
          border: 1px solid var(--color-border);
          color: var(--color-text);
          padding: 0.6rem 1.2rem;
          border-radius: 2rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .back-button:hover {
          background: var(--color-primary);
          color: #000;
          border-color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .apod-layout {
            flex-direction: column;
            gap: 2rem;
          }
          .apod-visual-column {
            position: static;
            flex: none;
          }
          .apod-main-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="apod-header">
        <button onClick={onBackClick} className="back-button">
          <ArrowLeft size={18} /> Back to Home
        </button>
        <div className="apod-title-group">
          <h1 className="apod-main-title">{apodData.title}</h1>
          <p className="apod-date">NASA Astronomy Picture of the Day • {apodData.date}</p>
        </div>
      </div>

      <div className="apod-layout">
        <div className="apod-visual-column">
          <div className="image-wrapper">
            {apodData.media_type === 'image' ? (
              <img 
                src={apodData.hdurl || apodData.url} 
                alt={apodData.title} 
                className="apod-media" 
              />
            ) : (
              <iframe
                src={apodData.url}
                title={apodData.title}
                frameBorder="0"
                allowFullScreen
                className="apod-media apod-video"
              ></iframe>
            )}
            {apodData.copyright && (
              <p className="apod-copyright">© {apodData.copyright}</p>
            )}
          </div>
        </div>

        <div className="apod-info-column">
          <div className="apod-explanation-card">
            <h3 className="section-subtitle">Explanation</h3>
            <p className="apod-explanation-text">{apodData.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;