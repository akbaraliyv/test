import { NextResponse } from "next/server";
import { mockAICompletion } from "@/lib/ai/client";

export async function POST(req: Request) {
  const { context } = await req.json();
  return NextResponse.json(await mockAICompletion(context, "leadAnalysis"));
}
