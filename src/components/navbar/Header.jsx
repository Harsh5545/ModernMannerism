"use client";

import  { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./navbar.module.css"
import "./Header.css"
import HeaderFixed from "./HeaderFixed.jsx";
import HeaderDefault from "./HeaderDefault.jsx";


function Header( {session}) {
  const [isScrollPast, setIsScrollPast] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setIsScrollPast(true);
      //console.log("Scrolled Past");
    } else {
      setIsScrollPast(false);
      //console.log("Not Past");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrollPast ? <HeaderFixed session={session} key="navbar-fixed" /> : <HeaderDefault session={session} />}
      </AnimatePresence>
    </>
  );
}

export default Header;
