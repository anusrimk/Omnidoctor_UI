import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TimelyAvailability = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const days = [
    "MON. 4/7",
    "SEA. 8/4",
    "WED 9/4",
    "THU. 10/4",
    "FRI. 11/4",
    "SAT 12/4",
    "SUN. 4/13",
  ];
  const hours = [
    "All day",

    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];

  return (
    <div className="w-full h-full bg-white p-8">
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft size={20} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight size={20} />
          </button>
          <button className="px-3 py-1 text-sm hover:bg-gray-100 rounded">
            Today
          </button>
          <span className="ml-4 text-gray-700">7 – APR 13 FROM 2025</span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-gray-200 rounded">
            Month
          </button>
          <button className="px-3 py-1 text-sm bg-gray-200 rounded">
            Week
          </button>
          <button className="px-3 py-1 text-sm bg-gray-200 rounded">Day</button>
          <button className="px-3 py-1 text-sm bg-gray-200 rounded">
            Agenda
          </button>
        </div>
      </div>

      <div className="border rounded-lg mt-8">
        <div className="grid grid-cols-8 border-b">
          <div className="p-2 border-r"></div>
          {days.map((day, i) => (
            <div
              key={i}
              className="p-2 text-center border-r border-black bg-gray-200 text-blue-500 font-semibold"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-8">
          <div className="border-r">
            {hours.map((hour, i) => (
              <div key={i} className="h-8 border-b p-1 text-sm text-gray-500">
                {hour}
              </div>
            ))}
          </div>

          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="border-r relative">
              {hours.map((_, hourIndex) => (
                <div key={hourIndex} className="h-8 border-b">
                  {day.includes("10/4") && hourIndex === 4 && (
                    <div className="absolute w-full px-1">
                      <div className="bg-green-200 text-sm rounded text-center py-1">
                        9:26
                        <br />2 Doctors online
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelyAvailability;
