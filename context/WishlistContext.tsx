"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Product } from "@/types/product";
import toast from "react-hot-toast";

type WishlistContextType = {
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isFavourite: (id: number) => boolean;
};

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");

    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  function toggleWishlist(product: Product) {
  const exists = wishlist.some(
    (item) => item.id === product.id
  );

  if (exists) {
    toast("Removed from Wishlist 💔");
  } else {
    toast.success(
      `${product.name} added to Wishlist ❤️`
    );
  }

  setWishlist((current) => {
    if (exists) {
      return current.filter(
        (item) => item.id !== product.id
      );
    }

    return [...current, product];
  });
}

  function isFavourite(id: number) {
    return wishlist.some(
      (item) => item.id === id
    );
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isFavourite,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}