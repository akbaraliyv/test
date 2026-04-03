import { Stage } from "@/types/crm";

const stages: Stage[] = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL", "WON", "LOST"];

export function PipelineBoard({ groupedLeads }: { groupedLeads: Record<string, Array<{ id: string; title: string; value: number }>> }) {
  return (
    <div className="grid gap-4 xl:grid-cols-6">
      {stages.map((stage) => (
        <section key={stage} className="surface min-h-56 p-3">
          <h3 className="mb-3 text-xs font-semibold tracking-wide text-slate-500">{stage}</h3>
          <div className="space-y-2">
            {(groupedLeads[stage] || []).map((lead) => (
              <article key={lead.id} className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                <p className="text-sm font-medium">{lead.title}</p>
                <p className="text-xs text-slate-500">${lead.value.toLocaleString()}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
