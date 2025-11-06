export default function Search() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="relative">
        <input className="w-full h-12 min-h-[44px] px-4 rounded-md border bg-white" placeholder="[SEARCH INPUT UI ONLY]" />
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-white h-40 flex items-center justify-center text-gray-500 text-sm">[RESULT CARD PLACEHOLDER]</div>
        ))}
      </div>
    </div>
  );
}
