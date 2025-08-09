// StatsItem.jsx
import React from "react";
import "./StatsItem.css";
const StatsItem = ({ number, label }) => (
  <div className="stats-item">
    <strong>{number}</strong>
    <span>{label}</span>
  </div>
);

export default StatsItem;
