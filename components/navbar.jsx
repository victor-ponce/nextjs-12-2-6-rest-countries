import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
//import '../styles/Navbar.module.css'

function Navbar() {
  let { theme, setTheme } = useTheme("dark");
  console.log(theme);
  const smFont = "text-xl ";
  const lgFont = " md:text-2xl";
  return (
    <>
      <div
        className={`sticky  top-0  z-50   flex w-full justify-between px-8  md:px-14 py-5  items-center mb-8 ${
          theme === "dark" ? "bg-dark-blue text-white shadow-none" : "bg-white text-very-dark-blue shadow-md"
        } transition-all delay-300`}
      >
        <div className={`${smFont} ${lgFont}  font-bold  `}>
          Where in the world?
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer p-2 rounded-full md:rounded-md bg-gray-500 md:bg-transparent md:px-4 md:py-2   hover:opacity-50   md:text-lg font  transition duration-500 ease-in-out opacity-75 "
          onClick={() =>
            setTheme(theme === "light" ? (theme = "dark") : (theme = "light"))
          }
        >
          <span className={`${smFont}  ${lgFont}`}>
            <FontAwesomeIcon icon={faMoon} />
          </span>

          <span
            className={` ${smFont} ${lgFont}  ml-1  font-semibold  hidden md:block  `}
          >
            {theme === "light" ? "Dark " : "Light "}
            Mode
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
