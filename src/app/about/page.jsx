import AboutHero from "@/components/About/AboutHero";
import { AboutManasi } from "@/components/About/AboutManasi";
import AboutSection from "@/components/About/AboutSection";
import Aboutpage from "@/components/About/Aboutpage";
// import Image from "next/image";

export const metadata = {
  title: "About",
  description: "About description",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = async () => {
  return (
    <div className="dark:bg-[#00001F]">
      {/* <AboutHero /> */}
      <Aboutpage />
      <AboutSection />
      <AboutManasi />
    </div>
  );
};

export default AboutPage;
