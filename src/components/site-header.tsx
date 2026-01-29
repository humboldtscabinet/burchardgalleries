"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { contact, navItems } from "@/data/content";
import { Button } from "@/components/button";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-[#f5d000] text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-sm">
            BG
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Burchard Galleries</p>
            <p className="text-xs text-slate-500">Estate Liquidation Specialists</p>
          </div>
        </div>
        <nav className="hidden items-center gap-2 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 transition hover:bg-slate-100 ${
                  active ? "bg-slate-100 text-slate-900" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button href={`tel:${contact.phone}`}>Call {contact.phone}</Button>
          <Button href="/consign" variant="ghost">
            Consign
          </Button>
        </div>
      </div>
    </header>
  );
}
