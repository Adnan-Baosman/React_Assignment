import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../assets/images/caseStudy.jpg";
import sliderImg2 from "../assets/images/it.jpg";
import "./CaseStudy.css";
import PrevArrow from "./PrevArrow";
import { NextArrow } from "./NextArrow";

const CaseStudy = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Custom arrow components

  const slides = [
    {
      title: (
        <>
          Web Application
          <br /> Development For A Real Estate Company In Dubai
        </>
      ),
      description:
        "Our client, a real estate agency based in Dubai, recognized the growing demand for a streamlined platform that would facilitate the process of buying and renting properties in Dubai.",
      image: sliderImg1,
    },
    {
      title: (
        <>
          Mobile Application
          <br /> Development For A Real Estate Company In India
        </>
      ),
      description:
        "Our client, a real estate agency based in India, recognized the growing demand for a streamlined platform that would facilitate the process of buying and renting properties in Dubai.",
      image: sliderImg2,
    },
    {
      title: (
        <>
          AI Application
          <br /> Development For A Real Estate Company In UAE
        </>
      ),
      description:
        "Our client, a real estate agency based in UAE, recognized the growing demand for a streamlined platform that would facilitate the process of buying and renting properties in Dubai.",
      image: sliderImg1,
    },
  ];

  return (
    <section className="ideas-section">
      <h2 className="sec_heading">Where Great Ideas Became Real Results</h2>

      <p className="sub_heading">
        Offshore development services refers to the practice of hiring a remote
        team or a software development company in a different company
        <br /> to help reduce development costs
      </p>

      <Slider {...settings} className="ideas-slider">
        {slides.map((slide, index) => (
          <div className="slide-wrapper" key={index}>
            <div className="slide-card">
              <div className="slide-text">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
              <div className="slide-image">
                <img src={slide.image} className="clipped" alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CaseStudy;
