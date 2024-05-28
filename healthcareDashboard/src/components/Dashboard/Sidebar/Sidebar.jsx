import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ patients, onPatientClick }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    // Set the latest patient as the selected one when no patient is clicked
    if (!selectedPatient && patients.length > 0) {
      setSelectedPatient(patients[patients.length - 1]);
      onPatientClick(patients[patients.length - 1]);
    }
  }, [patients, selectedPatient, onPatientClick]);

  const handleClick = (patient) => {
    setSelectedPatient(patient);
    onPatientClick(patient);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Patients</h2>
        <img
          src="/src/assets/search_FILL0_wght300_GRAD0_opsz24.svg"
          alt="Search"
          className="search-icon"
        />
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
