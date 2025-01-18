"use client";
import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  // Dummy data
  const category = "Tech";

  const blogs = {
    data: [
      {
        id: 1,
        attributes: {
          Title: "First Blog",
          Description: "This is the first blog description.",
          categories: {
            data: [
              { attributes: { Title: "Tech" } },
              { attributes: { Title: "News" } },
            ],
          },
          img: {
            data: {
              attributes: {
                url: "/1.png",
              },
            },
          },
        },
      },
      {
        id: 2,
        attributes: {
          Title: "Second Blog",
          Description: "This is the second blog description.",
          categories: {
            data: [
              { attributes: { Title: "Lifestyle" } },
            ],
          },
          img: {
            data: {
              attributes: {
                url: "/1.png",
              },
            },
          },
        },
      },
      {
        id: 3,
        attributes: {
          Title: "Third Blog",
          Description: "This is the third blog description.",
          categories: {
            data: [
              { attributes: { Title: "Tech" } },
            ],
          },
          img: {
            data: {
              attributes: {
                url: "/1.png",
              },
            },
          },
        },
      },
    ],
  };

  const filteredBlogs = blogs.data.filter((blog) => {
    return blog.attributes.categories.data.some(
      (cat) => cat.attributes.Title === category
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredBlogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
