"use client";

import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function AppLayout({ children }: Props) {
    return (
        <div className="flex h-screen">

            {/* Sidebar */}
            {/* <Sidebar /> */}

            {/* Main */}
            <div className="flex-1 flex flex-col">

                {/* Navbar */}
                {/* <Navbar /> */}

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>

            </div>
        </div>
    );
}