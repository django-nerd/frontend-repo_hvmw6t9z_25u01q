export default function Compare() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Compare Products</h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border bg-white p-4">
          <div className="text-gray-500 text-sm">[LEFT COLUMN COMPARISON PLACEHOLDER]</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="text-gray-500 text-sm">[RIGHT COLUMN COMPARISON PLACEHOLDER]</div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-white p-4">
        <div className="text-gray-500 text-sm">[HIGHLIGHT DIFFERENCES PLACEHOLDER]</div>
      </div>
    </div>
  );
}
