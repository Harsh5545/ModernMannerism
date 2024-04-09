import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';
import AuthProvider from '../Providers/AuthProvider';
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";
import { options } from '../api/auth/[...nextauth]/options';


const Layout = async ({ children }) => {
    const session = await getServerSession(options);
   

    if (!session?.isAdmin) {
        redirect('/');
    };

    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <AuthProvider session={session}>
                    <div className="min-h-screen flex">
                        <aside className={` w-64 flex-shrink-0 border  flex`}>
                            <div className="w-auto">
                                <Sidebar />
                            </div>
                        </aside>

                        <main className="flex-1 p-2">
                            <header className="mb-5">
                                <Header session={session}/>
                            </header>
                            <div className="bg-white rounded-lg shadow-md p-5 h-fit-screen">
                                {children}
                            </div>
                        </main>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
};

export default Layout;
