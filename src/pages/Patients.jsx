import React, { useState } from "react";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import { Pencil, Trash2 } from "lucide-react";

const Patients = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [premium, setPremium] = useState("All");
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    premium: "true",
  });

  const handleAddPatient = (e) => {
    e.preventDefault();
    const newPatient = {
      ...formData,
      id: patients.length + 1,
      patients: 0,
      appointments: 0,
      insurance: "Omnidotor",
    };
    setPatients([...patients, newPatient]);
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    const filteredPatients = patients.filter((patient) => {
      return (
        (name
          ? patient.name.toLowerCase().includes(name.toLowerCase())
          : true) &&
        (email
          ? patient.email.toLowerCase().includes(email.toLowerCase())
          : true) &&
        (premium === "All"
          ? true
          : premium === "Premium"
          ? patient.premium
          : !patient.premium)
      );
    });
    setPatients(filteredPatients);
  };

  const handleEdit = (patient) => {
    setFormData({
      id: patient.id,
      name: patient.name,
      email: patient.email,
      premium: patient.premium ? "true" : "false",
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

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

          <div className="flex gap-4">
            <Button color="teal" variant="primary" onClick={handleSearch}>
              Search
            </Button>

            <Button
              color="violet"
              variant="primary"
              onClick={() => {
                setFormData({
                  id: null,
                  name: "",
                  email: "",
                  premium: "true",
                });
                setIsModalOpen(true);
              }}
            >
              Add Patient
            </Button>
          </div>
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
                      <Button
                        color="gray"
                        variant="icon"
                        icon={Pencil}
                        onClick={() => handleEdit(patient)}
                      />
                      <Button
                        color="red"
                        variant="icon"
                        icon={Trash2}
                        onClick={() => handleDelete(patient.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={120} />
      </div>

      {/* Modal for Adding New Patient */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {formData.id ? "Edit Patient" : "Add New Patient"}
            </h2>
            <form onSubmit={handleAddPatient} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter patient name"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter patient email"
                />
              </div>

              <div>
                <label className="block text-gray-700">Premium</label>
                <select
                  name="premium"
                  value={formData.premium}
                  onChange={(e) =>
                    setFormData({ ...formData, premium: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="true">Premium</option>
                  <option value="false">Non-Premium</option>
                </select>
              </div>

              <div className="flex gap-4 mt-4 justify-end">
                <Button
                  color="gray"
                  variant="primary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button color="blue" variant="primary" type="submit">
                  {formData.id ? "Save Changes" : "Add Patient"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients;