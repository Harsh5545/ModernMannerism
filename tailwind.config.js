/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    darkMode: "class",
    plugins: [nextui({
        prefix: "nextui",
        addCommonColors: true,
        defaultTheme: "light",
        defaultExtendTheme: "light",
        layout: {},
        themes: {
            light: {
                layout: {},
                colors: {},
            },
            dark: {
                layout: {},
                colors: {},
            },
           
        },
    }),
    ],
};
