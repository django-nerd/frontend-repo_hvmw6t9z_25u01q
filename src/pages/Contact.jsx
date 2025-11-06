export default function Contact() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Contact</h1>
      <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input className="h-11 min-h-[44px] px-3 rounded-md border bg-white" placeholder="Name" />
        <input className="h-11 min-h-[44px] px-3 rounded-md border bg-white" placeholder="Email" />
        <input className="sm:col-span-2 h-11 min-h-[44px] px-3 rounded-md border bg-white" placeholder="Subject" />
        <textarea className="sm:col-span-2 min-h-[140px] p-3 rounded-md border bg-white" placeholder="Message" />
        <div className="sm:col-span-2">
          <button className="h-11 min-h-[44px] px-4 rounded-md border bg-white">Send</button>
        </div>
      </form>
    </div>
  );
}
