"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
// import Button from "../Button/Button";
import "./navbar.module.css";
import "./Header.css"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AllLinks from "./links/AllLinks";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { Button } from "@nextui-org/react";

const navVariants = {
  initial: {
    y: "-50%",
    x: "-50%",
  },
  animate: {
    y: 0,
    x: "-50%",
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    y: -50,
  },
};

function HeaderFixed({ session }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navInput, setNavInput] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setNavInput((prev) => !prev);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    toggleMobileMenu();
  };
  const router = useRouter()

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] nav top-2 left-1/2 -translate-x-1/2 rounded-xl p-2 flex-col backdrop-blur-lg border justify-around flex md:flex-row items-center"
      style={{ width: "85%" }}
    >
      <div className="flex justify-between items-center w-full md:w-0">
        <span className="text-xl">
          <Image width={100} height={100} src="/assets/logo.png" className="md:max-w-20 max-w-10" alt="HarikrushnaMultimedia institue logo" />
        </span>
        <div className="md:hidden">
          <label className="hamburger">
            <input type="checkbox" onChange={toggleMobileMenu} checked={navInput} />
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
          className={`flex flex-col text-[#0D0C22] dark:text-white md:flex-row font-poppins items-center gap-8 md:gap-4 h-[20rem] md:h-0 justify-center text-black font-medium font-jakarta ${isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
            }`}
        >
          <AllLinks session={session} />
        </div>
      </div>

      <div className={`${isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
        }`}>
         <Button
           
            className="
                bg-[#AB3B8C] text-white "
            onClick={() => {
              router.push('/contact')
              toggleMobileMenu;
            }}
          >Contact Us</Button>
        <ThemeSwitcher />

      </div>
    </motion.div>
  );
}

export default HeaderFixed;
