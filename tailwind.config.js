/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        container: { center: true, padding: { DEFAULT: '1rem', md: '1.5rem', lg: '2rem' } },

    },
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
            modern: {
                extend: "dark",
                colors: {
                    background: "#0D001A",
                    foreground: "#ffffff",
                    primary: {
                        50: "#3B096C",
                        100: "#520F83",
                        200: "#7318A2",
                        300: "#9823C2",
                        400: "#c031e2",
                        500: "#DD62ED",
                        600: "#F182F6",
                        700: "#FCADF9",
                        800: "#FDD5F9",
                        900: "#FEECFE",
                        DEFAULT: "#DD62ED",
                        foreground: "#ffffff",
                    },
                    focus: "#F182F6",
                },
                layout: {},
            },
        },
    }),
    ],
};
