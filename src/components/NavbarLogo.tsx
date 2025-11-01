"use client";

import { useEffect, useState } from "react";

export default function NavbarLogo() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400); // reset after bounce
  };

  return (
    <div
      onClick={handleClick}
      className={`relative cursor-pointer select-none 
      ${isClicked ? "animate-bounce-click" : ""}`}
    >
      {/* glow pulse */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 blur-lg pointer-events-none ${
          isClicked
            ? isDarkMode
              ? "bg-white/30 opacity-70 scale-150"
              : "bg-cyan-300/40 opacity-70 scale-150"
            : "opacity-0 scale-100"
        }`}
      ></div>

      {/* actual logo */}
      <img
        src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
        alt="CruxLabx Logo"
        className="relative z-10 w-14 h-14 object-contain transition-transform duration-500"
      />
    </div>
  );
}
