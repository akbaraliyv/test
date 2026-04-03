"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuthCard({ mode, title, subtitle }: { mode: "login" | "register" | "forgot"; title: string; subtitle: string }) {
  const isForgot = mode === "forgot";
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-6">
      <section className="surface w-full max-w-md p-8">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        <form className="mt-6 space-y-4">
          {mode !== "forgot" && <Input placeholder="Full name" />}
          <Input placeholder="you@company.com" type="email" />
          {!isForgot && <Input placeholder="Password" type="password" />}
          <Button className="w-full">{isForgot ? "Send reset email" : mode === "login" ? "Login" : "Register"}</Button>
        </form>
        <div className="mt-4 text-sm text-slate-500">
          {mode === "login" ? <Link href="/forgot-password">Forgot password?</Link> : <Link href="/login">Already have an account?</Link>}
        </div>
      </section>
    </main>
  );
}
