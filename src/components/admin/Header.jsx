

import React from 'react';
import { Button } from "@nextui-org/react";
import { auth } from '@/auth';
import Profile from './Profile';



const Header = async () => {
    const session = await auth();
    const loggedInUser = session?.user;
    console.log(loggedInUser);
    const userName = loggedInUser?.name ?? loggedInUser?.email;
    return (
        <header className="bg-gray-800 text-white shadow-lg rounded-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-lg hidden md:visible font-semibold">Admin Dashboard</div>
                    <div className="flex items-center space-x-4 border-[10px] border-black">
                        <Profile name={userName} description={userName} image={session?.user?.image} />
                        <Button onClick={() => { signOut() }} color='primary'>Logout</Button>
                    </div>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;
