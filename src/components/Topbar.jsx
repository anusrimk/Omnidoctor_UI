import { Menu } from "lucide-react";
import React from "react";

const Topbar = ({ setSelected }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-18 bg-white flex items-center justify-between px-20 shadow-md z-50">
      <div className="flex flex-row gap-10">
        <button onClick={() => setSelected("Clinics")}>
          <h1 className="uppercase text-2xl font-bold hover:cursor-pointer">
            omnidoctor
          </h1>
        </button>
        {/* <button>
          <Menu />
        </button> */}
      </div>
      <h2>Hello Info!</h2>
    </div>
  );
};

export default Topbar;
