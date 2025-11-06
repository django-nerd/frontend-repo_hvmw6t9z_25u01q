export default function ProductCard() {
  return (
    <div className="group rounded-lg border bg-white overflow-hidden">
      <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500 text-sm">[IMAGE PLACEHOLDER]</div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="h-5 bg-gray-100 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-100 rounded w-1/3 mb-4" />
        <button className="w-full h-11 min-h-[44px] rounded-md border bg-white hover:bg-gray-50 active:bg-gray-100 text-sm font-medium">View on Amazon</button>
      </div>
    </div>
  );
}
