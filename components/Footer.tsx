"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
import toast from "react-hot-toast";

export default function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-14 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-900">
              LABUBU
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-400">
              Atelier
            </p>

            <p className="mt-6 leading-7 text-gray-500">
              Premium collectible figures inspired by travel,
              adventure and unforgettable moments around the world.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:text-white"
              >
                <FaPinterest size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:text-white"
              >
                <FaTiktok size={20} />
              </a>

            </div>
          </div>

          {/* Collection */}
          <div>
            <h3 className="mb-5 font-semibold text-gray-900">
              Collection
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/#products"
                  className="text-gray-500 transition hover:text-rose-500"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition hover:text-rose-500"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="text-gray-500 transition hover:text-rose-500"
                >
                  Shopping Cart
                </Link>
              </li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 font-semibold text-gray-900">
              Support
            </h3>

            <ul className="space-y-4 text-gray-500">

              <li className="cursor-pointer transition hover:text-rose-500">
                Shipping
              </li>

              <li className="cursor-pointer transition hover:text-rose-500">
                Returns
              </li>

              <li className="cursor-pointer transition hover:text-rose-500">
                FAQ
              </li>

              <li className="cursor-pointer transition hover:text-rose-500">
                contact@labubuatelier.com
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>

            <h3 className="mb-5 font-semibold text-gray-900">
              Stay Updated
            </h3>

            <p className="mb-5 text-gray-500">
              Receive exclusive Labubu releases and travel-inspired collections.
            </p>

            <div className="flex overflow-hidden rounded-full border border-rose-200 bg-white shadow-md">

              <input
  id="newsletter-email"
  name="newsletter-email"
  type="email"
  placeholder="Your email"
  className="
    flex-1
    bg-transparent
    px-5
    py-3
    text-gray-800
    placeholder:text-gray-400
    outline-none
  "
/>

              <button
  onClick={() =>
    toast.success("Thanks for subscribing! 🎉")
  }
  className="bg-rose-500 px-5 text-white transition hover:bg-rose-600"
>
  <FiArrowUpRight size={20} />
</button>

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-rose-100 pt-8 text-sm text-gray-400 md:flex-row">

          <p>© 2026 LABUBU Atelier. All rights reserved.</p>

<button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="
    rounded-full
    bg-rose-500
    p-3
    text-white
    transition
    hover:scale-110
  "
>
  ↑
</button>

          <div className="flex gap-6">

            <Link href="#">
  Privacy
</Link>

            <button className="transition hover:text-rose-500">
              Terms
            </button>

            <button className="transition hover:text-rose-500">
              Cookies
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}