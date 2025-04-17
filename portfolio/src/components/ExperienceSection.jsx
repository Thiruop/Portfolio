import React from "react";
import ExperienceBarChart from "./ExperienceBarChart"; 
import "../css/ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Experience</h2>
        <div className="row">
          {/* Left: Bar Chart */}
          <div className="col-md-5">
            <ExperienceBarChart />
          </div>

          {/* Right: Summary content */}
          <div className="col-md-7">
            <div className="experience-details">
              <h5 className="text-warning">Professional Experience</h5>
              <p>
                Built scalable integrations using Oracle Integration Cloud for clients in hospitality.
                Worked with REST, SOAP, FTP, and OCI Streaming. Handled deployments, bug fixes, and led team KT sessions.
              </p>

              <h5 className="text-warning mt-4">Client Project Experience</h5>
              <p>
                Delivered integration for IHG (USA) using Oracle Hospitality Cloud PMS.
                Focused on reservation automation, real-time data access, and improving guest experience.
              </p>

              <h5 className="text-warning mt-4">Internal Project Experience</h5>
              <p>
                Developed AI-powered PMS for Marriott & Lexon Hotels. Used Next.js and Node-RED for low-code integration.
                Focused on real-time automation, guest engagement, and workflow improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
