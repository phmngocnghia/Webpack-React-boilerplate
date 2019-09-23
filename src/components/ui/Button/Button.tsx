import * as React from "react";

export const Button: React.SFC<{ className?: string }> = ({
  children,
  className = ""
}) => {
  const baseClasses = "p-3 text-white bg-green";
  const desktopClasses = "lg:shadow-md";
  const mobileClasses = "shadow";

  return (
    <button
      className={`${className} ${baseClasses} ${desktopClasses} ${mobileClasses}`}
    >
      {children || null}
    </button>
  );
};
