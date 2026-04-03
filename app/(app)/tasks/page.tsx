import { prisma } from "@/lib/prisma";

export default async function TasksPage() {
  const tasks = await prisma.task.findMany({ include: { assignee: true }, orderBy: { dueDate: "asc" } });
  return (
    <section className="space-y-3">
      {tasks.map((task) => (
        <article key={task.id} className="surface flex items-start justify-between p-4">
          <div>
            <p className="font-medium">{task.title}</p>
            <p className="text-sm text-slate-500">{task.assignee.name} · Due {task.dueDate.toDateString()}</p>
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">{task.priority}</span>
        </article>
      ))}
    </section>
  );
}
