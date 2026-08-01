"use client";

import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useWishlist } from "@/context/WishlistContext";
import SearchModal from "@/components/SearchModal"; 

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const wishlistCount = wishlist.length;
  const darkNavbar = !isHome || scrolled;

  return (
  <>
    <header
  className={`sticky top-0 z-50 transition-all duration-500 ${
    isHome
      ? scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-rose-100"
        : "bg-transparent"
      : "bg-white shadow-md border-b border-rose-100"
  }`}
>
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="leading-none">
            <h1
  className={`text-2xl font-black tracking-tight transition ${
    darkNavbar
      ? "text-gray-900 group-hover:text-rose-500"
      : "text-white group-hover:text-white/80"
  }`}
>
              LABUBU
            </h1>
            <p
  className={`text-xs uppercase tracking-[0.35em] ${
    darkNavbar
      ? "text-gray-400"
      : "text-white/70"
  }`}
>
              Atelier
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div
  className={`hidden items-center gap-10 text-sm font-medium md:flex ${
    darkNavbar
      ? "text-gray-600"
      : "text-white"
  }`}
> 
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
          <button
  onClick={() => setSearchOpen(true)}
  className="rounded-full p-2 transition hover:bg-white/20"
>
            <Search
  size={22}
  className={darkNavbar ? "text-gray-700" : "text-white"}
/>
          </button>

          <Link
  href="/wishlist"
  className="relative rounded-full p-2 transition hover:bg-white/20"
>
  <Heart
    size={22}
    className={darkNavbar ? "text-gray-700" : "text-white"}
  />

  {wishlistCount > 0 && (
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
      {wishlistCount}
    </span>
  )}
</Link>
         
          <Link
            href="/cart"
            className="relative rounded-full p-2 transition hover:bg-white/20"
          >
            <ShoppingBag
  size={22}
  className={darkNavbar ? "text-gray-700" : "text-white"}
/>

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-full p-2 transition hover:bg-white/20 md:hidden"
>
  {menuOpen ? (
    <X
      size={24}
      className={darkNavbar ? "text-gray-700" : "text-white"}
    />
  ) : (
    <Menu
      size={24}
      className={darkNavbar ? "text-gray-700" : "text-white"}
    />
  )}
</button>

        </div>
      </nav>
{menuOpen && (
  <div className="border-t border-rose-100 bg-white shadow-md md:hidden">
    <div className="flex flex-col p-6">

      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="py-3 text-gray-700 hover:text-rose-500"
      >
        Home
      </Link>

      <Link
        href="/#products"
        onClick={() => setMenuOpen(false)}
        className="py-3 text-gray-700 hover:text-rose-500"
      >
        Collection
      </Link>

      <Link
        href="/wishlist"
        onClick={() => setMenuOpen(false)}
        className="py-3 text-gray-700 hover:text-rose-500"
      >
        Wishlist
      </Link>

      <Link
        href="/cart"
        onClick={() => setMenuOpen(false)}
        className="py-3 text-gray-700 hover:text-rose-500"
      >
        Cart
      </Link>

    </div>
  </div>
)}

    </header>

<SearchModal
  open={searchOpen}
  onClose={() => setSearchOpen(false)}
/>
</>
);
}