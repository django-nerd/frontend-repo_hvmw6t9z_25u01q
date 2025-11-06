import GalleryPlaceholder from "../components/GalleryPlaceholder";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-7">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">[PRODUCT TITLE PLACEHOLDER]</h1>
          <p className="text-gray-600 mt-1">[SHORT DESCRIPTION PLACEHOLDER]</p>

          <div className="mt-4">
            <GalleryPlaceholder />
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="p-4 border rounded-lg bg-white">
            <div className="h-6 bg-gray-100 rounded w-1/3" />
            <div className="h-4 bg-gray-100 rounded w-1/4 mt-2" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="h-11 min-h-[44px] rounded-md border bg-white">View on Amazon</button>
              <button className="h-11 min-h-[44px] rounded-md border bg-white">Add to Compare</button>
            </div>
          </div>

          <div className="mt-4 p-4 border rounded-lg bg-white">
            <div className="font-medium">Specifications</div>
            <div className="text-gray-500 text-sm mt-2">[SPECIFICATIONS TABLE PLACEHOLDER]</div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">Similar Products</h2>
          <div className="text-sm text-gray-500">[CAROUSEL CONTROLS PLACEHOLDER]</div>
        </div>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
