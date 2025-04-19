import React, { useState } from "react";
import Button from "../components/Button";
import Pagination from "../components/Pagination";

const AppointmentStatus = () => {
  const appointments = [
    {
      id: 1,
      department: "Psychiatry",
      patient: "Chetan",
      email: "chetan.babane@harriersysys.com",
      phone: "8260120098",
      doctor: "Dr BK Chaudhary",
      status: "CANCELLED",
      duration: "0 min",
      amount: "0",
      date: "2022-09-21 12:48:54",
    },
    {
      id: 2,
      department: "Family Medicine",
      patient: "Brown",
      email: "brunahami@hotmail.com",
      phone: "643420411",
      doctor: "Dr. Romil Rathi",
      status: "CANCELLED",
      duration: "0 min",
      amount: "0",
      date: "2020-09-12 01:34:44",
    },
    // Add more data as needed
  ];

  // States for filters
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);

  // Unique values for dropdowns
  const departments = [...new Set(appointments.map((a) => a.department))];
  const patients = [...new Set(appointments.map((a) => a.patient))];
  const statuses = [...new Set(appointments.map((a) => a.status))];

  const handleSearch = () => {
    let result = [...appointments];

    if (selectedSpecialty) {
      result = result.filter((a) => a.department === selectedSpecialty);
    }
    if (selectedState) {
      result = result.filter((a) => a.status === selectedState);
    }
    if (selectedPatient) {
      result = result.filter((a) => a.patient === selectedPatient);
    }

    setFilteredAppointments(result);
  };

  return (
    <div className="table-container">
      <div className="flex flex-col gap-4">
        <h1 className="table-title">Other</h1>

        <div className="filter-container">
          <div className="filter-group">
            <label className="filter-label">Specialty</label>
            <select
              className="filter-input"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="">Select a specialty</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">State</label>
            <select
              className="filter-input w-76!"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select a status</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Patients</label>
            <select
              className="filter-input"
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
            >
              <option value="">Select a Patient</option>
              {patients.map((patient) => (
                <option key={patient} value={patient}>
                  {patient}
                </option>
              ))}
            </select>
          </div>

          <Button
            color="blue"
            variant="primary"
            className="mt-auto"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Department</th>
                <th className="table-header-cell">Patient</th>
                <th className="table-header-cell">Patient email</th>
                <th className="table-header-cell">Patient's phone</th>
                <th className="table-header-cell">Doctor</th>
                <th className="table-header-cell">Status</th>
                <th className="table-header-cell">Duration</th>
                <th className="table-header-cell">Amount</th>
                <th className="table-header-cell">Date</th>
                <th className="table-header-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center py-4 text-gray-500">
                    No results found.
                  </td>
                </tr>
              ) : (
                filteredAppointments.map((appointment) => (
                  <tr key={appointment.id} className="table-row">
                    <td className="table-cell">{appointment.department}</td>
                    <td className="table-cell">{appointment.patient}</td>
                    <td className="table-cell">{appointment.email}</td>
                    <td className="table-cell">{appointment.phone}</td>
                    <td className="table-cell">{appointment.doctor}</td>
                    <td className="table-cell">{appointment.status}</td>
                    <td className="table-cell">{appointment.duration}</td>
                    <td className="table-cell">{appointment.amount}</td>
                    <td className="table-cell">{appointment.date}</td>
                    <td className="table-action-cell">
                      <Button color="blue" variant="primary" size="sm">
                        Logs
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={1} />
      </div>
    </div>
  );
};

export default AppointmentStatus;