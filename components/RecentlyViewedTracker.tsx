"use client";

import { useEffect } from "react";
import { Product } from "@/types/product";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";

type Props = {
  product: Product;
};

export default function RecentlyViewedTracker({ product }: Props) {
  const { addRecentlyViewed } = useRecentlyViewed();

  useEffect(() => {
    addRecentlyViewed(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return null;
}