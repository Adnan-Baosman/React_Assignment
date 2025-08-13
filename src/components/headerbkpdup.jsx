import React, { useState, useEffect } from "react";
import "./Header.css";
import "./HeaderRes.css";
import logo from "../assets/images/logo.png";
import CustomButton from "./CustomButton";
import arrowIcon from "../assets/images/arrow.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Company",
      hasChildren: true,
      children: ["About Us", "Careers", "Contact"],
    },
    {
      label: "Services",
      hasChildren: true,
      children: ["Web Development", "App Development", "UI/UX Design"],
    },
    {
      label: "Hire Developers",
      hasChildren: true,
      children: ["Frontend", "Backend", "Full Stack"],
    },
    {
      label: "Solutions",
      hasChildren: true,
      children: ["E-commerce", "SaaS", "CRM"],
    },
    {
      label: "Technologies",
      hasChildren: true,
      children: ["React", "Node.js", "Python"],
    },
    { label: "Our Work", hasChildren: false },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdownToggle = (index) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ height: "31px", objectFit: "contain" }}
          />
        </div>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="nav">
          <ul className={menuOpen ? "active" : ""}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`menu-item ${
                  item.hasChildren ? "has-children" : ""
                } ${openDropdown === index ? "open" : ""}`}
                onClick={() => handleDropdownToggle(index)}
              >
                {item.label}
                {item.hasChildren && (
                  <>
                    <img src={arrowIcon} alt="arrow" className="arrow-icon" />
                    <ul className="dropdown">
                      {item.children?.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <CustomButton text="Contact Us" color="#E6392A" fontWeight={700} />
      </div>
    </header>
  );
};

export default Header;
