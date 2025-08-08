import React, { useState } from "react";
import "./GetToKnowUsSection.css";
import accordionData from "../data/faqData";
import FaqItem from "./FaqItem";
import "./FaqSection.css";
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Only one active at a time

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq_sec">
      <div>
        {" "}
        <h2 className="sec_heading">Frequently Asked Questions</h2>
        <p className="sub_heading">
          We offer a range of pricing plans to fit every budget and level of
          need. Whether you're a solo professional
        </p>
      </div>

      <div className="faq_list scrollable-section">
        {accordionData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            index={index}
            isActive={activeIndex === index} // ✅ Fix is here
            onToggle={toggleAccordion}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
