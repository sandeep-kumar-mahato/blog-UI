import React from "react";
import "./styles.css";
import { Link, Route, Routes } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>Blog List</h1>
      {blogs?.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt={blog.title} className="blog-card-image" />
          <div className="blog-card-content">
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const BlogPost = ({ blog }) => {
  return (
    <div>
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <img src={blog.image} alt={blog.title} className="blog-post-image" />
          <p>{blog.content}</p>
        </>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
};

const BlogPage = ({ blogs }) => {
  return (
    <div className="blog">
      <h1>Blog Page</h1>
      {blogs?.map((blog) => (
        <Routes key={blog.id}>
          <Route path="/" element={<BlogList blogs={blogs} />} />
          <Route path="/blog/:id" element={<BlogPost blog={blog} />} />
        </Routes>
      ))}
    </div>
  );
};

export default BlogPage;
