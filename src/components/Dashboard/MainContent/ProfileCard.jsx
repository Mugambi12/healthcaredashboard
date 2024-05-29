import "./ProfileCard.css";

const ProfileCard = ({ patient }) => (
  <div className="content-card content-profile">
    <div className="content-profile-info">
      <div className="content-profile-image">
        <img src={patient.profileImage} alt="Profile" />
      </div>
      <div className="content-full-name">{patient.fullName}</div>
      <div className="content-user-info">
        <div className="content-user-info-row">
          <img
            src="public/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Calendar Icon"
          />
          <div className="content-user-info-column">
            <span className="label">Date of Birth:</span>
            <span className="value">{patient.dateOfBirth}</span>
          </div>
        </div>
        <div className="content-user-info-row">
          <img
            src={`public/assets/${
              patient.gender === "Female" ? "Female" : "Male"
            }Icon.svg`}
            alt={`${patient.gender} Icon`}
          />
          <div className="content-user-info-column">
            <span className="label">Gender:</span>
            <span className="value">{patient.gender}</span>
          </div>
        </div>
        <div className="content-user-info-row">
          <img src="public/assets/PhoneIcon.svg" alt="Phone Icon" />
          <div className="content-user-info-column">
            <span className="label">Contact Info:</span>
            <span className="value">{patient.phoneNumber}</span>
          </div>
        </div>
        <div className="content-user-info-row">
          <img src="public/assets/PhoneIcon.svg" alt="Phone Icon" />
          <div className="content-user-info-column">
            <span className="label">Emergency Contact:</span>
            <span className="value">{patient.emergencyContact}</span>
          </div>
        </div>
        <div className="content-user-info-row">
          <img src="public/assets/InsuranceIcon.svg" alt="Insurance Icon" />
          <div className="content-user-info-column">
            <span className="label">Insurance Provider:</span>
            <span className="value">{patient.insuranceType}</span>
          </div>
        </div>
      </div>
      <button className="content-profile-button">Show more information</button>
    </div>
  </div>
);

export default ProfileCard;
