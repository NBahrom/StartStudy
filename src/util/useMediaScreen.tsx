import { useState, useEffect } from "react";

export function useMediaScreen() {
  const [screen, setScreen] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;
      setScreen({
        isMobile: width <= 767,
        isTablet: width > 767 && width <= 991,
        isDesktop: width > 991,
      });
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return screen;
}
