"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import style from "./theme.module.css";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        // Set theme based on system preference when component mounts
        if (systemTheme === "light") {
            setTheme("light");
        } else if (systemTheme === "dark") {
            setTheme("dark");
        }
    }, [setTheme, systemTheme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if (!mounted) return null;

    return (
        <div className={style.checkboxWrapper5}>
            <div className={style.check}>
                <input checked={theme === "light"} id="check-5" type="checkbox" />
                <label htmlFor="check-5" onClick={toggleTheme}></label>
            </div>
        </div>
    );
}
