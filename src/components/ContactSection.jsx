// ContactSection.jsx
import React from "react";
import "./ContactSection.css";
import ContactForm from "./ContactForm";
import ContactMapComponent from "./ContactMapComponent";

const ContactSection = () => {
  // data/mapInfo.js

  return (
    <section className="contact-section">
      <div className="left-column">
        <p className="small_title">Get in Touch</p>
        <h2 className="big_title">
          Connect for Excellence Your Gateway to Exceptional Solutions.
        </h2>
        <ContactMapComponent />
      </div>
      <div className="right-columnFlex formDiv">
        <h3>Your Vision, Our Mission: Let's Shape Success Together.</h3>
        <ContactForm />
      </div>
      {/* <div className="mob_hide" style={{ height: "100px" }} /> */}
    </section>
  );
};

export default ContactSection;
