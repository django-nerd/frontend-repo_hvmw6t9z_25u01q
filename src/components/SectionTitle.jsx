export default function SectionTitle({ title, subtitle, action }) {
  return (
    <div className="flex items-end justify-between gap-3 mb-3 sm:mb-4">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
