export default function Breadcrumb({ items = ["Home", "Category", "Subcategory"] }) {
  return (
    <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1">
            <span className="hover:text-gray-900">{item}</span>
            {idx < items.length - 1 && <span className="text-gray-400">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
