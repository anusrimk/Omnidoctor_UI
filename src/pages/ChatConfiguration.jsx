import React, { useState } from "react";
import Button from "../components/Button";
import { MessageSquare, MessagesSquare } from "lucide-react";

const ChatConfiguration = () => {
  const [welcomeActive, setWelcomeActive] = useState(true);
  const [firstAnswerActive, setFirstAnswerActive] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Namaste! How can we help you at Arogya Hospital today?"
  );
  const [firstAnswer, setFirstAnswer] = useState(
    "Dhanyavaad! Our team will assist you shortly."
  );

  // New state to handle editing toggles
  const [isEditingWelcome, setIsEditingWelcome] = useState(false);
  const [isEditingFirstAnswer, setIsEditingFirstAnswer] = useState(false);

  return (
    <div className="w-full h-fit flex flex-col gap-8 bg-gray-100 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-xl">Chat message settings</h1>
      </div>

      <div className="flex gap-8">
        {/* Toggle Cards */}
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

        {/* Message Editing Section */}
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
                  readOnly={!isEditingWelcome}
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                  className={`bg-white w-full h-32 px-3 py-2 rounded-md shadow-sm border ${
                    isEditingWelcome
                      ? "border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      : "border-gray-200"
                  } resize-none`}
                />
              </div>
              <div className="flex justify-end mt-2">
                <Button
                  color="teal"
                  variant="primary"
                  onClick={() => setIsEditingWelcome(!isEditingWelcome)}
                >
                  {isEditingWelcome ? "Save" : "Update"}
                </Button>
              </div>
            </div>

            {/* First Answer */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">First answer</label>
              <div className="flex items-center gap-4">
                <textarea
                  value={firstAnswer}
                  readOnly={!isEditingFirstAnswer}
                  onChange={(e) => setFirstAnswer(e.target.value)}
                  className={`bg-white w-full h-32 px-3 py-2 rounded-md shadow-sm border ${
                    isEditingFirstAnswer
                      ? "border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      : "border-gray-200"
                  } resize-none`}
                />
              </div>
              <div className="flex justify-end mt-2">
                <Button
                  color="teal"
                  variant="primary"
                  onClick={() => setIsEditingFirstAnswer(!isEditingFirstAnswer)}
                >
                  {isEditingFirstAnswer ? "Save" : "Update"}
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