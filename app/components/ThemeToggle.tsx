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
      <button className="w-12 h-12 rounded-full border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm" />
    );
  }

  return (
    <button
      className="w-12 h-12 rounded-full border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-700 transition-all duration-300 flex items-center justify-center group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <span className="text-xl group-hover:scale-110 transition-transform">☀️</span>
      ) : (
        <span className="text-xl group-hover:scale-110 transition-transform">🌙</span>
      )}
    </button>
  );
}
