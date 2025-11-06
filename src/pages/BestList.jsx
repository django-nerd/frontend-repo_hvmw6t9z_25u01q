export default function BestList() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">[BEST LIST TITLE PLACEHOLDER]</h1>
      <p className="text-gray-600 mt-1">[INTRO COPY PLACEHOLDER]</p>

      <div className="mt-6 p-4 border rounded-lg bg-white">
        <div className="font-medium">Comparison Table</div>
        <div className="text-gray-500 text-sm mt-2">[COMPARISON TABLE PLACEHOLDER]</div>
      </div>

      <div className="mt-6">
        <div className="text-lg font-semibold">Featured Picks</div>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-white h-40 flex items-center justify-center text-gray-500 text-sm">[FEATURED CARD PLACEHOLDER]</div>
          ))}
        </div>
      </div>
    </div>
  );
}
