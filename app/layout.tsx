import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MI2B PBL Projects | Politeknik Negeri Padang",
  description: "Showcase landing page untuk Project Based Learning kelas MI2B - Teknik Informatika Politeknik Negeri Padang",
  keywords: ["PBL", "MI2B", "Politeknik Negeri Padang", "Project Based Learning", "Web Development"],
  authors: [{ name: "MI2B Class" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
