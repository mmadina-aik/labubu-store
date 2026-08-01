export default function Loading() {
  return (
    <main className="min-h-screen bg-rose-50 px-8 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 h-12 w-72 animate-pulse rounded-xl bg-rose-100" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-[36px] bg-white p-6 shadow-lg"
            >
              <div className="mb-6 h-72 rounded-3xl bg-rose-100" />

              <div className="mb-4 h-8 w-3/4 rounded bg-rose-100" />

              <div className="mb-4 h-6 w-24 rounded bg-rose-100" />

              <div className="h-12 rounded-2xl bg-rose-100" />
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}