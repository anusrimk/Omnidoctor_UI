import React, { useState, Suspense } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar"
// Lazy load all page components
const Clinics = React.lazy(() => import("./Clinics"));
const Doctors = React.lazy(() => import("./Doctors"));
const Specialities = React.lazy(() => import("./Specialities"));
const TimelyAvailability = React.lazy(() => import("./TimelyAvailability"));
const TimeSlots = React.lazy(() => import("./TimeSlots"));
const Fifo = React.lazy(() => import("./Fifo"));
const PasswordConfiguration = React.lazy(() =>
  import("./PasswordConfiguration")
);
const ChatConfiguration = React.lazy(() => import("./ChatConfiguration"));
const AppointmentStatus = React.lazy(() => import("./AppointmentStatus"));
const NotificationLog = React.lazy(() => import("./NotificationLog"));
const Patients = React.lazy(() => import("./Patients"));
const BalanceRequests = React.lazy(() => import("./BalanceRequests"));
const Discounts = React.lazy(() => import("./Discounts"));
const InsuranceCompanies = React.lazy(() => import("./InsuranceCompanies"));
const InsuranceGroups = React.lazy(() => import("./InsuranceGroups"));
const InsuranceMapper = React.lazy(() => import("./InsuranceMapper"));
const PatientBalance = React.lazy(() => import("./PatientBalance"));
const PatientDevotion = React.lazy(() => import("./PatientDevotion"));
const Chatting = React.lazy(() => import("./Chatting"));
const CRMUsers = React.lazy(() => import("./CRMUsers"));
const GlovoClients = React.lazy(() => import("./GlovoClient"));
const GlobalVariables = React.lazy(() => import("./GlobalVariables"));

const Home = () => {
  const [selected, setSelected] = useState("Clinics");

  const renderContent = () => {
    switch (selected) {
      case "Clinics":
        return <Clinics />;
      case "Doctors":
        return <Doctors />;
      case "Specialities":
        return <Specialities />;
      case "Timely Availability":
        return <TimelyAvailability />;
      case "Time slots":
        return <TimeSlots />;
      case "FIFO configuration":
        return <Fifo />;
      case "Password Configuration":
        return <PasswordConfiguration />;
      case "Set up chat messages":
        return <ChatConfiguration />;
      case "Appointments":
        return <AppointmentStatus />;
      case "Notifications":
        return <NotificationLog />;
      case "Patients":
        return <Patients />;
      case "Balance requests":
        return <BalanceRequests />;
      case "Discounts":
        return <Discounts />;
      case "Companies":
        return <InsuranceCompanies />;
      case "User Groups":
        return <InsuranceGroups />;
      case "Insurance Mapper":
        return <InsuranceMapper />;
      case "Patient Balance":
        return <PatientBalance />;
      case "Devotion of Medical Scythians":
        return <PatientDevotion />;
      case "Chatting":
        return <Chatting />;
      case "CRMUsers":
      case "CRMRoles":
        return <CRMUsers />;
      case "GlovoClients":
      case "GlovoOrders":
        return <GlovoClients />;
      case "GlobalVariables":
        return <GlobalVariables />;

      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold">
              {selected} (not available on the main website)
            </h2>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-18">
      <div>
        <Topbar setSelected={setSelected} />
      </div>
      <div className="flex flex-1">
        <Sidebar selected={selected} setSelected={setSelected} />
        <main className="flex-1 bg-gray-50 ml-64">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="loader"></div>
              </div>
            }
          >
            {renderContent()}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Home;
