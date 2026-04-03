export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <input className="w-full max-w-md rounded-lg border border-slate-200 px-4 py-2" placeholder="Search clients, leads, tasks..." />
      <div className="ml-4 rounded-full bg-slate-100 px-3 py-2 text-sm">Admin</div>
    </header>
  );
}
