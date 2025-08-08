import React from "react";
import { useState, useEffect } from "react";

import "./Header.css";
import logo from "../assets/images/logo.png";
import CustomButton from "./CustomButton";
import arrowIcon from "../assets/images/arrow.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Company", hasChildren: true },
    { label: "Services", hasChildren: true },
    { label: "Hire Developers", hasChildren: true },
    { label: "Solutions", hasChildren: true },
    { label: "Technologies", hasChildren: true },
    { label: "Our Work", hasChildren: false },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{
              height: "31px", // ✅ Adjust as needed
              objectFit: "contain", // keeps aspect ratio
            }}
          />
        </div>
        <nav className="nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.label}
                {item.hasChildren && (
                  <img src={arrowIcon} alt="arrow" className="arrow-icon" />
                )}
              </li>
            ))}
          </ul>
        </nav>
        <CustomButton text={"Contact Us"} color={"#E6392A"} fontWeight={700} />
      </div>
    </header>
  );
};

export default Header;
