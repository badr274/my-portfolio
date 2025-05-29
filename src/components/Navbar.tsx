"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  WhatsAppIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";
import { useState } from "react";
const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
const socials = [
  {
    icon: <FacebookIcon />,
    path: "https://www.facebook.com/share/1CD4PNmWqa/",
  },
  {
    icon: <GithubIcon className="dark:text-dark" />,
    path: "https://github.com/badr274",
  },
  {
    icon: <LinkedInIcon />,
    path: "https://www.linkedin.com/in/badr-mohamed-137912303/",
  },
  {
    icon: <WhatsAppIcon />,
    path: "https://wa.me/+201019955369",
  },
];
const Navbar = () => {
  const [mode, setMode] = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  // HOOKs AND VARs
  const pathname = usePathname();
  // RENDERS
  const renderRoutes = routes.map((route) => {
    const { label, path } = route;
    return (
      <Link
        key={path}
        href={path}
        className="dark:text-dark relative group"
        onClick={() => setIsOpen(false)}
      >
        {label}
        <span
          className={`h-[1px] inline-block w-0  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            pathname === path ? "w-full" : "w-0"
          }`}
        ></span>
      </Link>
    );
  });
  const renderSocials = socials.map((route) => {
    const { icon, path } = route;
    return (
      <motion.a
        key={path}
        href={path}
        target="_blank"
        whileTap={{ scale: 0.9 }}
        whileHover={{ y: -2 }}
        className="w-6"
      >
        {icon}
      </motion.a>
    );
  });
  return (
    <header className="w-full relative px-8 md:px-16 lg:px-32 py-8 font-medium flex items-center justify-between overflow-hidden">
      <button
        type="button"
        className=" flex-col items-start justify-center flex-1 flex md:hidden"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-dark dark:bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } ease-out `}
        ></span>
        <span
          className={`bg-dark dark:bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-0.5`}
        ></span>
        <span
          className={`bg-dark dark:bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } ease-out `}
        ></span>
      </button>
      <nav className="space-x-3 md:space-x-4 lg:space-x-6  hidden md:block">
        {renderRoutes}
      </nav>
      <nav className=" md:flex hidden items-center justify-center flex-wrap gap-x-3 md:gap-x-4 lg:gap-x-6">
        {renderSocials}
        <button
          type="button"
          className="cursor-pointer w-6 h-6 p-1 flex items-center justify-center rounded-full bg-dark text-light"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <MoonIcon className="fill-dark w-full h-auto" />
          ) : (
            <SunIcon className="fill-dark w-full h-auto" />
          )}
        </button>
      </nav>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Logo />
      </div>
      <div
        className={`sm:min-w-[70vw] min-w-[90vw] flex ${
          !isOpen ? "-top-[100%]" : "top-1/2"
        } justify-between items-center flex-col gap-y-8 fixed  transition-all duration-300 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md`}
      >
        <nav className="flex items-center justify-center flex-col gap-y-4">
          {renderRoutes}
        </nav>
        <nav className="flex items-center justify-center gap-x-6 ">
          {renderSocials}
          <button
            type="button"
            className="cursor-pointer w-6 h-6 p-1 flex items-center justify-center rounded-full bg-dark text-light"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <MoonIcon className="fill-dark w-full h-auto" />
            ) : (
              <SunIcon className="fill-dark w-full h-auto" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
