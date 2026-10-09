import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolio } from "@/content/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { name, role, tagline } = portfolio.profile;

export const metadata: Metadata = {
  title: `${name} — ${role}`,
  description: tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden font-sans">
        <div
          aria-hidden
          className="bg-grid grid-patches pointer-events-none absolute inset-0 -z-10"
        />
        {children}
      </body>
    </html>
  );
}
