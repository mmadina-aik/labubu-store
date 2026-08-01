import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import { WishlistProvider } from "@/context/WishlistContext";
import { Toaster } from "react-hot-toast";
import { RecentlyViewedProvider } from "@/context/RecentlyViewedContext";


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
  <WishlistProvider>
    <RecentlyViewedProvider>

      <Navbar />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2500,
          style: {
            background: "#fff",
            color: "#111827",
            borderRadius: "18px",
            padding: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          },
        }}
      />

      {children}

    </RecentlyViewedProvider>
  </WishlistProvider>
</CartProvider>
</body>
    </html>
  );
}