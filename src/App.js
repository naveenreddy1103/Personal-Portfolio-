import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Projects } from './Projects';
import { Navigation } from './Navigation';
// import bootstrap from 'bootstrap'
import './App.css'; // Import custom styles for animations, transitions, and switch

// Home Component
const Home = () => (
  <div className="container py-5">
    <div className="row align-items-center">
      <div className="col-md-6">
        <img 
          src="profile.jpg"
          alt="Profile" 
          className="img-fluid rounded-circle mb-4 w-75 h-75"
        />
      </div>
      <div className="col-md-6">
        <h1 className="display-4 mb-4">Naveen Kama</h1>
        <h2 className="text-muted mb-4">MERN Stack Developer</h2>
        <p className="lead">
          Passionate web developer with good in MongoDB, Express.js, React, and Node.js.
          Creating scalable and efficient web applications.
        </p>
        <div className="mt-4">
          <a href="/Naveen Resume Main .pdf" className="btn btn-primary me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-download me-2"></i>Download CV
          </a>
          {/* <a href="#contact" className="btn btn-outline-primary">
            <i className="bi bi-envelope me-2"></i>Contact Me
          </a> */}
        </div>
      </div>
    </div>
  </div>
);

// About Component
const About = () => (
  <div className="container py-5">
    <h2 className="text-center mb-5">About Me</h2>
    <div className="row">
      <div className="col-md-6">
        <h3>My Journey</h3>
        <p>
          I am a recent Post graduate in Master of Computer Applications with a strong foundation in web development.
          My journey in programming started during my college years, where I discovered my
          passion for building full-stack web applications with the MERN stack.
        </p>
      </div>
      <div className="col-md-6">
        <h3>Skills</h3>
        <ul className="list-unstyled">
          <li><strong>Programming and Scripting</strong> - JavaScript, Python, Node JS, HTML, CSS, Java</li>
          <li><strong>Frameworks and Libraries</strong> - Express JS, React JS, Bootstrap, JWT token</li>
          <li><strong>Database Design</strong> -  Mongo DB, familiar with MySQL</li>
          <li><strong>Tools and Others</strong> - Familiarity with Git, GitHub, Post Man and Vercel</li>
          <li><strong>Soft Skills</strong> -  Adaptive Nature, Communication and Time Management</li>
        </ul>
      </div>
    </div>
  </div>
);




// Contact Component
const Contact = () => (
  <div className="container py-5">
    <h2 className="text-center mb-5">Contact Me</h2>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-send me-2"></i>Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className=" py-4 mt-5" style={{background:'#78acd6'}}>
    <div className="container text-center">
      <div className="mb-3">
        <a href="https://github.com/naveenreddy1103" className="text-dark me-3"><i className="bi bi-github fs-4"></i></a>
        <a href="https://www.linkedin.com/in/contactnaveenreddy/" className="text-dark me-3"><i className="bi bi-linkedin fs-4"></i></a>
        <a href="#" className="text-dark"><i className="bi bi-twitter fs-4"></i></a>
      </div>
      <p className="mb-0 text-dark">© 2025 Naveen Kama. All rights reserved.</p>
    </div>
  </footer>
);


// Main App Component with Dark Mode
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Effect to change body background on dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100" >
        <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
