"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600"
    >
      Add To Cart
    </button>
  );
}