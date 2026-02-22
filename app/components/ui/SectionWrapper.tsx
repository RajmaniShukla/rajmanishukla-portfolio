import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  showBorder?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  children,
  className = "",
  showBorder = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`
        max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24
        ${showBorder ? "border-t border-gray-200 dark:border-gray-800/50" : ""}
        ${className}
      `}
    >
      {title && (
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
