'use client';

import React from 'react';
import Profile from './Profile';
import { Button } from "@nextui-org/react";
import { signOut, useSession } from 'next-auth/react';


const Header = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
        <header className="bg-gray-800 text-white shadow-lg rounded-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">Admin Dashboard</div>
                    <div className="flex items-center space-x-4">
                        <Profile name={session?.user?.name} description={session?.user?.email} image={session?.user?.image} />
                        <Button onClick={() => { signOut() }} color='primary'>Logout</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
