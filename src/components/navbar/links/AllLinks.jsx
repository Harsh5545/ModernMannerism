"use client";

import { useState } from "react";
import StyleSheet from "./links.module.css";
import Navlink from "../navlink/Navlink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";



const AllLinks =  ({session}) => {
    const [open, setOpen] = useState(false);

    const links = [
        { title: "Home", path: "/", },
        { title: "About", path: "/about", },
        { title: "Contact", path: "/contact", },
        { title: "Blog", path: "/blog", },
    ];
    
    const isAdmin = true;

    return (
        <div className={StyleSheet.container}>
            <div className={StyleSheet.links}>
                {links.map((link, i) => (<Navlink item={link} key={i} />))}
                {
                    session ?
                        (
                            <>
                                {
                                    session.user?.isAdmin && (
                                        <Navlink item={{ title: "Admin", path: "/admin" }} />
                                    )
                                } 
                                <form action={handleLogout}>  
                                <button className={StyleSheet.logout}>Logout</button>
                                </form>
                            </>
                        ) :
                        (
                            <Navlink item={{ title: "Login", path: "/login" }} />
                        )
                }
            </div>
            <Image
                className={StyleSheet.menuButton}
                src="/menu.png"
                alt=""
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
            />
            {
                open && (
                    <div className={StyleSheet.mobileLinks}>
                        {links.map((link) => (<Navlink item={link} key={link.title} />))}
                    </div>
                )
            }

        </div>
    );
};

export default AllLinks;
