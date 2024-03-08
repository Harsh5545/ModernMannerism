"use client";

import Link from "next/link";
import StyleSheet from "./Navlink.module.css"
import { usePathname } from "next/navigation";

const Navlink = ({ item }) => {

 const pathName = usePathname();
    return (
        <Link href={item.path} className={`${StyleSheet.container} ${pathName === item.path && StyleSheet.active}`}>{item.title}</Link>
    )
}

export default Navlink;