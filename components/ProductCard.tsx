"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isFavourite } = useWishlist();

  const isPopular = product.isPopular;
  const isLimited = product.isLimited;

  return (
    <div
  className="
    group
    relative
    overflow-hidden
    rounded-[36px]
    border
    border-rose-100
    bg-white/90
    p-6
    shadow-lg
    backdrop-blur-sm
    transition-all
    duration-500
    hover:-translate-y-3
    hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
    hover:ring-2
hover:ring-rose-200
  ">

      {/* Badges */}
      {isPopular && (
  <span
    className="
      absolute
      left-3
      top-3
      z-10
      rounded-full
      bg-yellow-400
      px-2.5
      py-1
      text-[10px]
      font-bold
      text-gray-900
      shadow
      sm:left-4
      sm:top-4
      sm:px-3
      sm:text-xs
    "
  >
    ⭐ Popular
  </span>
)}

      {isLimited && (
  <span
    className="
      absolute
      right-3
      top-3
      z-10
      rounded-full
      bg-pink-500
      px-2.5
      py-1
      text-[10px]
      font-bold
      text-white
      shadow
      sm:right-4
      sm:top-4
      sm:px-3
      sm:text-xs
    "
  >
    💎 Limited
  </span>
)}

      <div className="relative mb-4 h-48 overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 to-white sm:h-64 lg:mb-6 lg:h-[360px]">

  <button
    onClick={(e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleWishlist(product);
}}
    className="
  absolute
  right-3
  top-3
  z-30
  flex
  h-9
  w-9
  items-center
  justify-center
  rounded-full
  bg-white/90
  shadow-lg
  backdrop-blur
  transition-all
  duration-300
  hover:scale-110
  hover:bg-rose-500
  hover:text-white
  sm:right-4
  sm:top-4
  sm:h-11
  sm:w-11
"
  >
    <Heart
  className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors ${
    isFavourite(product.id)
      ? "fill-rose-500 text-rose-500"
      : "text-gray-700"
  }`}
/>
  </button>

  <Link href={`/products/${product.id}`}>
    <Image
      src={product.image}
      alt={product.name}
      fill
      unoptimized
      className="
object-contain
p-3
sm:p-4
transition-all
duration-700
ease-out
group-hover:scale-105
"
    />
  </Link>

</div>
<h3
  className="
    mb-2
    line-clamp-2
    text-lg
    font-bold
    text-gray-900
    sm:text-xl
  "
>
  {product.name}
</h3>

<p
  className="
    mb-3
    text-2xl
    font-black
    tracking-tight
    text-rose-500
    sm:mb-4
    sm:text-3xl
  "
>
  ${product.price.toFixed(2)}
</p>

<div className="mb-5">
  <span
  className="
    rounded-full
    bg-rose-100
    px-2.5
    py-1
    text-[10px]
    font-semibold
    uppercase
    tracking-wider
    text-rose-600
    sm:px-3
    sm:text-xs
  "
>
  {product.category}
</span>
</div>

<button
  onClick={() => addToCart(product)}
  className="
    w-full
    rounded-2xl
    bg-gradient-to-r
    from-rose-500
    to-pink-500
    py-2.5
    text-sm
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-xl
    active:scale-95
    sm:py-3.5
    sm:text-base
  "
>
        <div className="flex items-center justify-center gap-2">
  <span className="text-lg">🛍️</span>
  <span>Add To Cart</span>
</div>
      </button>
    </div>
  );
}