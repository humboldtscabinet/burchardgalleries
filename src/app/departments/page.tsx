import { departments } from "@/data/content";

export default function DepartmentsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-black bg-white">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Departments</p>
        <h1 className="text-3xl font-semibold text-black">Specialties we steward</h1>
        <p className="max-w-3xl text-base text-gray-700">
          Estate and collection categories handled by Burchard Galleries with research-driven cataloging and licensed auctioneers.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/40"
          >
            <h2 className="text-lg font-semibold text-black">{dept.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{dept.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
