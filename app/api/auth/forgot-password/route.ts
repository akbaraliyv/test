import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "If account exists, reset instructions were sent." });
}
