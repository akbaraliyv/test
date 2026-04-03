import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["Clients", "/dashboard/clients"],
  ["Leads", "/dashboard/leads"],
  ["Tasks", "/dashboard/tasks"],
  ["Analytics", "/dashboard/analytics"],
  ["Settings", "/dashboard/settings"],
  ["Admin", "/dashboard/admin/users"]
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-200 bg-white lg:block">
      <div className="p-6 text-xl font-semibold">AICRM</div>
      <nav className="space-y-2 px-4">
        {links.map(([label, href]) => (
          <Link className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900" href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
