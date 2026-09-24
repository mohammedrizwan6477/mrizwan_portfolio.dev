"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <div
        className="p-1 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/90 shadow-md flex items-center gap-1 transition-all"
        role="group"
        aria-label="Theme switcher"
      >
        {/* Light Mode Button */}
        <button
          onClick={() => setTheme("light")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
            theme === "light"
              ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 shadow-xs"
              : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          }`}
          aria-label="Switch to Light Mode"
          aria-pressed={theme === "light"}
        >
          <Sun className="w-4 h-4 text-amber-500" />
          <span className="text-xs">Light</span>
        </button>

        {/* Dark Mode Button */}
        <button
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
            theme === "dark"
              ? "bg-neutral-800 text-blue-400 border border-neutral-700/80 shadow-xs"
              : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          }`}
          aria-label="Switch to Dark Mode"
          aria-pressed={theme === "dark"}
        >
          <Moon className="w-4 h-4 text-blue-400" />
          <span className="text-xs">Dark</span>
        </button>
      </div>
    </header>
  );
}
