import axios from 'axios';
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';

const BlogDetails = async ({ params }) => {
  const { documentId } = params;
  const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const fetchBlogDetails = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://blgts.luzo.app/api/blogs/${documentId}?populate=media_content`,
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data.data;
    } catch (error) {
      console.error('Failed to fetch blog details:', error);
      return null;
    }
  };

  const blog = await fetchBlogDetails();

  if (!blog) {
    return <p>Failed to load blog details.</p>;
  }

  return (
    <>
      <Navbar />
      <div className='mt-[100px] px-[20px] sm:px-[120px]'>
        {blog.media_content?.formats?.thumbnail?.url && (
          <Image
            src={"https://blgts.luzo.app" + blog.media_content.formats.thumbnail.url}
            width={200}
            height={200}
            className='w-full sm:h-[60vh]  aspect-video'
            alt={blog.title}
          />
        )}
        <p className='text-gray-400 mt-2'>Published on: {blog?.published_date}</p>
        <h1 className='font-bold sm:text-[40px] text-[28px]'>{blog.title}</h1>
        {blog.content?.map((ele, index) => (
          <p key={index} className='text-[16px] font-medium'>
            {ele.children[0].text}
          </p>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
