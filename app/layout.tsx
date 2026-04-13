import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS_NAME, TAGLINE } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} — Designer Mirrors & Glass`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: `${TAGLINE}. Premium designer mirrors, glass partitions, and bespoke glass installations for homes, offices, hotels and resorts.`,
  keywords: ["designer mirrors", "glass partitions", "LED mirrors", "luxury mirrors", "glass house", "Ulhasnagar", "Mumbai"],
  openGraph: {
    siteName: BUSINESS_NAME,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
