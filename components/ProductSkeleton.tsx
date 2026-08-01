export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-[36px] border border-rose-100 bg-white p-6 shadow-lg">
      <div className="mb-6 h-[360px] rounded-3xl bg-gradient-to-r from-rose-100 via-rose-50 to-rose-100"></div>

      <div className="mb-3 h-8 w-3/4 rounded bg-gradient-to-r from-rose-100 via-rose-50 to-rose-100"></div>

      <div className="mb-4 h-7 w-24 rounded bg-gradient-to-r from-rose-100 via-rose-50 to-rose-100"></div>

      <div className="mb-6 h-6 w-20 rounded-full bg-gradient-to-r from-rose-100 via-rose-50 to-rose-100"></div>

      <div className="h-12 rounded-2xl bg-gradient-to-r from-rose-100 via-rose-50 to-rose-100"></div>
    </div>
  );
}