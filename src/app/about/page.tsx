import Link from "next/link";
import { contact, externalLinks, quickFacts } from "@/data/content";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-100">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">About</p>
        <h1 className="text-3xl font-semibold">Burchard Galleries</h1>
        <p className="max-w-3xl text-base text-slate-200/80">
          A gallery-forward Florida auction house serving estates, fiduciaries, and private collectors with licensed auctioneers, research-driven cataloging, and national/international bidder reach.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-white">What we do</h2>
          <p className="text-sm leading-relaxed text-slate-200/90">
            We present fine art, jewelry, design, decorative arts, and notable collections with gallery previews, phone/absentee bidding, and online reach.
          </p>
          <p className="text-sm leading-relaxed text-slate-200/90">
            Estates and consignments are prepared with photography, cataloging, and marketing to qualified buyers. Licensed auctioneers manage in-room and remote bidding.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-200">
            <span className="rounded-full border border-white/10 px-3 py-1">Estate solutions</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Research-driven cataloging</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Gallery previews</span>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-white">At a glance</h2>
          <ul className="space-y-2 text-sm text-slate-200/90">
            {quickFacts.map((fact) => (
              <li key={fact}>• {fact}</li>
            ))}
          </ul>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/90">
            <p className="font-semibold text-white">Sunday Radio Hour</p>
            <p className="mt-1">Listen live Sundays 10–11 AM on WGUL 860 AM / WLSS 93.7 FM.</p>
            <Link
              className="mt-2 inline-flex text-sm font-semibold text-emerald-200 underline decoration-emerald-200/60 decoration-2 underline-offset-4"
              href={externalLinks.radio}
            >
              Stream the show →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-white">Contact</h2>
        <div className="mt-2 space-y-1 text-sm text-slate-200/90">
          <p className="text-white">Burchard Galleries</p>
          <p>{contact.address}</p>
          <p>{contact.license}</p>
          <Link className="block font-semibold text-white" href={`tel:${contact.phone}`}>
            {contact.phone}
          </Link>
          <Link className="block text-emerald-200" href={`mailto:${contact.email}`}>
            {contact.email}
          </Link>
          <p className="text-slate-300">
            Mailing list: <Link className="text-emerald-200" href={externalLinks.mailingList}>join here</Link>
          </p>
          <p className="text-slate-300">
            Archives: <Link className="text-emerald-200" href={externalLinks.archives}>past catalogues</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
