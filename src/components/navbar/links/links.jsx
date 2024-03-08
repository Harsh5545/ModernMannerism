"use client";

import { useState } from "react";
import StyleSheet from "./links.module.css";
import Navlink from "./navlink/Navlink";
import Image from "next/image";

const links = [
    { title: "Home", path: "/", },
    { title: "About", path: "/about", },
    { title: "Contact", path: "/contact", },
    { title: "Blog", path: "/blog", },
];

const Links = () => {
    const [open, setOpen] = useState(false);



    const session = true;
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
                                    isAdmin && (
                                        <Navlink item={{ title: "Admin", path: "/admin" }} />
                                    )
                                } <button className={StyleSheet.logout}>Logout</button>
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

export default Links;
