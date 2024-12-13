"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";
import Image from "next/image";

const UserForm = () => {
    const router = useRouter();
    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Reset individual errors when the user starts typing
        setErrorMessage((prevState) => ({
            ...prevState,
            [name]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage({}); // Reset error messages

        // Form validation
        const errors = {};
        if (!formData.firstName) errors.firstName = "First Name is required.";
        if (!formData.lastName) errors.lastName = "Last Name is required.";
        if (!formData.email.includes("@")) errors.email = "Please enter a valid email.";
        if (formData.password.length < 8) errors.password = "Password must be at least 8 characters.";
        if (formData.mobileNumber.length < 10) errors.mobileNumber = "Phone number must be at least 10 digits.";

        if (Object.keys(errors).length > 0) {
            setErrorMessage(errors);
            return;
        }

        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            const response = await res.json();
            setErrorMessage({ global: response.message });
        } else {
            // Reset form data after successful registration
            setFormData(initialFormData);  // Clear form fields
            router.push("/user"); // Redirect to home page after successful registration
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center py-12">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full md:w-[60%] flex flex-col md:flex-row space-x-6">
                <div className="w-full hidden md:flex justify-center items-center mb-6 md:mb-0">
                    <Image
                        src="/assets/manasiuser.jpg"
                        alt="Manasi Modern Mannerism" width={200} height={200}
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="md:w-full w-[90%] ">
                    <h1 className="text-3xl md:p-8 px-0 py-4 text-center mb-6 bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] text-transparent bg-clip-text">
                        Create Your Account
                    </h1>
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className={`${
                                        errorMessage.firstName ? "border-red-500" : ""
                                    }`}
                                />
                                {errorMessage.firstName && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errorMessage.firstName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className={`${
                                        errorMessage.lastName ? "border-red-500" : ""
                                    }`}
                                />
                                {errorMessage.lastName && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errorMessage.lastName}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`${
                                    errorMessage.email ? "border-red-500" : ""
                                }`}
                            />
                            {errorMessage.email && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errorMessage.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <TextField
                                id="mobileNumber"
                                name="mobileNumber"
                                label="Mobile Number"
                                variant="outlined"
                                fullWidth
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                                className={`${
                                    errorMessage.mobileNumber ? "border-red-500" : ""
                                }`}
                            />
                            {errorMessage.mobileNumber && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errorMessage.mobileNumber}
                                </p>
                            )}
                        </div>

                        <div>
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                               
                                variant="outlined"
                                fullWidth
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className={`${
                                    errorMessage.password ? "border-red-500" : ""
                                }`}
                            />
                            {errorMessage.password && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errorMessage.password}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            fullWidth
                            className=" tracking-widest  bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] font-extrabold text-white"
             
                        >
                            Register
                        </Button>
                    </form>

                    {errorMessage.global && (
                        <p className="text-red-500 text-center mt-4">{errorMessage.global}</p>
                    )}

                    <div className="mt-6 text-center">
                        <Button
                            onClick={() => router.push("/login")}
                            fullWidth
                            variant="outlined"
                            sx={{
                                borderColor: "#eabf91",
                                color: "#c3965d",
                                fontWeight: "bold",
                                "&:hover": {
                                    background: "#eabf91",
                                    color: "white",
                                },
                            }}
                        >
                            Already a member? Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
