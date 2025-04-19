import React from "react";
import Pagination from "../components/Pagination";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Button from "../components/Button";

const Discounts = () => {
  const discounts = [
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
  ];

  return (
    <div className="table-container">
      <div className="flex justify-between items-center">
        <h1 className="table-title">Discounts</h1>
        <Button color="violet" variant="primary">
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
                      <button className="p-1.5 bg-violet-100 text-violet-600 rounded-md hover:bg-violet-200">
                        <Pencil size={16} />
                      </button>
                      <button className="p-1.5 bg-red-100 text-red-600 rounded-md hover:bg-red-200">
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
    </div>
  );
};

export default Discounts;
