import React from "react";
import Card from "./Card";

const Campaigns = () => {
  const campaigns = [
    { name: "Spring Launch", status: "Active", budget: "$5,000", engagement: "500K" },
    { name: "Summer Glow", status: "Completed", budget: "$3,500", engagement: "300K" },
    { name: "Winter Specials", status: "Pending", budget: "$2,500", engagement: "N/A" },
  ];

  const containerStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "850px",
    margin: "auto",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    gap: "15px",
  };

  const viewMoreStyle = {
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    cursor: "pointer",
    maxWidth: "180px",
    height: "110px",
    flex: "1 1 calc(25% - 15px)", // Ensures it stays within the row
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Active Campaigns</h2>
      <div style={gridStyle}>
        {campaigns.map((campaign, index) => (
          <Card key={index} {...campaign} />
        ))}
        <div style={viewMoreStyle}>View More &gt;</div>
      </div>
    </div>
  );
};

export default Campaigns;
