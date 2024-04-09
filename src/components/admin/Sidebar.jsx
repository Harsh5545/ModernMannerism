'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import WindowIcon from '@mui/icons-material/Window';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image';
import { Divider } from "@nextui-org/react";

const Sidebar = () => {

    let pathName = usePathname();

    const links = [
        { label: 'Dashboard', href: '/admin/dashboard', icon: <WindowIcon /> },
        { label: 'Users', href: '/admin/users', icon: <GroupIcon /> },
        { label: 'Settings', href: '/admin/settings', icon: <SettingsIcon /> },
    ];

    const isActive = (href) => {
        return pathName === href ? true : false;
    }

    return (
        <div className="h-full w-64 bg-[#f472b6] text-white fixed top-0 left-0 overflow-y-auto transition-transform duration-300 ease-in-out z-30">
            <div className="p-4">

                <div className="flex items-center justify-center mb-6 cursor-pointer">
                    <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
                </div>

                

                <div className="flex flex-col">
                    {links.map((link, index) => (
                        <>
                            <Divider className="my-1" />
                            <Link key={index} href={link.href}>
                                <div className={`flex items-center py-4 px-4 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out ${isActive(link.href) ? "bg-blue-400" : ''}`}>
                                    {link.icon}
                                    <span className="ml-4">{link.label}</span>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
