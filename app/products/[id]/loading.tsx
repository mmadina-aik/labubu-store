export default function LoadingProduct() {
  return (
    <main className="min-h-screen bg-rose-50 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-14 rounded-[40px] bg-white p-10 md:grid-cols-2">

        <div className="h-[520px] animate-pulse rounded-[32px] bg-rose-100" />

        <div>

          <div className="mb-6 h-12 w-80 animate-pulse rounded bg-rose-100" />

          <div className="mb-6 h-8 w-32 animate-pulse rounded bg-rose-100" />

          <div className="mb-10 h-32 animate-pulse rounded bg-rose-100" />

          <div className="h-14 w-52 animate-pulse rounded-2xl bg-rose-100" />

        </div>

      </div>
    </main>
  );
}