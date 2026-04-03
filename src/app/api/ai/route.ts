import { NextRequest, NextResponse } from "next/server";
import { crmPrompts } from "@/lib/ai/prompts";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const prompt = crmPrompts.nextBestAction(payload.context ?? "");

  // TODO: integrate OpenAI SDK call with retries and usage tracking.
  return NextResponse.json({ prompt, message: "AI integration point ready." });
}
