import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-rose-50 px-6">
      <div className="text-center">

        <h1 className="mb-4 text-8xl font-black text-rose-500">
          404
        </h1>

        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Lost in the Labubu World 🐰
        </h2>

        <p className="mb-10 text-lg text-gray-500">
          The collectible you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="
            rounded-2xl
            bg-rose-500
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-rose-600
          "
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}