import * as React from "react";

interface IButtonProps {
  children: any;
  variant?: "regular" | "inverted";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: IButtonProps) {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`border-white border-2 py-3 px-8 text-white hover:bg-white hover:text-black transition font-mono ${className}`}
    >
      {children}
    </button>
  );
}
