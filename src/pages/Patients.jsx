import React, { useState } from "react";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import { Pencil, Trash2 } from "lucide-react";

const Patients = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [premium, setPremium] = useState("All");

  const patients = [
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
  ];

  return (
    <div className="table-container">
      <div className="flex flex-col gap-4">
        <h1 className="table-title">Users</h1>

        <div className="filter-container">
          <div className="filter-group">
            <label className="filter-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="filter-input"
              placeholder="Diego"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="filter-input w-72!"
              placeholder="diego@omnidoctor.com"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Premium</label>
            <select
              value={premium}
              onChange={(e) => setPremium(e.target.value)}
              className="filter-input"
            >
              <option value="All">All</option>
              <option value="Premium">Premium</option>
              <option value="Non-Premium">Non-Premium</option>
            </select>
          </div>

          <Button color="blue" variant="primary">
            Search
          </Button>
        </div>
      </div>

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
                      <button className="p-1.5 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
                        <Pencil size={16} />
                      </button>
                      <button className="p-1.5 bg-red-100 text-red-600 rounded-md hover:bg-red-200">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={120} />
      </div>
    </div>
  );
};

export default Patients;
