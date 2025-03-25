import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BrandDashboard from "./pages/BrandDashboard/BrandDashboard";
import LoginScreen from "./pages/Login/LoginScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/dashboard" element={<BrandDashboard />} />
      <Route path="/login" element={<LoginScreen />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
