import { useState } from "react";
import "./../App.css";
import Modal from "../components/Modal";

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="section contacts">
      <div className="container">

        <h1 className="title-1 contacts__title">Get in Touch</h1>
        <p className="contacts__subtitle">
          I’m open to new opportunities, collaborations, and interesting projects.
        </p>

        <div className="contacts-grid">

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h2 className="contact-label">Location</h2>
            <p className="contact-value">Newcastle, UK</p>
          </div>

          <a href="tel:+447460107091" className="contact-card">
            <div className="contact-icon">📞</div>
            <h2 className="contact-label">Phone</h2>
            <p className="contact-value">+44 7460107091</p>
          </a>

          <a href="mailto:shemiakinau@gmail.com" className="contact-card">
            <div className="contact-icon">✉️</div>
            <h2 className="contact-label">Email</h2>
            <p className="contact-value">shemiakinau@gmail.com</p>
          </a>

        </div>

        <button className="btn contact-cta-btn" onClick={() => setIsModalOpen(true)}>
          Let’s work together
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </main>
  );
};

export default Contacts;