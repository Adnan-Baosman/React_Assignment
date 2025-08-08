import React from "react";
import "./LogoSlider.css";
import logo1 from "../assets/images/logos/logo1.png";
import logo2 from "../assets/images/logos/logo2.png";
import logo3 from "../assets/images/logos/logo3.png";
import logo4 from "../assets/images/logos/logo5.png";
import logo5 from "../assets/images/logos/logoq.png";

const LogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="logo-section">
      <p className="sub_heading">Trusted by 100+ Clients Globally</p>
      <div className="logo-container">
        {logos.map((logo, idx) => (
          <div key={idx} className="logo-slide">
            <img src={logo} alt={`Logo ${idx}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;
