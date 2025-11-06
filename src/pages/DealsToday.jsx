import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";

export default function DealsToday() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <SectionTitle title="Today's Top Deals" subtitle="[SUBTITLE PLACEHOLDER]" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {Array.from({ length: 18 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
}
