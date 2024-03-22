"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if (!mounted) return null;

    return (
        <div className="">
            <button onClick={toggleTheme} className={`text-${theme === "light" ? "[#0D0C22]" : "white"} text-2xl`}>
                {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </button>
        </div>
    );
}
