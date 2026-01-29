import Link from "next/link";
import { consignSteps, contact, externalLinks } from "@/data/content";

export default function ConsignPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-black bg-white">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Consign</p>
        <h1 className="text-3xl font-semibold">Confidential, insured consignment</h1>
        <p className="max-w-3xl text-base text-gray-700">
          Share photos and a short list to begin. We provide valuation ranges, sale timing, and a tailored auction plan for estates, trusts, and private collections.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="space-y-3">
            {consignSteps.map((step, index) => (
              <div key={step.title} className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-200/40 text-sm font-semibold text-slate-900">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-black">{step.title}</p>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            <Link
              href={`mailto:${contact.email}`}
              className="rounded-full bg-[#f5d000] px-4 py-2 font-semibold text-slate-900 shadow hover:-translate-y-0.5 hover:shadow-lg transition-transform"
            >
              Email photos & details
            </Link>
            <Link
              href={`tel:${contact.phone}`}
              className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 font-medium text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-slate-400 transition-transform"
            >
              Call {contact.phone}
            </Link>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-200/40">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">Calendar & archives</p>
          <p className="text-sm text-gray-700">
            Align consignments with the right sale date. Review upcoming auctions and past catalogues.
          </p>
          <div className="space-y-2 text-sm text-amber-600">
            <Link href={externalLinks.calendar} className="block underline decoration-amber-600/60 decoration-2 underline-offset-4">
              Auction calendar →
            </Link>
            <Link href={externalLinks.archives} className="block underline decoration-amber-600/60 decoration-2 underline-offset-4">
              Auction archives →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
