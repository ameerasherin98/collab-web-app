import React from "react";
import GoogleIcon from '../assets/svg/google_login.svg'
import InstagramIcon from '../assets/svg/insta_logo.svg'
import CollabLogo from '../assets/logos/Collab.png'

import '../styles/LoginScreen.css'
import { login } from "../api/login";

const LoginScreen = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <div className="text-container">
          <h1 className="heading">CO-EXIST. CREATE. COLLABORATE</h1>
        </div>
      </div>


      {/* Right Section */}
      <div className="right-section">
        <img src={CollabLogo} alt="Google Logo" className="logo" />
        {/* Google Login for Brands */}
        <button className="google-login" onClick={() => login()}>
          <img src={GoogleIcon} alt="Google Logo" className="icon" />
          <span>Sign in with Google for Brand</span>
        </button>

        <div className="separator">
          <hr className="line" />
          <span className="or-text">OR</span>
          <hr className="line" />
        </div>

        {/* Instagram Login for Influencers */}
        <button className="instagram-login">
        <img src={InstagramIcon} alt="Google Logo" className="icon" />
          <span>Sign in with Instagram for Creator</span>
        </button>

      </div>
    </div>
  );
};

export default LoginScreen;