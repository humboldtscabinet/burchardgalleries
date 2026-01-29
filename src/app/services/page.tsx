import { services } from "@/data/content";

export default function ServicesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-black bg-white">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Services</p>
        <h1 className="text-3xl font-semibold">Full-service auctioneers</h1>
        <p className="max-w-3xl text-base text-gray-700">
          From valuation to settlement, Burchard Galleries handles logistics, cataloging, marketing, and bidding support.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-lg shadow-slate-200/40"
          >
            <h2 className="text-lg font-semibold text-black">{service.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
