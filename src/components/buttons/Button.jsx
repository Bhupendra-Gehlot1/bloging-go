import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-800",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <div
      className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      type={type}
      {...props}
    >
      {children}
    </div>
  );
}

export default Button;
