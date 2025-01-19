import React from "react";
import {ButtonProps} from "@/interfaces"
export const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`py-2 px-4 bg-blue-500 text-white rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
