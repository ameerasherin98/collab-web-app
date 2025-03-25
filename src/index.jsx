import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css"; // Import global CSS
import LoginScreen from "./pages/Login/LoginScreen";
import BrandDashboard from "./pages/BrandDashboard/BrandDashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LoginScreen/> */}
    <BrandDashboard/>
  </React.StrictMode>
);
