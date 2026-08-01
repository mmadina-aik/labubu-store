"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({
  open,
  onClose,
}: SearchModalProps) {

  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-start justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-24 w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
      >
        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-black text-gray-900">
            Search
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-rose-100"
          >
            <X size={24} className="text-gray-700" />
          </button>

        </div>

        <input
          autoFocus
          value={query}
onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search Labubu..."
          className="
w-full
rounded-2xl
border
border-rose-200
px-6
py-4
text-lg
text-gray-900
placeholder:text-gray-400
outline-none
transition
focus:border-rose-500
"
        />

      <div className="mt-6 max-h-96 overflow-y-auto">

  {query !== "" &&
    filteredProducts.map((product) => (

      <Link
        key={product.id}
        href={`/products/${product.id}`}
        onClick={onClose}
        className="mb-2 flex items-center gap-4 rounded-2xl p-3 transition hover:bg-rose-50"
      >

        <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-rose-50">

          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-contain p-2"
          />

        </div>

        <div className="flex-1">

          <h3 className="font-bold text-gray-900">
            {product.name}
          </h3>

          <p className="mt-1 font-semibold text-rose-500">
            ${product.price.toFixed(2)}
          </p>

        </div>

      </Link>

    ))}

  {query !== "" && filteredProducts.length === 0 && (

    <div className="py-10 text-center text-gray-500">
      No products found.
    </div>

  )}

</div>
       </div>
    </div>
  );
}