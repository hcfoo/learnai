import Link from "next/link";
import Container from "@/components/Container";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm" />
            <div className="text-sm font-semibold text-neutral-900">Energy Learning Map</div>
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/journeys" className="rounded-lg px-3 py-2 text-neutral-700 hover:bg-neutral-100">Journeys</Link>
            <Link href="/explore" className="rounded-lg px-3 py-2 text-neutral-700 hover:bg-neutral-100">Explore</Link>
            <Link href="/about" className="rounded-lg px-3 py-2 text-neutral-700 hover:bg-neutral-100">About</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
