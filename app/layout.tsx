import "./globals.css";

// Font
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

// Components
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// SEO default metadata
export const metadata = {
  title: "Ernestine Villa — Luxury Villa in North Bali (Lovina)",
  description:
    "A secluded luxury two-bedroom villa near Lovina Beach, offering serene mornings, private comfort, and curated dolphin-watching experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-soft text-dark font-inter">
        <Header />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
