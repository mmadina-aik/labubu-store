"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
      <Link
        href="/"
        className="text-2xl font-bold text-pink-600"
      >
        Labubu Store
      </Link>

      <div className="flex gap-8 font-medium text-gray-700">
        <Link href="/" className="hover:text-pink-600">
          Home
        </Link>

        <Link href="/#products" className="hover:text-pink-600">
          Shop
        </Link>

        <Link href="/cart" className="hover:text-pink-600">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}