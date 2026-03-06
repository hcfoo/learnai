import Link from "next/link";
import Container from "@/components/Container";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-slate-900">Energy Learning Tool</Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/journeys" className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">Journeys</Link>
            <Link href="/pathways" className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">Pathways</Link>
            <Link href="/explore" className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">Explore</Link>
            <Link href="/about" className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">About</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
