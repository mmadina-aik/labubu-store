"use client";

import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-rose-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-10 text-5xl font-black text-gray-900">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-lg">

            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Your wishlist is empty ❤️
            </h2>

            <p className="mb-8 text-gray-500">
              Save your favorite Labubu collectibles here.
            </p>

            <Link
              href="/"
              className="rounded-2xl bg-rose-500 px-8 py-4 font-semibold text-white"
            >
              Explore Collection
            </Link>

          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {wishlist.map((product) => (

              <div
  key={product.id}
  className="
    group
    rounded-[36px]
    border
    border-rose-100
    bg-white
    p-6
    shadow-lg
    transition-all
    duration-500
    hover:-translate-y-3
    hover:shadow-2xl
  "
>

                <Link href={`/products/${product.id}`}>

                  <div className="relative mb-6 h-[360px] overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 to-white">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      unoptimized
                      className="
object-contain
p-3
transition-all
duration-700
group-hover:scale-110
group-hover:-rotate-2
"
                    />

                  </div>

                  <h2
  className="
    mb-3
    min-h-[64px]
    text-2xl
    font-black
    tracking-tight
    text-gray-900
    transition-colors
    group-hover:text-rose-500
  "
>
  {product.name}
</h2>

                </Link>

                <p className="mb-5 text-3xl font-black tracking-tight text-rose-500">
  ${product.price.toFixed(2)}
</p>

<div className="mb-6 flex gap-2">

  {product.isPopular && (
    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
      ⭐ Popular
    </span>
  )}

  {product.isLimited && (
    <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-600">
      💎 Limited
    </span>
  )}

</div>

<button
  onClick={() => toggleWishlist(product)}
  className="
    w-full
    rounded-2xl
    bg-gradient-to-r
    from-gray-900
    to-black
    py-3.5
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:from-red-500
    hover:to-rose-500
  "
>
  Remove
</button>

              </div>

            ))}

          </div>
        )}

      </div>
    </main>
  );
}