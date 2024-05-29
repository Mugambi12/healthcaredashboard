import "./MainContent.css";
import DiagnosisHistory from "./DiagnosisHistory";
import {
  DiagnosisHistoryRespiratoryRate,
  DiagnosisHistoryTemperature,
  DiagnosisHistoryHeartRate,
} from "./VitalCards";
import DiagnosticList from "./DiagnosticList";
import ProfileCard from "./ProfileCard";
import LabResults from "./LabResults";

const MainContent = ({ selectedPatient }) => {
  return (
    <div className="content-main">
      {selectedPatient && (
        <div className="content-column content-left">
          <div className="content-card content-diagnosis-history">
            <h3 className="header">Diagnosis History</h3>
            <DiagnosisHistory patient={selectedPatient} />
            <div className="content-vitals-cards">
              <DiagnosisHistoryRespiratoryRate patient={selectedPatient} />
              <DiagnosisHistoryTemperature patient={selectedPatient} />
              <DiagnosisHistoryHeartRate patient={selectedPatient} />
            </div>
          </div>
          <DiagnosticList patient={selectedPatient} />
        </div>
      )}

      <div className="content-column content-right">
        {selectedPatient && (
          <>
            <ProfileCard patient={selectedPatient} />
            <LabResults patient={selectedPatient} />
          </>
        )}
      </div>
    </div>
  );
};

export default MainContent;
