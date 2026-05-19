import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lion House — Llandudno, Cape Town",
  description:
    "A private contemporary villa above Llandudno Beach, Cape Town. Direct booking, no platform commissions. Stays of one week in December, or one to six months May through November.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {/*
          No-JS fallback for FadeInOnScroll: without JavaScript the scroll
          observer never runs, so [data-fade] wrappers would stay at
          opacity-0. This forces them visible when scripting is disabled.
        */}
        <noscript>
          <style>{`[data-fade]{opacity:1!important;translate:none!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
