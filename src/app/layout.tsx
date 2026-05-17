import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amr Mahran | Full-Stack Developer",
  description:
    "Full-Stack Developer crafting modern web applications with Next.js, React, and TypeScript. Building exceptional digital experiences with premium frontend engineering.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Portfolio",
  ],
  openGraph: {
    title: "Amr Mahran | Full-Stack Developer",
    description:
      "Building modern web applications with premium frontend craftsmanship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased overflow-x-hidden`}>
      <body className="min-h-screen bg-[#050510] text-slate-200">
        <div className="relative overflow-hidden flex flex-col min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
