import React from "react";
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
    // Add more appointment data as needed
  ];

  return (
    <div className="table-container">
      <div className="flex flex-col gap-4">
        <h1 className="table-title">Other</h1>

        <div className="filter-container">
          <div className="filter-group">
            <label className="filter-label">Specialty</label>
            <select className="filter-input">
              <option>Select a specialty</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">State</label>
            <select className="filter-input w-76!">
              <option>Appointment pending assignment</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Patients</label>
            <select className="filter-input">
              <option>Select a Patient</option>
            </select>
          </div>

          <Button color="blue" variant="primary" className="mt-auto">
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
              {appointments.map((appointment) => (
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
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={128} />
      </div>
    </div>
  );
};

export default AppointmentStatus;
