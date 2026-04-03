import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { UserRole } from "@/types/crm";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "development-secret");

export type SessionUser = { id: string; email: string; role: UserRole; name: string };

export async function createToken(payload: SessionUser) {
  return new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(secret);
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload as unknown as SessionUser;
}

export async function getSessionUser() {
  const token = (await cookies()).get("crm_token")?.value;
  if (!token) return null;
  try {
    return await verifyToken(token);
  } catch {
    return null;
  }
}

export function unauthorizedResponse() {
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}
