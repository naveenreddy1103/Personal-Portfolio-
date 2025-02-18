// HeaderSocialLinks.js
import React, { useContext } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeContext } from './ThemeContext';

export const HeaderSocialLinks = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const linkClass = isDarkMode ? 'text-light' : 'text-dark';
  
  return (
    <div className="header-social-links d-flex justify-content-center gap-4 my-3">
      <a href="https://github.com/yourusername" 
         target="_blank" 
         rel="noopener noreferrer"
         className={linkClass}>
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/yourusername" 
         target="_blank" 
         rel="noopener noreferrer"
         className={linkClass}>
        <Linkedin size={24} />
      </a>
      <a href="https://www.naukri.com/mnjuser/profile" 
         target="_blank" 
         rel="noopener noreferrer"
         className={linkClass}>
        <Mail size={24} />
      </a>
    </div>
  );
};
