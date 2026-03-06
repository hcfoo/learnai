import type { ReactNode } from "react";
export default function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`rounded-2xl border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur ${className}`}>{children}</div>; }
