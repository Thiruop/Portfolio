import React from "react";
import "../css/Header.css";
import profileImage from "../assets/images/profile.png";

export default function Header() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header fixed-top  p-3">
      <div className=" d-flex justify-content-between align-items-center">
        {/* Left: Profile image and name */}
        <div className="d-flex align-items-center gap-3">
          <img src={profileImage} alt="Thirumoorthi Murugesan" className="profile-img " />
          <h5 className="mb-0 text-white">Thirumoorthi Murugesan</h5>
        </div>

        {/* Right: Navigation links */}
        <nav className="d-flex align-items-center gap-4">
          
          <a href="#profile" className="nav-link text-black">Profile</a>
          <a href="#about" className="nav-link text-black">About</a>
          <a href="#experience" className="nav-link text-black">Experience</a>
          <a href="#projects" className="nav-link text-black">Projects</a>
          <a href="#achivements" className="nav-link text-black">Achivements</a>
          <button className="btn btn-warning fw-bold px-3" onClick={scrollToContact}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
