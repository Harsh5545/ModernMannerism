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
        <div className={style.checkboxWrapper5}>
            <div className={style.check}>
                <input checked={theme === "light"} id="check-5" type="checkbox" />
                <label htmlFor="check-5" onClick={toggleTheme}></label>
            </div>
        </div>
    );
}
