// BlogList.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import cardImage from "./images/cardImage.jpg";

const BlogList = () => {
  const blogs = [
    { id: 1, title: "Blog 1", excerpt: "Excerpt 1", image: cardImage },
    { id: 2, title: "Blog 2", excerpt: "Excerpt 2", image: cardImage },
    { id: 3, title: "Blog 3", excerpt: "Excerpt 3", image: cardImage },
    // Add more blogs with images here
  ];

  return (
    <div className="blog-list">
      <h1>Blog List</h1>
      <div className="card-container">
        {blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <div className="card-image">
              <img className="card-image" src={blog.image} alt={blog.title} />
            </div>
            <h2 className="card-title">{blog.title}</h2>
            <p className="card-excerpt">{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`} className="card-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
