import { PipelineBoard } from "@/components/leads/pipeline-board";
import { prisma } from "@/lib/prisma";

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({ orderBy: { updatedAt: "desc" } });
  const grouped = leads.reduce<Record<string, Array<{ id: string; title: string; value: number }>>>((acc, lead) => {
    if (!acc[lead.stage]) acc[lead.stage] = [];
    acc[lead.stage].push({ id: lead.id, title: lead.title, value: lead.value });
    return acc;
  }, {});
  return <PipelineBoard groupedLeads={grouped} />;
}
