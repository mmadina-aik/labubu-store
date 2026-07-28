"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/heroSlides";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

          {/* Text */}
          <div className="absolute left-10 top-1/2 z-10 max-w-xl -translate-y-1/2 md:left-20">
            <h1 className="mb-5 text-6xl font-bold leading-tight text-white md:text-8xl">
              {slide.title}
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-8 text-white/90 md:text-xl">
              {slide.subtitle}
            </p>

            <Link
  href="#products"
  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-rose-50"
>
  Explore Collection

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}