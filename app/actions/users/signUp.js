"use server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const signUp = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) return "User already exists";
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  return "Successfully created new user.";
};
