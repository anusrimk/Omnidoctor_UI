import React, { useState } from "react";
import Button from "../components/Button";

const PatientDevotion = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [totalBalance, setTotalBalance] = useState("0€");
  const [todayQuotes, setTodayQuotes] = useState("");

  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Refunds</h1>
      </div>

      <div className="bg-white rounded-md shadow-sm p-6">
        {/* Instructions Box */}
        <div className="bg-green-50 p-4 rounded-md mb-6">
          <ul className="list-disc list-inside text-green-700 space-y-2">
            <li>
              To get the list of doctor appointments, select doctor and click
              "Get Details"
            </li>
            <li>To set refund, enter amount and then click "Set Refund"</li>
            <li>Doctor list contain only freelancers.</li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 gap-6 max-w-2xl">
          <div className="flex items-end gap-4">
            <div className="w-96">
              <label className="block text-sm text-gray-600 mb-1">Email:</label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              >
                <option value="">-- Select User --</option>
                <option value="doctor1">Doctor 1</option>
                <option value="doctor2">Doctor 2</option>
              </select>
            </div>
            <Button color="teal" variant="primary">
              Get Details
            </Button>
          </div>

          {/* Total Balance Display */}
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-700 font-medium">
              TOTAL BALANCE: {totalBalance}
            </p>
          </div>

          {/* Today's Quotes Display */}
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-600">
              Today in hay quotes won by this doctor.
            </p>
            <p className="text-gray-700 mt-2">
              {todayQuotes || "No quotes available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDevotion;
