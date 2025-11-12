import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Happy Anniversary, Rose 💜",
  description: "Two years of love, laughter, and endless memories. Our journey together.",
  keywords: "anniversary, love, timeline, memories, rose",
  authors: [{ name: "Made with love" }],
  openGraph: {
    title: "Happy Anniversary, Rose",
    description: "Our beautiful journey together",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}