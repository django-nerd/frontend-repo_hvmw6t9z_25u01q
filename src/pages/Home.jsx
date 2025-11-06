import HeroSpline from "../components/HeroSpline";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      <HeroSpline />

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="py-4 overflow-x-auto -mx-4 px-4">
          <div className="flex gap-2 w-max">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="px-3 h-9 min-h-[36px] inline-flex items-center rounded-full border bg-white text-sm">Category {i + 1}</span>
            ))}
          </div>
        </div>

        <div className="py-6">
          <SectionTitle title="Trending" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>

        <div className="py-6">
          <SectionTitle title="Recently Added" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>

        <div className="py-6">
          <SectionTitle title="Best Under ₹999" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
