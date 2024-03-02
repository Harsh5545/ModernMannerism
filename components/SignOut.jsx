"use client";
import React, { useEffect } from "react";
import { signOut } from "next-auth/react";
const SignOut = () => {
  useEffect(() => {
    signOut({
      callbackUrl: "/",
      redirect:true,
    });
  }, []);
  return null;
};

export default SignOut;
