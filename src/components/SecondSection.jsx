import React from "react";
import "./SecondSection.css";
import output_driven from "../assets/images/output_driven.png"; // update with correct path if needed

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="left-column">
        <h2>Output-Driven Offshore Software Development Centre</h2>
        <p className="sub_heading">
          Offshore development services refers to the practice of hiring a
          remote team or a software development company
        </p>
        <br />

        <p className="second_sec_description">
          Offshore development services refers to the practice of hiring a
          remote team or a software development company in a different company
          to help reduce development costs Offshore development services refers
          to the practice of hiring a remote team or a software development
          company Offshore development services refers to the practice of hiring
          a remote team or a software development company in a different company
          to help reduce development costs Offshore development services refers
          to the practice of hiring a remote team or a software
          <br />
          <br />
          development costs Offshore development services refers to the practice
          of hiring a remote team or a software development company in a
          different company
        </p>
      </div>
      <div className="right-column">
        <img src={output_driven} alt="Healthcare Illustration" />
      </div>
    </section>
  );
};

export default SecondSection;
