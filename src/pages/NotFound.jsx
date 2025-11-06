export default function NotFound() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">404 — Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="inline-flex items-center justify-center mt-6 h-11 min-h-[44px] px-4 rounded-md border bg-white hover:bg-gray-50">Go to Home</a>
    </div>
  );
}
