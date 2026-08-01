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

export type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
  const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  function addToCart(product: Product) {
  const exists = cart.find((item) => item.id === product.id);

  if (exists) {
    toast.success(`${product.name} quantity updated 🛒`);
  } else {
    toast.success(`${product.name} added to cart 🛍️`);
  }

  setCart((currentCart) => {
    const existing = currentCart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      return currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...currentCart, { ...product, quantity: 1 }];
  });
}

  function increaseQuantity(id: number) {
  const product = cart.find((item) => item.id === id);

  if (product) {
    toast.success(`${product.name} quantity increased ➕`);
  }

  setCart((currentCart) =>
    currentCart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
}

  function decreaseQuantity(id: number) {
  const product = cart.find((item) => item.id === id);

  if (product) {
    toast(`${product.name} quantity decreased ➖`);
  }

  setCart((currentCart) =>
    currentCart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
}

  function removeFromCart(id: number) {
  const product = cart.find((item) => item.id === id);

  if (product) {
    toast.error(`${product.name} removed from cart 🗑️`);
  }

  setCart((currentCart) =>
    currentCart.filter((item) => item.id !== id)
  );
}

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}