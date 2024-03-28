"use client";

import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import GoogleIcon from "@/components/Icons/GoogleIcon";

const UserForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

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
        const res = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ formData }),
            "content-type": "application/json",
        });

        if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
        } else {
            router.refresh();
            router.push("/");
        }
    };

    return (
        <div className="">
            <form
                onSubmit={handleSubmit}
                method="post"
                className="flex flex-col gap-4 w-[50%] mx-auto"
            >
                <h1>Create New User</h1>

                <div className="flex gap-4">
                    <Input
                        id="name"
                        name="firstName"
                        type="text"
                        onChange={handleChange}
                        required={true}
                        value={formData.firstName}
                        variant="underline"
                        label="Name"
                        placeholder="Enter your name"
                        autoComplete="off"
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
                />

                <Button className="w-1/6 mx-auto" type="submit"> Register </Button>
                <Button onClick={() => { signIn('google') }} startContent={<GoogleIcon />}>Google</Button>
            </form>
            <p className="text-red-500">{errorMessage}</p>
        </div>
    );
};

export default UserForm;