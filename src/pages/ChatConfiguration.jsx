import React, { useState } from "react";
import Button from "../components/Button";
import { MessageSquare, MessagesSquare } from "lucide-react";

const ChatConfiguration = () => {
  // Add state for toggles
  const [welcomeActive, setWelcomeActive] = useState(true);
  const [firstAnswerActive, setFirstAnswerActive] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Bienvenido al Chat de Omnidoctor. Gracias por contactar con nosotros! Actualmente nuestro servicio de Videoconsultas Medicas es GRATIS y puedes acceder a uno de nuestros especialistas sin NINGÚN coste!"
  );
  const [firstAnswer, setFirstAnswer] = useState(
    "Estamos experimentando un tráfico inusual en el CHAT debido al COVID-19. Para atender tu solicitud sin espera te invitamos a hacer click en el botón de 'Videoconsulta YA' y conectar de forma GRATUITA con uno de nuestros 300 Médicos Especialistas que podrán ayudarte de inmediato con tu consulta"
  );

  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-xl">Chat message settings</h1>
      </div>

      <div className="flex gap-8">
        {/* Statistics Cards */}
        <div className="w-80 flex flex-col gap-4">
          <div className="bg-white rounded-md shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100 border border-blue-300">
                <MessageSquare className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">Welcome Message</p>
                <div className="flex items-center gap-4">
                  <p className="text-xl font-bold">Active</p>
                  <button
                    onClick={() => setWelcomeActive(!welcomeActive)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      welcomeActive ? "bg-teal-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        welcomeActive ? "translate-x-6" : "translate-x-1"
                      }`}
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-teal-100 border border-teal-300">
                <MessagesSquare className="text-teal-600" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">First Answer</p>
                <div className="flex items-center gap-4">
                  <p className="text-xl font-bold">Active</p>
                  <button
                    onClick={() => setFirstAnswerActive(!firstAnswerActive)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      firstAnswerActive ? "bg-teal-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        firstAnswerActive ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-md shadow-sm p-6">
          <div className="flex flex-col gap-8">
            {/* Welcome Message */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">
                Welcome message
              </label>
              <div className="flex items-center gap-4">
                <textarea
                  value={welcomeMessage}
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                  className="bg-white w-full h-32 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm border border-gray-200 resize-none"
                />
              </div>
              <div className="flex justify-end mt-2">
                <Button color="teal" variant="primary">
                  Update
                </Button>
              </div>
            </div>

            {/* First Answer */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">First answer</label>
              <div className="flex items-center gap-4">
                <textarea
                  value={firstAnswer}
                  onChange={(e) => setFirstAnswer(e.target.value)}
                  className="bg-white w-full h-32 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm border border-gray-200 resize-none"
                />
              </div>
              <div className="flex justify-end mt-2">
                <Button color="teal" variant="primary">
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatConfiguration;
