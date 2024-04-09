import Header from "@/components/admin/Header"
import Sidebar from "@/components/admin/Sidebar"


const layout = ({ children }) => {
    return (
        <html lang="en" >
            <body suppressHydrationWarning>
                <div className="min-h-screen flex">

                    <aside className="bg-gray-800 text-black w-64 flex-shrink-0">
                        <div className="p-4">
                            <Sidebar />
                        </div>
                    </aside>

                    <main className="flex-1 p-5">

                        <header className="mb-5">
                            <Header />
                        </header>

                        <div className="bg-white rounded-lg shadow-md p-5">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    )
}

export default layout