"use client";
import React, { useState } from "react";

import { Button, Input, Spacer } from "@nextui-org/react";
import { signUp } from "@/app/actions/users/signUp";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    setMessage("Please Wait...");
    e.preventDefault();
    const message = await signUp(email, password);
    setMessage(message);
  };
  return (
    <>
      <div className="w-[40%] mx-auto">
        <div className="text-center">
          <h1>Sign Up {message}</h1>
        </div>
        <div className="m-1">
          <div className="m-10 ">
            <Input
              type="email"
              value={email}
              className=""
              size="sm"
              bordered
              label="Email"
              labelPlaceholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Spacer y={3.5} />
            <Input
              type="password"
              value={password}
              className=""
              size="lg"
              bordered
              label="Password"
              labelPlaceholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Spacer y={3.5} />
            <div className="text-center">
              <Button color="primary" auto onClick={handleSubmit}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
