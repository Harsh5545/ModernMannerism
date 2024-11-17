"use client";

import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const EditBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [visibilityFilter, setVisibilityFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 5; // Set how many blogs to show per page
    const router = useRouter();

    // Simulated fetch function to get blogs
    const fetchBlogs = async () => {
        // This should be replaced with an actual API call
        const fetchedBlogs = [
            {
                id: 1,
                title: 'First Blog',
                category: 'Personal Branding',
                image: 'https://via.placeholder.com/150',
                content: '<p>This is the first blog content.</p>',
                isVisible: true,
            },
            {
                id: 2,
                title: 'Second Blog',
                category: 'Communication Skills',
                image: 'https://via.placeholder.com/150',
                content: '<p>This is the second blog content.</p>',
                isVisible: false,
            },
            // Add more blogs as needed
        ];
        setBlogs(fetchedBlogs);
        setFilteredBlogs(fetchedBlogs);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        // Filter blogs based on search query and visibility filter
        let filtered = blogs.filter(blog => 
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            blog.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (visibilityFilter !== 'All') {
            filtered = filtered.filter(blog => blog.isVisible === (visibilityFilter === 'Visible'));
        }

        setFilteredBlogs(filtered);
        setCurrentPage(1); // Reset to the first page when search or filter changes
    }, [searchQuery, visibilityFilter, blogs]);

    const handleEdit = (id) => {
        router.push(`/edit/${id}`); // Navigate to the edit page
    };

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    };

    const handleToggleVisibility = (id) => {
        setBlogs(blogs.map(blog => 
            blog.id === id ? { ...blog, isVisible: !blog.isVisible } : blog
        ));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Paginate the filtered blogs
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="max-w-8xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Manage Blogs</h1>
                
                {/* Search and Filter Section */}
                <div className="mt-4 mb-6 flex justify-between items-center">
                    <input 
                        type="text" 
                        placeholder="Search blogs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none dark:bg-gray-800 dark:text-white"
                    />
                    <select
                        value={visibilityFilter}
                        onChange={(e) => setVisibilityFilter(e.target.value)}
                        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                        <option value="All">All</option>
                        <option value="Visible">Visible</option>
                        <option value="Hidden">Hidden</option>
                    </select>
                </div>

                <table className="min-w-full mt-6">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700">
                            <th className="px-4 py-2 text-left">Image</th>
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Category</th>
                            <th className="px-4 py-2 text-left">Visibility</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBlogs.map(blog => (
                            <tr key={blog.id} className="border-b dark:border-gray-600">
                                <td className="px-4 py-2">
                                    <img src={blog.image} alt={blog.title} className="w-20 h-20 rounded" />
                                </td>
                                <td className="px-4 py-2">{blog.title}</td>
                                <td className="px-4 py-2">{blog.category}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleToggleVisibility(blog.id)}
                                        className={`px-2 py-1 rounded ${blog.isVisible ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                                    >
                                        {blog.isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </button>
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleEdit(blog.id)} className="text-blue-500 hover:underline">
                                        <AiOutlineEdit />
                                    </button>
                                    <button onClick={() => handleDelete(blog.id)} className="text-red-500 hover:underline ml-2">
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-6">
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-lg"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 text-gray-700">{currentPage} of {totalPages}</span>
                    <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
