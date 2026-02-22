import { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  style?: CSSProperties;
}

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
  style,
}: CardProps) {
  const baseStyles = `
    rounded-xl
    border border-gray-200 dark:border-gray-800/50
    transition-all duration-300
  `;

  const hoverStyles = hover
    ? `
      hover:border-gray-300 dark:hover:border-gray-700
      hover:bg-gray-50 dark:hover:bg-gray-900/30
      hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50
    `
    : "";

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
