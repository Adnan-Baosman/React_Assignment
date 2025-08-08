import React from "react";
import Card from "./Card";
import "../components/CardSection.css";

const cardData = [
  {
    title: "Offshore software development consulting",
    description:
      "Customized offshore software development consulting service to help you enhance your digital landscape with the latest technology. Our team of expert offshore software developers will help you integrate the latest technologies with a strategized roadmap and plan.",
  },
  {
    title: "Digital Transformation",
    description:
      "Transform your digital landscape with our professional digital transformation services which strategically use digital technologies to radically improve or reinvent a company's business processes, customer experiences, and culture.",
  },
  {
    title: "Web Development",
    description:
      "Enhance your business agility with web application development solutions delivering an intuitive digital experience. Our team has significant experience in handling multiple types of offshore custom software development projects that will help you transform your digital landscape and augment sales.",
  },
  {
    title: "Offshore software development consulting",
    description:
      "Customized offshore software development consulting service to help you enhance your digital landscape with the latest technology. Our team of expert offshore software developers will help you integrate the latest technologies with a strategized roadmap and plan.",
  },
  {
    title: "Digital Transformation",
    description:
      "Transform your digital landscape with our professional digital transformation services which strategically use digital technologies to radically improve or reinvent a company's business processes, customer experiences, and culture.",
  },
  {
    title: "Web Development",
    description:
      "Enhance your business agility with web application development solutions delivering an intuitive digital experience. Our team has significant experience in handling multiple types of offshore custom software development projects that will help you transform your digital landscape and augment sales.",
  },
];

const CardsSection = () => {
  return (
    <section className="third_section">
      <h2 className="sec_heading">
        Output-Driven Offshore Software
        <br /> Development Centre
      </h2>

      <p className="sub_heading">
        Offshore development services refers to the practice of hiring a remote
        team or a software development company in a different company
        <br /> to help reduce development costs
      </p>

      <div className="cards-section">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
