'use client'
import  { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavbarDefault from "./NavbarDefault.jsx";
import NavbarFixed from "./NavbarFixed.jsx";


function Navbar() {
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
        {isScrollPast ? <NavbarFixed key="navbar-fixed" /> : <NavbarDefault />}
      </AnimatePresence>
    </>
  );
}

export default Navbar;