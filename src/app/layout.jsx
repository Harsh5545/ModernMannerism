import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "./Providers/UiProvider";
import AuthProvider from "./Providers/AuthProvider";
const dm_Sans = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

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
    themeColor: "#06273A",
};

export default async function RootLayout({ children }) {

    return (
        <html lang="en" >
            <body className={dm_Sans.className} suppressHydrationWarning >
                <Providers>
                    <AuthProvider >
                        <Navbar />
                        <div>{children}</div>
                        <Footer />
                    </AuthProvider>
                </Providers>
            </body>
        </html>
    );
}
