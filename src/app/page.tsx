import Image from "next/image";

import { Button } from "@/components/button";
import {
  auctionHighlights,
  bidderResources,
  consignSteps,
  contact,
  departments,
  externalLinks,
  services,
} from "@/data/content";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl space-y-20 px-4 pb-20 pt-16 sm:px-6">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold text-black sm:text-5xl">
              Your search for estate auctions and fine art sales starts here
            </h1>
            <p className="text-lg text-gray-800">
              Burchard Galleries handles consignments with confidentiality and professional care. Browse upcoming auctions, connect with our team, or list your collection.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={externalLinks.calendar}>Browse auctions</Button>
            <Button href="/consign" variant="ghost">
              Consign with us
            </Button>
          </div>
        </section>

        <section id="auctions" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Upcoming auctions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {auctionHighlights.map((auction) => (
              <div
                key={auction.title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {auction.image ? (
                  <Image
                    src={auction.image}
                    alt={auction.title}
                    width={640}
                    height={360}
                    className="h-40 w-full object-cover"
                  />
                ) : null}
                <div className="space-y-3 p-4">
                  <span className="inline-block rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
                    {auction.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{auction.title}</h3>
                  <p className="text-sm text-slate-600">{auction.description}</p>
                  <Button href={auction.href}>{auction.action}</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="departments" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-black sm:text-3xl">Browse by category</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {departments.map((dept) => (
              <a
                key={dept.name}
                href="#"
                className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {dept.image ? (
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    width={300}
                    height={200}
                    className="h-32 w-full object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                  <h3 className="text-xs font-semibold text-black sm:text-sm">{dept.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Our services</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="consign" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Consign with us</h2>
          </div>
          <div className="space-y-3">
            {consignSteps.map((step, index) => (
              <div key={step.title} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-900">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{step.title}</p>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button href={`mailto:${contact.email}`}>Email photos & details</Button>
            <Button href={`tel:${contact.phone}`} variant="ghost">
              Call {contact.phone}
            </Button>
          </div>
        </section>

        <section id="bidders" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">For bidders</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bidderResources.map((resource) => (
              <div
                key={resource.title}
                className="flex h-full flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="space-y-2">
                  <h3 className="font-semibold text-slate-900">{resource.title}</h3>
                  <p className="text-sm text-slate-600">{resource.description}</p>
                </div>
                <div className="pt-4">
                  <Button href={resource.href} variant="ghost">
                    {resource.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">About Burchard Galleries</h2>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-4 text-slate-700">
              Estate liquidation specialists based in St. Petersburg, Florida. We handle antiques, fine art, jewelry, 20th century design, and special collections with thorough cataloging, research-driven descriptions, and professional photography.
            </p>
            <p className="mb-4 text-slate-700">
              Licensed auctioneers supporting gallery, phone, absentee, and online bidding to reach national and international buyers.
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">{contact.address}</span>
              </p>
              <p>
                <a className="font-semibold text-slate-900 hover:underline" href={`tel:${contact.phone}`}>
                  {contact.phone}
                </a>
              </p>
              <p>
                <a className="font-semibold text-slate-900 hover:underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
              <p className="text-slate-600">{contact.license}</p>
              <p>
                <a className="text-slate-900 hover:underline" href={externalLinks.mailingList} target="_blank" rel="noreferrer">
                  Join our mailing list
                </a>
                {" • "}
                <a className="text-slate-900 hover:underline" href={externalLinks.archives} target="_blank" rel="noreferrer">
                  View catalogues
                </a>
                {" • "}
                <a className="text-slate-900 hover:underline" href={externalLinks.radio} target="_blank" rel="noreferrer">
                  Listen live Sundays 10–11 AM
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
