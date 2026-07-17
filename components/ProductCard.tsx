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

  return (
    <div className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <div className="relative mb-4 h-96 cursor-pointer overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-contain transition duration-300 hover:scale-105"
          />
        </div>

        <h3 className="mb-2 text-xl font-semibold text-gray-800 hover:text-pink-600">
          {product.name}
        </h3>
      </Link>

      <p className="mb-4 font-bold text-pink-600">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="w-full rounded-xl bg-pink-500 py-2 text-white transition hover:bg-pink-600"
      >
        Add To Cart
      </button>
    </div>
  );
}