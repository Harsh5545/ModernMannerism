"use client";

import styles from "./registerForm.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Register } from "@/lib/action";

const RegisterForm = () => {

    // const router = useRouter();

    // useEffect(() => {
    //     router.push("/login");
    // }, [router]);

    return (
        <div>
            <form className={styles.form} action={Register}>
                <input type="text" placeholder="First Name" name="firstName" />
                <input type="text" placeholder="Last Name" name="lastName" />
                <input type="email" placeholder="email" name="email" />
                <input type="tel" placeholder="Mobile Number" name="mobileNumber" />
                <input type="password" placeholder="Password" name="password" />
                <input type="password" placeholder="Confirm Password" name="cpassword" />
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm