import React from "react";
import BlogCard from "./BlogCard";
import "./BlogSection.css";
import { blogData } from "../data/blogsData"; // adjust path

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Related Blogs</h2>
      <div className="blog-grid">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
