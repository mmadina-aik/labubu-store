"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Product } from "@/types/product";

type RecentlyViewedContextType = {
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;
};

const RecentlyViewedContext = createContext<
  RecentlyViewedContextType | undefined
>(undefined);

export function RecentlyViewedProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("recentlyViewed");

    if (saved) {
      setRecentlyViewed(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "recentlyViewed",
      JSON.stringify(recentlyViewed)
    );
  }, [recentlyViewed]);

  const addRecentlyViewed = useCallback(
  (product: Product) => {
    setRecentlyViewed((current) => {
      const filtered = current.filter(
        (item) => item.id !== product.id
      );

      return [product, ...filtered].slice(0, 6);
    });
  },
  []
);

const value = useMemo(
  () => ({
    recentlyViewed,
    addRecentlyViewed,
  }),
  [recentlyViewed, addRecentlyViewed]
);

  return (
    <RecentlyViewedContext.Provider value={value}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext);

  if (!context) {
    throw new Error(
      "useRecentlyViewed must be used inside RecentlyViewedProvider"
    );
  }

  return context;
}