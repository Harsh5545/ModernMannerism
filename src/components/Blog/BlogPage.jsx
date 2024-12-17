"use client";

import { useState } from "react";
import BlogContainer from "./BlogContainer";

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
];

export default function BlogPage() {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogData.filter((blog) => {
    const matchesFilter = filter
      ? blog.categories.toLowerCase().includes(filter.toLowerCase())
      : true;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 md:py-36 py-24  px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Filter and Search Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>Select a Category</option>
            <option value="personal-branding">Personal Branding</option>
            <option value="communication-skills">Communication Skills</option>
            <option value="corporate-etiquette">Corporate Etiquette</option>
            <option value="fine-dining-manners">Fine Dining Manners</option>
            <option value="children-etiquette">Children Etiquette</option>
          </select>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog..."
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Display Filtered Blogs */}
        <div className="grid gap-10">
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
        </div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No blogs found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}
