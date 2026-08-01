"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

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
              <div className="mb-6 text-7xl">
  🛍️
</div>

<p className="mb-6 text-xl font-medium text-gray-600">
  Your cart is empty.
</p>

              <Link
                href="/"
                className="
inline-block
rounded-xl
bg-pink-500
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:scale-105
hover:bg-pink-600
"
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

                  <div className="flex items-center gap-2 rounded-xl bg-gray-100 p-2">
                    <button
  disabled={item.quantity === 1}
  onClick={() => decreaseQuantity(item.id)}
  className="
    rounded-lg
    bg-gray-200
    px-3
    py-1
    text-xl
    font-bold
    text-gray-800
    hover:bg-gray-300
    disabled:cursor-not-allowed
    disabled:opacity-40
  "
>
  −
</button>

                    <span
  className="
    flex
    h-10
    min-w-[40px]
    items-center
    justify-center
    rounded-lg
    bg-rose-50
    text-lg
    font-bold
    text-gray-900
  "
>
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
                <p className="mb-2 text-sm uppercase tracking-widest text-gray-400">
  Order Total
</p>

<p className="mb-6 text-4xl font-black text-rose-500">
  ${totalPrice.toFixed(2)}
</p>

                <button
  onClick={() =>
    toast.success("🚀 Demo checkout coming soon!")
  }
  className="rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600 hover:scale-105"
>
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