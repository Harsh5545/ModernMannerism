import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    // Update the body class whenever the colorMode changes
    if (colorMode === "dark") {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [colorMode]);

  const toggleColorMode = () => {
    setColorMode(prevMode => (prevMode === "dark" ? "light" : "dark"));
  };

  return [colorMode, toggleColorMode];
};

export default useColorMode;
