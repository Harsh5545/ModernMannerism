import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AllLinks from "./links/AllLinks";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

function HeaderDefault({ session }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navInput, setNavInput] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setNavInput((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            width={100}
            height={100}
            alt="HarikrushnaMultimedia institue logo"
          />
          {isMobile && (
            <label className="ml-2 md:hidden">
              <input
                type="checkbox"
                onChange={toggleMobileMenu}
                checked={navInput}
                className="hidden"
              />
              <svg
                className="block cursor-pointer w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
          )}
        </div>

        <div
          className={`${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          } md:flex flex-col md:flex-row items-center md:gap-8 text-gray-800 dark:text-white`}
        >
          <AllLinks session={session} />
        
        </div>

        <div className="flex">
  {!isMobile && (
            <button
              className=" text-gray-800 dark:text-white button mr-4"
              onClick={() => router.push("/contact")}
            >
              Free Consultation
            </button>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default HeaderDefault;
