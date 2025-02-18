
// FooterSocialLinks.js
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const FooterSocialLinks = () => (
  <div className="footer-social-links d-flex justify-content-center gap-4 my-3">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
      <Github size={24} />
    </a>
    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
      <Linkedin size={24} />
    </a>
    <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">
      <Mail size={24} />
    </a>
  </div>
);
