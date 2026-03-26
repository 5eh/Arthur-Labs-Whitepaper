"use client";

import { useState, useEffect } from "react";
import { Toggle } from "~~/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    setTheme(savedTheme || systemPreference);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      variant="outline"
      className="group size-9"
      pressed={theme === "dark"}
      onPressedChange={() =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
      }
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Moon
        size={20}
        strokeWidth={2}
        className="shrink-0 scale-0 bg-transparent opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        aria-hidden="true"
      />
      <Sun
        size={20}
        strokeWidth={2}
        className="absolute shrink-0 bg-transparent scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        aria-hidden="true"
      />
    </Toggle>
  );
}
