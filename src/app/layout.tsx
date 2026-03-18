import "./globals.css";
import AppLayout from "./AppLayout/appLayout"; // ✅ use absolute path

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AppLayout>
                    {children}
                </AppLayout>
            </body>
        </html>
    );
}