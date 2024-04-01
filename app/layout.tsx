import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbarc from "@/components/nav/Navbarc";
import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Advik Aggarwal",
  description: "Advik Aggarwal's portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#111111]">
        <div>
          <SmoothScrolling>{children}</SmoothScrolling>
        </div>
      </body>
    </html>
  );
}
