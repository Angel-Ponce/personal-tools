import React from "react";

const DryBadge: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => {
  return (
    <div
      className={`rounded bg-gray-100 p-1 flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default DryBadge;
