import React from "react";

const DryBadge: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => {
  return (
    <div
      className={`rounded bg-gray-50 border border-b-2 border-r-2 p-1 flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default DryBadge;
