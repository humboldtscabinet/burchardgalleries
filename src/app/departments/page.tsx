import { departments } from "@/data/content";

export default function DepartmentsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-100">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Departments</p>
        <h1 className="text-3xl font-semibold">Specialties we steward</h1>
        <p className="max-w-3xl text-base text-slate-200/80">
          Estate and collection categories handled by Burchard Galleries with research-driven cataloging and licensed auctioneers.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/40"
          >
            <h2 className="text-lg font-semibold text-white">{dept.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{dept.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
