// GlobalButton.tsx
import React, { ReactNode } from "react";

interface GlobalButtonProps {
  children: ReactNode;
  bgColor: string;
  title: string;
  onClick?: () => void;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  children,
  bgColor,
  title,
  onClick,
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${bgColor}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GlobalButton;
