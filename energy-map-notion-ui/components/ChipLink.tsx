import Link from "next/link";

export default function ChipLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-800 hover:bg-neutral-100"
    >
      {label}
    </Link>
  );
}
