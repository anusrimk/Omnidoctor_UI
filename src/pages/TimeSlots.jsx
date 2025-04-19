import React from "react";
import Button from "../components/Button";
import Pagination from "../components/Pagination";

const TimeSlots = () => {
  const timeSlots = [
    { id: "1", time: "00: 00: 00-00: 15:00", department: "Family Medicine" },
    { id: "2", time: "00: 15: 00-00: 30:00", department: "Family Medicine" },
    { id: "3", time: "00: 30: 00-00: 45:00", department: "Family Medicine" },
    { id: "4", time: "00: 45: 00-01: 00:00", department: "Family Medicine" },
    { id: "5", time: "01: 00: 00-01: 15:00", department: "Family Medicine" },
    { id: "6", time: "01: 15: 00-01: 30:00", department: "Family Medicine" },
    { id: "7", time: "01: 30: 00-01: 45:00", department: "Family Medicine" },
    { id: "8", time: "01: 45: 00-02: 00:00", department: "Family Medicine" },
    { id: "9", time: "02: 00: 00-02: 15:00", department: "Family Medicine" },
    { id: "10", time: "02: 15: 00-02: 30:00", department: "Family Medicine" },
    { id: "11", time: "02: 30: 00-02: 45:00", department: "Family Medicine" },
    { id: "12", time: "02: 45: 00-03: 00:00", department: "Family Medicine" },
    { id: "13", time: "03: 00: 00-03: 15:00", department: "Family Medicine" },
    { id: "14", time: "03: 15: 00-03: 30:00", department: "Family Medicine" },
    { id: "15", time: "03: 30: 00-03: 45:00", department: "Family Medicine" },
  ];

  return (
    <div className="table-container">
      <div className="flex justify-between items-center">
        <h1 className="table-title">Duration of scheduled views, by special</h1>
        <Button color="violet" variant="primary">
          Set Duration
        </Button>
      </div>

      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Sr. No.</th>
                <th className="table-header-cell">Space of time</th>
                <th className="table-header-cell">Department Name</th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot) => (
                <tr key={slot.id} className="table-row">
                  <td className="table-cell">{slot.id}</td>
                  <td className="table-cell">{slot.time}</td>
                  <td className="table-cell">{slot.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={128} />
      </div>
    </div>
  );
};

export default TimeSlots;
