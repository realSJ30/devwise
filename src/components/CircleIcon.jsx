import React from "react";

const CircleIcon = ({ additionalStyle }) => {
  return (
    <svg
      className={`h-3 w-3 ${additionalStyle}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1"
      ></circle>
    </svg>
  );
};

export default CircleIcon;
