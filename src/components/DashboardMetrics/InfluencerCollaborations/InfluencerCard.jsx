import React from "react";

const InfluencerCard = ({ name, status, campaign, followers, category }) => {
  const statusColors = {
    Pending: "#E67E22", // Orange
    Active: "#16A085", // Green
    Completed: "#2563EB", // Blue
  };

  const cardStyle = {
    background: "#F8F9FA",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "200px",
    height: "140px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#D3D3D3", // Grey avatar
    marginBottom: "8px",
  };

  const statusStyle = {
    color: statusColors[status] || "#333",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const categoryStyle = {
    display: "flex",
    gap: "5px",
    marginTop: "8px",
  };

  const tagStyle = {
    background: "#2563EB",
    color: "white",
    padding: "4px 8px",
    borderRadius: "5px",
    fontSize: "12px",
  };

  return (
    <div style={cardStyle}>
      <div style={avatarStyle}></div>
      <h4 style={{ color: "black", fontWeight: "bold", margin: "0", fontSize: "14px" }}>
        {name}
      </h4>
      <p style={statusStyle}>{status}</p>
      <p style={{ margin: "5px 0", fontSize: "14px" }}>Campaign: {campaign}</p>
      <p style={{ margin: "0", fontSize: "14px" }}>Followers: {followers}</p>
      <div style={categoryStyle}>
        {category.map((cat, index) => (
          <span key={index} style={tagStyle}>
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfluencerCard;
