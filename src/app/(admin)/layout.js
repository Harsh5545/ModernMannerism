import DefaultLayout from '@/components/layouts/DefaultLayout';
import "../globals.css"
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

const Layout = ({ children }) => {

    // const session = await auth();
    // console.log(session.user)
    // if (!session?.user) redirect("/");


    return (
        <SessionProvider>
            <html lang="en">
                <body suppressHydrationWarning>
                    <div className="dark:bg-boxdark-2 dark:text-bodydark">
                        <DefaultLayout>
                            {children}
                        </DefaultLayout>
                    </div>
                </body>
            </html>
        </SessionProvider>
    );
};

export default Layout;
