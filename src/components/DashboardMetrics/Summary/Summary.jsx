import React from "react";

const Summary = () => {
  const summaryData = [
    { title: "Total Campaigns", value: "12", bgColor: "#D6E4FF", textColor: "#2563EB", shadowColor: "#2563EB" },
    { title: "Total Spend", value: "$15,000", bgColor: "#FFE6CC", textColor: "#E67E22", shadowColor: "#E67E22" },
    { title: "Total Engagement", value: "1.2M", bgColor: "#D1F2EB", textColor: "#16A085", shadowColor: "#16A085" },
    { title: "ROI", value: "4.5x", bgColor: "#FDEDEC", textColor: "#C0392B", shadowColor: "#C0392B" }
  ];

  const containerStyle = {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "1850px",
    margin: "auto",
    textAlign: "center"
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333"
  };

  const gridWrapperStyle = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)", 
    gap: "15px 20px",
    justifyContent: "center",
  };

  const cardStyle = (bgColor, shadowColor) => ({
    background: bgColor,
    padding: "15px",
    borderRadius: "10px",
    boxShadow: `0 3px 8px ${shadowColor}`,
    textAlign: "center",
    minWidth: "260px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Brand Dashboard Summary</h2>
      <div style={gridWrapperStyle}>
        <div style={gridStyle}>
          {summaryData.map((item, index) => (
            <div key={index} style={cardStyle(item.bgColor, item.shadowColor)}>
              <h4 style={{ color: "black", fontWeight: "bold", margin: "0", fontSize: "14px" }}>
                {item.title}
              </h4>
              <h3 style={{ color: item.textColor, fontSize: "20px", margin: "5px 0 0" }}>
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
