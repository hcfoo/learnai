import Link from "next/link";
import Container from "@/components/Container";
export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070b16]/90 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">Energy Pathway Map</Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/pathways" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Pathways</Link>
            <Link href="/explore" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Explore</Link>
            <Link href="/about" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">About</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
