import React from "react";
import { motion } from "framer-motion";
import "../css/AchivementSection.css";

import OIC from "../assets/images/OIC_Badge.png";
import OCI from "../assets/images/OCI_Foundation.png";
import Python from "../assets/images/Python.png";
import Award from "../assets/images/Award.png";
import AwardFrame from "../assets/images/Award_Full_Frame.jpg";

export default function AchievementSection() {
  const achievements = [
    {
      title: "Oracle Certified Foundation Associate",
      description:
        "Completed certification to validate foundational knowledge in Oracle technologies.",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FD81D7263497128CDED666BBAE9D104747DF0FA6B7D0A6B519ECCA4D357F41A4",
      img: OCI,
    },
    {
      title: "Python Full Stack Development",
      description:
        "Completed an intensive course at Besant Technologies, mastering front-end and back-end with Python.",
      img: Python,
    },
    {
      title: "Learning Pioneer at Neartekpod",
      description:
        "Recognized for outstanding dedication to continuous learning and technical growth.",
      img: Award,
      link: AwardFrame,
    },
    {
      title: "Certified Application Integration Professional (OCI 2024)",
      description:
        "Certified in cloud integration and automation using Oracle Cloud Infrastructure.",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=11813531F6B68C48EED98DB47D1ADBFF33D41E0C8671110C71D42824F5DA8949",
      img: OIC,
    },
  ];

  return (
    <section className="achievement-section" id="achievements">
      <div className="container">
        <h2 className="text-center mb-5 text-warning">My Achievements</h2>

        {achievements.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`achievement-block d-flex flex-column flex-lg-row ${
                !isEven ? "flex-lg-row-reverse" : ""
              } align-items-center  mb-4`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              {/* Image */}
              <motion.div
                className="achievement-img"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img src={item.img} alt={item.title} />
              </motion.div>

              {/* Content */}
              <motion.div
                className="achievement-desc text-white"
                variants={{
                  hidden: { opacity: 0, x: isEven ? 80 : -80 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h5 className="text-warning">{item.title}</h5>
                <p className="text-light mb-1">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info fw-semibold"
                  >
                    View Certification →
                  </a>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
