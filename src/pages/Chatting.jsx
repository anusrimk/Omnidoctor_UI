import React, { useState } from "react";
import { Send, Search } from "lucide-react";

const Chatting = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      time: "10:30 AM",
      unread: 2,
      avatar: "JD",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "The appointment is confirmed",
      time: "9:45 AM",
      unread: 0,
      avatar: "JS",
    },
    {
      id: 3,
      name: "Mike Johnson",
      lastMessage: "Thanks for your help!",
      time: "Yesterday",
      unread: 1,
      avatar: "MJ",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "patient",
      text: "Hi doctor, I have a question about my prescription",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Hello! Of course, what would you like to know?",
      time: "10:31 AM",
    },
    {
      id: 3,
      sender: "patient",
      text: "Can I take the medicine with food?",
      time: "10:31 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "Yes, it's actually recommended to take this medication with food to avoid stomach upset. Make sure to take it with a full glass of water.",
      time: "10:32 AM",
    },
    {
      id: 5,
      sender: "patient",
      text: "Thank you for clarifying!",
      time: "10:33 AM",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-72px)] flex bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                selectedUser?.id === user.id ? "bg-gray-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex-center font-medium">
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <span className="text-xs text-gray-500">{user.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {user.lastMessage}
                  </p>
                </div>
                {user.unread > 0 && (
                  <span className="bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex-center">
                    {user.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="bg-white p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex-center font-medium">
                  {selectedUser.avatar}
                </div>
                <h2 className="font-medium text-gray-900">
                  {selectedUser.name}
                </h2>
              </div>
            </div>

            {/* Chat Messages - only this should scroll */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "patient" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === "patient"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-teal-500 text-white"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "patient"
                          ? "text-gray-500"
                          : "text-teal-100"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input - fixed at bottom */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                />
                <button className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex-center text-gray-500">
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatting;
