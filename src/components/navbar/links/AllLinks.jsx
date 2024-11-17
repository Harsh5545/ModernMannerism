"use client"

import React, { useState, useEffect, useRef } from "react";
import Navlink from "../navlink/Navlink";
import { Button } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkIcon from "@mui/icons-material/Work";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SchoolIcon from "@mui/icons-material/School";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AllLinks = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [hoveredSubLink, setHoveredSubLink] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const closeTimeoutRef = useRef(null);

    const links = [
        { title: "Home", path: "/", icon: <HomeIcon /> },
        { title: "About", path: "/about", icon: <InfoIcon /> },
        {
            title: "Services",
            path: "/service",
            
            subLinks: [
                { title: "Consultation", path: "/service/consultation", icon: <EmojiPeopleIcon /> },
                {
                    title: "Personality Transformation",
                    path: "/service/personality-transformation",
                    icon: <SchoolIcon />,
                    subLinks: [
                        { title: "For Men", path: "/service/personality-transformation/Men" },
                        { title: "For Women", path: "/service/personality-transformation/Women" }
                    ]
                },
                { title: "Children's Etiquette", path: "/service/children's-etiquette", icon: <MenuBookIcon /> }
            ]
        },
        { title: "Blog", path: "/blog", icon: <MenuBookIcon /> }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(false);
            setHoveredSubLink(null);
        }, 300);
    };

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setOpenDropdown(true);
    };

    const handleSubLinkMouseEnter = (title) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setHoveredSubLink(title);
    };

    return (
        <div className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row space-x-6"} justify-center items-center`}>
            {links.map((link, i) => (
                <div key={i} className="relative">
                    {!link.subLinks ? (
                        <Navlink item={link} />
                    ) : (
                        <div
                            className="inline-block"
                            onMouseEnter={!isMobile ? handleMouseEnter : undefined}
                            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                        >
                            <Button
                                className="font-medium bg-none text-base cursor-pointer hover:text-[#933469] flex items-center"
                                onClick={isMobile ? () => setOpenDropdown((prev) => !prev) : undefined}
                            >
                                {link.icon}
                                <span className="ml-2">{link.title}</span>
                                <ChevronRightIcon className="ml-2" />
                            </Button>

                            {openDropdown && (
                                <div className="absolute mt-2 bg-white rounded-lg shadow-lg">
                                    {link.subLinks.map((subLink, j) => (
                                        <div
                                            key={j}
                                            className=" group"
                                            onMouseEnter={!isMobile ? () => handleSubLinkMouseEnter(subLink.title) : undefined}
                                        >
                                            <Button
                                                className=" px-4 text-sm font-semibold py-2 text-left w-full max-w-full bg-white  hover:bg-gray-100 flex items-start"
                                                onClick={isMobile ? () => setHoveredSubLink(subLink.title) : undefined}
                                            >
                                                {subLink.icon && <span className="mr-2">{subLink.icon}</span>}
                                                {subLink.title}
                                            </Button>

                                            {hoveredSubLink === subLink.title && subLink.subLinks && (
                                                <div
                                                    className={`absolute text-left left-64 text-sm font-semibold mt-0 top-0 max-w-full bg-white shadow-lg rounded-lg ${isMobile ? "w-full" : "w-60"}`}
                                                >
                                                    <div className="flex flex-col">
                                                        {subLink.subLinks.map((nestedLink, k) => (
                                                            <Navlink key={k} item={nestedLink} />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AllLinks;
