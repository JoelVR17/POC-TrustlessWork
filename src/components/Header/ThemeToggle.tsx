import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <MdOutlineLightMode size={30} />
      ) : (
        <MdNightlightRound size={30} />
      )}
    </button>
  );
}
