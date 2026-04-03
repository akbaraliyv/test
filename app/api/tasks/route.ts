import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { taskSchema } from "@/lib/validators/crm";

export async function GET() {
  const tasks = await prisma.task.findMany({ include: { assignee: true } });
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const body = taskSchema.parse(await req.json());
  const task = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      dueDate: new Date(body.dueDate),
      priority: body.priority,
      assigneeId: body.assigneeId,
    },
  });

  return NextResponse.json(task, { status: 201 });
}
