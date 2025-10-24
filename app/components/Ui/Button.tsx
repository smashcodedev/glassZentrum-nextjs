import { ReactNode, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string; // extra flexibility
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-full font-medium transition duration-300 text-base md:text-lg";

  const styles: Record<ButtonVariant, string> = {
    primary: "bg-[#2B237C] text-white hover:bg-[#1d185d]",
    secondary:
      "border border-[#2B237C] text-[#2B237C] hover:bg-[#2B237C] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
