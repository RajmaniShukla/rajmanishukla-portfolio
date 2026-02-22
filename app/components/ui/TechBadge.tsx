interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className = "" }: TechBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1 text-xs font-medium
        bg-blue-50 dark:bg-blue-900/20
        text-blue-700 dark:text-blue-300
        rounded-lg
        border border-blue-200 dark:border-blue-800/50
        transition-all duration-300
        ${className}
      `}
    >
      {name}
    </span>
  );
}
