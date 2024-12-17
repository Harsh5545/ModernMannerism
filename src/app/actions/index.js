'use server'

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export async function doSocialLogin(formData) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "/" });
}

export async function doLogout() {
  try {

    await signOut({ redirect: false });
    revalidatePath("/");
  } catch (err) {
    console.error("Error during logout:", err);
    throw err;
  }
}

export async function doCredentialLogin(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    revalidatePath("/");
    return response;
  } catch (err) {
    throw err;
  }
}
