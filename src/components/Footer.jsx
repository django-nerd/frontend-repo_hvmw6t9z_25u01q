export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 text-sm text-gray-600">
          <div className="space-y-2">
            <div className="font-semibold text-gray-900">Company</div>
            <a className="block hover:text-gray-900" href="/about">About</a>
            <a className="block hover:text-gray-900" href="/contact">Contact</a>
            <a className="block hover:text-gray-900" href="/affiliate-disclosure">Affiliate Disclosure</a>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-gray-900">Legal</div>
            <a className="block hover:text-gray-900" href="/privacy">Privacy Policy</a>
            <a className="block hover:text-gray-900" href="/terms">Terms</a>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-gray-900">Explore</div>
            <a className="block hover:text-gray-900" href="/deals/today">Deals Today</a>
            <a className="block hover:text-gray-900" href="/search">Search</a>
            <a className="block hover:text-gray-900" href="/alerts">Alerts</a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 xl:col-span-3">
            <div className="font-semibold text-gray-900">Newsletter</div>
            <p className="text-gray-500 mt-1">[EMAIL SIGNUP PLACEHOLDER]</p>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t text-xs text-gray-500">© {new Date().getFullYear()} DealGrid. All rights reserved.</div>
      </div>
    </footer>
  );
}
