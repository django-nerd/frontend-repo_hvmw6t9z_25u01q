import { Search, ListTree, Bell, Heart, Shuffle } from "lucide-react";

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 sm:hidden border-t bg-white">
      <div className="grid grid-cols-5">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center h-14 min-h-[44px] text-xs text-gray-700 hover:bg-gray-50 active:bg-gray-100"
          >
            <item.icon className="w-5 h-5 mb-1" />
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

const NAV_ITEMS = [
  { label: "Search", href: "/search", icon: Search },
  { label: "Categories", href: "/category/all", icon: ListTree },
  { label: "Alerts", href: "/alerts", icon: Bell },
  { label: "Saved", href: "/saved", icon: Heart },
  { label: "Compare", href: "/compare/a,b", icon: Shuffle },
];
