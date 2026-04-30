import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "StudyNZ",
    description: "Образование за рубежом и поиск грантов",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={cn("font-sans", inter.variable)} suppressHydrationWarning={true}>
        <body className="antialiased bg-white" suppressHydrationWarning={true}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}