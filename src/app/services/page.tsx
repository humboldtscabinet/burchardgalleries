import { services } from "@/data/content";

export default function ServicesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-100">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Services</p>
        <h1 className="text-3xl font-semibold">Full-service auctioneers</h1>
        <p className="max-w-3xl text-base text-slate-200/80">
          From valuation to settlement, Burchard Galleries handles logistics, cataloging, marketing, and bidding support.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-900/40"
          >
            <h2 className="text-lg font-semibold text-white">{service.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
