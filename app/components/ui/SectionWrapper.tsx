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
        max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20
        ${showBorder ? "border-t border-gray-200 dark:border-gray-800/50" : ""}
        ${className}
      `}
    >
      {title && (
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            {title}
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <div className="mt-3 h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>
      )}
      {children}
    </section>
  );
}
