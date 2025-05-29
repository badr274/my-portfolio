"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useTheme = (): [Theme, (mode: Theme) => void] => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState<Theme>("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("my-theme") as Theme | null;

    const initialMode: Theme =
      userPref === "dark" || userPref === "light"
        ? userPref
        : mediaQuery.matches
        ? "dark"
        : "light";

    setMode(initialMode);

    if (initialMode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    if (!userPref) {
      const handleSystemChange = (e: MediaQueryListEvent) => {
        const newMode = e.matches ? "dark" : "light";
        setMode(newMode);
        if (newMode === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.setAttribute("data-theme", "light");
        }
      };
      mediaQuery.addEventListener("change", handleSystemChange);
      return () => mediaQuery.removeEventListener("change", handleSystemChange);
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("my-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("my-theme", "light");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useTheme;
