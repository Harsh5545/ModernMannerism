"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Input, Spacer } from "@nextui-org/react";
const SignInForm = () => {
  const router = useRouter();
  const { status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    setMessage("Please Wait...");
    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Invalid credentials");
      } else {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/");
    }
  }, [status]);
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

export default SignInForm;
