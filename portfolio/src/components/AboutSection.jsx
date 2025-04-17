import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../css/AboutSection.css";
import resumePDF from "../assets/Resume/Thirumoorthi_resume.pdf";

export default function AboutSection() {
  return (
    <section className="about-section  text-center" id="about">
      <div className="container">
        <h2 className="section-title mb-4">About Me</h2>

        <h4 className="typing-text">
          I'm a{" "}
          <span className="typewriter-effect">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Python Developer",
                "Oracle Integration Cloud Developer"
              ]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h4>

        <p className="short-about mt-4 mb-4">
          Passionate Full Stack and OIC Developer focused on creating scalable web solutions
          and cloud integrations. I interested in building clean UI, efficient backends, and seamless system connections.
        </p>

        <div className="about-links d-flex justify-content-center gap-3 flex-wrap">
          <a href={resumePDF} className="btn btn-warning" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
