import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import RecentlyViewedTracker from "@/components/RecentlyViewedTracker";

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
      <RecentlyViewedTracker product={product} />
      <div
  className="
    mx-auto
    grid
    max-w-6xl
    gap-14
    rounded-[40px]
    border
    border-rose-100
    bg-white/90
    p-10
    shadow-[0_30px_80px_rgba(0,0,0,0.08)]
    backdrop-blur-sm
    md:grid-cols-2
  "
>

        <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-gradient-to-br from-rose-50 via-white to-rose-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="
object-contain
p-6
transition-transform
duration-700
hover:scale-105
"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="mb-5 text-5xl font-black tracking-tight text-gray-900">
            {product.name}
          </h1>
           <div className="mb-4 flex gap-3">

  {product.isPopular && (
    <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
      ⭐ Popular
    </span>
  )}

  {product.isLimited && (
    <span className="rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-600">
      💎 Limited
    </span>
  )}

</div>
          <p className="mb-6 text-4xl font-black text-rose-500">
            ${product.price}
          </p>

          <p className="mb-10 max-w-lg leading-8 text-gray-600">
            Discover this unique Labubu collectible figure. A perfect addition
            to your collection or a cute gift for Labubu fans.
          </p>

          <AddToCartButton product={product} />
        </div>

      </div>
    </main>
  );
}