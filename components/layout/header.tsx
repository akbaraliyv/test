import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="surface flex items-center justify-between p-4">
      <Input placeholder="Search clients, leads, tasks..." className="max-w-md" />
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-slate-200" />
        <div>
          <p className="text-sm font-medium">Revenue Team</p>
          <p className="text-xs text-slate-500">manager@nimbuscrm.com</p>
        </div>
      </div>
    </header>
  );
}
