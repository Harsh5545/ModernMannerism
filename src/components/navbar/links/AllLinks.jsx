import React, { useState, useEffect, useRef } from "react";
import Navlink from "../navlink/Navlink";

const AllLinks = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [hoveredSubLink, setHoveredSubLink] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const closeTimeoutRef = useRef(null);

    const links = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        {
            title: "Services",
            path: "/service",
            subLinks: [
                { title: "Consultation", path: "/service/consultation" },
                {
                    title: "Personality Transformation",
                    path: "/service/personality-transformation",
                    subLinks: [
                        { title: "Personality Transformation for Men", path: "/service/personality-transformation/Men" },
                        { title: "Personality Transformation for Women", path: "/service/personality-transformation/Women" }
                    ]
                },
                {
                    title: "Corporate Grooming",
                    path: "/service/corporate-grooming",
                    subLinks: [
                        { title: "Bespoke Business Etiquette & Corporate Grooming", path: "/service/bespoke-business-etiquette-&-corporate-grooming" },
                        { title: "In-house Corporate Training", path: "/service/In-house-Corporate-Training" }
                    ]
                },
                { title: "Children's Etiquette", path: "/service/children's-etiquette" },
                { title: "Young Adult Etiquette", path: "/service/young-adult-etiquette" },
                {
                    title: "Latest Workshop",
                    path: "/service/latest workshop",
                    subLinks: [
                        { title: "Ladies Grooming & Social Etiquette Programme", path: "/service/Latest Workshop/Business Etiquette & Corporate Grooming Programme" },
                        { title: "Young Adult-Grooming & Etiquette", path: "/service/Latest Workshop/Young Adult-Grooming & Etiquette" },
                        { title: "Young Adult Training", path: "/service/Latest Workshop/young-adult" },
                        { title: "Dining Etiquette Workshop", path: "/service/Latest Workshop/Dining Etiquette Workshop" }
                    ]
                },
                { title: "Train the Trainer", path: "/service/train-the-trainer" }
            ]
        },
        { title: "Blog", path: "/blog" }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(false);
            setHoveredSubLink(null);
        }, 300); // Delay of 300ms to avoid flickering
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

    const handleSubLinkMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            // setHoveredSubLink(null);
        }, 300); // Delay to prevent the flicker
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
                            <button
                                className="font-medium text-base cursor-pointer hover:text-[#933469] flex items-center"
                                onClick={isMobile ? () => setOpenDropdown((prev) => !prev) : undefined}
                            >
                                {link.title}
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {openDropdown && (
                                <div className="absolute mt-2 bg-white rounded-lg shadow-lg">
                                    {link.subLinks.map((subLink, j) => (
                                        <div
                                            key={j}
                                            className="relative group"
                                            onMouseEnter={!isMobile ? () => handleSubLinkMouseEnter(subLink.title) : undefined}
                                        // onMouseLeave={!isMobile ? handleSubLinkMouseLeave : undefined}
                                        >
                                            <button
                                                className="block px-4 text-sm font-semibold py-2 text-left w-full max-w-full text-nowrap hover:bg-gray-100"
                                                onClick={isMobile ? () => setHoveredSubLink(subLink.title) : undefined}
                                            >
                                                {subLink.title}
                                            </button>

                                            {hoveredSubLink === subLink.title && subLink.subLinks && (
                                                <div
                                                    className={`absolute text-left left-60 text-sm font-semibold mt-0 top-0 max-w-full bg-white shadow-lg rounded-lg ${isMobile ? "w-full" : "w-60"}`}
                                                    onMouseEnter={() => handleSubLinkMouseEnter(subLink.title)} // Ensure it stays open while hovered
                                                // onMouseLeave={handleSubLinkMouseLeave} // commenting out for now in future if needed will check it again
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
