import React from "react";
import "./ContactForm.css";
import CustomButton from "./CustomButton";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Company Name" />

      <input type="email" placeholder="Email Address" />
      <input type="tel" placeholder="Contact Number" />

      <textarea placeholder="Describe Your Requirement"></textarea>
      <div className="form-check-row">
        <label className="checkbox-label">
          <input type="checkbox" />
          Click here to quickly get portfolio in your inbox
        </label>

        <div className="math-challenge">
          <label className="math-label">5 + 3 =</label>
          <input type="text" className="math-input" />
        </div>
      </div>
      <CustomButton
        color="rgba(20, 104, 251, 1)"
        text="Request a Proposal"
        textColor="white"
        fontFamily="Inter"
      />
    </form>
  );
};

export default ContactForm;
