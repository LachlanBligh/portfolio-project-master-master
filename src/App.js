import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroPage from './components/IntroPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import UFCEloEngine from './components/UFCEloEngine';
import SalesWebApp from './components/SalesWebApp';
import './App.css'; // Import the external CSS
import Logo from './images/logo.png'; // Import the logo

function App() {
  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent any default behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <Router>
      <div className="App">
        {/* Clickable Logo */}
        <div className="logo-container">
          <a href="#" onClick={handleLogoClick} className="logo-link">
            <img src={Logo} alt="Logo" className="logo-image" />
          </a>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ufc-elo-engine" element={<UFCEloEngine />} />
          <Route path="/sales-web-app" element={<SalesWebApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
