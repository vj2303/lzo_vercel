'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const BlogCard = ({ blog }) => {
  const router = useRouter();

  console.log({blog});


  const handleClick = () => {
    // console.log(`Navigating to /blogs/${blog.documentId}`); // Debugging
    router.push(`/blogs/${blog.documentId}`); // Navigate using documentId
  };

  return (
    <div
      className="border p-4  w-full sm:w-[32%]"
      onClick={handleClick} // Direct reference
      style={{ cursor: 'pointer' }}
    >
      <Image src={"https://blgts.luzo.app" + blog?.media_content?.formats?.thumbnail?.url} width={150} height={100} className='w-full aspect-video' />
      {/* <p>{"https://blgts.luzo.app" + blog?.media_content?.formats?.thumbnail?.url}</p> */}
      <h2 className='font-bold sm:text-[30px] text-[20px] '>{blog.title}</h2>
      <p>{blog.slug}</p>
    </div>
  );
};

export default BlogCard;
