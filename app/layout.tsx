import type { Metadata } from "next";
import {  Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "300"],
  
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets: ["latin"],
  weight: "600"
});

export const metadata: Metadata = {
  title: {
    default: "Franklin Onyenechere | Frontend & Full Stack Developer",
    template: "%s | Franklin Onyenechere",
  },
  description:
    "Frontend and Full Stack Developer specializing in Next.js, React, Tailwind CSS, and scalable web applications. View projects, skills, and contact Franklin.",
  keywords: [
    "Franklin Onyenechere",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "Nigeria Developer",
  ],
  authors: [{ name: "Franklin Onyenechere" }],
  creator: "Franklin Onyenechere",
  metadataBase: new URL("https://yourdomain.com"), // update when live
  openGraph: {
    title: "Franklin Onyenechere | Frontend & Full Stack Developer",
    description:
      "Professional portfolio showcasing web projects, skills, and experience.",
    url: "https://yourdomain.com",
    siteName: "Franklin.dev",
    images: [
      {
        url: "/og-image.png", // optional but recommended
        width: 1200,
        height: 630,
        alt: "Franklin Onyenechere Portfolio",
      },
    ],
    type: "website",
  },
    icons: {
    icon: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franklin Onyenechere | Frontend & Full Stack Developer",
    description:
      "Frontend and Full Stack Developer portfolio built with Next.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
