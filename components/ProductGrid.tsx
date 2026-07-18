"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-pink-50 px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center text-4xl font-bold text-gray-800">
          Featured Products
        </h2>

        <p className="mb-8 text-center text-gray-600">
          Find your favorite Labubu collectible.
        </p>

        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder=" Search Labubu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl rounded-2xl border-2 border-pink-300 bg-white px-6 py-4 text-lg text-gray-800 shadow-lg transition-all duration-200 placeholder:text-gray-500 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 focus:outline-none"
          />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl bg-white py-16 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">
              No products found
            </h3>

            <p className="mt-3 text-gray-500">
              Try searching with another keyword.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}