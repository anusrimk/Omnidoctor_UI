import React, { useState } from "react";
import { Star, Download, Upload, Eye, Edit, X, Trash2 } from "lucide-react";
import { initialData } from "../data/adminSection";
import Button from "../components/Button";

const Doctors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    rating: 0,
    department: "",
    appointments: 0,
    online: true,
    onlineFrom: new Date().toLocaleDateString(),
    visible: true,
  });
  const [doctors, setDoctors] = useState(initialData);
  const [editingDoctorIndex, setEditingDoctorIndex] = useState(null);

  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  const [searchLimit, setSearchLimit] = useState("50");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newDoctor,
      reviews: newDoctor.reviews || 0,
      email: newDoctor.email || "",
      appointments: newDoctor.appointments || 0,
      onlineFrom: newDoctor.onlineFrom || new Date().toLocaleDateString(),
    };

    if (editingDoctorIndex !== null) {
      const updatedDoctors = [...doctors];
      updatedDoctors[editingDoctorIndex] = newEntry;
      setDoctors(updatedDoctors);
      setEditingDoctorIndex(null);
    } else {
      setDoctors([...doctors, newEntry]);
    }

    // Reset form
    setNewDoctor({
      name: "",
      email: "",
      rating: 0,
      department: "",
      appointments: 0,
      reviews: 0,
      online: true,
      onlineFrom: new Date().toLocaleDateString(),
      visible: true,
    });

    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setEditingDoctorIndex(index);
    setNewDoctor(doctors[index]);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
  };

  const getFilteredDoctors = () => {
    let filtered = [...doctors];

    if (searchName) {
      filtered = filtered.filter((doc) =>
        doc.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (searchEmail) {
      filtered = filtered.filter((doc) =>
        doc.email?.toLowerCase().includes(searchEmail.toLowerCase())
      );
    }

    if (searchDepartment) {
      filtered = filtered.filter((doc) => doc.department === searchDepartment);
    }

    if (searchLimit !== "all") {
      filtered = filtered.slice(0, parseInt(searchLimit));
    }

    return filtered;
  };

  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Doctors</h1>
        <Button
          color="violet"
          variant="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Create Doctor
        </Button>
      </div>

      {/* Modal */}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editingDoctorIndex !== null
                  ? "Edit Doctor"
                  : "Create New Doctor"}
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingDoctorIndex(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={newDoctor.name}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, name: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={newDoctor.email || ""}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, email: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <select
                  value={newDoctor.rating}
                  onChange={(e) =>
                    setNewDoctor({
                      ...newDoctor,
                      rating: parseInt(e.target.value),
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              {/* Appointments */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Appointments
                </label>
                <input
                  type="number"
                  value={newDoctor.appointments || 0}
                  onChange={(e) =>
                    setNewDoctor({
                      ...newDoctor,
                      appointments: parseInt(e.target.value),
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  required
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  value={newDoctor.department}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, department: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  required
                >
                  <option value="">Select a department</option>
                  <option value="psychiatry">Psychiatry</option>
                  <option value="psychology">Psychology</option>
                  <option value="family-medicine">Family Medicine</option>
                </select>
              </div>

              {/* Online Toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newDoctor.online}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, online: e.target.checked })
                  }
                />
                <label className="text-sm text-gray-700">Online</label>
              </div>

              {/* Visible Toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newDoctor.visible}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, visible: e.target.checked })
                  }
                />
                <label className="text-sm text-gray-700">Visible</label>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 justify-end mt-6">
                <Button
                  type="button"
                  color="gray"
                  variant="secondary"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingDoctorIndex(null);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" color="violet" variant="primary">
                  {editingDoctorIndex !== null ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-md shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <p className="text-gray-600 mb-2">Import doctors using Excel:</p>
            <div className="flex gap-4">
              <input
                type="file"
                className="flex-1 input-field"
                placeholder="Choose file"
              />
              <Button color="teal" variant="primary" icon={Upload}>
                Import
              </Button>
              <Button
                color="yellow"
                variant="primary"
                icon={Download}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/sample-doctors.xlsx";
                  link.download = "sample-doctors.xlsx";
                  link.click();
                }}
              >
                Download Sample Excel
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
          <select
            value={searchDepartment}
            onChange={(e) => setSearchDepartment(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a department</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="psychology">Psychology</option>
            <option value="family-medicine">Family Medicine</option>
          </select>
          <div className="flex items-center gap-2">
            <select
              value={searchLimit}
              onChange={(e) => setSearchLimit(e.target.value)}
              className="w-20 p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="all">All</option>
            </select>
            <span className="text-sm">results</span>
            <Button color="teal" variant="primary" className="text-sm">
              Search
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 text-sm font-medium">Name</th>
                <th className="text-left p-4 text-sm font-medium">Rating</th>
                <th className="text-left p-4 text-sm font-medium">Appts</th>
                <th className="text-left p-4 text-sm font-medium">Dept</th>
                <th className="text-center p-4 text-sm font-medium">Online</th>
                <th className="text-left p-4 text-sm font-medium">Since</th>
                <th className="text-center p-4 text-sm font-medium">Visible</th>
                <th className="text-center p-4 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredDoctors().map((doctor, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="p-4 text-sm">{doctor.name}</td>
                  <td className="p-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      {[...Array(doctor.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-gray-500 ml-2">
                        {doctor.reviews || 0} valuations
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-sm">{doctor.appointments}</td>
                  <td className="p-4 text-sm">{doctor.department}</td>
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={doctor.online}
                      className="checkbox-primary"
                      readOnly
                    />
                  </td>
                  <td className="p-4">{doctor.onlineFrom}</td>
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={doctor.visible}
                      className="h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      readOnly
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                        <Eye size={18} />
                      </button>
                      <button
                        className="p-1 text-blue-500 hover:bg-blue-50 rounded"
                        onClick={() => handleEdit(index)}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="p-1 text-red-500 hover:bg-red-50 rounded"
                        onClick={() => handleDelete(index)}
                      >
                        <Trash2 size={18} />
                      </button>
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
};

export default Doctors;