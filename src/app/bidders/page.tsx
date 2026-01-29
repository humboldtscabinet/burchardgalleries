import Link from "next/link";
import { bidderResources } from "@/data/content";

export default function BiddersPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-100">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Bidder Resources</p>
        <h1 className="text-3xl font-semibold">Bid with confidence</h1>
        <p className="max-w-3xl text-base text-slate-200/80">
          Register, preview lots, arrange condition requests, and plan payments or pickup with the gallery team.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bidderResources.map((resource) => (
          <div
            key={resource.title}
            className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-white">{resource.title}</h2>
              <p className="text-sm leading-relaxed text-slate-200/90">{resource.description}</p>
            </div>
            <div className="pt-4">
              <Link
                href={resource.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:border-white/40"
              >
                {resource.action} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
