import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { clientSchema } from "@/lib/validators/crm";

export async function GET() {
  const clients = await prisma.client.findMany({ orderBy: { updatedAt: "desc" } });
  return NextResponse.json(clients);
}

export async function POST(req: Request) {
  const body = clientSchema.parse(await req.json());
  const client = await prisma.client.create({ data: { ...body, tags: body.tags.join(",") } });
  return NextResponse.json(client, { status: 201 });
}
