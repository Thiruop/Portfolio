import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/ContactSection.css";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b6bzi1j",
        "template_vh5nknr",
        form.current,
        "nNAp5OCBOwtox_XrG"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);

          emailjs
            .send(
              "service_b6bzi1j",
              "template_prdnl2m",
              {
                email: form.current.email.value,
                user_name: form.current.name.value,
              },
              "nNAp5OCBOwtox_XrG"
            )
            .then(
              () => {
                toast.success("Message sent successfully!", {
                  position: "bottom-right",
                  autoClose: 5000,
                });
                form.current.reset(); 
              },
              (error) => {
                console.error("Auto-reply send error:", error.text);
                toast.error("Failed to send auto-reply. Please try again.", {
                  position: "bottom-right",
                  autoClose: 5000,
                });
              }
            );
        },
        (error) => {
          console.error("Email send error:", error.text);
          toast.error("Failed to send message. Please try again later.", {
            position: "bottom-right",
            autoClose: 5000,
          });
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title text-center mb-5">Contact Me</h2>
        <div className="row g-4">
          {/* Left: Your Info */}
          <div className="col-md-5">
            <div className="glass-card p-4 h-100">
              <h5 className="text-warning">Thirumoorthi Murugesan</h5>
              <p className="text-white mb-1">
                <strong>Email:</strong> thirumoorthim2200@gmail.com
              </p>
              <p className="text-white mb-1">
                <strong>Phone:</strong> +91 81110 34557
              </p>
              <p className="text-white mb-0">
                <strong>Location:</strong> Salem, Tamil Nadu, India
              </p>

              {/* ✅ Preferred Locations Marquee */}
              <div className="marquee-container mt-4">
                <div className="marquee">
                  {[
                    "Chennai",
                    "Bengaluru",
                    "Coimbatore",
                    "Kerala (Cochin)",
                    "Hyderabad",
                    "Madurai",
                    "Trichy",
                  ].map((location, index) => (
                    <span key={index} className="skill-item">
                      {location}
                    </span>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[
                    "Chennai",
                    "Bengaluru",
                    "Coimbatore",
                    "Kerala (Cochin)",
                    "Hyderabad",
                    "Madurai",
                    "Trichy",
                  ].map((location, index) => (
                    <span key={index + 7} className="skill-item">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="col-md-7">
            <form ref={form} onSubmit={sendEmail} className="glass-card p-4">
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Description"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning fw-bold mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toastify container to display notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </section>
  );
}
