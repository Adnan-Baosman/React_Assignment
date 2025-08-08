import React from "react";
import "./Card.css";

const Card = ({ title, description }) => {
  return (
    <div className="card corner">
      <h3 className="card_Title">{title}</h3>
      <p className="card_Desc">{description}</p>
    </div>
  );
};

export default Card;
