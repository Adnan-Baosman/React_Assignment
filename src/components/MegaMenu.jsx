import React, { useState } from "react";
import "./MegaMenu.css";

const MegaMenu = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(data[0]?.name || "");

  return (
    <div className="mega-menu">
      {/* Left Column: Category list */}
      <div className="mega-menu-left">
        {data.map((cat) => (
          <div
            key={cat.name}
            className={`mega-menu-cat ${
              activeCategory === cat.name ? "active" : ""
            }`}
            onMouseEnter={() => setActiveCategory(cat.name)}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
            <span className="menu_arrow">›</span>
          </div>
        ))}
      </div>

      {/* Right Column: Links & Info */}
      <div className="mega-menu-right">
        {data
          .filter((cat) => cat.name === activeCategory)
          .map((cat) => (
            <div key={cat.name} className="mega-menu-content">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <div className="mega-links">
                {cat.links.map((link, i) => (
                  <a key={i} href={link.url}>
                    {link.label}
                  </a>
                ))}
              </div>
              {cat.cta && (
                <div className="mega-cta">
                  <p>
                    <strong>{cat.cta.title}</strong>
                    <br />
                    {cat.cta.subtitle}
                  </p>
                  <a href={cat.cta.url} className="mega-btn">
                    {cat.cta.button}
                  </a>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MegaMenu;
