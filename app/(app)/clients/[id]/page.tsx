import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const client = await prisma.client.findUnique({ where: { id }, include: { notes: true, activities: true } });
  if (!client) return notFound();

  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <article className="surface p-5 lg:col-span-2"><h1 className="text-xl font-semibold">{client.fullName}</h1><p className="text-sm text-slate-500">{client.company} · {client.email} · {client.phone}</p><p className="mt-4 text-sm">{client.notesText || "No profile notes yet."}</p></article>
      <article className="surface p-5"><h2 className="font-semibold">Activity timeline</h2><ul className="mt-3 space-y-3 text-sm">{client.activities.map((activity) => <li key={activity.id} className="border-l pl-3">{activity.message}</li>)}</ul></article>
    </section>
  );
}
