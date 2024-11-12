// components/ForgotPasswordDropdown.js

import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordDropdown = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // Call your backend API to handle password reset
      await axios.post("/api/admin/forgot-password", { email });
      setMessage("Reset link sent to your email!");
    } catch (err) {
      setMessage("Error sending reset link. Please try again.");
    }
  };

  if (!isOpen) return null; // Do not render if the dropdown is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        {message && <p className="text-center text-green-500">{message}</p>}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={onClose} className="text-sm text-indigo-600 hover:underline">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordDropdown;
