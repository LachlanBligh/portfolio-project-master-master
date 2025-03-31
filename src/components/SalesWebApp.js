import React from 'react';
import './SalesWebApp.css';
import backgroundImage from "../images/background.jpg"; // Import the background image

function SalesWebApp() {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Ensures the image covers the entire screen
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    minHeight: "100vh", // Ensures the background covers the full viewport height
    width: "100%", // Ensures the background covers the full width
  };
  return (
    <div style={pageStyle} className="retro-background">
      <section className="swa-container">
        <h1 className="swa-main-title">Sales Web Application</h1>
        <div className="swa-content-grid">
          <div className="swa-features-sidebar">
            <div className="swa-feature-card">
              <h2 className="swa-card-header">Features</h2>
              <ul className="swa-feature-list">
                <li className="swa-feature-item">API Integration with third-party services</li>
                <li className="swa-feature-item">Real-time sales quote generation</li>
                <li className="swa-feature-item">Dynamic product matching</li>
                <li className="swa-feature-item">Custom error logging</li>
                <li className="swa-feature-item">Performance optimization</li>
              </ul>
            </div>

            <div className="swa-feature-card">
              <h2 className="swa-card-header">Tech Stack</h2>
              <ul className="swa-feature-list">
                <li className="swa-feature-item">Node.js/Express</li>
                <li className="swa-feature-item">Google Cloud</li>
                <li className="swa-feature-item">Firestore DB</li>
                <li className="swa-feature-item">REST APIs</li>
                <li className="swa-feature-item">React</li>
              </ul>
            </div>
          </div>

          <div className="swa-description-section">
            <div className="swa-description-block">
              <p>
                A scalable sales platform leveraging Node.js and Google Cloud to simplify operations with real-time quote generation, 
                dynamic product matching, and third-party integrations.
              </p>
              <p>
                Implemented custom error logging and high-performance data pipelines to process thousands of quotes instantly, 
                optimizing workflows and reducing customer turnaround time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SalesWebApp;