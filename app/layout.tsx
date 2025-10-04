import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { FloatingNav } from "@/components/ui/resizable-navbar";
import { Home, Info, PenLine } from "lucide-react";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya raizada",
  description: "Aadi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Home", link: "/", icon: <Home size={18} /> },
    { name: "Project", link: "/projects", icon: <Info size={18} /> },
    { name: "Blog", link: "/blog", icon: <PenLine size={18} /> },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black`}
      >
        {/* Dotted Background */}
        <div
          className={cn(
            "fixed inset-0 -z-10",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)]",
            "pointer-events-none"
          )}
        />

        {/* Radial gradient overlay for soft edges */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-black opacity-80 mask-[radial-gradient(circle,_rgba(0,0,0,0)_70%,_black_100%)]"></div>

        {/* Navbar */}
        <FloatingNav navItems={navItems} />

        {/* Page content */}
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}
