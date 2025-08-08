import React from "react";
import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;
