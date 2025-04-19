import React from "react";

const departments = [
  {
    name: "Family Medicine",
    firstVisitPrice: 10,
    firstVisitDuration: 15,
    firstVisitCommission: 9,
    successivePrice: 10,
    successiveDuration: 15,
    successiveCommission: 9,
  },
  {
    name: "Psychology",
    firstVisitPrice: 10,
    firstVisitDuration: 40,
    firstVisitCommission: 9,
    successivePrice: 10,
    successiveDuration: 40,
    successiveCommission: 9,
  },
  {
    name: "Psychiatry",
    firstVisitPrice: 15,
    firstVisitDuration: 40,
    firstVisitCommission: 14,
    successivePrice: 15,
    successiveDuration: 40,
    successiveCommission: 14,
  },
  {
    name: "testing service",
    firstVisitPrice: 0,
    firstVisitDuration: 0,
    firstVisitCommission: 0,
    successivePrice: 0,
    successiveDuration: 0,
    successiveCommission: 0,
  },
  {
    name: "Emergency Doctor",
    firstVisitPrice: 0,
    firstVisitDuration: 0,
    firstVisitCommission: 0,
    successivePrice: 0,
    successiveDuration: 0,
    successiveCommission: 0,
  },
];

export default function DepartmentTable() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">DEPARTMENTS</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">First visit price</th>
                <th className="px-4 py-2">First visit duration</th>
                <th className="px-4 py-2">First visit commission</th>
                <th className="px-4 py-2">Successive visit price</th>
                <th className="px-4 py-2">Successive visit duration</th>
                <th className="px-4 py-2">Successive visit commission</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {departments.map((dept, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{dept.name}</td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      defaultValue={dept.firstVisitPrice}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      defaultValue={dept.firstVisitDuration}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      defaultValue={dept.firstVisitCommission}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      defaultValue={dept.successivePrice}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      defaultValue={dept.successiveDuration}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      defaultValue={dept.successiveCommission}
                      className="w-16 border rounded px-2 py-1"
                    />
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