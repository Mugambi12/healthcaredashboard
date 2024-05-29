import "./LabResults.css";

const LabResults = ({ patient }) => (
  <div className="content-card content-lab-results">
    <h2>Lab Results</h2>
    <ul className="content-lab-results-list">
      {patient.labResults.map((result, index) => (
        <li key={index} className="content-lab-result-item">
          {result}{" "}
          <img
            src="src/assets/download_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Download Icon"
          />
        </li>
      ))}
    </ul>
  </div>
);

export default LabResults;
