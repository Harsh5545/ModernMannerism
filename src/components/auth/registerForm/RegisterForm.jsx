"use client";

import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import GoogleIcon from "@/components/Icons/GoogleIcon";

const UserForm = () => {
    const router = useRouter();
    const { data: session } = useSession(); // Get the session data
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    // Redirect to sign-in page if user is already authenticated
    useEffect(() => {
        if (session) {
            router.push("/sign-in"); // Redirect to sign-in page
        }
    }, [session, router]);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res)
        if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
        } else {
            router.refresh();
            router.push("/");
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center py-12">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-700 dark:text-gray-200">Create New User</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Input
                            id="name"
                            name="firstName"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.firstName}
                            variant="underline"
                            label="First Name"
                            placeholder="Enter your first name"
                            autoComplete="off"
                            className=" dark:text-gray-200"
                        />
                        <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.lastName}
                            variant="underline"
                            label="Last Name"
                            placeholder="Enter your last name"
                            autoComplete="off"
                            className=" dark:text-gray-200"
                        />
                    </div>

                    <Input
                        id="email"
                        name="email"
                        type="text"
                        onChange={handleChange}
                        required={true}
                        value={formData.email}
                        label="Email"
                        placeholder="Enter your email"
                        autoComplete="off"
                        className=" dark:text-gray-200"
                    />

                    <Input
                        id="mobileNumber"
                        name="mobileNumber"
                        type="text"
                        onChange={handleChange}
                        required={true}
                        value={formData.mobileNumber}
                        label="Mobile"
                        placeholder="Enter your mobile"
                        autoComplete="off"
                        className=" dark:text-gray-200"
                    />

                    <Input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        required={true}
                        value={formData.password}
                        label="Password"
                        placeholder="Enter your password"
                        autoComplete="off"
                        className=" dark:text-gray-200"
                    />

                    <Button className="w-full mt-4 bg-gold-500 hover:bg-yellow-400 dark:bg-slate-400 text-black" type="submit">Register</Button>
                </form>
                {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
                {session && (
                    <p className="text-center mt-4">
                        Already a member? <a href="/sign-in" className="text-blue-500 hover:underline">Sign In</a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default UserForm;