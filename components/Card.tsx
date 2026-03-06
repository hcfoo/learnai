import type { ReactNode } from "react";
export default function Card({ children }: { children: ReactNode }) { return <div className="rounded-2xl border border-neutral-200 bg-white shadow-soft">{children}</div>; }
