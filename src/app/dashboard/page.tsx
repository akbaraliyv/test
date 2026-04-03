import { StatsCards } from "@/components/dashboard/stats-cards";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <StatsCards />
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">Pipeline chart placeholder</div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">Recent activity timeline placeholder</div>
      </section>
    </div>
  );
}
