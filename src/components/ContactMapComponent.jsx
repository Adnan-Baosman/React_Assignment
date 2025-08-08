// components/MapSection.js
import React from "react";
import { mapData } from "../data/mapData.js";
import "./ContactMapComponent.css"; // Import normal CSS

const ContactMapComponent = () => {
  return (
    <div className="map-section">
      <div className="map-grid">
        {mapData.map((item, index) => (
          <div className="map-card" key={index}>
            <img src={item.mapUrl} alt={item.country} className="map-image" />
            <h3 className="country-name">{item.country}</h3>
            <p className="map-address">{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMapComponent;
