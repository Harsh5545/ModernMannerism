import Tables from '@/components/admin/Tables';
import React from 'react'

export const metadata = {
    title: "Blogs",
    description: "",
};

const BlogPage = () => {
    return (
        <div className="p-4">
            <div className='mt-10'>
                <Tables />
            </div>
        </div>
    )
}

export default BlogPage;