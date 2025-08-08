// components/TestimonialSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSection.css";
import PrevArrow from "./PrevArrow";
import { NextArrow } from "./NextArrow";

const testimonials = [
  {
    quote: `I wanted to redesigning and revamp the website of my
institution. I contacted Nextwebi and they understood
the vision of an organization and through several
discussions and timely suggestions, the website was
delivered and deployed successfully. Nextwebi, Without a doubt they have what it takes to
make a great web application, not to mention with a
competitive price too. Now on seeing the end product I
am satisfied and know that the web app is in safe hands.
Thank you to the entire team.`,
    clientName: "Qenowned & D Firm",
    clientRole: "Team Lead",
    company: "Dynamatic Technologies",
    companyLogo: "/images/testimonials/companylogo.png",
    avatar: "/images/testimonials/author1.png",
  },
  {
    quote: `I wanted to redesigning and revamp the website of my
institution. I contacted Nextwebi and they understood
the vision of an organization and through several
discussions and timely suggestions, the website was
delivered and deployed successfully. Nextwebi, Without a doubt they have what it takes to
make a great web application, not to mention with a
competitive price too. Now on seeing the end product I
am satisfied and know that the web app is in safe hands.
Thank you to the entire team.`,
    clientName: "Samantha Paul",
    clientRole: "Product Manager",
    company: "BrightTech",
    companyLogo: "/images/testimonials/companylogo.png",
    avatar: "/images/testimonials/author1.png",
  },
  {
    quote: `The team understood our complex requirements and delivered beyond expectations. The quality, support, and dedication made a big difference in our product's success. The team understood our complex requirements and delivered beyond expectations. The quality, support, and dedication made a big difference in our product's success.`,
    clientName: "Ravi Narayan",
    clientRole: "Founder",
    company: "InnovaSoft",
    companyLogo: "/images/testimonials/companylogo.png",
    avatar: "/images/testimonials/author1.png",
  },
];

const TestimonialSection = () => {
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
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>Hear It From Those Who Matter Most</h2>
        <p>
          Offshore development services refers to the practice of hiring a
          remote team or a software development <br />
          company in a different country to help reduce development costs.
        </p>
      </div>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-content">
              <span className="quote-mark">
                <img src="/images/testimonials/quote.png" />
              </span>
              <p className="para-bottom-border">{t.quote}</p>
              <div className="testimonial-footer">
                <div className="company">
                  <img src={t.companyLogo} alt="Company Logo" />
                </div>
                <div className="author">
                  <img src={t.avatar} alt="Client" />
                  <div>
                    <strong>{t.clientName}</strong>
                    <p>{t.clientRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

// // Custom Arrows
// function SampleNextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className="arrow next" onClick={onClick}>
//       ▶
//     </div>
//   );
// }
// function SamplePrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className="arrow prev" onClick={onClick}>
//       ◀
//     </div>
//   );
// }

export default TestimonialSection;
