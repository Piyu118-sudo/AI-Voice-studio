import Sidebar from "./AppLayout/sidebar/Sidebar";
import { Navbar } from "./Navbar/navbar";

export default function AppLayout({ children }: {children:React.ReactNode}) {
    return (
        <div className="flex h-screen">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {children}
                </main>

            </div>
        </div>
    );
}