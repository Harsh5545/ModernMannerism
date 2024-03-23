"use server"

import { signIn, signOut } from "./auth";
import { commonServices } from "./services/common"
import bcrypt from "bcryptjs"

export const handleGithubLogin = async () => {
  await signIn("github");
}

export const handleGoogleLogin = async () => {
  await signIn("google");
}

export const handleLogout = async () => {
  await signOut();
}


export const Register = async (formData) => {
  const { firstName, lastName, email, mobileNumber, password, cpassword } = Object.fromEntries(formData);

  if (password !== cpassword) {
    return { message: 'Password and confirm password did not match.' };
  }

  const user = await commonServices.readSingleData('user', 'id', { "email": email });

  if (user[0]) {
    return { message: "Email already exists. Please use another email." };
  }

  try {
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt); 

    const newUser = { firstName, lastName, email, mobileNumber, password: hashedPassword };
    const createdUser = await commonServices.createEntry('user', newUser);
    console.log(createdUser);
    return { message: "Registered successfully." };
  } catch (error) {
    console.error('Error during registration:', error);
    return { message: 'An error occurred during registration.' }; 
  }
};

export const login = async (formData) => {
  const { email, password } = Object.fromEntries(formData);
  const user = await commonServices.readSingleData('user', '*', { "email": email });
  if (!user[0]) {
    return null;
  }
  try {
    
    // await signIn("credentials", { email, password });
    await signIn("credentials",{email,password})
  } catch (error) {
    console.error(error);
    return {error: "something went wrong."}
  }
}
