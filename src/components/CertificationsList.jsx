import React from "react";

const CertificationsList = ({ images }) => (
  <div className="certifications">
    {images.map((img, i) => (
      <img key={i} src={img.src} alt={img.alt} />
    ))}
  </div>
);

export default CertificationsList;
