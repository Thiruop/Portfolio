import React from "react";
import "../css/FooterSection.css";

export default function FooterSection() {
  return (
    <footer className="footer-section text-white">
      <div className="container text-center">
        <div className="social-icons mb-3">
          <a href="https://github.com/Thiruop" target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-lg mx-3"></i>
          </a>
          <a href="https://www.linkedin.com/in/thirumoorthi-murugesan-953b68233/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-lg mx-3"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=thirumoorthim2200@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope fa-lg mx-3"></i>
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} Thirumoorthi Murugesan. All rights reserved.</p>
      </div>
    </footer>
  );
}
