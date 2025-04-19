import React, { useState } from "react";
import Button from "../components/Button";
import Pagination from "../components/Pagination";

const InsuranceMapper = () => {
  const [selectedInsurance, setSelectedInsurance] = useState("All");

  const mappings = [
    {
      id: 1,
      departmentName: "Cardiology",
      insuranceCompany: "Kotak Life",
      canUseHouseDoctors: false,
      isActive: true,
    },
    {
      id: 2,
      departmentName: "Craniosacral Therapy",
      insuranceCompany: "Kotak Life",
      canUseHouseDoctors: false,
      isActive: true,
    },
    {
      id: 3,
      departmentName: "General medicine",
      insuranceCompany: "HDFC Life Insurance",
      canUseHouseDoctors: false,
      isActive: true,
    },
    {
      id: 4,
      departmentName: "Emergency Doctor",
      insuranceCompany: "Kotak Life",
      canUseHouseDoctors: true,
      isActive: true,
    },
    {
      id: 5,
      departmentName: "Test Department Image",
      insuranceCompany: "LIC",
      canUseHouseDoctors: false,
      isActive: true,
    },
    {
      id: 6,
      departmentName: "Test department LIC",
      insuranceCompany: "LIC",
      canUseHouseDoctors: false,
      isActive: true,
    },
  ];

  return (
    <div className="table-container">
      <div className="flex justify-between items-center">
        <h1 className="table-title">Mapper sure</h1>
        <Button color="violet" variant="primary">
          Create Insurance Mapper
        </Button>
      </div>

      <div className="bg-white p-4 rounded-md shadow-sm mt-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Select Insurance</label>
            <select
              value={selectedInsurance}
              onChange={(e) => setSelectedInsurance(e.target.value)}
              className="bg-white w-48 h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm border border-gray-200"
            >
              <option value="All">All</option>
              <option value="Kotak">Kotak Life</option>
              <option value="HDFC">HDFC Life Insurance</option>
              <option value="LIC">LIC</option>
            </select>
          </div>
          <Button color="blue" variant="primary" className="self-end">
            Search
          </Button>
        </div>
      </div>

      <div className="table-wrapper mt-4">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Department Name</th>
                <th className="table-header-cell">Insurance company name</th>
                <th className="table-header-cell">
                  To be able to use the doctors of the house
                </th>
                <th className="table-header-cell">Active</th>
              </tr>
            </thead>
            <tbody>
              {mappings.map((mapping) => (
                <tr key={mapping.id} className="table-row">
                  <td className="table-cell">{mapping.departmentName}</td>
                  <td className="table-cell">{mapping.insuranceCompany}</td>
                  <td className="table-cell">
                    <input
                      type="checkbox"
                      checked={mapping.canUseHouseDoctors}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      readOnly
                    />
                  </td>
                  <td className="table-cell">
                    <input
                      type="checkbox"
                      checked={mapping.isActive}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      readOnly
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={50} />
      </div>
    </div>
  );
};

export default InsuranceMapper;
