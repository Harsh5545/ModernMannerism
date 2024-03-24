import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import style from "./theme.module.css";

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
        <div className="w-8 h-8">
            <button onClick={toggleTheme} className={`text-${theme === "light" ? "[#0D0C22]" : "white"} `}>
                {theme === "light" ? <SunIcon className="w-8 h-8"/> : <MoonIcon className="w-8 h-8" />}
            </button>
        </div>
    );
}
