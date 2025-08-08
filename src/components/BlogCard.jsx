import React from "react";
import "./BlogCard.css"; // Optional, or use Tailwind

const BlogCard = ({ image, title, excerpt, link }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <h3 className="blog-title">{title}</h3>
      <p className="blog-excerpt">{excerpt}</p>
      <a href={link} className="read-more">
        Read more <img src="/images/arrowupr.png" />
      </a>
    </div>
  );
};

export default BlogCard;
