import React from "react";

const Container = ({ children, customStyle, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`text-dg-green grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 ${customStyle}`}
    >
      {children}
    </div>
  );
};

export default Container;
