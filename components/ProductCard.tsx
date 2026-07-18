"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const isPopular = product.isPopular;
  const isLimited = product.isLimited;

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Badges */}
      {isPopular && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-gray-900 shadow">
          ⭐ Popular
        </span>
      )}

      {isLimited && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-pink-500 px-3 py-1 text-xs font-bold text-white shadow">
          💎 Limited
        </span>
      )}

      <Link href={`/products/${product.id}`}>
        <div className="relative mb-4 h-96 cursor-pointer overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors hover:text-pink-600">
          {product.name}
        </h3>
      </Link>

      <p className="mb-2 text-2xl font-bold text-pink-600">
        ${product.price.toFixed(2)}
      </p>

      <p className="mb-5 text-sm font-medium text-gray-500">
        Category: {product.category}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="w-full rounded-xl bg-pink-500 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-pink-600 active:scale-95"
      >
        Add To Cart
      </button>
    </div>
  );
}