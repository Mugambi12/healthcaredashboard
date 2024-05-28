import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ patients, onPatientClick, show, toggleSidebar }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    if (!selectedPatient && patients.length > 0) {
      const lastPatient = patients[0];
      setSelectedPatient(lastPatient);
      onPatientClick(lastPatient);
    }
  }, [patients, selectedPatient, onPatientClick]);

  const handleClick = (patient) => {
    setSelectedPatient(patient);
    onPatientClick(patient);
  };

  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">Patients</h2>
        <div className="sidebar-header-icons">
          <img
            src="/src/assets/search_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Search"
            className="search-icon"
          />
          <img
            src="/src/assets/close-icon.svg"
            alt="Menu Icon"
            className="menu-icon"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <ul className="patient-list">
        {patients.map((patient, index) => (
          <li
            key={index}
            className={`patient-item ${
              selectedPatient && selectedPatient.id === patient.id
                ? "active"
                : ""
            }`}
            onClick={() => handleClick(patient)}
          >
            <img
              src={patient.profileImage}
              alt="Profile"
              className="profile-image"
            />
            <div className="user-info">
              <span className="full-name">{patient.fullName}</span>
              <span className="gender-age">
                {patient.gender}, {patient.age}
              </span>
            </div>
            <img
              src="/src/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
              alt="View More"
              className="view-more"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
