import React from "react";
import Hero from "./Hero";
import SecondSection from "./SecondSection";
import Card from "./Card";
import CardsSection from "./CardSection";
import CaseStudy from "./CaseStudy";
import ClientsSection from "./LogoSlider";
import LogoSlider from "./LogoSlider";
import GetToKnowUsSection from "./GetToKnowUsSection";
import TechCategories from "./TechCategories";
import ContactSection from "./ContactSection";
import BlogSection from "./BlogSection";
import TestimonialSection from "./TestimonialSection";
import FaqSection from "./FaqSection";

const Body = () => {
  return (
    <>
      <Hero />
      <SecondSection />
      <CardsSection />
      <CaseStudy />
      <LogoSlider />
      <GetToKnowUsSection />
      <TestimonialSection />
      <TechCategories />
      <FaqSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Body;
