import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section className="px-8 py-16">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Featured Products
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}