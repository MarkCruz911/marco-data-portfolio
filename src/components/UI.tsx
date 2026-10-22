import type { PropsWithChildren } from 'react';
import { ArrowUpRight } from 'lucide-react';
export function Out({
  href,
  children,
  className = '',
}: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
export function Label({ children }: PropsWithChildren) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
