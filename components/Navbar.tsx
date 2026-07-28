"use client";

import Link from "next/link";
import { ShoppingBag, Heart, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-rose-200/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="leading-none">
            <h1 className="text-2xl font-black tracking-tight text-gray-900 transition group-hover:text-rose-500">
              LABUBU
            </h1>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
              Atelier
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-10 text-sm font-medium text-gray-600 md:flex">
          <Link
            href="/"
            className="transition hover:text-rose-500"
          >
            Home
          </Link>

          <Link
            href="/#products"
            className="transition hover:text-rose-500"
          >
            Collection
          </Link>

          <Link
            href="/cart"
            className="transition hover:text-rose-500"
          >
            Cart
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 transition hover:bg-rose-100">
            <Search size={20} />
          </button>

          <button className="rounded-full p-2 transition hover:bg-rose-100">
            <Heart size={20} />
          </button>

          <Link
            href="/cart"
            className="relative rounded-full p-2 transition hover:bg-rose-100"
          >
            <ShoppingBag size={20} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}