import React from "react";

const CustomButton = ({
  text,
  color = "transparent",
  textColor = "#FFFFFF",
  border = "none",
  fontFamily = "Montserrat",
  fontWeight = 600,
  // className = { className },
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: textColor,
        border: border,
        borderRadius: "10px",
        padding: "8px 24px",
        height: "40px",
        cursor: "pointer",

        fontFamily: fontFamily,

        fontWeight: fontWeight,
        fontStyle: "semiBold",
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
