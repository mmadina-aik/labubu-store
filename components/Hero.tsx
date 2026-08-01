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
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/5 to-transparent" />

          {/* Text */}
          <div
  className="
    absolute
    left-10
    top-[45%]
    z-10
    max-w-[620px]
    -translate-y-1/2
    rounded-[48px]
    border
    border-white/10
    bg-white/5
    p-10
    backdrop-blur-md
    md:left-20
    md:p-12
  "
>
            <h1
  className="mb-6 text-6xl font-black leading-[0.95] tracking-tight text-white md:text-8xl"
  style={{
  textShadow: "0 8px 30px rgba(0,0,0,.35)",
}}
>
              {slide.title}
            </h1>

            <p
  className="mb-10 max-w-xl text-lg leading-8 text-white/95 md:text-xl"
  style={{
  textShadow: "0 3px 12px rgba(0,0,0,.28)",
}}
>
              {slide.subtitle}
            </p>

            <Link
  href="#products"
  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-rose-50"
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
            className={`rounded-full transition-all duration-500 ${
  current === index
    ? "h-3 w-10 bg-white"
    : "h-3 w-3 bg-white/50 hover:bg-white/80"
}`}
          />
        ))}
      </div>
    </section>
  );
}