import React from "react";
import { Eye, Edit, X, Image } from "lucide-react";
import Button from "../components/Button";
import { specialitesData } from "../data/adminSection";

const Specialities = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Specialties</h1>
        <Button color="violet" variant="primary">
          Create Specialty
        </Button>
      </div>

      <div className="bg-white rounded-md shadow-sm p-6">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            className="input-field flex-1 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
          <select className="input-field w-40 focus:ring-2 focus:ring-teal-500 focus:outline-none">
            <option value="50">50 results</option>
            <option value="100">100 results</option>
            <option value="all">All</option>
          </select>
          <Button color="teal" variant="primary" className="text-sm">
            Search
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-center p-4 text-sm font-medium">Name</th>
                <th className="text-center p-4 text-sm font-medium">Image</th>
                <th className="text-center p-4 text-sm font-medium">
                  Price 1st visit
                </th>
                <th className="text-center p-4 text-sm font-medium">
                  Price successive visits
                </th>
                <th className="text-center p-4 text-sm font-medium">Options</th>
              </tr>
            </thead>
            <tbody>
              {specialitesData.map((specialty, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="p-4 text-sm text-center align-middle">
                    {specialty.name}
                  </td>
                  <td className="p-4 text-sm text-center align-middle">
                    <div className="w-12 h-12 rounded-md bg-gray-200 overflow-hidden mx-auto">
                      {specialty.image ? (
                        <img
                          src={specialty.image}
                          alt={specialty.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image size={24} className="text-gray-400" />
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-center align-middle">
                    {specialty.priceFirst}
                  </td>
                  <td className="p-4 text-sm text-center align-middle">
                    {specialty.priceSuccessive}
                  </td>
                  <td className="p-4 text-sm text-center align-middle">
                    <div className="flex justify-center gap-2">
                      <Button variant="icon" color="teal" icon={Eye} />
                      <Button variant="icon" color="teal" icon={Edit} />
                      <Button variant="icon" color="red" icon={X} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
