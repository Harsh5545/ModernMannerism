import Image from "next/image";
import SocialButtons from "./SocialIcons";
    
const Footer = () => {
  return (
    <>
      <footer className="dark:bg-[#00001F] bg-white text-black dark:text-white p-5 border-t-8 h-[92vh] flex flex-col relative">
        
        {/* "Contact Us" Header in Top Left */}
        <div className="absolute top-8 left-8 text-4xl md:text-6xl font-semibold">
          Contact Us
        </div>

        {/* Main Content - Centered Vertically and Horizontally */}
        <div className="flex-1 flex justify-center items-center">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 px-0 py-12">
            
            {/* Phone Section */}
            <div className="text-center flex flex-col items-center md:w-1/4">
              <h5 className="text-lg font-semibold mb-10">Phone</h5>
              <p className="text-lg font-medium">+91 9867831324</p>
            </div>
            
            {/* Email Section */}
            <div className="text-center flex flex-col items-center md:w-1/4">
              <h5 className="text-lg font-semibold mb-10">Email</h5>
              <p className="text-lg font-medium">modernmannerism@gmail.com</p>
            </div>  

            {/* Social Media Section */}
            <div className="text-center flex flex-col items-center md:w-1/4">
              <h5 className="text-lg font-semibold mb-1">Social</h5>
              <div className="flex justify-center mt-1">
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-4 text-sm">
          &copy; 2024 Modern Mannerism | Privacy-Policy | Terms | Designed by Harsh
        </div>
      </footer>
    </>
  );
};

export default Footer;
