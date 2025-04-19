import {
  User,
  BriefcaseMedical,
  HeartPulse,
  Ban,
  UserRoundPlus,
  Mail,
} from "lucide-react";
import React from "react";
import Button from "../components/Button";

const Clinics = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-xl">Omnidoctor</h1>
        <div className="flex items-center">
          <input
            type="date"
            className="bg-white w-[25%] h-10 mr-8 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
            placeholder="19/04/2025"
          />
          <input
            type="checkbox"
            name="date"
            id="dateFilter"
            className="mr-2 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
          />
          <label htmlFor="dateFilter" className="text-gray-700 cursor-pointer">
            From the beginning of days
          </label>

          <Button color="teal" variant="primary" className="ml-8">
            Submit
          </Button>
        </div>
      </div>

      <div className="w-full h-fit">
        <div className="w-full flex gap-4">
          {/* First column - Users and Doctors stats */}
          <div className="w-1/3 h-fit">
            <div className="w-full bg-white rounded-lg p-6 shadow-sm h-full">
              <div className="flex justify-around items-center">
                <div className="text-center flex flex-col">
                  <div className="w-22 h-22 mb-6 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                    <User className="text-blue-500" size={40} />
                  </div>
                  <h2 className="text-5xl font-bold mb-2">2793</h2>
                  <p className="text-gray-600 font-semibold">users</p>
                </div>

                <div className="text-center flex flex-col">
                  <div className="w-22 h-22 mb-6 rounded-full bg-violet-50 flex items-center justify-center mx-auto">
                    <BriefcaseMedical className="text-violet-500" size={40} />
                  </div>
                  <h2 className="text-5xl font-bold mb-2">108</h2>
                  <p className="text-gray-600 font-semibold">doctors</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="inline-flex items-center bg-red-100 px-4 py-2 rounded-lg w-full">
                  <HeartPulse className="text-red-400 mr-3" size={20} />
                  <span className="text-xl font-semibold mr-2">3</span>
                  <span className="text-gray-700">
                    Patients in the waiting room
                  </span>
                </div>
                <div className="inline-flex items-center bg-orange-100 px-4 py-2 rounded-lg w-full">
                  <Ban className="text-orange-400 mr-3" size={20} />
                  <span className="text-xl font-semibold mr-3">0</span>
                  <span className="text-gray-700">Number of calls NOT OK</span>
                </div>
                <div className="inline-flex items-center bg-violet-100 px-4 py-2 rounded-lg w-full">
                  <UserRoundPlus className="text-violet-400 mr-3" size={20} />
                  <span className="text-xl font-semibold mr-3">0</span>
                  <span className="text-gray-700">New Registered Users</span>
                </div>
                <div className="inline-flex items-center bg-teal-100 px-4 py-2 rounded-lg w-full">
                  <Mail className="text-teal-400 mr-3" size={20} />
                  <span className="text-xl font-semibold mr-3">0</span>
                  <span className="text-gray-700">Total Queries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second column - Not Correct Queries */}
          <div className="w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <h2 className="text-lg font-semibold mb-4 uppercase text-left text-gray-700">
                NOT CORRECT QUERIES TODAY
              </h2>
              <div className="mb-4">
                <p className="text-gray-600 font-semibold mb-1">
                  Query number OK
                </p>
                <p className="text-4xl font-bold">0</p>
              </div>
              <div className="flex flex-col">
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Family Medicine</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Psychology</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Psychiatry</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Testing Service</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Emergency Doctor</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">
                    Sample Department
                  </p>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third column - Average Consultation Time */}
          <div className="w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <h2 className="text-lg font-semibold mb-4 uppercase text-left text-gray-700">
                AVERAGE CONSULTATION TIME
              </h2>
              <div className="mb-4">
                <p className="text-gray-600 font-semibold mb-1">
                  Average Consultation Time
                </p>
                <p className="text-4xl font-bold">0</p>
              </div>
              <div className="flex flex-col">
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Family Medicine</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Psychology</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Psychiatry</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Testing Service</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Emergency Doctor</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <div className="hover:bg-teal-50 p-2 rounded-md">
                  <p className="text-gray-500 text-sm mb-1">Sample Department</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinics;
