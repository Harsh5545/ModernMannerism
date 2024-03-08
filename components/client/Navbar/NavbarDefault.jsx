<<<<<<< HEAD
"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import {Link} from "@nextui-org/react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";

function NavbarDefault() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navInput, setNavInput] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
        setNavInput((prev) => !prev);
    };
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
        <div className="flex z-[999] absolute  w-full justify-center items-center ">
            <div className="flex-col md:flex-row flex justify-between px-1 md:px-10 rounded-md w-[90%]  items-center backdrop-filter backdrop-blur-md py-1 mt-4 border border-zinc-500">
                <div className="flex justify-between  items-center w-full md:w-0">
                    <span className="text-xl">
                        <Image
                            width={100}
                            height={100}
                            src="/assets/logo.png"
                            className="md:max-w-[6rem] max-w-[6rem] p-2"
                            alt="ModernMannerism logo"
                        />
                    </span>
                    <div className="md:hidden">
                        <label className="hamburger">
                            <input
                                type="checkbox"
                                onChange={toggleMobileMenu}
                                checked={navInput}
                            />
                            <svg viewBox="0 0 32 32">
                                <path
                                    className="line line-top-bottom"
                                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                ></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <ul
                        className={`flex flex-col font-poppins md:flex-row items-center gap-8 md:gap-10 h-[20rem] md:h-0 justify-center dark:text-white text-black ${isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
                            }`}
                    >
                        <li>
                            <Link
                                href="/"
                               color="primary"
                                onClick={toggleMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                color="primary"
                                
                                onClick={toggleMobileMenu}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/courses"
                                color="primary"
                                
                                onClick={toggleMobileMenu}
                            >
                                Course
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/student-project"
                                color="primary"
                                
                                onClick={toggleMobileMenu}
                            >
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>

                <div
                    className={`${isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
                        }`}
                >
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    );
}

export default NavbarDefault;
=======
>>>>>>> 375b4d8 (new changes in code)
