import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2">

        <div className="relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            {product.name}
          </h1>

          <p className="mb-6 text-3xl font-bold text-pink-600">
            ${product.price}
          </p>

          <p className="mb-8 leading-7 text-gray-600">
            Discover this unique Labubu collectible figure. A perfect addition
            to your collection or a cute gift for Labubu fans.
          </p>

          <AddToCartButton product={product} />
        </div>

      </div>
    </main>
  );
}