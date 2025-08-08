import React from "react";
import Slider from "react-slick";
// Importing images from assets

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.css";
import logo1 from "../assets/images/logos/logo1.png";
import logo2 from "../assets/images/logos/logo2.png";
import logo3 from "../assets/images/logos/logo3.png";
import logo4 from "../assets/images/logos/logo5.png";
import logo5 from "../assets/images/logos/logoq.png";

const LogoSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5, // number of logos visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear", // smooth continuous scroll
    pauseOnHover: true,
  };
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="logo-section">
      <p className="sub_heading" style={{ textAlign: "center" }}>
        Trusted by 100+ Clients Globally
      </p>
      <Slider {...settings} className="logo-slider">
        {logos.map((logo, idx) => (
          <div key={idx} className="logo-slide">
            <img src={logo} alt={`Logo ${idx}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LogoSlider;
