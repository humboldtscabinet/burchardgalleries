import Link from "next/link";
import { consignSteps, contact, externalLinks } from "@/data/content";

export default function ConsignPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-100">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Consign</p>
        <h1 className="text-3xl font-semibold">Confidential, insured consignment</h1>
        <p className="max-w-3xl text-base text-slate-200/80">
          Share photos and a short list to begin. We provide valuation ranges, sale timing, and a tailored auction plan for estates, trusts, and private collections.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
          <div className="space-y-3">
            {consignSteps.map((step, index) => (
              <div key={step.title} className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="text-sm text-slate-200/90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            <Link
              href={`mailto:${contact.email}`}
              className="rounded-full bg-white px-4 py-2 font-semibold text-slate-900 shadow hover:-translate-y-0.5 hover:shadow-lg transition-transform"
            >
              Email photos & details
            </Link>
            <Link
              href={`tel:${contact.phone}`}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-medium text-white shadow-sm hover:-translate-y-0.5 hover:border-white/40 transition-transform"
            >
              Call {contact.phone}
            </Link>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Calendar & archives</p>
          <p className="text-sm text-slate-200/90">
            Align consignments with the right sale date. Review upcoming auctions and past catalogues.
          </p>
          <div className="space-y-2 text-sm text-emerald-200">
            <Link href={externalLinks.calendar} className="block underline decoration-emerald-200/60 decoration-2 underline-offset-4">
              Auction calendar →
            </Link>
            <Link href={externalLinks.archives} className="block underline decoration-emerald-200/60 decoration-2 underline-offset-4">
              Auction archives →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
