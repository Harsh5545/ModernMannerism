// pages/admin-login.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ForgotPasswordDropdown from "../ForgetPassword/ForgetPassword";
import { doCredentialLogin } from "@/app/actions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);
      console.log(response);
      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      
      <form
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
        onSubmit={onSubmit}>
          <div className="text-xl text-red-500">{error}</div>
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input className="border mx-2 border-gray-500 rounded" type="email" name="email" id="email" />
        </div>

        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input className="border mx-2 border-gray-500 rounded" type="password" name="password" id="password" />
        </div>

        <button type="submit" className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36">
          Ceredential Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
