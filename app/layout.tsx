import type { Metadata } from "next";
import { Outfit, Forum } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Project SoWall - Interior Design & Branding",
  description: "Premium Interior Design and Branding Solutions for Medical and Commercial Spaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${forum.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
