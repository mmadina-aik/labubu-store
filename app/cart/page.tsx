"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      
      <main className="min-h-screen bg-pink-50 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-800">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-md">
              <p className="mb-6 text-xl text-gray-600">
                Your cart is empty.
              </p>

              <Link
                href="/"
                className="inline-block rounded-xl bg-pink-500 px-6 py-3 text-white hover:bg-pink-600"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-6 rounded-2xl bg-white p-6 shadow-md sm:flex-row"
                >
                  <div className="relative h-40 w-40 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="mt-2 font-bold text-pink-600">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="rounded-lg bg-gray-200 px-3 py-1 text-xl font-bold text-gray-800 hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="min-w-6 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="rounded-lg bg-gray-200 px-3 py-1 text-xl font-bold text-gray-800 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="rounded-2xl bg-white p-8 text-right shadow-md">
                <p className="mb-5 text-2xl font-bold text-gray-800">
                  Total: ${totalPrice.toFixed(2)}
                </p>

                <button className="rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white hover:bg-pink-600">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}