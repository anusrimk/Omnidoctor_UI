import React from "react";
import Pagination from "../components/Pagination";
import { Pencil, Trash2 } from "lucide-react";
import Button from "../components/Button";

const InsuranceGroups = () => {
  const groups = [
    {
      id: 1,
      srNo: "Group 1",
      groupName: "Test Insurance",
      updatedDate: "02-11-2019 13:53:11",
    },
  ];

  return (
    <div className="table-container">
      <div className="flex justify-between items-center">
        <h1 className="table-title">Insurance user groups</h1>
        <Button color="violet" variant="primary">
          Create a group
        </Button>
      </div>

      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Sr. no.</th>
                <th className="table-header-cell">Group name</th>
                <th className="table-header-cell">Updated date</th>
                <th className="table-header-cell">Button action</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.id} className="table-row">
                  <td className="table-cell">{group.srNo}</td>
                  <td className="table-cell">{group.groupName}</td>
                  <td className="table-cell">{group.updatedDate}</td>
                  <td className="table-action-cell">
                    <div className="table-action-wrapper">
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

export default InsuranceGroups;
