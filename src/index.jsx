import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css"; // Import global CSS
import LoginScreen from "./pages/LoginScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginScreen/>
  </React.StrictMode>
);
