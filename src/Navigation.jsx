import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
export const Navigation = ({ toggleDarkMode, darkMode }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Track navbar state
  
    const handleNavbarToggle = () => {
      setIsNavbarOpen(!isNavbarOpen); // Toggle state when button clicked
    };
  
    const handleLinkClick = () => {
      setIsNavbarOpen(false); // Close navbar when a link is clicked
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={handleLinkClick}>Portfolio</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            onClick={handleNavbarToggle} // Toggle navbar state
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLinkClick}>
                <i className="bi bi-house me-2"></i>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                <i className="bi bi-person-badge me-2"></i>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects" onClick={handleLinkClick}>
                <i className="bi bi-folder-fill me-2"></i>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
                <i className="bi bi-person-lines-fill"></i>Contact</Link>
              </li>
              <li className="nav-item">
                <div className="d-flex align-items-center">
                  <label className="switch ms-5 me-2">
                    <input 
                      type="checkbox" 
                      checked={darkMode} 
                      onChange={toggleDarkMode} 
                    />
                    <span className="slider round"></span>
                  </label>
                  <span className={`text-${darkMode ? 'light' : 'dark'} me-2`}>Dark Mode</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  