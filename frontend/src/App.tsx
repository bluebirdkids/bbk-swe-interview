import { useEffect, useState } from "react";

type Patient = {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  mrn: string;
  primary_care_provider: string;
};

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/patients")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPatients(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching patients:", err);
        setError("Failed to load patients. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patient List</h1>
      
      {loading && <div className="text-gray-500">Loading patients...</div>}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {!loading && !error && patients.length === 0 && (
        <div className="text-gray-500">No patients found.</div>
      )}
      
      {patients.length > 0 && (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Date of Birth</th>
              <th className="px-4 py-2 border">MRN</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-4 py-2 border">{patient.first_name}</td>
                <td className="px-4 py-2 border">{patient.last_name}</td>
                <td className="px-4 py-2 border">{patient.date_of_birth}</td>
                <td className="px-4 py-2 border">{patient.mrn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
