import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: {
    default: "Modern Mannerism",
    template: "Modern Mannerism | %s",
  },
  description:"Elevate your social grace with our specialized etiquette courses. From dining decorum to professional protocol, our classes provide practical insights and hands-on learning experiences to ensure you navigate any social setting with finesse.",
  verification: {
    google: 'OHVM3XPAXIWBSVvyZS31w7VGFRXbjD05MblzRaM01WE',
  },
  keywords: ['social', 'grace', 'professional','dining','classes','learning'],
  alternates:{
    canonical:"/"
  }
};

export const viewport = {
  themeColor: "black",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
