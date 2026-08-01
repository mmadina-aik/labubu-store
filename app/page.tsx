import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import RecentlyViewed from "@/components/RecentlyViewed";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Hero />

<ProductGrid />

<RecentlyViewed />

<Footer />
    </main>
  );
}