import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "You&Me - Curated Date Night Experiences",
  description: "Not just dinner. Real experiences, real connection. Curated date nights for couples who want more than the same Italian place again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${plusJakarta.variable} ${dmMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
