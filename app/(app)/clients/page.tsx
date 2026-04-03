import { prisma } from "@/lib/prisma";

export default async function ClientsPage() {
  const clients = await prisma.client.findMany({ orderBy: { createdAt: "desc" }, take: 20 });
  return (
    <section className="surface overflow-hidden">
      <div className="border-b p-5"><h1 className="text-xl font-semibold">Clients</h1></div>
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-slate-500"><tr><th className="p-3">Name</th><th>Email</th><th>Company</th><th>Status</th></tr></thead>
        <tbody>
          {clients.map((c) => <tr key={c.id} className="border-t"><td className="p-3 font-medium">{c.fullName}</td><td>{c.email}</td><td>{c.company}</td><td>{c.status}</td></tr>)}
        </tbody>
      </table>
    </section>
  );
}
