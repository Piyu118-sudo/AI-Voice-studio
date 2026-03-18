"use client";

import Sidebar from "./sidebar/Sidebar";
import MainWorkspace from "./MainWorkspace/MainWorkspace";

type Props = {
    children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
    return (
        <div className="flex h-screen overflow-hidden">

            
            <div className="w-64 bg-gray-900 text-white flex flex-col">
                <Sidebar />
            </div>

            
            <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
                <MainWorkspace />
                {children}
            </div>

        </div>
    );
}