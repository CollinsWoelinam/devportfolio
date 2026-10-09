export function Tag({ label }: { label: string }) {
  return (
    <li className="rounded-full border border-ink-700 bg-ink-900 px-3 py-1 font-mono text-xs text-ink-300">
      {label}
    </li>
  );
}

export function TagList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item} label={item} />
      ))}
    </ul>
  );
}
