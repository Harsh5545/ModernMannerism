// pages/admin/add-blog.js
"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '@/store/blogSlice';
import { useRouter } from 'next/navigation';

const AddBlog = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(), // Temporary ID for local state
            title,
            content,
        };
        dispatch(addPost(newPost));
        router.push('/admin/edit-blog'); // Redirect to edit blog page after adding
    };

    return (
        <div>
            <h1>Add Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;