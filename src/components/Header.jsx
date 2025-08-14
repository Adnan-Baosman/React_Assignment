import React, { useState, useEffect } from "react";
import "./Header.css";
import "./HeaderRes.css";
import logo from "../assets/images/logo.png";
import CustomButton from "./CustomButton";
import arrowIcon from "../assets/images/arrow.png";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu"; // new component

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
      isMegaMenu: true,
      megaData: [
        {
          name: "The Company",
          description: "About our journey and values.",
          links: [
            { label: "About Us", url: "#" },
            { label: "Clients", url: "#" },
            { label: "Industries", url: "#" },
            { label: "Careers", url: "#" },
            { label: "Internships", url: "#" },
            { label: "Lorem ipsum", url: "#" },
            { label: "Lorem ipsum", url: "#" },
            { label: "Lorem ipsum", url: "#" },
          ],
        },
        {
          name: "Resources",
          description: "Learn more from our knowledge base.",
          links: [
            { label: "Blogs", url: "#" },
            { label: "Case Studies", url: "#" },
            { label: "Our Work", url: "#" },
            { label: "Articles", url: "#" },
            { label: "Lorem ipsum", url: "#" },
            { label: "Lorem ipsum", url: "#" },
            { label: "Lorem ipsum", url: "#" },
          ],
        },
        {
          name: "The Story",
          description: "About our journey and values.",
          links: [
            { label: "About Us", url: "#" },
            { label: "Clients", url: "#" },
            { label: "Industries", url: "#" },
            { label: "Careers", url: "#" },
            { label: "Internships", url: "#" },
            { label: "Lorem ipsum", url: "#" },
            { label: "Lorem ipsum", url: "#" },
            { label: "Lorem ipsum", url: "#" },
          ],
        },
      ],
    },
    {
      label: "Services",
      hasChildren: true,
      isMegaMenu: true,
      megaData: [
        {
          name: "Software Development",
          description: "Assisting brands to make a digital impact.",
          links: [
            { label: "Offshore Software Development", url: "#" },
            { label: "Custom Software Development", url: "#" },
            { label: "Web Application Development", url: "#" },
            { label: "Mobile App Development", url: "#" },
            { label: "Full-Stack Development", url: "#" },
            { label: "Application Migration & Re-Engineering", url: "#" },
            { label: "Ecommerce Application Development", url: "#" },
            { label: "On Premise App Development", url: "#" },
            { label: "ERP Application Development", url: "#" },
            { label: "CRM Application Development", url: "#" },
            { label: "Microsoft SharePoint Customizations", url: "#" },
            { label: "AI Development and Integration", url: "#" },
          ],
        },
        {
          name: "Web Development Services",
          description: "Assisting brands to make a digital impact.",
          links: [
            { label: "Website Development", url: "#" },
            { label: "Custom eCommerce Application Development", url: "#" },
            { label: "Shopify eCommerce Development", url: "#" },
            { label: "Website Revamp", url: "#" },
            { label: "Landing Page Development", url: "#" },
            { label: "WordPress Development", url: "#" },
            { label: "Custom Portal Development", url: "#" },
            { label: "UI/UX Development", url: "#" },
            { label: "Application Wireframing", url: "#" },
            { label: "Maintenance & Support", url: "#" },
          ],
        },
        {
          name: "Mobile Development Services",
          description: "Delivering mobile-first solutions for every need.",
          links: [
            { label: "iOS App Development", url: "#" },
            { label: "Android App Development", url: "#" },
            { label: "Cross-Platform App Development", url: "#" },
            { label: "React Native App Development", url: "#" },
            { label: "Flutter App Development", url: "#" },
            { label: "Hybrid App Development", url: "#" },
            { label: "Mobile App UI/UX Design", url: "#" },
            { label: "Wearable App Development", url: "#" },
            { label: "Mobile App Maintenance & Support", url: "#" },
          ],
        },
        {
          name: "Cloud & DevOps Services",
          description: "Scalable and reliable cloud-based solutions.",
          links: [
            { label: "AWS Cloud Services", url: "#" },
            { label: "Azure Cloud Services", url: "#" },
            { label: "Google Cloud Platform Services", url: "#" },
            { label: "Cloud Migration Services", url: "#" },
            { label: "DevOps Consulting", url: "#" },
            { label: "Continuous Integration & Deployment", url: "#" },
            { label: "Serverless Architecture", url: "#" },
            { label: "Cloud Security Services", url: "#" },
          ],
        },
        {
          name: "Data & AI Services",
          description: "Harnessing the power of data and intelligence.",
          links: [
            { label: "Data Analytics", url: "#" },
            { label: "Data Engineering", url: "#" },
            { label: "Business Intelligence Solutions", url: "#" },
            { label: "AI Model Development", url: "#" },
            { label: "Machine Learning Solutions", url: "#" },
            { label: "Natural Language Processing", url: "#" },
            { label: "Computer Vision Solutions", url: "#" },
            { label: "Predictive Analytics", url: "#" },
          ],
        },
        {
          name: "Enterprise Solutions",
          description: "Empowering enterprises with tailored solutions.",
          links: [
            { label: "ERP Development", url: "#" },
            { label: "CRM Development", url: "#" },
            { label: "SAP Customization", url: "#" },
            { label: "Microsoft Dynamics 365 Solutions", url: "#" },
            { label: "SharePoint Development", url: "#" },
            { label: "Enterprise Application Integration", url: "#" },
            { label: "Workflow Automation", url: "#" },
          ],
        },
      ],
    },
    {
      label: "Hire Developers",
      hasChildren: true,
      isMegaMenu: true,
      megaData: [
        {
          name: "Front End",
          description: "Your trusted hiring partner.",
          links: [
            { label: "Hire React Developer", url: "#" },
            { label: "Hire Angular Developer", url: "#" },
            { label: "Hire ASP.NET Developer", url: "#" },
            { label: "Hire Vue Developer", url: "#" },
            { label: "Hire UI/UX Developer", url: "#" },
            { label: "Hire HTML/CSS Developer", url: "#" },
            { label: "Hire Webflow Developer", url: "#" },
            { label: "Hire Next.js Developer", url: "#" },
            { label: "Hire WordPress Developer", url: "#" },
            { label: "Hire JavaScript Developer", url: "#" },
          ],
        },
        {
          name: "Backend",
          description: "Robust backend solutions.",
          links: [
            { label: "Hire Node.js Developer", url: "#" },
            { label: "Hire Python Developer", url: "#" },
            { label: "Hire Golang Developer", url: "#" },
            { label: "Hire .NET Core Developer", url: "#" },
            { label: "Hire PHP Developer", url: "#" },
            { label: "Hire Java Developer", url: "#" },
            { label: "Hire Python Developer", url: "#" },
            { label: "Hire Flutter Developer", url: "#" },
            { label: "Hire Kafka Developer", url: "#" },
            { label: "Hire SQL Developer", url: "#" },
            { label: "Hire C# Developer", url: "#" },
            { label: "Hire Kotlin Developer", url: "#" },
            { label: "Hire Backend Developer", url: "#" },
          ],
        },
        {
          name: "Software",
          description: "Your trusted hiring partner.",
          links: [
            { label: "Hire SharePoint Developer", url: "#" },
            { label: "Hire ServiceNow Developer", url: "#" },
            { label: "Hire Salesforce Developer", url: "#" },
            { label: "Hire SAP Developer", url: "#" },
            { label: "Hire Office 365 Developer", url: "#" },
            { label: "Hire Full-stack Developer", url: "#" },
            { label: "Hire AWS Expert", url: "#" },
            { label: "Hire Azure Expert", url: "#" },
            { label: "Hire MEAN Stack Developer", url: "#" },
            { label: "Hire MERN Stack Developer", url: "#" },
            { label: "Hire MAUI/Xamarin Developer", url: "#" },
            { label: "Hire Mobile App Developer", url: "#" },
            { label: "Hire Software Developer", url: "#" },
            { label: "Hire Remote Developer", url: "#" },
            { label: "Hire Data Analyst", url: "#" },
            { label: "Hire Data Scientist", url: "#" },
            { label: "Hire Data Engineer", url: "#" },
            { label: "Hire Power BI Expert", url: "#" },
            { label: "Hire Fullstack Developer", url: "#" },
            { label: "Hire DevOps Engineer", url: "#" },
          ],
        },
      ],
    },
    {
      label: "Solutions",
      hasChildren: true,
      isMegaMenu: true,
      megaData: [
        {
          name: "Front End",
          description: "Your trusted hiring partner.",
          links: [
            { label: "Hire React Developer", url: "#" },
            { label: "Hire Angular Developer", url: "#" },
            { label: "Hire ASP.NET Developer", url: "#" },
            { label: "Hire Vue Developer", url: "#" },
            { label: "Hire UI/UX Developer", url: "#" },
            { label: "Hire HTML/CSS Developer", url: "#" },
            { label: "Hire Webflow Developer", url: "#" },
            { label: "Hire Next.js Developer", url: "#" },
            { label: "Hire WordPress Developer", url: "#" },
            { label: "Hire JavaScript Developer", url: "#" },
          ],
        },
        {
          name: "Backend",
          description: "Robust backend solutions.",
          links: [
            { label: "Hire Node.js Developer", url: "#" },
            { label: "Hire Python Developer", url: "#" },
            { label: "Hire Golang Developer", url: "#" },
            { label: "Hire .NET Core Developer", url: "#" },
            { label: "Hire PHP Developer", url: "#" },
            { label: "Hire Java Developer", url: "#" },
            { label: "Hire Python Developer", url: "#" },
            { label: "Hire Flutter Developer", url: "#" },
            { label: "Hire Kafka Developer", url: "#" },
            { label: "Hire SQL Developer", url: "#" },
            { label: "Hire C# Developer", url: "#" },
            { label: "Hire Kotlin Developer", url: "#" },
            { label: "Hire Backend Developer", url: "#" },
          ],
        },
        {
          name: "Software",
          description: "Your trusted hiring partner.",
          links: [
            { label: "Hire SharePoint Developer", url: "#" },
            { label: "Hire ServiceNow Developer", url: "#" },
            { label: "Hire Salesforce Developer", url: "#" },
            { label: "Hire SAP Developer", url: "#" },
            { label: "Hire Office 365 Developer", url: "#" },
            { label: "Hire Full-stack Developer", url: "#" },
            { label: "Hire AWS Expert", url: "#" },
            { label: "Hire Azure Expert", url: "#" },
            { label: "Hire MEAN Stack Developer", url: "#" },
            { label: "Hire MERN Stack Developer", url: "#" },
            { label: "Hire MAUI/Xamarin Developer", url: "#" },
            { label: "Hire Mobile App Developer", url: "#" },
            { label: "Hire Software Developer", url: "#" },
            { label: "Hire Remote Developer", url: "#" },
            { label: "Hire Data Analyst", url: "#" },
            { label: "Hire Data Scientist", url: "#" },
            { label: "Hire Data Engineer", url: "#" },
            { label: "Hire Power BI Expert", url: "#" },
            { label: "Hire Fullstack Developer", url: "#" },
            { label: "Hire DevOps Engineer", url: "#" },
          ],
        },
      ],
    },
    {
      label: "Technologies",
      hasChildren: true,
      isMegaMenu: true,
      megaData: [
        {
          name: "Front End",
          description: "Your trusted hiring partner.",
          links: [
            { label: "Hire React Developer", url: "#" },
            { label: "Hire Angular Developer", url: "#" },
            { label: "Hire ASP.NET Developer", url: "#" },
            { label: "Hire Vue Developer", url: "#" },
            { label: "Hire UI/UX Developer", url: "#" },
            { label: "Hire HTML/CSS Developer", url: "#" },
            { label: "Hire Webflow Developer", url: "#" },
            { label: "Hire Next.js Developer", url: "#" },
            { label: "Hire WordPress Developer", url: "#" },
            { label: "Hire JavaScript Developer", url: "#" },
          ],
        },
        {
          name: "Backend",
          description: "Robust backend solutions.",
          links: [
            { label: "Hire Node.js Developer", url: "#" },
            { label: "Hire Python Developer", url: "#" },
            { label: "Hire Golang Developer", url: "#" },
            { label: "Hire .NET Core Developer", url: "#" },
            { label: "Hire PHP Developer", url: "#" },
            { label: "Hire Java Developer", url: "#" },
            { label: "Hire Python Developer", url: "#" },
            { label: "Hire Flutter Developer", url: "#" },
            { label: "Hire Kafka Developer", url: "#" },
            { label: "Hire SQL Developer", url: "#" },
            { label: "Hire C# Developer", url: "#" },
            { label: "Hire Kotlin Developer", url: "#" },
            { label: "Hire Backend Developer", url: "#" },
          ],
        },
        {
          name: "Software",
          description: "Your trusted hiring partner.",
          links: [
            { label: "Hire SharePoint Developer", url: "#" },
            { label: "Hire ServiceNow Developer", url: "#" },
            { label: "Hire Salesforce Developer", url: "#" },
            { label: "Hire SAP Developer", url: "#" },
            { label: "Hire Office 365 Developer", url: "#" },
            { label: "Hire Full-stack Developer", url: "#" },
            { label: "Hire AWS Expert", url: "#" },
            { label: "Hire Azure Expert", url: "#" },
            { label: "Hire MEAN Stack Developer", url: "#" },
            { label: "Hire MERN Stack Developer", url: "#" },
            { label: "Hire MAUI/Xamarin Developer", url: "#" },
            { label: "Hire Mobile App Developer", url: "#" },
            { label: "Hire Software Developer", url: "#" },
            { label: "Hire Remote Developer", url: "#" },
            { label: "Hire Data Analyst", url: "#" },
            { label: "Hire Data Scientist", url: "#" },
            { label: "Hire Data Engineer", url: "#" },
            { label: "Hire Power BI Expert", url: "#" },
            { label: "Hire Fullstack Developer", url: "#" },
            { label: "Hire DevOps Engineer", url: "#" },
          ],
        },
      ],
    },

    { label: "Our Work", hasChildren: false },
  ];

  //const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdownToggle = (index) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              style={{ height: "31px", objectFit: "contain" }}
            />
          </div>

          <nav className="nav">
            <ul>
              {" "}
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
                      <div className="mega-menu">
                        {item.isMegaMenu ? (
                          <MegaMenu data={item.megaData} />
                        ) : (
                          <div className="mega-content">
                            Normal dropdown here
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <CustomButton text="Contact Us" color="#E6392A" fontWeight={700} />
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)} // fix here
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileOpen && (
            <MobileMenu
              menuItems={menuItems}
              onClose={() => setIsMobileOpen(false)}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
