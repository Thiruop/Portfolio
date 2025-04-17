import React from "react";
import profileImg from "../assets/images/profile.png";
import "../css/Profile.css";

export default function HeroSection() {
  return (
    <div className="container py-4" id="profile">
      <div className="row align-items-center justify-content-between">
        {/* Left: Name + Socials */}
        <div className="col-md-6 mb-4 mb-md-0">
        <h1 className="gradient-name">Thirumoorthi Murugesan</h1>
        <p className="intro-role mt-3">
  Passionate about building modern web solutions and seamless enterprise integrations, I work as a <span className="highlight-role">Full Stack Developer</span> and <span className="highlight-role">OIC Integration Specialist</span> delivering impactful digital experiences.
</p>
          <div className="social-icons mt-3">
            <a href="https://github.com/Thiruop" target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/thirumoorthi-murugesan-953b68233/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=thirumoorthim2200@gmail.com" 
  target="_blank" 
  rel="noreferrer"
>
  <i className="fas fa-envelope fa-2x"></i>
</a>

          </div>
        </div>

        {/* Right: Animated Image */}
        <div className="col-md-5 text-center">
          <img src={profileImg} alt="Thirumoorthi Murugesan" className="animated-profile-img" />
        </div>
      </div>
    </div>
  );
}
