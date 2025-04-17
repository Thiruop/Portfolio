import React from "react";
import "../css/ProjectSection.css";

const projects = [
  {
    title: "Client Project – IHG",
    description: "Oracle Cloud integration for hotel booking and operations with IHG.",
    url: "https://www.ihg.com/hotels/gb/en/reservation?fromRedirect=true&qSrt=sAV&setPMCookies=true&dp=true&showApp=true&gclid=Cj0KCQjwqv2_BhC0ARIsAFb5Ac85kCxoP9g8N3J2pfonQodCH4kszPVlqxkA8Yd5pQpRL39lKXMEucsaAnQlEALw_wcB&cm_mmc=PDSEA-_-G_F-IMEA_FS-SWA_H-IMEA_HS-SWA_6C_BSF_EXM_CORE-IHG_EN&srb_u=1",
  },
  {
    title: "Employee Management (Internal Project)",
    description: "MERN Stack portal for employee timesheets, expense tracking, and job workflows.",
    url: "https://simplifai.neartekpod.io/",
  },
  {
    title: "FoodFind – Restaurant App",
    description: "A Swiggy-style food ordering platform supporting multiple orders from multiple hotels.",
    url: "https://github.com/Thiruop/Restaurant-Application",
  },
  {
    title: "Library Management System",
    description: "Track book stock, purchases, and borrowing for students and staff.",
    url: "https://github.com/Thiruop/Library_Management",
  },
  {
    title: "React Native – Product List View",
    description: "Amazon-style cart app with add/remove cart features using Expo.",
    url: "https://github.com/Thiruop/Product_List_View",
  },
  {
    title: "WebLogData Dashboard",
    description: "Node.js and EJS-based dashboard with admin/employee roles and full CRUD functionality.",
    url: "https://github.com/Thiruop/WebLogData-Dashboard", // Replace with actual if different
  }
];


export default function ProjectSection() {
  return (
    <section className="project-section" id="projects">
      <div className="container">
        <h2 className="text-center section-title mb-5">Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-card-link"
              >
                <div className="project-card glass-card p-4 h-100">
                  <h5 className="text-warning mb-2">{project.title}</h5>
                  <p className="text-white">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
