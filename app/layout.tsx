import type { Metadata } from "next";
import { Abel, Inter, Lato, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import '@fontsource/inter';


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
      <body>{children}</body>
    </html>
  );
}
