import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/lib/validators/auth";
import { createToken } from "@/lib/auth/jwt";

export async function POST(req: Request) {
  const body = loginSchema.parse(await req.json());
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (!user) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

  const isValid = await bcrypt.compare(body.password, user.passwordHash);
  if (!isValid) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

  const token = await createToken({ id: user.id, email: user.email, name: user.name, role: user.role });
  const response = NextResponse.json({ success: true, role: user.role });
  response.cookies.set("crm_token", token, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7 });
  return response;
}
