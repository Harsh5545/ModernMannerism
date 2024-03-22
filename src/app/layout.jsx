import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "./Providers/UiProvider";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
    manifest: "/manifest.json",
    title: {
        default: "Modern Mannerism",
        template: "Modern Mannerism | %s",
    },
    verification: {
        google: 'OHVM3XPAXIWBSVvyZS31w7VGFRXbjD05MblzRaM01WE',
    },
    description: "Elevate your social grace with our specialized etiquette courses. From dining decorum to professional protocol, our classes provide practical insights and hands-on learning experiences to ensure you navigate any social setting with finesse.",
    keywords: ['social', 'grace', 'professional', 'dining', 'classes', 'learning'],
    alternates: {
        canonical: "https://modernmannerism.com"
    }
};

export const viewport = {
    themeColor: "black",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <body className={inter.className}>
                <div>
                    <Providers>
                        <Navbar />
                        <div >{children}</div>
                        <Footer />
                    </Providers>
                </div>
            </body>
        </html>
    );
}
