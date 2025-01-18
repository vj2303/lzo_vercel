import React from 'react';
import BlogCard from '../../components/BlogCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';

const Page = async () => {
  const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const fetchBlogs = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: "https://blgts.luzo.app/api/blogs?populate=media_content",
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      return { data: [] };
    }
  };

  const blogsData = await fetchBlogs();
  const blogs = blogsData.data || [];

  console.log({ blogs });


  return (
    <div>
      <Navbar />
      <div className='max-w-[1400px] mx-auto px-4'>
        {/* <h1 className='mt-[100px]'>Blogs</h1> */}
        <div className="flex flex-wrap mb-8 mt-[100px] sm:px-[100px] gap-4">
          {blogs?.map((blog) => (
            <BlogCard
              key={blog.documentId}
              blog={blog}
            />
          ))}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
