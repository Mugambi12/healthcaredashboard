import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="public/TestLogo.svg" alt="Test Logo" className="logo" />
      </div>

      <nav className="navbar-center">
        <a href="#!" className="nav-link">
          <img
            src="/src/assets/home_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Home Icon"
            className="icon"
          />
          <span className="text">Overview</span>
        </a>
        <a href="#!" className="nav-link active">
          <img
            src="/src/assets/group_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Group Icon"
            className="icon"
          />
          <span className="text">Patients</span>
        </a>
        <a href="#!" className="nav-link">
          <img
            src="/src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Calendar Icon"
            className="icon"
          />
          <span className="text">Schedule</span>
        </a>
        <a href="#!" className="nav-link">
          <img
            src="/src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Assessment Icon"
            className="icon"
          />
          <span className="text">Assessment</span>
        </a>
        <a href="#!" className="nav-link">
          <img
            src="/src/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Billing Icon"
            className="icon"
          />
          <span className="text">Transactions</span>
        </a>
      </nav>

      <div className="navbar-right">
        <div className="profile">
          <img
            src="/src/assets/profile-image.png"
            alt="Profile Image"
            className="profile-image"
          />
          <div className="user-info">
            <span className="full-name">Dr. Jose Simmons</span>
            <span className="role">General Practitioner</span>
          </div>
        </div>
        <img
          src="/src/assets/settings_FILL0_wght300_GRAD0_opsz24.svg"
          alt="Settings Cog Icon"
          className="icon"
        />
        <img
          src="/src/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
          alt="Vertical More Icon"
          className="icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
