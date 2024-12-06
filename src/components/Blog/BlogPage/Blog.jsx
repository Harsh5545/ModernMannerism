"use client"
import React from 'react';
import Link from 'next/link';
import { AiOutlineComment } from 'react-icons/ai';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'Mastering the Art of Personal Branding',
    slug: 'mastering-personal-branding',
    excerpt: 'Learn how to build your personal brand from scratch...',
    image: '/images/blog1.jpg',
    commentCount: 5
  },
  {
    id: 2,
    title: 'The Power of Communication Skills in Leadership',
    slug: 'communication-skills-leadership',
    excerpt: 'Discover the key communication techniques that every leader should know...',
    image: '/images/blog2.jpg',
    commentCount: 12
  },
  // Add more blog posts here...
];

const BlogLandingPage = () => {
  if (!blogs || blogs.length === 0) {
    return <div>Loading...</div>; // Show a loading state if no data is available
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-12">
      <div className="max-w-8xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-12">
        {/* Blog Heading */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Explore Our Latest Blogs
        </h1>
        
        {/* Blog List */}
        <div className="space-y-10">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 space-y-4">
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              
              {/* Blog Title and Excerpt */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{blog.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{blog.excerpt}</p>
                
                {/* Read More Button */}
                <Link href={`/blog/${blog.slug}`}>
                  <Button className="bg-[#933469] hover:bg-[#d664b6] text-white rounded-lg">
                    Read More
                  </Button>
                </Link>
              </div>
              
              {/* Comment Section Link */}
              <div className="flex items-center text-gray-600 dark:text-gray-300 space-x-2">
                <AiOutlineComment className="text-xl" />
                <span>{blog.commentCount} comments</span> {/* Dynamic number of comments */}
              </div>
            </div>
          ))}
        </div>
        
        {/* Blog CTA */}
        <div className="text-center mt-12">
          <Link href="/blog/create">
            <Button className="bg-[#933469] hover:bg-[#d664b6] text-white px-6 py-3 rounded-lg text-xl font-semibold">
              Write Your Own Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLandingPage;
