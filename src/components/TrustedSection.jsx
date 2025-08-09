// TrustedSection.jsx
import React from "react";
import StatsItem from "./StatsItem";
import CertificationsList from "./CertificationsList";
import certifications from "../data/certifcationsData";

import "./TrustedSection.css";
import stats from "../data/statsData";

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-content">
        <h2>
          Trusted by Startups and Enterprises across <br />
          20+ Nations
        </h2>
        <p>
          Nextwebi software development team understands your business needs and
          suggests the right technology to build scalable software solutions. We
          work as a long-term technology partner with our customers and our
          approach ensures that every project aligns with their strategic
          business goals, we emphasize scalability, security, and performance.
        </p>
        <p>
          We are committed to delivering high-quality, cost-effective solutions
          on time, ensuring you achieve maximum value.
        </p>

        <div className="stats">
          {stats.map((stat, i) => (
            <StatsItem key={i} number={stat.number} label={stat.label} />
          ))}
        </div>

        <CertificationsList images={certifications} />
      </div>

      <div className="trusted-image">
        <img src="images/trust_rtimg.png" alt="Team collaboration" />
      </div>
    </section>
  );
};

export default TrustedSection;
