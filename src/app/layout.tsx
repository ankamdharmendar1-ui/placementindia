import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlacementIndia.dev | Placements & Internships",
  description: "Complete platform for placement opportunities and internships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-primary/20 selection:text-primary`}>
        <Navbar />
        <main className="min-h-screen pt-24 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
