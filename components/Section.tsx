import type { ReactNode } from "react";

export default function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6">
      <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{title}</div>
      <div className="mt-2 text-neutral-800 leading-relaxed">{children}</div>
    </section>
  );
}
