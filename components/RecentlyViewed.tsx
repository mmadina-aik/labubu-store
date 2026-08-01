"use client";

import Link from "next/link";
import Image from "next/image";

import { useRecentlyViewed } from "@/context/RecentlyViewedContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RecentlyViewed() {
  const { recentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) return null;

  return (
    <section className="overflow-hidden bg-rose-50 px-8 py-20">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-3 text-4xl font-black text-gray-900">
          Recently Viewed
        </h2>

        <p className="mb-10 text-gray-500">
          Continue exploring your recently viewed collectibles.
        </p>

        <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={30}
  slidesPerGroup={1}
  centeredSlides={false}
  breakpoints={{
    320: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }}
  className="pb-14"
>

          {recentlyViewed.map((product) => (
  <SwiperSlide key={product.id}>

            <Link
  href={`/products/${product.id}`}
  className="
    group
    block
    overflow-hidden
    rounded-[32px]
    border
    border-rose-100
    bg-gradient-to-b
    from-white
    to-rose-50
    p-5
    shadow-lg
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-2xl
    hover:ring-2
    hover:ring-rose-200
  "
>

              <div className="relative mb-5 h-56 overflow-hidden rounded-2xl bg-rose-50">

                <Image
  src={product.image}
  alt={product.name}
  fill
  unoptimized
  className="
    object-contain
    p-4
    transition-all
    duration-700
    group-hover:scale-110
    group-hover:-rotate-2
  "
/>

              </div>

              <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
                {product.name}
              </h3>
<div className="mb-3 flex gap-2">

  {product.isPopular && (
    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
      ⭐ Popular
    </span>
  )}

  {product.isLimited && (
    <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-600">
      💎 Limited
    </span>
  )}

</div>
              <p className="text-2xl font-black text-rose-500">
                ${product.price.toFixed(2)}
              </p>

            </Link>
            </SwiperSlide>

                    ))}
        </Swiper>

      </div>
    </section>
  );
}