"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { doCredentialLogin } from "@/app/actions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        setError("All fields are required.");
        setLoading(false);
        return;
      }

      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
        setLoading(false);
        return;
      }

      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      console.log(response)
      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/"); // Redirect after successful login
      }
    } catch (e) {
      console.error(e);
      setError("Invalid credentials, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full md:w-[60%] flex flex-col md:flex-row space-x-6">
        {/* Image Section */}
        <div className="w-full flex justify-center items-center mb-6 md:mb-0">
          <Image
            src="/assets/ManasiLogin.jpg"
            alt="Modern Login Page"
            width={300}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full">
          <h1 className="text-3xl tracking-widest font-extrabold text-center mb-6 bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] text-transparent bg-clip-text">
            Welcome Back
          </h1>

          {error && (
            <div className="text-red-500 text-center mb-4 bg-red-100 p-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:ring focus:ring-[#c3965d]"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:ring focus:ring-[#c3965d]"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-lg text-white font-bold ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] hover:bg-[#c3965d]"
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => router.push("/register")}
              className="text-[#c3965d] font-bold hover:underline"
            >
              New here? Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
