export default function Alerts() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Deal Alerts</h1>
      <p className="text-gray-600 mt-1">[ALERTS INTRO TEXT PLACEHOLDER]</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">Telegram</div>
          <div className="text-gray-500 text-sm mt-2">[JOIN BUTTON PLACEHOLDER]</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">WhatsApp</div>
          <div className="text-gray-500 text-sm mt-2">[JOIN BUTTON PLACEHOLDER]</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">Email / Push</div>
          <div className="text-gray-500 text-sm mt-2">[SIGNUP PLACEHOLDER]</div>
        </div>
      </div>
    </div>
  );
}
