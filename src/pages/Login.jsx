import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    if (email && password) {
      navigate("/home");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex-center">
      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
        <div className="text-center flex flex-col items-center mb-8 relative">
          <img src="/logo.png" alt="omnidoctor logo" />
          <p className="text-gray-600 mt-2">
            Please enter your details to sign in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-teal-600 hover:text-teal-500"
            >
              Forgot password?
            </button>
          </div>

          <div className="w-full flex justify-center">
            <Button
              type="submit"
              color="teal"
              variant="primary"
              className="py-2"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
