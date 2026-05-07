import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { jetbrains_mono } from "@/app/ui/fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${jetbrains_mono.className} min-h-full flex flex-col selection:bg-accent-d3 selection:text-black selection:font-extrabold`}>{children}</body>
    </html>
  );
}
