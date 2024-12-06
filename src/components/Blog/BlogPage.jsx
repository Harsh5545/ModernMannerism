"use client"

import { useState } from 'react';
import BlogContainer from './BlogContainer';

const blogData = [
  {
    title: "Blog 1",
    description: "Elevate Your Professional Image with These Essential Grooming Tips",
    categories: "Essential Grooming Tips",
    imageSrc: "/Blog/BLOG-1.jpg",
    commentCount: 5,
  },
  {
    title: "Blog 2",
    description: "Social Etiquette 101: Your Guide to Thriving at Formal Events",
    categories: "Social Etiquette",
    imageSrc: "/Blog/BLOG-2.jpg",
    commentCount: 12,
  },
  {
    title: "Blog 3",
    description: "Teaching Kids Manners: Why Etiquette is Vital in Today’s World?",
    categories: "Children Etiquette",
    imageSrc: "/Blog/BLOG-3.jpg",
    commentCount: 8,
  },
  {
    title: "Blog 4",
    description: "Discovering Your Best Colors: A Simple Guide to Color Analysis",
    categories: "Color Analysis 101",
    imageSrc: "/Blog/BLOG-4.jpeg",
    commentCount: 3,
  },
  {
    title: "Blog 5",
    description: "Workplace Etiquette: The Key to Building Professional Relationships",
    categories: "Workplace Etiquette",
    imageSrc: "/Blog/BLOG-5.jpg",
    commentCount: 6,
  },
  // Add more blog entries here
];

export default function BlogPage() {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered blog data based on filter and search term
  const filteredBlogs = blogData.filter((blog) => {
    const matchesFilter = filter ? blog.categories.toLowerCase().includes(filter.toLowerCase()) : true;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white dark:bg-[rgb(0,0,31)]  py-24 px-4 md:px-8">
      <div className="md:max-w-6xL w-full mx-auto md:px-10 px-0">
        
        {/* Filter and Search Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          
          {/* Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
          >
            <option value="" disabled>Select a Course</option>
            <option value="personal-branding">Personal Branding</option>
            <option value="communication-skills">Communication Skills</option>
            <option value="corporate-etiquette">Corporate Etiquette</option>
            <option value="fine-dining-manners">Fine Dining Manners</option>
            <option value="children-etiquette">Children Etiquette</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog..."
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
          />
        </div>

        {/* Display Filtered Blogs */}
        {filteredBlogs.map((blog, index) => (
          <BlogContainer
            key={index}
            title={blog.title}
            description={blog.description}
            imageSrc={blog.imageSrc}
            categories={blog.categories}
            commentCount={blog.commentCount}
            reverse={index % 2 !== 0}
          />
        ))}

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No blogs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
