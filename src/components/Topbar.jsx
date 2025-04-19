import { LogOut } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = ({ setSelected }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 h-18 bg-white flex items-center justify-between px-20 pr-10 shadow-md z-50">
      {/* Omnidoctor on the left */}
      <div className="flex flex-row gap-10">
        <button onClick={() => setSelected("Clinics")}>
          <h1 className="uppercase text-2xl font-bold hover:cursor-pointer">
            omnidoctor
          </h1>
        </button>
      </div>

      <div className="flex-center gap-4">
        <div className="flex-1 text-center">
          <h2>Hello Info!</h2>
        </div>

        <button
          className="w-32 text-left flex items-center gap-2 px-3 py-2 rounded-md text-gray-400 hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
          }}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;