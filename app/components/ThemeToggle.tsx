"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800/50 bg-white dark:bg-gray-900/50"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800/50 bg-white dark:bg-gray-900/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-700 transition-all duration-300 flex items-center justify-center group shadow-sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <span className="text-lg group-hover:scale-110 transition-transform">☀️</span>
      ) : (
        <span className="text-lg group-hover:scale-110 transition-transform">🌙</span>
      )}
    </button>
  );
}
