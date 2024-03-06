import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Modern Mannerism",
    description: "Join Modern Mannerism today and embark on a journey of refinement and success. Whether you're looking to enhance your professional image or polish your dining finesse,we are here to guide you every step of the way",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <header className="py-6">
                        <nav className="w-[90%] mx-auto flex items-center justify-between">
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                            </ul>
                            <ThemeSwitcher />
                        </nav>
                    </header>
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
