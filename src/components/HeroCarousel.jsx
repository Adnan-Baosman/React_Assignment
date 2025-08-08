import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroCarousel.css";
import leftArrow from "../assets/images/left_arrow.png";
import rightArrow from "../assets/images/right_arrow.png";
import Button from "./CustomButton";
import CustomButton from "./CustomButton";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    {
      title: "Offshore Software Development Company in New York",
      description:
        "At Nextwebi, we provide agile result-oriented offshore software development services for companies ranging from startups to enterprises to help you keep up with constant technological evolution. We deploy a team of expert developers",
    },
    {
      title: (
        <>
          Assignment Design in React JS <br /> By Adnan Ali
        </>
      ),
      description: (
        <>
          Time, Tide and JavaScript waits for None!
          <br /> Inhale JavaScript, Exhale React JS.
        </>
      ),
    },
    {
      title: "Given an opportunity I will do my Best.",
      description:
        "Given an opportunity, I will do my best to contribute effectively to the growth of NextWebi. I have 3.4 years of Experience as a Frontend Developer, Immediately Available.",
    },
  ];

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="hero-buttons">
                <CustomButton text="Get in Touch" color="#1468FB" />
                <CustomButton text="Our Works" border="1px solid white" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <img src={rightArrow} alt="Next" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <img src={leftArrow} alt="Previous" />
    </div>
  );
}

export default HeroCarousel;
