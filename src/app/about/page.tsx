import Link from "next/link";
import { contact, externalLinks, quickFacts } from "@/data/content";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-black bg-white">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">About</p>
        <h1 className="text-3xl font-semibold">Burchard Galleries</h1>
        <p className="max-w-3xl text-base text-gray-700">
          A gallery-forward Florida auction house serving estates, fiduciaries, and private collectors with licensed auctioneers, research-driven cataloging, and national/international bidder reach.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-black">What we do</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We present fine art, jewelry, design, decorative arts, and notable collections with gallery previews, phone/absentee bidding, and online reach.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            Estates and consignments are prepared with photography, cataloging, and marketing to qualified buyers. Licensed auctioneers manage in-room and remote bidding.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-700">
            <span className="rounded-full border border-slate-300 px-3 py-1">Estate solutions</span>
            <span className="rounded-full border border-slate-300 px-3 py-1">Research-driven cataloging</span>
            <span className="rounded-full border border-slate-300 px-3 py-1">Gallery previews</span>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-black">At a glance</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {quickFacts.map((fact) => (
              <li key={fact}>• {fact}</li>
            ))}
          </ul>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-gray-700">
            <p className="font-semibold text-black">Sunday Radio Hour</p>
            <p className="mt-1">Listen live Sundays 10–11 AM on WGUL 860 AM / WLSS 93.7 FM.</p>
            <Link
              className="mt-2 inline-flex text-sm font-semibold text-amber-600 underline decoration-amber-600/60 decoration-2 underline-offset-4"
              href={externalLinks.radio}
            >
              Stream the show →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-black">Contact</h2>
        <div className="mt-2 space-y-1 text-sm text-gray-700">
          <p className="text-black">Burchard Galleries</p>
          <p>{contact.address}</p>
          <p>{contact.license}</p>
          <Link className="block font-semibold text-black" href={`tel:${contact.phone}`}>
            {contact.phone}
          </Link>
          <Link className="block text-amber-600" href={`mailto:${contact.email}`}>
            {contact.email}
          </Link>
          <p className="text-gray-600">
            Mailing list: <Link className="text-amber-600" href={externalLinks.mailingList}>join here</Link>
          </p>
          <p className="text-gray-600">
            Archives: <Link className="text-amber-600" href={externalLinks.archives}>past catalogues</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
