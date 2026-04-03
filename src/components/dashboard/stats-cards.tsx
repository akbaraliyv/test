const cards = [
  ["Total Clients", "1,248"],
  ["Active Leads", "312"],
  ["Open Deals", "$2.4M"],
  ["Due Tasks", "19"]
];

export function StatsCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(([label, value]) => (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" key={label}>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold">{value}</p>
        </div>
      ))}
    </section>
  );
}
