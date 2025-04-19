import React from "react";
import { BellRing } from "lucide-react";
import Pagination from "../components/Pagination";

const NotificationLog = () => {
  const notifications = [
    {
      id: 1,
      department: "Medicina Familiar",
      patient: "Chetan",
      status: "PENDING_TO_PAY",
      date: "2025-01-10 12:59:37",
    },
    {
      id: 2,
      department: "Medicina Familiar",
      patient: "Chetan",
      status: "PENDING_TO_PAY",
      date: "2023-09-26 09:54:03",
    },
    {
      id: 3,
      department: "Medicina Familiar",
      patient: "ry",
      status: "PENDING_TO_PAY",
      date: "2023-09-07 13:16:31",
    },
    {
      id: 4,
      department: "Psiquiatría",
      patient: "Chetan",
      status: "CANCELLED",
      date: "2022-09-21 12:48:53",
    },
    {
      id: 5,
      department: "Psicología",
      patient: "Chetan",
      status: "WAITING",
      date: "2022-09-18 19:10:17",
    },
  ];

  return (
    <div className="table-container">
      <div className="flex justify-between items-center">
        <h1 className="table-title">Last Call Notification Logs</h1>
      </div>

      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Department</th>
                <th className="table-header-cell">Patient</th>
                <th className="table-header-cell">Status</th>
                <th className="table-header-cell">Date</th>
                <th className="table-header-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr key={notification.id} className="table-row">
                  <td className="table-cell">{notification.department}</td>
                  <td className="table-cell">{notification.patient}</td>
                  <td className="table-cell">{notification.status}</td>
                  <td className="table-cell">{notification.date}</td>
                  <td className="table-action-cell">
                    <button className="p-1.5 bg-green-100 text-green-600 rounded-md hover:bg-green-200">
                      <BellRing size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={51} />
      </div>
    </div>
  );
};

export default NotificationLog;
