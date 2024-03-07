import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx'
import { FaBlog } from "react-icons/fa6";
import { Tooltip } from "@nextui-org/react";

const Sidebar = ({ children }) => {
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white boredr-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center ">
                    <Tooltip content="Home" placement="top" color="success" offset={-7}>
                        <Link href='#'>
                            <div className="bg-purple-800 p-3 text-white rounded-lg inline-block">
                                <RxSketchLogo size={20} />
                            </div>
                        </Link>
                    </Tooltip>
                    <span className="border-b-[1px] border-gray-400 w-full p-2"></span>
                    <Tooltip content="Dashboard" placement="top" color="success" offset={-7}>
                        <Link href='/protected/dashboard'>
                            <div className="bg-gray-300 hover:bg-gray-400 p-3 cursor-pointer my-4 rounded-lg inline-block">
                                <RxDashboard size={20} />
                            </div>
                        </Link>
                    </Tooltip>
                    <Tooltip content="Blogs" placement="top" color="success" offset={-7}>
                        <Link href='/protected/dashboard/blogs'>
                            <div className="bg-gray-300 hover:bg-gray-400 p-3 cursor-pointer my-4 rounded-lg inline-block">
                                <FaBlog size={20} />
                            </div>
                        </Link>
                    </Tooltip>
                </div>
            </div>
            <div className="ml-20 w-full">{children}</div>
        </div>
    );
};

export default Sidebar;