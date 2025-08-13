import React, { useState } from "react";
import "./TechCategories.css";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiApachehadoop,
  SiApachespark,
  SiApachekafka,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import htmlIcon from "../assets/images/tech_logos/html.png";
import cssIcon from "../assets/images/tech_logos/css.png";
import jsIcon from "../assets/images/tech_logos/js.png";
import angularIcon from "../assets/images/tech_logos/angular.png";
import reactIcon from "../assets/images/tech_logos/react.png";
import vueIcon from "../assets/images/tech_logos/vue.png";
// Utility to capitalize the first letter
const formatKey = (key) => key.charAt(0).toUpperCase() + key.slice(1);

const TechCategories = () => {
  const techCategories = {
    "Frontend Programming Languages": [
      { name: "HTML5", image: htmlIcon },
      { name: "Vue", image: vueIcon },
      { name: "Angular", image: angularIcon },

      { name: "CSS3", image: cssIcon },
      { name: "JavaScript", image: jsIcon },
      { name: "React", image: reactIcon },
    ],
    "Backend Programming Languages": [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <GrMysql /> },
    ],
    mobile: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Swift", icon: <SiSwift /> },
    ],
    "Big Data": [
      { name: "Hadoop", icon: <SiApachehadoop /> },
      { name: "Spark", icon: <SiApachespark /> },
      { name: "Kafka", icon: <SiApachekafka /> },
    ],
  };
  const categories = Object.keys(techCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  //  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="tech-section">
      <div className="left-panel.">
        <h2 className="sec_heading">
          Absolutely, We Have Thoroughly Mastered The Technologies You Prefer.
        </h2>
        <p className="sub_heading">
          Our exceptionally skilled IT specialists are proficient in both
          classic and modern programming languages, as well as frameworks. We
          aim for excellence, choosing only the top-tier candidates when
          selecting our IT specialists.
        </p>
      </div>

      <div className="tech-categories-wrapper">
        <div className="tabs">
          {Object.keys(techCategories).map((key) => (
            <div
              className={`tech-group ${activeCategory === key ? "active" : ""}`}
              onClick={() => setActiveCategory(key)}
              key={key}
            >
              <h2>{formatKey(key)}</h2>
            </div>
          ))}
        </div>

        <div className="tech-grid">
          {techCategories[activeCategory].map((tech, i) => (
            <div className="tech-card" key={i}>
              {tech.image ? (
                <img src={tech.image} alt={tech.name} className="tech-image" />
              ) : (
                <>
                  {" "}
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCategories;
