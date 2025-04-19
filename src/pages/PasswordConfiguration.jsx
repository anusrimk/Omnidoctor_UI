import React, { useState } from "react";
import Button from "../components/Button";
import { KeyRound, Lock, AlertCircle } from "lucide-react";

const PasswordConfiguration = () => {
  const [warningDays, setWarningDays] = useState("365");
  const [lockTime, setLockTime] = useState("15");
  const [failedAttempts, setFailedAttempts] = useState("3");

  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-xl">Password warning settings</h1>
      </div>

      <div className="flex gap-8">
        {/* Statistics Cards - Now on the right */}
        <div className="w-80 flex flex-col gap-4">
          <div className="bg-white rounded-md shadow-sm p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-teal-100 border border-teal-300">
                <KeyRound className="text-teal-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Password Warning</p>
                <p className="text-xl font-bold">{warningDays} days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-100 border border-orange-300">
                <Lock className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Lock Duration</p>
                <p className="text-xl font-bold">{lockTime} minutes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-red-100 border border-red-300">
                <AlertCircle className="text-red-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Max Failed Attempts</p>
                <p className="text-xl font-bold">{failedAttempts}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-md shadow-sm p-6">
          <div className="flex flex-col gap-8">
            {/* Password Warning Days */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">
                Change password warning (days)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={warningDays}
                  onChange={(e) => setWarningDays(e.target.value)}
                  className="bg-white w-[400px] h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm border border-gray-200"
                />
                <Button color="teal" variant="primary">
                  Update
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Enter days later when the password system show expires user
                warning
                <br />
                (Example: 365)
              </p>
            </div>

            {/* Login Lock Time */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">
                Login lock time
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={lockTime}
                  onChange={(e) => setLockTime(e.target.value)}
                  className="bg-white w-[400px] h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm border border-gray-200"
                />
                <Button color="teal" variant="primary">
                  Update
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Enter the time in one minute after which the login function is
                activated.
                <br />
                If the user crashes
                <br />( If the user put the wrong password several times)
              </p>
            </div>

            {/* Failed Login Attempts */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">
                Failed login attempt
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={failedAttempts}
                  onChange={(e) => setFailedAttempts(e.target.value)}
                  className="bg-white w-[400px] h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm border border-gray-200"
                />
                <Button color="teal" variant="primary">
                  Update
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Number of attempts after which the user gets the lock
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordConfiguration;
