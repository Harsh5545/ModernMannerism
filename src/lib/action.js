"use server"
import { signIn, signOut } from "./auth"
import pool from "./database"
import { commonServices } from "./services/common"

export const handleGithubLogin = async () => {

  await signIn("github")
}


export const handleLogout = async () => {
  await signOut()
}

export const Register = async (formData) => {
  const { firstName, lastName, email, mobileNumber, password, cpassword } = Object.fromEntries(formData);

  if (password !== cpassword) {
    return { message: 'Password and confirm password did not match.' };
  }

  const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);

  if (rows[0]) {
    return { message: "Email already exists. Please use another email." };
  }
  try {
    const user = { firstName, lastName, email, mobileNumber, password };
    // const result = await pool.query('INSERT INTO user SET ?', user);
    const NewUser = await commonServices.createEntry('user',user)
    console.log(NewUser)
    return { message: "Registered successfully." };
  } catch (error) {
    console.error(error);

  }
}


// export const Login = async (formData) => {
//   const { email, password } = Object.fromEntries(formData);

//   if (password !== cpassword) {
//     return { message: 'Password and confirm password did not match.' };
//   }

//   const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);

//   if (!rows[0]) {
//     return { message: "Email is not register with us, Please register." };
//   }
//   try {
//     const user = { firstName, lastName, email, mobileNumber, password };
//     const result = await pool.query('INSERT INTO user SET ?', user);
//     console.log(result)
//     return { message: "Registered successfully." };
//   } catch (error) {
//     console.error(error);

//   }
// }
