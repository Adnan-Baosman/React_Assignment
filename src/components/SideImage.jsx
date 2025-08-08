// components/SideImage.js
import React from "react";
import "./SideImage.css"; // Optional if you want to style

const SideImage = ({ src, alt = "Image" }) => {
  return (
    <div className="side-image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SideImage;
