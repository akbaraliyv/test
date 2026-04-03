import { MetricCard } from "@/components/dashboard/metric-card";
import { getDashboardMetrics } from "@/lib/services/dashboard";

export default async function DashboardPage() {
  const data = await getDashboardMetrics();
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Clients" value={data.totals.clients} />
        <MetricCard label="Leads" value={data.totals.leads} />
        <MetricCard label="Tasks" value={data.totals.tasks} />
        <MetricCard label="Conversion" value={`${data.conversionRate}%`} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="surface p-5"><h3 className="font-semibold">Recent activity</h3><p className="mt-2 text-sm text-slate-600">Timeline of client updates, lead stage changes, and task completions.</p></article>
        <article className="surface p-5"><h3 className="font-semibold">AI Assistant</h3><p className="mt-2 text-sm text-slate-600">Prompt examples: summarize client history, suggest next action, write follow-up.</p></article>
      </div>
    </section>
  );
}
