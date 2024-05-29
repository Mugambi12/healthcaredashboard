import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ toggleSidebar, show, toggleNavbar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("credentials");
    window.location.reload();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <img
        src="public/assets/menu_icon.svg"
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleSidebar}
      />

      <div className="navbar-left">
        <img src="public/TestLogo.svg" alt="Test Logo" className="logo" />
      </div>

      <nav className={`navbar-center ${show ? "show" : ""}`}>
        <img
          src="public/assets/close-icon.svg"
          alt="close Icon"
          className="menu-icon"
          onClick={toggleNavbar}
        />

        <a href="#!" className="nav-link">
          <img
            src="public/assets/home_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Home Icon"
            className="icon"
          />
          <span className="text">Overview</span>
        </a>
        <a href="#!" className="nav-link active">
          <img
            src="public/assets/group_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Group Icon"
            className="icon"
          />
          <span className="text">Patients</span>
        </a>
        <a href="#!" className="nav-link">
          <img
            src="public/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Calendar Icon"
            className="icon"
          />
          <span className="text">Schedule</span>
        </a>
        <a href="#!" className="nav-link">
          <img
            src="public/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Assessment Icon"
            className="icon"
          />
          <span className="text">Assessment</span>
        </a>
        <a href="#!" className="nav-link">
          <img
            src="public/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Billing Icon"
            className="icon"
          />
          <span className="text">Transactions</span>
        </a>
      </nav>

      <div className={`navbar-right ${show ? "show" : ""}`}>
        <div className="profile">
          <img
            src="public/assets/profile-image.png"
            alt="Profile Image"
            className="profile-image"
          />
          <div className="user-info">
            <span className="full-name">Dr. Jose Simmons</span>
            <span className="role">General Practitioner</span>
          </div>
        </div>

        <img
          src="public/assets/settings_FILL0_wght300_GRAD0_opsz24.svg"
          alt="Settings Cog Icon"
          className="icon"
        />

        <img
          src="public/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
          alt="Vertical More Icon"
          className="icon"
          onClick={toggleDropdown}
        />

        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="#!" onClick={handleLogout}>
              Logout
            </a>
          </div>
        )}
      </div>

      <img
        src="public/assets/menu_icon.svg"
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleNavbar}
      />
    </nav>
  );
};

export default Navbar;
