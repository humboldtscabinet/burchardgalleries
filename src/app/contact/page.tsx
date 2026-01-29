import Link from "next/link";
import { contact, externalLinks } from "@/data/content";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16 text-slate-100">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Contact</p>
        <h1 className="text-3xl font-semibold">Connect with the gallery</h1>
        <p className="max-w-2xl text-base text-slate-200/80">
          Reach the St. Petersburg team for consignments, bidding support, previews, or logistics.
        </p>
      </div>

      <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
        <p className="text-sm text-slate-200/90">{contact.address}</p>
        <p className="text-sm text-slate-200/90">{contact.license}</p>
        <div className="space-y-2 text-sm text-slate-200/90">
          <Link className="block font-semibold text-white" href={`tel:${contact.phone}`}>
            {contact.phone}
          </Link>
          <Link className="block text-emerald-200" href={`mailto:${contact.email}`}>
            {contact.email}
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <Link
            href={`tel:${contact.phone}`}
            className="rounded-full bg-white px-4 py-2 font-semibold text-slate-900 shadow hover:-translate-y-0.5 hover:shadow-lg transition-transform"
          >
            Call the gallery
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-medium text-white shadow-sm hover:-translate-y-0.5 hover:border-white/40 transition-transform"
          >
            Email the team
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200/90">
          <p className="font-semibold text-white">Auction calendar</p>
          <p className="mt-1">Preview dates and catalogs.</p>
          <Link
            className="mt-2 inline-flex text-sm font-semibold text-emerald-200 underline decoration-emerald-200/60 decoration-2 underline-offset-4"
            href={externalLinks.calendar}
          >
            View calendar →
          </Link>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200/90">
          <p className="font-semibold text-white">Mailing list</p>
          <p className="mt-1">Auction announcements and catalog releases.</p>
          <Link
            className="mt-2 inline-flex text-sm font-semibold text-emerald-200 underline decoration-emerald-200/60 decoration-2 underline-offset-4"
            href={externalLinks.mailingList}
          >
            Join mailing list →
          </Link>
        </div>
      </div>
    </main>
  );
}
