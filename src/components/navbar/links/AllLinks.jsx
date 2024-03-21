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
        { title:"Course", path:"/course"},
        { title: "Blog", path: "/blog", },
    ];
    
    const isAdmin = true;

    return (
        <div >
            <div className="flex  md:flex-row flex-col" >
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
    
    
            

        </div>
    );
};

export default AllLinks;
