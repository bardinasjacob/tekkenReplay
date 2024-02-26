import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/inter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tekken8Replay",
  description: "Created by Jacob Bardinas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
