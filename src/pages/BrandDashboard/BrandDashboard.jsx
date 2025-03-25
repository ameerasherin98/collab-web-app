import React from "react";
import './BrandDashboard.css';
import Header from "../../components/Header/Header";
import Summary from "../../components/DashboardMetrics/Summary/Summary";
import Campaigns from "../../components/DashboardMetrics/Campaigns/Campaigns";
import Influencers from "../../components/DashboardMetrics/InfluencerCollaborations/Influencers";

const BrandDashboard = () => {
  return (
    <div className="dashboard-container">
      <Header/>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Left Section - Overview */}
        <div className="left-section">
          <div className="overview-cards">
            <Summary/>
          </div>
        </div>

        {/* Right Section - Campaigns & Influencers (Stacked) */}
        <div className="right-section">
          <div className="campaigns-section">
            <Campaigns/>
          </div>

          <div className="influencer-collaboration">
            <Influencers/>
          </div>
        </div>

      </main>
    </div>
  );
};

export default BrandDashboard;
