import type { Metadata } from "next";
import { Inter, Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Ui/Navbar/Navbar";
import Footer from "./components/Ui/Footer/Footer";

// Inter font (for body text)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Montserrat font (for headings)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Lato font (for paragraphs or highlights)
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GlazenTrum NORD",
  description: "Your service provider for showers and glass partitions",
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/favicon.svg",
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
        className={`${inter.variable} ${montserrat.variable} ${lato.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
