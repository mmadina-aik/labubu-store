import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Labubu Atelier",
description: "Premium Labubu Collectibles & Designer Figures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`${outfit.variable} h-full scroll-smooth`}
>
      <body className="min-h-screen bg-rose-50 font-[var(--font-outfit)] text-gray-900">
  <CartProvider>
    <Navbar />
    {children}
  </CartProvider>
</body>
    </html>
  );
}