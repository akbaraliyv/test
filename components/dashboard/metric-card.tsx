export function MetricCard({ label, value }: { label: string; value: number | string }) {
  return (
    <article className="surface p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </article>
  );
}
