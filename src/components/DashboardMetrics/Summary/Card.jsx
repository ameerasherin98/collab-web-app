import React from "react";

const Card = ({ title, value, bgColor, textColor, shadowColor }) => {
  const cardStyle = {
    background: bgColor || "#fae3ce",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: `0 4px 10px ${shadowColor || "#E67E22"}`,
    textAlign: "center",
    width: "fit-content",
  };

  const headerStyle = {
    color: "black",
    fontWeight: "bold",
    margin: "0",
  };

  const valueStyle = {
    color: textColor || "#E67E22",
    fontSize: "24px",
    margin: "5px 0 0",
  };

  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>{title}</h2>
      <h4 style={valueStyle}>{value}</h4>
    </div>
  );
};

export default Card;
