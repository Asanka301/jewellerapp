import React from "react";

const CustomButton = ({ onClick, children, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#9A8350", // Default background color
        color: "#fff", // Default text color
        border: "none", // Remove default border
        padding: "12px 24px", // Increased padding for longer button
        borderRadius: "4px", // Default border radius
        cursor: "pointer", // Show pointer on hover
        width: "200px",
        fontFamily: "Arial, sans-serif", // Change font family
        ...style, // Allow overriding default styles
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
