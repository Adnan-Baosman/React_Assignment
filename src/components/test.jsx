import React from "react";
import "./TrustedSection.css";

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-content">
        <h2>
          Trusted by Startups and Enterprises across <br />
          <span>20+ Nations</span>
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
          <div>
            <strong>9+</strong>
            <span>Years in Business</span>
          </div>
          <div>
            <strong>1600+</strong>
            <span>Projects Delivered</span>
          </div>
          <div>
            <strong>600+</strong>
            <span>Client Relationships</span>
          </div>
        </div>

        <div className="certifications">
          <img src="images/iso-9001.png" alt="ISO 27001" />

          <img src="images/iso-27001.png" alt="Clutch" />
          <img src="images/nist.png" alt="ISO 9001" />
          <img src="images/duns-registered.png" alt="GoodFirms" />
          <img src="images/google-partners.png" alt="NST" />
        </div>
      </div>

      <div className="trusted-image">
        <img src="images/trust_rtimg.png" alt="Team collaboration" />
      </div>
    </section>
  );
};

export default TrustedSection;
