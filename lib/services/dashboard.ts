import { prisma } from "@/lib/prisma";

export async function getDashboardMetrics() {
  const [clients, leads, tasks, wonDeals] = await Promise.all([
    prisma.client.count(),
    prisma.lead.count(),
    prisma.task.count(),
    prisma.lead.count({ where: { stage: "WON" } }),
  ]);

  return {
    totals: { clients, leads, tasks, wonDeals },
    conversionRate: leads === 0 ? 0 : Number(((wonDeals / leads) * 100).toFixed(2)),
  };
}
