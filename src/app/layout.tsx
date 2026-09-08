import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

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
  title: "Solvexa | Ultra-Luxury Creative Engineering",
  description: "Digital experiences built to move businesses forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${syne.variable} bg-background font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-x-hidden`}
      >
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-secondary-container/20 blur-[140px] rounded-full"></div>
          <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-primary-container/10 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-surface-container-highest/30 blur-[180px] rounded-full"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
