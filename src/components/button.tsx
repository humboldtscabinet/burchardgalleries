"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

const baseClasses = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5";

export function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const variantClasses =
    variant === "ghost"
      ? "border border-slate-900/15 bg-white text-slate-900 shadow-sm hover:border-slate-900/30"
      : "border border-black/10 bg-[#f5d000] text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]";

  const combined = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (isExternal) {
    return (
      <a className={combined} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={combined} href={href}>
      {children}
    </Link>
  );
}
