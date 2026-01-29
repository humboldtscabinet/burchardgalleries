import Link from "next/link";
import Image from "next/image";
import { auctionHighlights, externalLinks } from "@/data/content";

export default function AuctionsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-100">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Auctions</p>
        <h1 className="text-3xl font-semibold">Upcoming sales & catalog access</h1>
        <p className="max-w-3xl text-base text-slate-200/80">
          Review dates, preview catalogues, and register to bid in-gallery, by phone, absentee, or online.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {auctionHighlights.map((auction) => (
          <div
            key={auction.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-indigo-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0" />
            <div className="relative space-y-4">
              <div className="inline-flex rounded-full border border-emerald-200/30 bg-emerald-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                {auction.tag}
              </div>
              <h2 className="text-xl font-semibold text-white">{auction.title}</h2>
              <p className="text-sm leading-relaxed text-slate-200/90">{auction.description}</p>
              {auction.image ? (
                <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
                  <Image
                    src={auction.image}
                    alt={auction.title}
                    width={640}
                    height={360}
                    className="h-44 w-full object-cover opacity-90"
                  />
                </div>
              ) : null}
              <Link
                href={auction.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 underline decoration-emerald-200/60 decoration-2 underline-offset-4"
              >
                {auction.action} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-white">Need assistance?</h2>
        <p className="mt-2 text-sm text-slate-200/90">
          Contact the gallery for preview appointments, condition requests, or to arrange phone/absentee bidding.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link
            href={externalLinks.calendar}
            className="rounded-full bg-white px-4 py-2 font-semibold text-slate-900 shadow hover:-translate-y-0.5 hover:shadow-lg transition-transform"
          >
            View calendar
          </Link>
          <Link
            href="mailto:mail@BurchardGalleries.com"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-medium text-white shadow-sm hover:-translate-y-0.5 hover:border-white/40 transition-transform"
          >
            Email the gallery
          </Link>
        </div>
      </div>
    </main>
  );
}
