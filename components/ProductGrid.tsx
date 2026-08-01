"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import ProductSkeleton from "./ProductSkeleton";

export default function ProductGrid() {
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sort, setSort] = useState("default");
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 800);

  return () => clearTimeout(timer);
}, []);

  const filteredProducts = [...products]
  .filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )
  .filter((product) => {
    if (category === "All") return true;
    if (category === "Popular") return product.isPopular;
    if (category === "Limited") return product.isLimited;
    return product.category === category;
  })
  .sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
   <section
  id="products"
  className="bg-pink-50 px-8 py-20"
>
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
<div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">

  <div className="flex flex-wrap gap-3">
    {["All", "Angel", "Monster", "Popular", "Limited"].map((item) => (
      <button
        key={item}
        onClick={() => setCategory(item)}
        className={`rounded-full px-5 py-2 font-medium transition ${
          category === item
            ? "bg-pink-500 text-white"
            : "bg-white text-gray-700 hover:bg-pink-100"
        }`}
      >
        {item}
      </button>
    ))}
  </div>

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className="rounded-xl border border-pink-300 bg-white px-4 py-2 text-gray-700 shadow"
  >
    <option value="default">Sort By</option>
    <option value="low">Price: Low → High</option>
    <option value="high">Price: High → Low</option>
  </select>

</div>
        {loading ? (

  <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {Array.from({ length: 6 }).map((_, index) => (
      <ProductSkeleton key={index} />
    ))}
  </div>

) : filteredProducts.length === 0 ? (

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