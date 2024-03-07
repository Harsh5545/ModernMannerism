import { Inter } from "next/font/google";
import "../globals.css";

import Link from "next/link";
import { Providers } from "../Provider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Navbar from "@/components/client/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Modern Mannerism",
        template: "%s - Modern Mannerism",
    },
    description:
        "Join Modern Mannerism today and embark on a journey of refinement and success. Whether you're looking to enhance your professional image or polish your dining finesse,we are here to guide you every step of the way",
    twitter: {
        card: "summary_large_image",
        title: "Modern Mannerism",
        description:
            "Join Modern Mannerism today and embark on a journey of refinement and success. Whether you're looking to enhance your professional image or polish your dining finesse,we are here to guide you every step of the way",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <div className="h-[100vh]">harshad</div>
                </Providers>
            </body>
        </html>
    );
}
