// BlogPost.js
import React from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import cardImage from "./images/cardImage.jpg";

const BlogPost = () => {
  const { id } = useParams();
  const blogs = [
    { id: 1, title: "Blog 1", content: "Content 1", image: cardImage },
    { id: 2, title: "Blog 2", content: "Content 2", image: cardImage },
    { id: 3, title: "Blog 3", content: "Content 3", image: cardImage },
    // Add more blogs with images here
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className="blog-post">
      {blog ? (
        <>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
};

export default BlogPost;
