import * as React from "react";

export const Input = ({ className = "" }: { className?: string }) => {
  const baseClasses = "w-full p-3";
  const desktopClasses = "lg:shadow-md lg:border-0";
  const mobileClasses = "border border-gray-lighter shadow";
  return (
    <input
      className={`${className} ${baseClasses} ${desktopClasses} ${mobileClasses}`}
    />
  );
};
