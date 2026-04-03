import { prisma } from "@/lib/prisma";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <section className="surface overflow-hidden">
      <div className="border-b p-5"><h1 className="text-xl font-semibold">Admin · User management</h1></div>
      <table className="w-full text-sm"><thead className="bg-slate-50 text-left"><tr><th className="p-3">Name</th><th>Email</th><th>Role</th></tr></thead><tbody>{users.map((user)=><tr key={user.id} className="border-t"><td className="p-3">{user.name}</td><td>{user.email}</td><td>{user.role}</td></tr>)}</tbody></table>
    </section>
  );
}
