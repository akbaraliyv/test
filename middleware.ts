import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth/jwt";

const protectedRoutes = ["/dashboard", "/clients", "/leads", "/tasks", "/analytics", "/settings", "/admin"];

export async function middleware(req: NextRequest) {
  const isProtected = protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path));
  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get("crm_token")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  try {
    const session = await verifyToken(token);
    if (req.nextUrl.pathname.startsWith("/admin") && session.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/clients/:path*", "/leads/:path*", "/tasks/:path*", "/analytics/:path*", "/settings/:path*", "/admin/:path*"],
};
