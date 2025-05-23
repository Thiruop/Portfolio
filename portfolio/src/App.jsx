import React from "react";
import Header from "./components/Header";
import Footer from "./components/FooterSection";
import HeroSection from "./components/Profile";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import SkillSection from "./components/SkillSection";
import AchivementSection from "./components/AchivementSection";
import BackgroundVideo from "./components/BackGroundVideo"; // ✅ keep this
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import ChatBot from "./components/ChatBot";




export default function App() {
  return (
    <div className="app-wrapper position-relative">
      <BackgroundVideo /> 

      <Header />

      <main className="container-fluid pt-5 mt-5">
        <section id="home" className="my-5">
          <HeroSection />
        </section>

        <section id="profile">
          <SkillSection />
        </section>

        <section id="about" className="my-5">
          <AboutSection />
        </section>

        <section id="experience" className="my-5">
          <ExperienceSection />
        </section>

        <section id="projects" className="my-5">
          <ProjectSection />
        </section>

        <section id="achivements" className="my-5">
          <AchivementSection />
        </section>

        <section id="contact" className="my-5">
          <ContactSection />
        </section>
      </main>
      
   
      {/* Footer */}
      <Footer />
      <ChatBot />
    </div>
    
  );
}
