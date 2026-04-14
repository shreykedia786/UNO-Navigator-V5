/**
 * Mini candlestick legend glyphs — same geometry as RateCandlestickChart / onboarding step 3.
 */
export function LegendIconMax({ className = 'h-[22px] w-[18px] shrink-0' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 36" className={className} aria-hidden>
      <line x1="14" y1="10" x2="14" y2="30" stroke="#90a4ae" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="10" x2="21" y2="10" stroke="#4caf50" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="14" cy="10" r="2.8" fill="#4caf50" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

export function LegendIconMyRate({ className = 'h-[22px] w-[18px] shrink-0' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 36" className={className} aria-hidden>
      <line x1="14" y1="8" x2="14" y2="30" stroke="#90a4ae" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="18" x2="10" y2="18" stroke="#2196F3" strokeWidth="3.2" strokeLinecap="round" />
      <line x1="18" y1="18" x2="26" y2="18" stroke="#2196F3" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="14" cy="18" r="3.6" fill="#2196F3" stroke="#fff" strokeWidth="1.8" />
    </svg>
  );
}

export function LegendIconMin({ className = 'h-[22px] w-[18px] shrink-0' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 36" className={className} aria-hidden>
      <line x1="14" y1="8" x2="14" y2="28" stroke="#90a4ae" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="28" x2="21" y2="28" stroke="#f44336" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="14" cy="28" r="2.8" fill="#f44336" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}
