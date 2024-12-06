    "use client";

    import { useEffect, useState } from "react";
    import { useMediaQuery } from "react-responsive";
    import "./navbar.module.css";
    import "./Header.css";
    import Image from "next/image";
    import { useRouter } from "next/navigation";
    import AllLinks from "./links/AllLinks";
    import { Button } from "@nextui-org/react";
import { Lato } from "next/font/google";
const dm_Sans = Lato({
  subsets: ["latin"],
  weight: ["400"], 
    // Add weights if needed
});

    function HeaderDefault() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navInput, setNavInput] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
        setNavInput((prev) => !prev);
    };

    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    useEffect(() => {
        if (!isMobile) {
        setMobileMenuOpen(false);
        setNavInput(false);
        }
    }, [isMobile]);

    const router = useRouter();

    return (
        <div className="flex z-[999] absolute w-full justify-center items-center">
        <div className="flex-col bg-black text-white dark:bg-opacity-30 bg-opacity-30 dark:bg-[#06273A] md:flex-row flex justify-between px-2 md:px-10 rounded-md w-[90%] items-center backdrop-filter backdrop-blur-md py-1 mt-4">
            <div className="flex justify-between items-center w-full md:w-0">
            <span className="text-xl">
                <Image
                src="/assets/MM.png"
                width={300}
                height={300}
                className="md:max-w-[12rem] max-w-[6rem]"
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
            <div
                className={`flex flex-col text-white dark:text-white font-poppins md:flex-row items-center gap-8 md:gap-10 h-[20rem] md:h-0 justify-center ${
                isMobileMenuOpen ? "block" : "hidden"
                } md:flex`}
            >
                <AllLinks />
            </div>
            </div>

            <div
            className={`${
                isMobileMenuOpen ? "block" : "hidden"
            } md:flex gap-2 flex-col-reverse md:flex-row items-center justify-center`}
            >
            <Button
                className={`${dm_Sans.className} bg-[#cca26c] text-white`}
                onClick={() => {
                router.push("/contact");
                toggleMobileMenu();
                }}
            >
                Contact Us
            </Button>
            </div>
        </div>
        </div>
    );
    }

    export default HeaderDefault;
