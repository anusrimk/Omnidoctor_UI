import React from "react";
import Pagination from "../components/Pagination";

const BalanceRequests = () => {
  const requests = [
    {
      id: 1,
      name: "Dr. Romil Rathi",
      quantity: "10",
      applicationDate: "09-04-2020 14:32:21",
      state: "Paid",
      paymentDate: "03-01-2025 06:06:18",
    },
    {
      id: 2,
      name: "Frankin Montero Pires",
      quantity: "30",
      applicationDate: "08-01-2020 06:37:21",
      state: "Paid",
      paymentDate: "07-11-2023 09:51:15",
    },
    {
      id: 3,
      name: "Fazil Doctor Test",
      quantity: "30",
      applicationDate: "05-08-2020 20:33:06",
      state: "Earning",
      paymentDate: null,
    },
    {
      id: 4,
      name: "Dr BK Chaudhary",
      quantity: "60",
      applicationDate: "04-30-2020 1:48:28 PM",
      state: "Earning",
      paymentDate: null,
    },
  ];

  return (
    <div className="table-container">
      <div className="flex flex-col gap-4">
        <h1 className="table-title">Balance requests</h1>
      </div>

      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Name</th>
                <th className="table-header-cell">Quantity</th>
                <th className="table-header-cell">Application date</th>
                <th className="table-header-cell">State</th>
                <th className="table-header-cell">Payment date</th>
                <th className="table-header-cell">Options</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="table-row">
                  <td className="table-cell">{request.name}</td>
                  <td className="table-cell">{request.quantity}</td>
                  <td className="table-cell">{request.applicationDate}</td>
                  <td className="table-cell">{request.state}</td>
                  <td className="table-cell">{request.paymentDate || "-"}</td>
                  <td className="table-action-cell">
                    <div className="table-action-wrapper">
                      {request.state === "Paid" ? (
                        <>
                          <button className="px-3 py-1.5 bg-violet-100 text-violet-600 rounded-md hover:bg-violet-200 text-sm">
                            See Bill
                          </button>
                          <button className="px-3 py-1.5 bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200 text-sm">
                            More info
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="px-3 py-1.5 bg-teal-100 text-teal-600 rounded-md hover:bg-teal-200 text-sm">
                            Pay
                          </button>
                          <button className="px-3 py-1.5 bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200 text-sm">
                            More info
                          </button>
                        </>
                      )}
                    </div>
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

export default BalanceRequests;
