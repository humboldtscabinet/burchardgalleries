import Link from "next/link";
import { contact, externalLinks } from "@/data/content";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16 text-black bg-white">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Contact</p>
        <h1 className="text-3xl font-semibold">Connect with the gallery</h1>
        <p className="max-w-2xl text-base text-gray-700">
          Reach the St. Petersburg team for consignments, bidding support, previews, or logistics.
        </p>
      </div>

      <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-lg">
        <p className="text-sm text-gray-700">{contact.address}</p>
        <p className="text-sm text-gray-700">{contact.license}</p>
        <div className="space-y-2 text-sm text-gray-700">
          <Link className="block font-semibold text-black" href={`tel:${contact.phone}`}>
            {contact.phone}
          </Link>
          <Link className="block text-amber-600" href={`mailto:${contact.email}`}>
            {contact.email}
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <Link
            href={`tel:${contact.phone}`}
            className="rounded-full bg-[#f5d000] px-4 py-2 font-semibold text-slate-900 shadow hover:-translate-y-0.5 hover:shadow-lg transition-transform"
          >
            Call the gallery
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 font-medium text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-slate-400 transition-transform"
          >
            Email the team
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-gray-700">
          <p className="font-semibold text-black">Auction calendar</p>
          <p className="mt-1">Preview dates and catalogs.</p>
          <Link
            className="mt-2 inline-flex text-sm font-semibold text-amber-600 underline decoration-amber-600/60 decoration-2 underline-offset-4"
            href={externalLinks.calendar}
          >
            View calendar →
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-gray-700">
          <p className="font-semibold text-black">Mailing list</p>
          <p className="mt-1">Auction announcements and catalog releases.</p>
          <Link
            className="mt-2 inline-flex text-sm font-semibold text-amber-600 underline decoration-amber-600/60 decoration-2 underline-offset-4"
            href={externalLinks.mailingList}
          >
            Join mailing list →
          </Link>
        </div>
      </div>
    </main>
  );
}
