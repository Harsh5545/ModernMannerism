// pages/admin-login.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ForgotPasswordDropdown from "../ForgetPassword/ForgetPassword";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(response);
      if (response.ok) {
        router.push(response?.url);
      }
    } catch (err) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold text-center text-black">Admin Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsForgotPasswordOpen(true)} // Open the dropdown
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Include the Forgot Password Dropdown */}
      <ForgotPasswordDropdown isOpen={isForgotPasswordOpen} onClose={() => setIsForgotPasswordOpen(false)} />
    </div>
  );
};

export default LoginForm;
