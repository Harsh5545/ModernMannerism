
'use client'
import { authConfig } from '@/auth.config';
import Loader from '@/components/common/Loader';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import NextAuth from 'next-auth';
import { useEffect, useState } from 'react';
import "../globals.css"
const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    // const { auth } = NextAuth(authConfig);
    // const session = await auth();

 

    return (
        <html lang="en">
            <body suppressHydrationWarning>

                <div className="dark:bg-boxdark-2 dark:text-bodydark">
                    <DefaultLayout>
                        {children}
                    </DefaultLayout>
                </div>

            </body>
        </html>
    );
};

export default Layout;
