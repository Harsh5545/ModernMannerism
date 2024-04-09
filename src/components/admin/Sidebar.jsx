'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { label: 'Dashboard', href: '/admin/dashboard' },
        { label: 'Users', href: '/admin/users' },
        { label: 'Settings', href: '/admin/settings' },
    ];

    const isActive = (route) => {
        return router.pathname === route ? 'bg-gray-700' : '';
    };

    return (
        <div className={`h-full w-64 bg-gray-800 text-white ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 transition-transform ease-in-out duration-300 transform z-30`}>
            <div className="p-4">
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
                <div className="mt-4 flex flex-col">
                    {links.map((link, index) => (
                        <div key={index} className={`text-white py-2 px-4 ${isActive(link.href)}`}>
                            <Link href={link.href}>
                                <div>{link.label}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
