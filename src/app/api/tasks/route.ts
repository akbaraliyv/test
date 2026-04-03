import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const data = await prisma.task.findMany({ include: { assignee: true, client: true }, orderBy: { dueDate: "asc" } });
  return NextResponse.json(data);
}
