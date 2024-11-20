import React from "react";
import "../App.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Raj Lathigra. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/raj-1106" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/raj-lathigra-483089192" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:rlathigra11@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;