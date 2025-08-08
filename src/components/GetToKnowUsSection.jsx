import React, { useState } from "react";
import "./GetToKnowUsSection.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import kite from "../assets/images/kite.png";
import arrowDR from "../assets/images/arrowz.png";
import CustomButton from "./CustomButton";
import tickIcn from "../assets/images/tick.png";

const accordionData = [
  {
    title: "Offshore software development team deployment",
    summary:
      "We are an offshore software development company helping you scale efficiently.",
    content: (
      <div>
        <p>
          At Nextwebi, offshore software development firm we entail deploying a
          team at a different location to help you meet your technological
          requirements. The software industry is ramping up at a faster pace
          across the globe creating fierce competition and increasing the cost
          of running the business. Inevitably, Onsite-Offshore Software
          Development emerged as a solution for many businesses looking to build
          custom services to tackle the problems arising timely.
        </p>
        <ul className="accordion-list">
          <li>
            <img src={tickIcn} alt="tick" />
            Enhanced business process quality
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            Flexible and scalable technological solutions{" "}
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            Technically proficient team of offshore software developers pool
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            On-time project delivery with high-security standards{" "}
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Workflow post offshore software development team establishment",
    summary:
      "Hire a dedicated offshore software development team with Nextwebi and expand your business outreach while cutting recruitment and infrastructure costs.",
    content: (
      <div>
        <p>
          At Nextwebi, offshore software development firm we entail deploying a
          team at a different location to help you meet your technological
          requirements. The software industry is ramping up at a faster pace
          across the globe creating fierce competition and increasing the cost
          of running the business. Inevitably, Onsite-Offshore Software
          Development emerged as a solution for many businesses looking to build
          custom services to tackle the problems arising timely.
        </p>
        <ul className="accordion-list">
          <li>
            <img src={tickIcn} alt="tick" />
            Enhanced business process quality
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            Flexible and scalable technological solutions{" "}
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            Technically proficient team of offshore software developers pool
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            On-time project delivery with high-security standards{" "}
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Cost of offshore development services",
    summary:
      "Estimating the cost of offshore development services can be a tricky process as it depends on various factors in domain knowledge, industry expertise, and project knowledge. The components that influence the cost of offshore development services include:",
    content: (
      <div>
        <p>
          At Nextwebi, offshore software development firm we entail deploying a
          team at a different location to help you meet your technological
          requirements. The software industry is ramping up at a faster pace
          across the globe creating fierce competition and increasing the cost
          of running the business. Inevitably, Onsite-Offshore Software
          Development emerged as a solution for many businesses looking to build
          custom services to tackle the problems arising timely.
        </p>
        <ul className="accordion-list">
          <li>
            <img src={tickIcn} alt="tick" />
            Enhanced business process quality
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            Flexible and scalable technological solutions{" "}
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            Technically proficient team of offshore software developers pool
          </li>
          <li>
            <img src={tickIcn} alt="tick" />
            On-time project delivery with high-security standards{" "}
          </li>
        </ul>
      </div>
    ),
  },
];

const GetToKnowUsSection = () => {
  const [activeIndices, setActiveIndices] = useState([0]); // Only first open initially

  const toggleAccordion = (index) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <section className="get-to-know-us">
      <div className="left-panel">
        <h2 className="sec_heading">
          Offshore Dedicated Development Team for Your Project Requirements
        </h2>
        <p className="sub_heading">
          Nextwebi is a leading offshore software development company we save
          you from hiring hassle and deploy a team of dedicated
        </p>

        <div className="info-card">
          <img src={kite} alt="User Icon" className="top-left-icon" />

          <div className="card-body">
            <h4>Let's begin with a no-obligation conversations.</h4>
          </div>

          <CustomButton
            text="Request a Quote"
            fontFamily="Inter"
            color="rgb(20, 104, 251)"
          />

          <img src={arrowDR} alt="Arrow Icon" className="bottom-right-icon" />
        </div>

        {/* <div className="info-card">
          <div className="card-content">
            <img src="/icons/user-icon.svg" alt="User" className="card-icon" />
            <div>
              <h4>Exclusive Seller Kit</h4>
              <p>Access premium tools to help you sell faster.</p>
            </div>
          </div>
          <button className="request-btn">Request for Access</button>
        </div> */}
      </div>

      <div className="right-panel">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-title ${
                activeIndices.includes(index) ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-heading">
                <h4>{item.title}</h4>
                {!activeIndices.includes(index) && item.summary && (
                  <p className="accordion-summary">{item.summary}</p>
                )}
              </div>
              <span className="accordion-icon">
                {activeIndices.includes(index) ? (
                  <FaAngleDown />
                ) : (
                  <FaAngleRight />
                )}
              </span>
            </button>

            {activeIndices.includes(index) && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetToKnowUsSection;
