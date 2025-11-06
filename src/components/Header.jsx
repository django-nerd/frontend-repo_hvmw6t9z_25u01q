import { Search, ListTree, Bell, Heart, Shuffle } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [q, setQ] = useState("");
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center gap-3 py-3">
          <button
            className="inline-flex items-center gap-2 px-3 h-11 rounded-md border bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors"
            aria-label="Open categories"
          >
            <ListTree className="w-5 h-5" />
            <span className="font-medium hidden xs:inline">Categories</span>
          </button>

          <a href="/" className="ml-1 text-xl font-semibold tracking-tight">
            DealGrid
          </a>

          <div className="flex-1" />

          <form
            role="search"
            className="flex-1 max-w-lg hidden sm:flex items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-md border bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/40"
                placeholder="Search products, brands, categories"
              />
            </div>
          </form>

          <nav className="ml-2 hidden sm:flex items-center gap-2">
            <IconButton label="Alerts">
              <Bell className="w-5 h-5" />
            </IconButton>
            <IconButton label="Saved">
              <Heart className="w-5 h-5" />
            </IconButton>
            <IconButton label="Compare">
              <Shuffle className="w-5 h-5" />
            </IconButton>
          </nav>
        </div>

        <div className="sm:hidden pb-3">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-md border bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/40"
                placeholder="Search products, brands, categories"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

function IconButton({ children, label }) {
  return (
    <button
      className="inline-flex items-center justify-center h-11 min-h-[44px] w-11 rounded-md border bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors"
      aria-label={label}
      title={label}
      type="button"
    >
      {children}
    </button>
  );
}
