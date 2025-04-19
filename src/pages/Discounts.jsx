import React, { useState } from "react";
import Pagination from "../components/Pagination";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Button from "../components/Button";

const Discounts = () => {
  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      name: "Navaratri Discount",
      quantity: "100",
      used: "20%",
      expirationDate: "30-09-2022",
      activated: true,
    },
    {
      id: 2,
      name: "OMNIDOCTOR30",
      quantity: "999",
      used: "30%",
      expirationDate: "18-03-2020",
      activated: true,
    },
    {
      id: 3,
      name: "euroharrier",
      quantity: "38",
      used: "50%",
      expirationDate: "31-05-2020",
      activated: true,
    },
    {
      id: 4,
      name: "MEGATEST",
      quantity: "1978",
      used: "100 %",
      expirationDate: "30-11-2021",
      activated: true,
    },
    {
      id: 5,
      name: "FAR24D",
      quantity: "998",
      used: "20 %",
      expirationDate: "31-07-2020",
      activated: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    used: "",
    expirationDate: "",
    activated: false,
  });
  const [editMode, setEditMode] = useState(false);
  const [currentDiscount, setCurrentDiscount] = useState(null);

  const handleCreateDiscount = (e) => {
    e.preventDefault();
    const newDiscount = { ...formData, id: discounts.length + 1 };
    setDiscounts([...discounts, newDiscount]);
    setIsModalOpen(false);
    setFormData({
      name: "",
      quantity: "",
      used: "",
      expirationDate: "",
      activated: false,
    });
  };

  const handleEditDiscount = (e) => {
    e.preventDefault();
    const updatedDiscounts = discounts.map((discount) =>
      discount.id === currentDiscount.id
        ? { ...formData, id: discount.id }
        : discount
    );
    setDiscounts(updatedDiscounts);
    setIsModalOpen(false);
    setFormData({
      name: "",
      quantity: "",
      used: "",
      expirationDate: "",
      activated: false,
    });
    setEditMode(false);
    setCurrentDiscount(null);
  };

  const handleDeleteDiscount = (id) => {
    const updatedDiscounts = discounts.filter((discount) => discount.id !== id);
    setDiscounts(updatedDiscounts);
  };

  const handleEditClick = (discount) => {
    setEditMode(true);
    setCurrentDiscount(discount);
    setFormData({
      name: discount.name,
      quantity: discount.quantity,
      used: discount.used,
      expirationDate: discount.expirationDate,
      activated: discount.activated,
    });
    setIsModalOpen(true);
  };

  const handleCreateClick = () => {
    setEditMode(false);
    setIsModalOpen(true);
  };

  return (
    <div className="table-container">
      <div className="flex justify-between items-center">
        <h1 className="table-title">Discounts</h1>
        <Button color="violet" variant="primary" onClick={handleCreateClick}>
          Create Discount
        </Button>
      </div>

      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Name</th>
                <th className="table-header-cell">Quantity</th>
                <th className="table-header-cell">Used</th>
                <th className="table-header-cell">Expiration date</th>
                <th className="table-header-cell">Activated</th>
                <th className="table-header-cell">Options</th>
              </tr>
            </thead>
            <tbody>
              {discounts.map((discount) => (
                <tr key={discount.id} className="table-row">
                  <td className="table-cell">{discount.name}</td>
                  <td className="table-cell">{discount.quantity}</td>
                  <td className="table-cell">{discount.used}</td>
                  <td className="table-cell">{discount.expirationDate}</td>
                  <td className="table-cell">
                    <input
                      type="checkbox"
                      checked={discount.activated}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      readOnly
                    />
                  </td>
                  <td className="table-action-cell">
                    <div className="table-action-wrapper">
                      <button className="p-1.5 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
                        <Eye size={16} />
                      </button>
                      <button
                        className="p-1.5 bg-violet-100 text-violet-600 rounded-md hover:bg-violet-200"
                        onClick={() => handleEditClick(discount)}
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        className="p-1.5 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
                        onClick={() => handleDeleteDiscount(discount.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={50} />
      </div>

      {/* Modal for Creating or Editing Discount */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editMode ? "Edit Discount" : "Create New Discount"}
            </h2>
            <form
              onSubmit={editMode ? handleEditDiscount : handleCreateDiscount}
              className="flex flex-col gap-4"
            >
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
                  placeholder="Enter discount name"
                />
              </div>

              <div>
                <label className="block text-gray-700">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <label className="block text-gray-700">Used</label>
                <input
                  type="text"
                  name="used"
                  value={formData.used}
                  onChange={(e) =>
                    setFormData({ ...formData, used: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter used percentage"
                />
              </div>

              <div>
                <label className="block text-gray-700">Expiration Date</label>
                <input
                  type="date"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={(e) =>
                    setFormData({ ...formData, expirationDate: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-700">Activated</label>
                <input
                  type="checkbox"
                  name="activated"
                  checked={formData.activated}
                  onChange={(e) =>
                    setFormData({ ...formData, activated: e.target.checked })
                  }
                  className="h-4 w-4 rounded"
                />
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
                  {editMode ? "Save Changes" : "Create Discount"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discounts;