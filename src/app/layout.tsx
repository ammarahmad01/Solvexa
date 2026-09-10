import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import SiteLayoutWrapper from "../components/SiteLayoutWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Solvexa | Where Creativity Meets Innovation — We Grow Your Business Online",
  description: "Solvexa is a full-service digital agency delivering web & mobile app development, branding, video production, and growth marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${syne.variable} bg-background font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-x-hidden`}
      >
        <SiteLayoutWrapper>{children}</SiteLayoutWrapper>
      </body>
    </html>
  );
}
