import { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";

const Dashboard = ({ show, toggleSidebar }) => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const transformedPatients = data.map((patient, index) => ({
          id: index + 1,
          fullName: patient.name,
          gender: patient.gender,
          age: patient.age,
          profileImage: patient.profile_picture,
          dateOfBirth: patient.date_of_birth,
          phoneNumber: patient.phone_number,
          emergencyContact: patient.emergency_contact,
          insuranceType: patient.insurance_type,
          diagnosisHistory: patient.diagnosis_history,
          diagnosticList: patient.diagnostic_list,
          labResults: patient.lab_results,
        }));

        setPatients(transformedPatients);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="dashboard">
      <Sidebar
        patients={patients}
        onPatientClick={handlePatientClick}
        show={show}
        toggleSidebar={toggleSidebar}
      />
      <MainContent selectedPatient={selectedPatient} />
    </div>
  );
};

export default Dashboard;
