import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Ui/Navbar/Navbar";
import Footer from "./components/Ui/Footer/Footer";

// Inter font (for body text, paragraphs, etc.)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // add few useful weights for flexibility
});

// Montserrat font (for headings, hero titles, etc.)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"], // medium–bold range for headings
});

export const metadata: Metadata = {
  title: "GlazenTrum NORD",
  description: "Your service provider for showers and glass partitions",
  icons: {
    icon: "/images/favicon.svg", // Path to your favicon file in public folder
    shortcut: "/favicon.svg", // Optional, for old browsers
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Attach both font variables */}
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
