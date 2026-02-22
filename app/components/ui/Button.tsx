import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98]",
  secondary:
    "border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10",
  ghost:
    "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm sm:text-base gap-2",
  lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: Props) {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-xl font-semibold
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-blue-500/20
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as LinkProps;
    return (
      <a href={href} className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}
