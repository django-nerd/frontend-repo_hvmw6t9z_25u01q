import Breadcrumb from "../components/Breadcrumb";
import FilterSidebar from "../components/FilterSidebar";
import SortToolbar from "../components/SortToolbar";
import ProductCard from "../components/ProductCard";

export default function Category() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <Breadcrumb />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3">
          <FilterSidebar />
        </div>
        <div className="md:col-span-9">
          <SortToolbar />
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <button className="h-11 min-h-[44px] px-4 rounded-md border bg-white">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
