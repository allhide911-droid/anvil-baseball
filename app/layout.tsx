import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANVIL BASEBALL ACADEMY | 本格野球スクール",
  description:
    "ANVIL BASEBALL ACADEMYは、バッティング・ピッチング・守備を科学的アプローチで指導する本格野球スクールです。少人数制・現役プロ指導で確かな技術を身につけましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
