interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className = "" }: TechBadgeProps) {
  return (
    <span
      className={`
        px-3 py-1 text-xs font-medium
        bg-gray-100 dark:bg-gray-800/50
        text-gray-700 dark:text-gray-300
        rounded-full
        border border-gray-300 dark:border-gray-700/50
        group-hover:border-gray-400 dark:group-hover:border-gray-600
        group-hover:bg-gray-200 dark:group-hover:bg-gray-800
        transition-all duration-300
        ${className}
      `}
    >
      {name}
    </span>
  );
}
