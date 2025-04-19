import React, { useState } from "react";
import Button from "../components/Button";

const PatientBalance = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Patient Refund Management</h1>
      </div>

      <div className="bg-white rounded-md shadow-sm p-6">
        {/* Instructions Box */}
        <div className="bg-green-50 p-4 rounded-md mb-6">
          <ul className="list-disc list-inside text-green-700 space-y-2">
            <li>
              Get user details enter email address of the user and press Get
              Details
            </li>
            <li>Set user freepass balance put amount and press Assign</li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 gap-6 max-w-2xl">
          <div className="flex items-end gap-4">
            <div className="w-96">
              <label className="block text-sm text-gray-600 mb-1">Email:</label>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              >
                <option value="">-- Select User --</option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
              </select>
            </div>
            <Button color="teal" variant="primary">
              Get Details
            </Button>
          </div>

          <div className="flex items-end gap-4">
            <div className="w-96">
              <label className="block text-sm text-gray-600 mb-1">
                Amount:
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                min="0"
              />
            </div>
            <Button color="teal" variant="primary">
              Assign
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBalance;
