import { NextResponse } from "next/server";
import { getDashboardMetrics } from "@/lib/services/dashboard";

export async function GET() {
  return NextResponse.json(await getDashboardMetrics());
}
