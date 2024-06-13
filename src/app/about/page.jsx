import AboutHero from "@/components/About/AboutHero";
import AboutSection from "@/components/About/AboutSection";
import Aboutpage from "@/components/About/Aboutpage";
// import Image from "next/image";



export const metadata = {
    title: "About",
    description: "About description",
    alternates:{
    canonical:"/about"
    }
};


const AboutPage = async () => {

    return (
        <div >

      <AboutHero/>
<Aboutpage/>
<AboutSection/>
        </div>
    );
};

export default AboutPage;
