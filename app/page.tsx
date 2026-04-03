import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-brand-700 p-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 py-20">
        <p className="rounded-full border border-white/30 px-3 py-1 text-sm">AI CRM for modern revenue teams</p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight">Run your sales motion end-to-end with intelligence built in.</h1>
        <p className="max-w-2xl text-lg text-slate-200">NimbusCRM combines client records, pipeline orchestration, team workflows, and AI copilots in one premium command center.</p>
        <div className="flex gap-4">
          <Link href="/login" className="rounded-xl bg-white px-5 py-3 font-medium text-slate-900">Get Started</Link>
          <Link href="/register" className="rounded-xl border border-white/40 px-5 py-3">Create Workspace</Link>
        </div>
      </div>
    </main>
  );
}
