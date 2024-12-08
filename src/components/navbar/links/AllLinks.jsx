import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const AllLinks = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [hoveredSubLink, setHoveredSubLink] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
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
            {
              title: "Personality Transformation for Men",
              path: "/service/personality-transformation/Men",
            },
            {
              title: "Personality Transformation for Women",
              path: "/service/personality-transformation/Women",
            },
          ],
        },
        {
          title: "Corporate Grooming",
          path: "/service/corporate-grooming",
          subLinks: [
            {
              title: "Bespoke Business Etiquette & Corporate Grooming",
              path: "/service/bespoke-business-etiquette-&-corporate-grooming",
            },
            {
              title: "In-house Corporate Training",
              path: "/service/In-house-Corporate-Training",
            },
          ],
        },
        { title: "Children's Etiquette", path: "/service/3" },
        { title: "Young Adult Etiquette", path: "/service/young-adult-etiquette" },
        {
          title: "Latest Workshop",
          path: "/service/latest-workshop",
          subLinks: [
            {
              title: "Ladies Grooming & Social Etiquette Programme",
              path: "/service/latest-workshop/ladies-grooming",
            },
            {
              title: "Young Adult-Grooming & Etiquette",
              path: "/service/latest-workshop/young-adult-grooming",
            },
            {
              title: "Young Adult Training",
              path: "/service/latest-workshop/young-adult",
            },
            {
              title: "Dining Etiquette Workshop",
              path: "/service/latest-workshop/dining-etiquette",
            },
          ],
        },
        { title: "Train the Trainer", path: "/service/train-the-trainer" },
      ],
    },
    { title: "Blog", path: "/blog" },
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
        setHoveredSubLink(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

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

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col space-y-4" : "flex-row space-x-6"
      } justify-center items-center`}
    >
      {links.map((link, i) => (
        <div key={i} className="relative" ref={dropdownRef}>
          {!link.subLinks ? (
            <Link
              href={link.path}
              className="font-medium text-base"
            >
              {link.title}
            </Link>
          ) : (
            <div className="inline-block">
              <button
                className="font-medium text-base cursor-pointer flex items-center"
                onClick={isMobile ? toggleDropdown : undefined}
                onMouseEnter={!isMobile ? handleMouseEnter : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              >
                {link.title}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openDropdown && (
                <div className="absolute mt-2 bg-opacity-60 bg-black rounded-lg shadow-lg">
                  {link.subLinks.map((subLink, j) => (
                    <div
                      key={j}
                      className="relative group"
                      onMouseEnter={() => setHoveredSubLink(subLink.title)}
                      onMouseLeave={() => setHoveredSubLink(null)}
                    >
                      <Link
                        href={subLink.path}
                        className="block px-4 py-2 text-sm font-semibold text-left w-full text-nowrap"
                      >
                        {subLink.title}
                      </Link>

                      {hoveredSubLink === subLink.title && subLink.subLinks && (
                        <div className="absolute left-60 top-0 w-60 bg-opacity-60 bg-black shadow-lg rounded-lg">
                          <div className="flex flex-col">
                            {subLink.subLinks.map((nestedLink, k) => (
                              <Link
                                key={k}
                                href={nestedLink.path}
                                className="block px-4 py-2 text-sm font-semibold"
                              >
                                {nestedLink.title}
                              </Link>
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
