import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const FaqItem = ({ item, index, isActive, onToggle }) => {
  return (
    <div className={`accordion-item ${isActive ? "active" : ""}`}>
      <button className="accordion-title" onClick={() => onToggle(index)}>
        <div className="accordion-heading">
          <h4>{item.title}</h4>
        </div>
        <span className="accordion-icon">
          {isActive ? <FaAngleDown /> : <FaAngleRight />}
        </span>
      </button>

      <div
        className="accordion-content"
        style={{ display: isActive ? "block" : "none" }}
      >
        {item.content}
      </div>
    </div>
  );
};

export default FaqItem;
