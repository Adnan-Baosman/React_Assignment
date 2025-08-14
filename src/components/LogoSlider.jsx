import React from "react";
import Slider from "react-slick";
import "./LogoSlider.css";
import logo1 from "../assets/images/logos/logo1.png";
import logo2 from "../assets/images/logos/logo2.png";
import logo3 from "../assets/images/logos/logo3.png";
import logo4 from "../assets/images/logos/logo5.png";
import logo5 from "../assets/images/logos/logoq.png";

const LogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // visible logos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // hide arrows, optional
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="logo-section">
      <p className="sub_heading">Trusted by 100+ Clients Globally</p>
      <Slider {...settings} className="logo-container">
        {logos.map((logo, idx) => (
          <div key={idx} className="logo-slide">
            <img src={logo} alt={`Logo ${idx + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LogoSlider;
