'use client';

import React, { useState, useEffect } from "react";
import { Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const session = useSession();

    useEffect(() => {
        if (session.status === 'authenticated') {
            router.replace('/admin');
        }
    }, [session, router])


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

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        });
        if (res?.error) {
            setErrorMessage("Invalid Email Or Password.");
            if (res?.url) router.replace('/admin')
        } else {
            setErrorMessage("")
        }
    };

    return (
        <div className="pt-36">
            <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-4 w-[50%] mx-auto">
                <h1>Login</h1>

                <Input
                    id="email"
                    name="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                    value={email}
                    label="Email"
                    placeholder="Enter your email"
                    autoComplete="off"
                />

                <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                    value={password}
                    label="Password"
                    placeholder="Enter your password"
                    autoComplete="off"
                />
                <Button className="w-1/6 mx-auto" type="submit" > Login </Button>

            </form>

            <p className="text-red-500">{errorMessage}</p>

        </div>
    );
}

export default LoginForm