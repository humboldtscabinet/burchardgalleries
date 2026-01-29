import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
      {description ? (
        <p className="max-w-3xl text-base text-slate-600">{description}</p>
      ) : null}
      {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
    </div>
  );
}
