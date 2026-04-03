import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 py-24">
        <h1 className="text-5xl font-semibold">AI CRM Platform</h1>
        <p className="max-w-2xl text-lg text-slate-200">Modern CRM for clients, leads, tasks, and AI-assisted sales workflows.</p>
        <div className="flex gap-4">
          <Link className="rounded-lg bg-white px-5 py-3 font-medium text-slate-900" href="/auth/login">Sign in</Link>
          <Link className="rounded-lg border border-white/40 px-5 py-3" href="/auth/register">Start free trial</Link>
        </div>
      </div>
    </main>
  );
}
