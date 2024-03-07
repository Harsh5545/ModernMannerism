import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/client/Navbar/Navbar";
import { Providers } from "./Provider";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Modern Mannerism",
        template: "%s - Modern Mannerism",
    },
    description:
        "Join Modern Mannerism today and embark on a journey of refinement and success. Whether you're looking to enhance your professional image or polish your dining finesse,we are here to guide you every step of the way",
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Modern Mannerism",
    //     description:
    //         "Join Modern Mannerism today and embark on a journey of refinement and success. Whether you're looking to enhance your professional image or polish your dining finesse,we are here to guide you every step of the way",
    // },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <AuthProvider>{children}</AuthProvider>
                </Providers>
            </body>
        </html>
    );
}
