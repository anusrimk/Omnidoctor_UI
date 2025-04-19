import React, { useState } from "react";
import Button from "../components/Button";

function CRMUsers() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "PabloTest",
      email: "pablot@omnidoctor.com",
      premium: true,
      patients: 4,
      appointments: 330,
      insurance: "Omnidotor",
    },
    {
      id: 2,
      name: "Diego",
      email: "diegor@omnidotor.com",
      premium: false,
      patients: 1,
      appointments: 12,
      insurance: "Omnidotor",
    },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-gray-800 font-semibold text-xl mb-4">User Groups</h1>
      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Name</th>
                <th className="table-header-cell">Email</th>
                <th className="table-header-cell">Premium</th>
                <th className="table-header-cell">Patients</th>
                <th className="table-header-cell">Appointments</th>
                <th className="table-header-cell">Insurance / Omnidoctor</th>
                <th className="table-header-cell">Options</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="table-row">
                  <td className="table-cell">{patient.name}</td>
                  <td className="table-cell">{patient.email}</td>
                  <td className="table-cell">{patient.premium ? "✓" : "✗"}</td>
                  <td className="table-cell">{patient.patients}</td>
                  <td className="table-cell">{patient.appointments}</td>
                  <td className="table-cell">{patient.insurance}</td>
                  <td className="table-action-cell">
                    <div className="table-action-wrapper">
                      <Button color="gray" variant="icon" />
                      <Button color="red" variant="icon" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CRMUsers;