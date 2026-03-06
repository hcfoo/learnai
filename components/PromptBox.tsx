export default function PromptBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-neutral-600">{text}</div>
    </div>
  );
}
