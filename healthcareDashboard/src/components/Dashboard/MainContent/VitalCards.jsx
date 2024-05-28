import "./VitalCards.css";

export const DiagnosisHistoryRespiratoryRate = ({ patient }) => {
  const latestEntry =
    patient.diagnosisHistory[patient.diagnosisHistory.length - 1];
  return (
    <>
      {latestEntry && (
        <div className="content-vital-card content-card-respiratory-rate">
          <img src="/src/assets/respiratory_rate.svg" alt="Respiratory Rate" />
          <div className="content-vital-label">Respiratory Rate</div>
          <div className="content-vital-value">
            {latestEntry.respiratory_rate.value} bpm
          </div>
          <div className="content-vital-levels">
            {latestEntry.respiratory_rate.levels}
          </div>
        </div>
      )}
    </>
  );
};

export const DiagnosisHistoryTemperature = ({ patient }) => {
  const latestEntry =
    patient.diagnosisHistory[patient.diagnosisHistory.length - 1];
  return (
    <>
      {latestEntry && (
        <div className="content-vital-card content-card-temperature">
          <img src="/src/assets/temperature.svg" alt="Temperature" />
          <div className="content-vital-label">Temperature</div>
          <div className="content-vital-value">
            {latestEntry.temperature.value}°F
          </div>
          <div className="content-vital-levels">
            {latestEntry.temperature.levels}
          </div>
        </div>
      )}
    </>
  );
};

export const DiagnosisHistoryHeartRate = ({ patient }) => {
  const latestEntry =
    patient.diagnosisHistory[patient.diagnosisHistory.length - 1];
  return (
    <>
      {latestEntry && (
        <div className="content-vital-card content-card-heart-rate">
          <img src="/src/assets/HeartBPM.svg" alt="Heart Rate" />
          <div className="content-vital-label">Heart Rate</div>
          <div className="content-vital-value">
            {latestEntry.heart_rate.value} bpm
          </div>
          <div className="content-vital-levels">
            {latestEntry.heart_rate.levels}
          </div>
        </div>
      )}
    </>
  );
};

export default [
  DiagnosisHistoryRespiratoryRate,
  DiagnosisHistoryTemperature,
  DiagnosisHistoryHeartRate,
];
