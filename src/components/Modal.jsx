import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../App.css";

const Modal = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("mblvnjvk"); 

  if (!isOpen) return null;

  if (state.succeeded) {
    setTimeout(() => onClose(), 1500);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {!state.succeeded ? (
          <>
            <h2 className="modal-title">Let’s work together</h2>

            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button type="submit" className="btn modal-send-btn" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <h3>Thank you!</h3>
            <p>Your message has been sent successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;