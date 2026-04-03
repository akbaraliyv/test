import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const data = await prisma.lead.findMany({ include: { client: true, owner: true }, orderBy: { updatedAt: "desc" } });
  return NextResponse.json(data);
}
