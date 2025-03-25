import React from "react";
import InfluencerCard from "./InfluencerCard";

const Influencers = () => {
    const influencers = [
        {
          name: "John Doe",
          status: "Pending",
          campaign: "Summer Glow",
          followers: "300k",
          category: ["fashion", "lifestyle"],
        },
        {
          name: "Jane Smith",
          status: "Active",
          campaign: "Spring Refresh",
          followers: "500k",
          category: ["beauty", "skincare"],
        },
        {
          name: "Alex Carter",
          status: "Completed",
          campaign: "Winter Specials",
          followers: "200k",
          category: ["tech", "gadgets"],
        },
      ];
      

  const containerStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "750px",
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
    flexWrap: "nowrap", // Ensures single row
    justifyContent: "center",
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
      <h2 style={titleStyle}>Influencer Collaborations</h2>
      <div style={gridStyle}>
        {influencers.map((influencer, index) => (
          <InfluencerCard key={index} {...influencer} />
        ))}
        <div style={viewMoreStyle}>View More &gt;</div>
      </div>
    </div>
  );
};

export default Influencers;
