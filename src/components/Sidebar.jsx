import React, { useState, useEffect } from "react";

import {
  Users,
  ShoppingCart,
  Settings,
  Briefcase,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { adminSections } from "../data/adminSection";
import { IconRenderer } from "./IconRenderer";

const configurationItems = [
  { label: "Time slots", icon: "Table" },
  { label: "FIFO configuration", icon: "Bell" },
  { label: "Password Configuration", icon: "Key" },
  { label: "Set up chat messages", icon: "MessageSquare" },
];

const datingItems = [
  { label: "Appointments", icon: "Calendar" },
  { label: "Notifications", icon: "Bell" },
];

const insuranceItems = [
  { label: "Companies", icon: "List" },
  { label: "User Groups", icon: "Shield" },
  { label: "Insurance Mapper", icon: "Phone" },
];

const refundsItems = [
  { label: "Patient Balance", icon: "DollarSign" },
  { label: "Devotion of Medical Scythians", icon: "HandHelping" },
];

const backofficeItems = [
  { label: "CRMUsers"},
  { label: "CRMRoles"},
];


export default function Sidebar({ selected, setSelected }) {
  const [openMenus, setOpenMenus] = useState({
    configuration: false,
    dating: false,
    insurance: false,
    refunds: false,
    backoffice: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));

    // Add auto-scroll for backoffice menu
    if (menu === "backoffice") {
      setTimeout(() => {
        const backofficeElement = document.querySelector(
          '[data-menu="backoffice"]'
        );
        if (backofficeElement) {
          backofficeElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    }
  };

  const renderSubmenu = (items, isOpen) =>
    isOpen && (
      <div className="ml-6 mt-1 space-y-1">
        {items.map((item) => (
          <button
            key={item.label}
            className={`sidebar-link text-sm py-1.5 ${
              selected === item.label
                ? "sidebar-link-active"
                : "sidebar-link-default"
            } flex gap-2`}
            onClick={() => {
              setSelected(item.label);
            }}
          >
            <IconRenderer
              iconName={item.icon}
              size={18}
              className="text-gray-400"
            />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    );

  useEffect(() => {
    // Manually scroll to the last menu item if it's not visible
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.scrollTop = sidebar.scrollHeight;
    }
  }, [openMenus.backoffice]);

  return (
    <aside className="fixed left-0 top-18 bottom-0 w-64 bg-white text-gray-700 overflow-hidden shadow-md sidebar">
      <div className="mb-8 p-4 ">
        <h1 className="text-xl font-bold text-gray-700">Hospital Admin</h1>
      </div>
      <div className="h-[calc(100vh-114px)] overflow-y-auto px-4">
        <h2 className="uppercase text-xs text-gray-400 font-semibold mb-3 tracking-wider">
          Administration
        </h2>
        <nav className="space-y-1">
          {adminSections.map((item) => {
            if (item.label === "Configuration") {
              return (
                <div key={item.label}>
                  <button
                    className={`sidebar-link ${
                      selected.startsWith("Configuration")
                        ? "sidebar-link-active"
                        : "sidebar-link-default"
                    }`}
                    onClick={() => toggleMenu("configuration")}
                  >
                    <IconRenderer
                      iconName={item.iconName}
                      size={18}
                      className="text-gray-400"
                    />
                    <span className="flex-1">{item.label}</span>
                    {openMenus.configuration ? (
                      <ChevronDown size={16} className="text-gray-400" />
                    ) : (
                      <ChevronRight size={16} className="text-gray-400" />
                    )}
                  </button>
                  {renderSubmenu(configurationItems, openMenus.configuration)}
                </div>
              );
            }
            if (item.label === "Dating") {
              return (
                <div key={item.label}>
                  <button
                    className={`sidebar-link ${
                      selected.startsWith("Dating")
                        ? "sidebar-link-active"
                        : "sidebar-link-default"
                    }`}
                    onClick={() => toggleMenu("dating")}
                  >
                    <IconRenderer
                      iconName={item.iconName}
                      size={18}
                      className="text-gray-400"
                    />
                    <span className="flex-1">{item.label}</span>
                    {openMenus.dating ? (
                      <ChevronDown size={16} className="text-gray-400" />
                    ) : (
                      <ChevronRight size={16} className="text-gray-400" />
                    )}
                  </button>
                  {renderSubmenu(datingItems, openMenus.dating)}
                </div>
              );
            }
            if (item.label === "Insurance companies") {
              return (
                <div key={item.label}>
                  <button
                    className={`sidebar-link ${
                      selected.startsWith("Insurance")
                        ? "sidebar-link-active"
                        : "sidebar-link-default"
                    }`}
                    onClick={() => toggleMenu("insurance")}
                  >
                    <IconRenderer
                      iconName={item.iconName}
                      size={18}
                      className="text-gray-400"
                    />
                    <span className="flex-1">{item.label}</span>
                    {openMenus.insurance ? (
                      <ChevronDown size={16} className="text-gray-400" />
                    ) : (
                      <ChevronRight size={16} className="text-gray-400" />
                    )}
                  </button>
                  {renderSubmenu(insuranceItems, openMenus.insurance)}
                </div>
              );
            }
            if (item.label === "Refunds") {
              return (
                <div key={item.label}>
                  <button
                    className={`sidebar-link ${
                      selected.startsWith("Refunds")
                        ? "sidebar-link-active"
                        : "sidebar-link-default"
                    }`}
                    onClick={() => toggleMenu("refunds")}
                  >
                    <IconRenderer
                      iconName={item.iconName}
                      size={18}
                      className="text-gray-400"
                    />
                    <span className="flex-1">{item.label}</span>
                    {openMenus.refunds ? (
                      <ChevronDown size={16} className="text-gray-400" />
                    ) : (
                      <ChevronRight size={16} className="text-gray-400" />
                    )}
                  </button>
                  {renderSubmenu(refundsItems, openMenus.refunds)}
                </div>
              );
            }
            return (
              <button
                key={item.label}
                className={`sidebar-link ${
                  selected === item.label
                    ? "sidebar-link-active"
                    : "sidebar-link-default"
                }`}
                onClick={() => setSelected(item.label)}
              >
                <IconRenderer
                  iconName={item.iconName}
                  size={18}
                  className="text-gray-400"
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <h2 className="uppercase text-xs text-gray-400 font-semibold mb-3 tracking-wider mt-8">
          Glovo
        </h2>
        <nav className="space-y-1">
          <button
            className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
              selected === "Clients"
                ? "bg-teal-50 border-2 border-teal-200 text-gray-700"
                : "hover:bg-teal-100 text-gray-700"
            }`}
            onClick={() => setSelected("GlovoClients")}
          >
            <Users size={18} className="text-gray-400" />
            <span>Clients</span>
          </button>
          <button
            className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
              selected === "Orders"
                ? "bg-teal-50 border-2 border-teal-200 text-gray-700"
                : "hover:bg-teal-100 text-gray-700"
            }`}
            onClick={() => setSelected("GlovoOrders")}
          >
            <ShoppingCart size={18} className="text-gray-400" />
            <span>Orders</span>
          </button>
        </nav>

        <h2 className="uppercase text-xs text-gray-400 font-semibold mb-3 tracking-wider mt-8">
          System
        </h2>
        <nav className="space-y-1">
          <button
            className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
              selected === "Global Variables"
                ? "bg-teal-50 border-2 border-teal-200 text-gray-700"
                : "hover:bg-teal-100 text-gray-700"
            }`}
            onClick={() => setSelected("Global Variables")}
          >
            <Settings size={18} className="text-gray-400" />
            <span>Global Variables</span>
          </button>
          <div data-menu="backoffice">
            <button
              className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                selected.startsWith("Backoffice")
                  ? "bg-teal-50 border-2 border-teal-200 text-gray-700"
                  : "hover:bg-teal-100 text-gray-700"
              }`}
              onClick={() => toggleMenu("backoffice")}
            >
              <Briefcase size={18} className="text-gray-400" />
              <span className="flex-1">Backoffice CRM</span>
              {openMenus.backoffice ? (
                <ChevronDown size={16} className="text-gray-400" />
              ) : (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </button>
            {renderSubmenu(backofficeItems, openMenus.backoffice)}
          </div>
        </nav>
      </div>
    </aside>
  );
}