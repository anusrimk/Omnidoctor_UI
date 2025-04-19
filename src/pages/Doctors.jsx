import React, { useState } from "react";
import {
  Star,
  Download,
  Upload,
  Eye,
  Edit,
  FileEdit,
  X,
  Trash2,
} from "lucide-react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setIsModalOpen(false);
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create New Doctor</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="flex gap-2 justify-end mt-6">
                <Button
                  type="button"
                  color="gray"
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" color="violet" variant="primary">
                  Create
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
              <Button color="yellow" variant="primary" icon={Download}>
                Download Sample Excel
              </Button>
            </div>
          </div>
        </div>

        {/* Search filters section - reorganized */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md"
          />
          <select className="p-2 border border-gray-300 rounded-md">
            <option value="">Select a department</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="psychology">Psychology</option>
            <option value="family-medicine">Family Medicine</option>
          </select>
          <div className="flex items-center gap-2">
            <select className="w-20 p-2 border border-gray-300 rounded-md text-sm">
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

        {/* Table styles updated */}
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
              {initialData.map((doctor, index) => (
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
                        {doctor.reviews} valuations
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
                      <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                        <Edit size={18} />
                      </button>
                      <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                        <FileEdit size={18} />
                      </button>
                      <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                        <X size={18} />
                      </button>
                      <button className="p-1 text-red-500 hover:bg-red-50 rounded">
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
