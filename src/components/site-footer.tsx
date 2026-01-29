import { contact, externalLinks } from "@/data/content";
import { Button } from "@/components/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-900">Burchard Galleries</p>
          <p>{contact.address}</p>
          <p>{contact.license}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={`tel:${contact.phone}`} variant="ghost">
            Call {contact.phone}
          </Button>
          <Button href={`mailto:${contact.email}`} variant="ghost">
            Email the gallery
          </Button>
          <Button href={externalLinks.calendar}>Auction calendar</Button>
        </div>
      </div>
    </footer>
  );
}
