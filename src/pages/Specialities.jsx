import React, { useState } from "react";
import { Eye, Edit, X, Image } from "lucide-react";
import Button from "../components/Button";
import { specialitesData } from "../data/adminSection";

const Specialities = () => {
  const [searchName, setSearchName] = useState("");
  const [searchLimit, setSearchLimit] = useState("50");
  const [specialties, setSpecialties] = useState(specialitesData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleDelete = (index) => {
    const updated = specialties.filter((_, i) => i !== index);
    setSpecialties(updated);
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditForm({ ...specialties[index] });
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditForm({});
  };

  const saveEdit = () => {
    const updated = specialties.map((item, i) =>
      i === editingIndex ? editForm : item
    );
    setSpecialties(updated);
    setEditingIndex(null);
    setEditForm({});
  };

  const getFilteredSpecialties = () => {
    let filtered = [...specialties];
    if (searchName.trim()) {
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if (searchLimit !== "all") {
      filtered = filtered.slice(0, parseInt(searchLimit));
    }
    return filtered;
  };

  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Specialties</h1>
        <Button color="violet" variant="primary">
          Create Specialty
        </Button>
      </div>

      <div className="bg-white rounded-md shadow-sm p-6">
        {/* Search */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="input-field flex-1 focus:ring-2 focus:ring-teal-500 focus:outline-none p-2 border border-gray-300 rounded-md"
          />
          <select
            value={searchLimit}
            onChange={(e) => setSearchLimit(e.target.value)}
            className="input-field w-40 focus:ring-2 focus:ring-teal-500 focus:outline-none p-2 border border-gray-300 rounded-md"
          >
            <option value="50">50 results</option>
            <option value="100">100 results</option>
            <option value="all">All</option>
          </select>
          <Button color="teal" variant="primary" className="text-sm">
            Search
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-center p-4 text-sm font-medium">Name</th>
                <th className="text-center p-4 text-sm font-medium">Image</th>
                <th className="text-center p-4 text-sm font-medium">
                  Price 1st visit
                </th>
                <th className="text-center p-4 text-sm font-medium">
                  Price successive visits
                </th>
                <th className="text-center p-4 text-sm font-medium">Options</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredSpecialties().map((specialty, index) => {
                const isEditing = index === editingIndex;

                return (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="p-4 text-sm text-center align-middle">
                      {isEditing ? (
                        <input
                          value={editForm.name}
                          onChange={(e) =>
                            setEditForm({ ...editForm, name: e.target.value })
                          }
                          className="border p-1 w-full text-center"
                        />
                      ) : (
                        specialty.name
                      )}
                    </td>

                    <td className="p-4 text-sm text-center align-middle">
                      {isEditing ? (
                        <input
                          value={editForm.image}
                          onChange={(e) =>
                            setEditForm({ ...editForm, image: e.target.value })
                          }
                          className="border p-1 w-full text-center"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-md bg-gray-200 overflow-hidden mx-auto">
                          {specialty.image ? (
                            <img
                              src={specialty.image}
                              alt={specialty.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <Image size={24} className="text-gray-400" />
                            </div>
                          )}
                        </div>
                      )}
                    </td>

                    <td className="p-4 text-sm text-center align-middle">
                      {isEditing ? (
                        <input
                          type="number"
                          value={editForm.priceFirst}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              priceFirst: e.target.value,
                            })
                          }
                          className="border p-1 w-full text-center"
                        />
                      ) : (
                        specialty.priceFirst
                      )}
                    </td>

                    <td className="p-4 text-sm text-center align-middle">
                      {isEditing ? (
                        <input
                          type="number"
                          value={editForm.priceSuccessive}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              priceSuccessive: e.target.value,
                            })
                          }
                          className="border p-1 w-full text-center"
                        />
                      ) : (
                        specialty.priceSuccessive
                      )}
                    </td>

                    <td className="p-4 text-sm text-center align-middle">
                      <div className="flex justify-center gap-2">
                        {isEditing ? (
                          <>
                            <Button
                              variant="icon"
                              color="teal"
                              onClick={saveEdit}
                              icon={Eye}
                            />
                            <Button
                              variant="icon"
                              color="red"
                              onClick={cancelEdit}
                              icon={X}
                            />
                          </>
                        ) : (
                          <>
                            <Button variant="icon" color="teal" icon={Eye} />
                            <Button
                              variant="icon"
                              color="teal"
                              icon={Edit}
                              onClick={() => startEdit(index)}
                            />
                            <Button
                              variant="icon"
                              color="red"
                              icon={X}
                              onClick={() => handleDelete(index)}
                            />
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}

              {getFilteredSpecialties().length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    No specialties found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Specialities;