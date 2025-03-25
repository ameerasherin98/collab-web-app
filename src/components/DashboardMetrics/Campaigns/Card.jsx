import React from "react";

const Card = ({ name, status, budget, engagement }) => {
  const statusColors = {
    Active: "#16A085", // Green
    Completed: "#2563EB", // Blue
    Pending: "#E67E22", // Orange
  };

  const cardStyle = {
    background: "#F8F9FA",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "180px",
    height: "110px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const statusStyle = {
    color: statusColors[status] || "#333",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h4 style={{ color: "black", fontWeight: "bold", margin: "0", fontSize: "14px" }}>
        {name}
      </h4>
      <p style={statusStyle}>{status}</p>
      <p style={{ margin: "5px 0", fontSize: "14px" }}>Budget: {budget}</p>
      <p style={{ margin: "0", fontSize: "14px" }}>Engagement: {engagement}</p>
    </div>
  );
};

export default Card;
