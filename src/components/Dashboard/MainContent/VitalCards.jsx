import "./VitalCards.css";

const getLatestEntry = (entries) => {
  if (!entries || entries.length === 0) return null;

  return entries.reduce((latest, entry) => {
    const entryDate = new Date(entry.year, entry.month);
    const latestDate = new Date(latest.year, latest.month);

    if (entryDate > latestDate) return entry;
    return latest;
  }, entries[0]);
};

const VitalCard = ({ patient, label, icon, valueKey }) => {
  const latestEntry = getLatestEntry(patient.diagnosisHistory);

  return (
    <>
      {latestEntry && (
        <div
          className={`content-vital-card content-card-${label
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          <img src={`public/${icon}`} alt={label} />
          <div className="content-vital-label">{label}</div>
          <div className="content-vital-value">
            {latestEntry[valueKey].value}{" "}
            {valueKey === "temperature" ? "°F" : "bpm"}
          </div>
          <div className="content-vital-levels">
            {latestEntry[valueKey].levels}
          </div>
        </div>
      )}
    </>
  );
};

export const DiagnosisHistoryRespiratoryRate = ({ patient }) => (
  <VitalCard
    patient={patient}
    label="Respiratory Rate"
    icon="respiratory_rate.svg"
    valueKey="respiratory_rate"
  />
);

export const DiagnosisHistoryTemperature = ({ patient }) => (
  <VitalCard
    patient={patient}
    label="Temperature"
    icon="temperature.svg"
    valueKey="temperature"
  />
);

export const DiagnosisHistoryHeartRate = ({ patient }) => (
  <VitalCard
    patient={patient}
    label="Heart Rate"
    icon="HeartBPM.svg"
    valueKey="heart_rate"
  />
);

export default [
  DiagnosisHistoryRespiratoryRate,
  DiagnosisHistoryTemperature,
  DiagnosisHistoryHeartRate,
];
