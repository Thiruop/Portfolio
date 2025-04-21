import React from "react";
import "../css/BackgroundVideo.css"; // Import your CSS file for styling
import plexusVideo from "../assets/video/background.mp4"; // Adjust the path as necessary

export default function BackgroundVideo() {
  return (
    <div className="background-video-wrapper">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={plexusVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
