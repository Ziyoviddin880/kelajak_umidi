import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useEffect, useState } from "react";

const ChangeDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); // Tanlangan rejimni saqlash
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-between w-[52px] h-[28px] border-2 border-customDarkGreen  bg-customBlack dark:bg-customWhite relative rounded-[50px]"
    >
      <div
        className={
          "absolute top-0  h-[25px] w-[25px] bg-customDarkGreen transition-all duration-200 rounded-[50%] " +
          (theme === "dark" ? "translate-x-full " : " translate-x-[-1px]")
        }
      ></div>
      <IoMdMoon className="text-customWhite dark:text-customBlack z-10 ml-1" />
      <MdSunny className="text-customWhite dark:text-customBlack z-10 mr-1" />
    </button>
  );
};

export default ChangeDarkMode;
