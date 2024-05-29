import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./DiagnosisHistory.css";

const DiagnosisHistory = ({ patient }) => {
  const { diagnosisHistory } = patient;
  const [filter, setFilter] = useState("all");

  if (!diagnosisHistory || diagnosisHistory.length === 0) {
    return <div>No diagnosis history available</div>;
  }

  const monthMap = useMemo(
    () => ({
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    }),
    []
  );

  const now = useMemo(() => new Date(), []);

  const filterData = (history, filter) => {
    return history.filter((entry) => {
      const entryDate = new Date(entry.year, monthMap[entry.month]);
      if (filter === "3months") {
        return now - entryDate <= 3 * 30 * 24 * 60 * 60 * 1000;
      } else if (filter === "6months") {
        return now - entryDate <= 6 * 30 * 24 * 60 * 60 * 1000;
      } else {
        return true;
      }
    });
  };

  const filteredDiagnosisHistory = useMemo(
    () => filterData(diagnosisHistory, filter),
    [diagnosisHistory, filter]
  );

  const latestEntry = useMemo(() => {
    if (filteredDiagnosisHistory.length === 0) return null;
    return filteredDiagnosisHistory.reduce((latest, entry) => {
      const entryYear = parseInt(entry.year);
      const entryMonth = monthMap[entry.month];
      const latestYear = parseInt(latest.year);
      const latestMonth = monthMap[latest.month];

      if (
        entryYear > latestYear ||
        (entryYear === latestYear && entryMonth > latestMonth)
      ) {
        return entry;
      } else {
        return latest;
      }
    });
  }, [filteredDiagnosisHistory, monthMap]);

  const chartData = useMemo(() => {
    return filteredDiagnosisHistory.map((entry) => ({
      time: `${entry.month} ${entry.year}`,
      systolic: entry.blood_pressure.systolic.value,
      diastolic: entry.blood_pressure.diastolic.value,
    }));
  }, [filteredDiagnosisHistory]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="diagnosis-history-row">
        <div className="content-card-chart">
          <div className="filter-container">
            <label htmlFor="filter">Filter:</label>
            <select id="filter" value={filter} onChange={handleFilterChange}>
              <option value="3months">Last 3 months</option>
              <option value="6months">Last 6 months</option>
              <option value="all">All</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
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
                    src="public/ArrowUp.svg"
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
                    src="public/ArrowDown.svg"
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
