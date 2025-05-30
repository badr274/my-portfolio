"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useTheme = (): [Theme, (mode: Theme) => void] => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState<Theme>("light");

  // تحديد الوضع المبدئي من localStorage أو النظام
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

    // تحديث الوضع عند تغيير إعدادات النظام
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!userPref) {
        const newMode: Theme = e.matches ? "dark" : "light";
        setMode(newMode);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  // تطبيق الوضع على العنصر الرئيسي وتخزينه
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", mode === "dark");
    root.setAttribute("data-theme", mode);
    window.localStorage.setItem("my-theme", mode);

    // Debug logs
    console.log("Current mode:", mode);
    console.log("HTML classList:", root.classList.toString());
    console.log("data-theme:", root.getAttribute("data-theme"));
  }, [mode]);

  return [mode, setMode];
};

export default useTheme;
