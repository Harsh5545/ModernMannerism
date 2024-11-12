// store/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        editPost: (state, action) => {
            const { id, updatedPost } = action.payload;
            const index = state.posts.findIndex(post => post.id === id);
            if (index !== -1) {
                state.posts[index] = updatedPost;
            }
        },
    },
});

export const { addPost, setPosts, deletePost, editPost } = blogSlice.actions;
export default blogSlice.reducer;