import React from "react";
import Pagination from "../components/Pagination";
import { Eye, Pencil, Trash2, Download, Phone, FileText } from "lucide-react";
import Button from "../components/Button";

const InsuranceCompanies = () => {
  const companies = [
    {
      id: 1,
      logo: "https://play-lh.googleusercontent.com/Zia76eeekEeBmcxbuq6TOQOtB_rRltHNo6lRlNmoQXcMb9mxw3GOGgJtV7tOXjlNHHln",
      name: "Max Life Insurance",
      email: "maxlifee@insurance.com",
      phone: "07564887234",
      isActive: true,
    },
    {
      id: 2,
      logo: "https://samasthiti.in/wp-content/uploads/2023/02/LIC.png",
      name: "LIC",
      email: "pc11@mailinator.com",
      phone: "8446524643",
      isActive: true,
    },
    {
      id: 3,
      logo: "https://pawealth.in/wp-content/uploads/2019/08/HDFC-Life-research-report.png",
      name: "HDFC Life Insurance",
      email: "hdfc@insurance.co",
      phone: "912146091",
      isActive: true,
    },
    {
      id: 4,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWF3XBwEEmvegKSiqNlQ5l9r8d5nw8lWbN3A&s",
      name: "Kotak Life",
      email: "kotaklife@mallinator.com",
      phone: "1234",
      isActive: true,
    },
  ];

  return (
    <div className="table-container">
      <div className="flex justify-between items-center">
        <h1 className="table-title">Insurance</h1>
        <Button color="violet" variant="primary">
          Create Insurance
        </Button>
      </div>

      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table-base">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell"></th>
                <th className="table-header-cell">Company name</th>
                <th className="table-header-cell">User email</th>
                <th className="table-header-cell">Phone</th>
                <th className="table-header-cell">Is active</th>
                <th className="table-header-cell">Options</th>
                <th className="table-header-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.id} className="table-row">
                  <td className="table-cell">
                    <img
                      src={company.logo}
                      alt="company logo"
                      width={40}
                      height={40}
                    />
                  </td>
                  <td className="table-cell">{company.name}</td>
                  <td className="table-cell">{company.email}</td>
                  <td className="table-cell">{company.phone}</td>
                  <td className="table-cell">
                    {company.isActive ? "Active" : "Inactive"}
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
                  <td className="table-action-cell">
                    <div className="table-action-wrapper">
                      <button className="p-1.5 bg-green-100 text-green-600 rounded-md hover:bg-green-200">
                        <Download size={16} />
                      </button>
                      <button className="p-1.5 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
                        <Phone size={16} />
                      </button>
                      <button className="p-1.5 bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200">
                        <FileText size={16} />
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

export default InsuranceCompanies;
