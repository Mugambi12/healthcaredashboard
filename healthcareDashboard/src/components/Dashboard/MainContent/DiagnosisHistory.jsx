import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./DiagnosisHistory.css";

const DiagnosisHistory = ({ patient }) => {
  const { diagnosisHistory } = patient;

  if (!diagnosisHistory || diagnosisHistory.length === 0) {
    return <div>No diagnosis history available</div>;
  }

  const latestEntry = diagnosisHistory[diagnosisHistory.length - 1];

  const chartData = diagnosisHistory.map((entry) => ({
    time: `${entry.month} ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));

  return (
    <>
      <div className="diagnosis-history-row">
        <div className="content-card-chart">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData} margin={0}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="systolic" stroke="#e66fd2" />
              <Line type="monotone" dataKey="diastolic" stroke="#8c6fe6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="content-card-summary">
          {latestEntry && (
            <div className="content-diagnosis-entry">
              <div className="content-card-blood-pressure">
                <div className="content-card-bp-label">
                  <span className="content-card-bp-bulletin systolic"></span>
                  <p>Systolic</p>
                </div>
                <div className="content-card-data-value">
                  {latestEntry.blood_pressure.systolic.value}
                </div>
                <div className="content-card-bp-footer">
                  <img
                    className="content-card-bp-footer-image"
                    src="/src/assets/ArrowUp.svg"
                    alt="Increase in systolic blood pressure"
                  />
                  <span className="content-card-bp-footer-label">
                    {latestEntry.blood_pressure.systolic.levels}
                  </span>
                </div>
              </div>

              <hr />

              <div className="content-card-blood-pressure">
                <div className="content-card-bp-label">
                  <span className="content-card-bp-bulletin diastolic"></span>
                  <p>Diastolic</p>
                </div>
                <div className="content-card-data-value">
                  {latestEntry.blood_pressure.diastolic.value}
                </div>
                <div className="content-card-bp-footer">
                  <img
                    className="content-card-bp-footer-image"
                    src="/src/assets/ArrowDown.svg"
                    alt="Decrease in diastolic blood pressure"
                  />
                  <span className="content-card-bp-footer-label">
                    {latestEntry.blood_pressure.diastolic.levels}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiagnosisHistory;
