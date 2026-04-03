export default function AnalyticsPage() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="surface p-5"><h2 className="font-semibold">Pipeline performance</h2><p className="mt-2 text-sm text-slate-500">Conversion trend, stage velocity, deal cycle length charts.</p></article>
      <article className="surface p-5"><h2 className="font-semibold">Lead source ROI</h2><p className="mt-2 text-sm text-slate-500">Inbound vs outbound performance by campaign channel.</p></article>
    </section>
  );
}
