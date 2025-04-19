import React, { useState } from "react";
import Button from "../components/Button";
// import { Clock, Users, Timer } from "lucide-react";

const Fifo = () => {
  const [timeInterval, setTimeInterval] = useState("20");
  const [batchSize, setBatchSize] = useState("2");
  const [useFifo, setUseFifo] = useState(false);
  const [maxWaitTime, setMaxWaitTime] = useState("10");

  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-xl">
          Configuration of Notifications to doctors
        </h1>
      </div>

      <div className="bg-white rounded-md shadow-sm p-6">
        <div className="flex flex-col gap-6">
          {/* Time Interval Section */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">
              Time Interval (Seconds)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={timeInterval}
                onChange={(e) => setTimeInterval(e.target.value)}
                className="bg-white w-[200px] h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm border border-gray-200"
              />
              <Button color="teal" variant="primary">
                Update
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Enter time interval (in seconds) after which next batch of
              notifications get executed.
            </p>
          </div>

          {/* Batch Size Section */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Batch Size</label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={batchSize}
                onChange={(e) => setBatchSize(e.target.value)}
                className="bg-white w-[200px] h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm border border-gray-200"
              />
              <Button color="teal" variant="primary">
                Update
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Number of doctors who will be notified in each batch
            </p>
            <p className="text-sm text-gray-500">
              Example: Interval time 90s, Lot size 5
              <br />5 doctors will be notified after 90, another 5 the following
              90s ...
            </p>
          </div>
        </div>
      </div>

      {/* FIFO Configuration Section */}
      <div className="bg-white rounded-md shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">FIFO configuration</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useFifo}
              onChange={(e) => setUseFifo(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            />
            <label className="text-gray-700">Use Fifo</label>
          </div>
          <Button color="teal" variant="primary">
            Update
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Check if you want to use FIFO(new flow).
        </p>
      </div>

      {/* Maximum Waiting Room Time Section */}
      <div className="bg-white rounded-md shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">
          Maximum waiting room time
        </h2>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">
            Max time wait (mins)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={maxWaitTime}
              onChange={(e) => setMaxWaitTime(e.target.value)}
              className="bg-white w-[200px] h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm border border-gray-200"
            />
            <Button color="teal" variant="primary">
              Update
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            When minute waiting rooms are above the indicated value, no more
            people will be allowed to enter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fifo;
