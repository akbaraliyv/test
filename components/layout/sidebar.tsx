import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["Clients", "/clients"],
  ["Leads", "/leads"],
  ["Tasks", "/tasks"],
  ["Analytics", "/analytics"],
  ["Settings", "/settings"],
  ["Admin", "/admin/users"],
] as const;

export function Sidebar() {
  return (
    <aside className="surface sticky top-6 h-[calc(100vh-3rem)] w-64 p-4">
      <h2 className="mb-6 text-lg font-semibold">NimbusCRM</h2>
      <nav className="space-y-1">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100">
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
