
import Sidebar from '@/components/admin/Sidebar';





const Layout = async ({ children }) => {
    const session = await getServerSession(options);
   

    // if (!session?.isAdmin) {
    //     redirect('/');
    // };

    return (
        <html lang="en">
            <body suppressHydrationWarning>
           
                    <div className="min-h-screen flex">
                        <aside className={` flex-shrink-0 border  flex`}>
                            <div className="w-auto">
                                <Sidebar />
                            </div>
                        </aside>

                        <main className="flex-1 p-0">
                            <div className="bg-white rounded-lg shadow-md p-2 h-fit-screen">
                                {children}
                            </div>
                        </main>
                    </div>
           
            </body>
        </html>
    );
};

export default Layout;
