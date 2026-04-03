import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const data = await prisma.client.findMany({ take: 50, orderBy: { createdAt: "desc" } });
  return NextResponse.json(data);
}
