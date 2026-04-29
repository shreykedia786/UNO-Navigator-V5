import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { BarChart3, Scale } from 'lucide-react';
import { NavigatorUpgradeRequestModal } from '@/app/components/NavigatorUpgradeRequestModal';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/app/components/ui/utils';
import { PARITY_PALETTE } from '@/app/lib/parityPalette';

const PREVIEW_SRC = `${import.meta.env.BASE_URL}navigator-competitor-intelligence-preview.png`;

function formatUsd(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(n);
}

type HotspotStat = { label: string; value: string };

type GraphPricing = {
  yourCheapest: number;
  yourRatePlan: string;
  competitorMin: number;
  competitorMinPlan: string;
  competitorMax: number;
  competitorMaxPlan: string;
};

type HotspotConfig = {
  id: string;
  leftPct: number;
  topPct: number;
  title?: string;
  summary?: string;
  benefit: string;
  stats?: HotspotStat[];
  statsSectionTitle?: string;
  graphPricing?: GraphPricing;
};

/** Mini preview of DetailedCompetitorModal — light theme to match subscribed in-app tooltips. */
function DetailsDrawerExplainer({ withTopMargin = true }: { withTopMargin?: boolean }) {
  const parityMatrix = [
    [PARITY_PALETTE.meet, PARITY_PALETTE.win, PARITY_PALETTE.loss, PARITY_PALETTE.meet],
    [PARITY_PALETTE.win, PARITY_PALETTE.meet, PARITY_PALETTE.meet, PARITY_PALETTE.loss],
    [PARITY_PALETTE.meet, PARITY_PALETTE.loss, PARITY_PALETTE.win, PARITY_PALETTE.meet]
  ] as const;
  const parityChannels = ['BK', 'Exp', 'Hg'] as const;

  return (
    <div
      className={cn('space-y-1.5', withTopMargin && 'mt-2')}
      aria-label="View details: competitor pricing and parity insights"
    >
      <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200/80 bg-white">
          <p className="border-b border-slate-100 bg-slate-50/70 px-2 py-1 text-center text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400">
            What you&apos;ll see
          </p>
          <div className="flex" role="presentation">
            <div className="flex min-w-0 flex-1 items-center justify-center gap-1 px-1.5 py-1.5 text-[10px] font-medium text-slate-500">
              <BarChart3 className="size-3 shrink-0 text-slate-400" strokeWidth={2} aria-hidden />
              <span className="truncate">Competitor</span>
            </div>
            <div className="w-px shrink-0 bg-slate-200/90" aria-hidden />
            <div className="flex min-w-0 flex-1 items-center justify-center gap-1 px-1.5 py-1.5 text-[10px] font-medium text-slate-500">
              <Scale className="size-3 shrink-0 text-slate-400" strokeWidth={2} aria-hidden />
              <span className="truncate">Parity</span>
            </div>
          </div>
        </div>

        <p className="border-b border-slate-100 bg-white px-3 py-2 text-[11px] leading-snug text-slate-600">
          Compare your rates with competitors and monitor channel parity across dates.
        </p>

        <div className="grid grid-cols-2 gap-2.5 bg-slate-50/50 p-3">
          <div className="flex min-w-0 flex-col rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-sm">
            <p className="text-[11px] font-semibold leading-tight text-slate-900">Competitor pricing</p>
            <p className="mt-1 text-[10px] leading-snug text-slate-500">Rates vs market by date.</p>
            <div className="mt-2 flex h-10 flex-1 items-end justify-between gap-1.5 px-0.5">
              {[
                { lo: 22, hi: 78, you: 52 },
                { lo: 18, hi: 72, you: 58 },
                { lo: 28, hi: 88, you: 44 },
                { lo: 20, hi: 80, you: 66 }
              ].map((col, i) => (
                <div key={i} className="relative h-full w-4 shrink-0">
                  <div
                    className="absolute bottom-0 left-1/2 w-px -translate-x-1/2 rounded-full bg-slate-200"
                    style={{ height: '100%' }}
                  />
                  <div
                    className="absolute left-1/2 w-1.5 -translate-x-1/2 rounded-sm bg-slate-300/35"
                    style={{
                      bottom: `${col.lo}%`,
                      height: `${col.hi - col.lo}%`
                    }}
                  />
                  <div
                    className="absolute left-1/2 size-[6px] -translate-x-1/2 rounded-full border-2 border-white bg-[#2196F3] shadow-sm"
                    style={{ bottom: `${col.you}%` }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] tabular-nums leading-none text-slate-400">Thu · Fri · Sat · Sun</p>
          </div>

          <div className="flex min-w-0 flex-col rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-sm">
            <p className="text-[11px] font-semibold leading-tight text-slate-900">Parity insights</p>
            <p className="mt-1 text-[10px] leading-snug text-slate-500">Win, meet, or loss by channel.</p>
            <div className="mt-2 flex flex-1 flex-col justify-center space-y-1.5">
              {parityMatrix.map((row, ri) => (
                <div
                  key={parityChannels[ri]}
                  className="grid grid-cols-[1.1rem_1fr_1fr_1fr_1fr] items-center gap-1"
                >
                  <span className="text-[10px] font-medium tabular-nums text-slate-500">{parityChannels[ri]}</span>
                  {row.map((tint, ci) => (
                    <div
                      key={`${ri}-${ci}`}
                      className="h-2.5 rounded-[3px]"
                      style={{
                        backgroundColor: `${tint}35`,
                        boxShadow: `inset 0 0 0 1px ${tint}50`
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HOTSPOTS: HotspotConfig[] = [
  {
    id: 'details',
    leftPct: 18.5,
    topPct: 25,
    title: 'View details',
    summary:
      'Opens a panel with two tabs: competitor pricing by date, and parity insights by channel—so you can compare rates and spot issues quickly.',
    benefit:
      'Review competitor rates and parity in one place, right from Rates & Inventory.'
  },
  {
    id: 'parity',
    leftPct: 31,
    topPct: 24,
    title: 'Parity analysis',
    summary:
      'The background color behind each date shows how your rate compares with OTA prices.',
    benefit: 'Scan the week for mismatches without opening each date.'
  },
  {
    id: 'graph',
    leftPct: 25.5,
    topPct: 42,
    graphPricing: {
      yourCheapest: 400,
      yourRatePlan: 'Member exclusive · Brand.com',
      competitorMin: 300,
      competitorMinPlan: 'Advance purchase · Booking.com',
      competitorMax: 600,
      competitorMaxPlan: 'Flexible BAR · Expedia'
    },
    benefit: 'Spot overshoot or underpricing in a second — then tune only the dates that need it.'
  }
];

/** Parity hotspot tooltip — Meet / Win / Loss cards (matches parity onboarding reference). */
const PARITY_TOOLTIP_LEGEND = {
  meet: { bar: '#F9C13E', bg: '#FFF9E6', border: '#FDE68A' },
  win: { bar: '#66C16F', bg: '#EDF9F1', border: '#C6F1D6' },
  loss: { bar: '#DC352E', bg: '#FEECEB', border: '#FBCFD0' }
} as const;

type ParityTooltipLegendSpec = (typeof PARITY_TOOLTIP_LEGEND)[keyof typeof PARITY_TOOLTIP_LEGEND];

function ParityLegendTooltipCard({
  title,
  subtitle,
  spec
}: {
  title: string;
  subtitle: string;
  spec: ParityTooltipLegendSpec;
}) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-md border px-1.5 pb-1.5 pt-1.5 text-center shadow-sm"
      style={{ borderColor: spec.border, backgroundColor: spec.bg }}
    >
      <div
        className="mx-auto mb-1.5 h-2 w-full max-w-[3.25rem] shrink-0 rounded-full"
        style={{ backgroundColor: spec.bar }}
      />
      <p className="text-[11px] font-bold leading-tight text-[#1a1a1a]">{title}</p>
      <p className="mt-0.5 text-[10px] leading-snug text-[#666666]">{subtitle}</p>
    </div>
  );
}

function ParityTintExplainer({ withTopMargin = true }: { withTopMargin?: boolean }) {
  const sample = PARITY_TOOLTIP_LEGEND.win;

  return (
    <div
      className={cn('space-y-1.5', withTopMargin && 'mt-2')}
      aria-label="Parity analysis: your direct rate vs OTA, background colors"
    >
      <div className="rounded-lg border border-slate-200/90 bg-white p-2 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
        <p className="mb-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          Parity grid
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          <ParityLegendTooltipCard title="Meet" subtitle="Rates match" spec={PARITY_TOOLTIP_LEGEND.meet} />
          <ParityLegendTooltipCard title="Win" subtitle="OTA higher" spec={PARITY_TOOLTIP_LEGEND.win} />
          <ParityLegendTooltipCard title="Loss" subtitle="OTA lower" spec={PARITY_TOOLTIP_LEGEND.loss} />
        </div>
        <p className="mt-1.5 border-t border-slate-200/90 pt-1.5 text-center text-[10px] leading-snug text-slate-600">
          Cell backgrounds mirror these states so you can scan parity issues in seconds.
        </p>
      </div>

      <div className="flex gap-2.5 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div
          className="w-1 shrink-0 self-stretch rounded-full"
          style={{ backgroundColor: sample.bar }}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium text-slate-500">Illustrative example</p>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span
              className="rounded-md px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white"
              style={{ backgroundColor: sample.bar }}
            >
              Win
            </span>
            <span className="text-[11px] font-semibold tabular-nums text-slate-900">
              Parity <span className="text-slate-400">·</span> 76%
            </span>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
            <span className="font-medium text-slate-800">Win</span> means at least one OTA shows a{' '}
            <span className="font-medium text-slate-800">higher</span> rate than yours that day — your price is more
            competitive on that date.
          </p>
        </div>
      </div>
    </div>
  );
}

function GraphPricingRows({ gp, withTopMargin = true }: { gp: GraphPricing; withTopMargin?: boolean }) {
  const above = gp.yourCheapest - gp.competitorMin;
  const below = gp.competitorMax - gp.yourCheapest;

  const rows = [
    {
      key: 'you',
      label: 'Your rate',
      plan: gp.yourRatePlan,
      amount: gp.yourCheapest,
      accent: 'border-blue-200/90 bg-blue-50/90',
      bar: 'bg-blue-500'
    },
    {
      key: 'min',
      label: 'Competitor low',
      plan: gp.competitorMinPlan,
      amount: gp.competitorMin,
      accent: 'border-emerald-200/90 bg-emerald-50/90',
      bar: 'bg-emerald-500'
    },
    {
      key: 'max',
      label: 'Competitor high',
      plan: gp.competitorMaxPlan,
      amount: gp.competitorMax,
      accent: 'border-red-200/90 bg-red-50/90',
      bar: 'bg-red-500'
    }
  ] as const;

  return (
    <div className={cn('space-y-2', withTopMargin && 'mt-2')} aria-label="Example rates and rate plans">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Sample rates &amp; plans</p>
      {rows.map((r) => (
        <div key={r.key} className={cn('flex gap-2.5 rounded-lg border p-2.5', r.accent)}>
          <div className={cn('mt-0.5 h-9 w-1 shrink-0 rounded-full', r.bar)} aria-hidden />
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">{r.label}</div>
            <p className="mt-0.5 break-words text-[11px] leading-snug text-slate-700">{r.plan}</p>
            <p className="mt-1 text-[16px] font-bold tabular-nums leading-none tracking-tight text-slate-900">
              {formatUsd(r.amount)}
            </p>
          </div>
        </div>
      ))}
      <p className="rounded-md border border-slate-100 bg-slate-50 px-2 py-2 text-center text-[11px] font-semibold tabular-nums text-slate-700">
        <span className="text-emerald-700">+{formatUsd(above)}</span>
        <span className="mx-1 text-slate-500">vs low</span>
        <span className="text-slate-400">·</span>
        <span className="mx-1 text-red-600">−{formatUsd(below)}</span>
        <span className="text-slate-500">vs high</span>
      </p>
    </div>
  );
}

function HotspotTooltipBody({ h }: { h: HotspotConfig }) {
  const gp = h.graphPricing;
  return (
    <>
      {h.title ? (
        <p className="text-[13px] font-semibold leading-snug tracking-tight text-slate-900">{h.title}</p>
      ) : null}
      {h.summary ? <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{h.summary}</p> : null}
      {gp ? (
        <GraphPricingRows gp={gp} withTopMargin={Boolean(h.title || h.summary)} />
      ) : h.id === 'details' ? (
        <DetailsDrawerExplainer withTopMargin={Boolean(h.title || h.summary)} />
      ) : h.id === 'parity' ? (
        <ParityTintExplainer withTopMargin={Boolean(h.title || h.summary)} />
      ) : h.stats ? (
        <div
          className="mt-2.5 rounded-lg border border-slate-200/90 bg-slate-50 px-2.5 py-2.5"
          aria-label="Example data"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2753eb]">
            {h.statsSectionTitle ?? 'Example'}
          </p>
          <dl className="mt-2 space-y-2">
            {h.stats.map((row) => (
              <div key={row.label} className="grid gap-0.5 border-b border-slate-200/70 pb-2 last:border-0 last:pb-0">
                <dt className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{row.label}</dt>
                <dd className="break-words text-[12px] font-medium leading-snug text-slate-900">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
      {h.id !== 'details' ? (
        <p className="mt-2.5 border-t border-slate-200/80 pt-2 text-[12px] font-medium leading-snug text-slate-700">
          <span className={h.id === 'parity' ? 'font-semibold text-slate-600' : 'text-emerald-700'}>
            Why it matters ·{' '}
          </span>
          {h.benefit}
        </p>
      ) : null}
    </>
  );
}

function hotspotAriaLabel(h: HotspotConfig): string {
  const prefix = h.title ? `${h.title}. ` : '';
  if (h.graphPricing) {
    const g = h.graphPricing;
    return `${prefix}Your ${g.yourRatePlan} ${formatUsd(g.yourCheapest)}. Competitor low ${formatUsd(g.competitorMin)}, high ${formatUsd(g.competitorMax)}. ${h.benefit}`;
  }
  if (h.id === 'parity') {
    return `${prefix}${h.summary ?? ''} Parity grid: Meet Win Loss cards. Sample Win: parity score 76 percent. Win means at least one OTA is priced higher than your rate that day. ${h.benefit}`;
  }
  if (h.id === 'details') {
    return `${prefix}${h.summary ?? ''} Competitor pricing and parity insights preview. ${h.benefit}`;
  }
  return `${prefix}${h.summary ?? ''} ${h.benefit}`;
}

const TOOLTIP_ARROW_W = 14;
const TOOLTIP_ARROW_H = 8;
const TOOLTIP_ARROW_HALF = TOOLTIP_ARROW_W / 2;
const TOOLTIP_Z = 2147483000;

type TipBox = {
  left: number;
  top: number;
  placement: 'above' | 'below';
  arrowLeft: number;
};

function layoutTipNearAnchor(ar: DOMRect, tipW: number, tipH: number): TipBox {
  const m = 10;
  /** Keep the portaled tooltip from covering the anchor; otherwise Chrome moves hit-testing to the tooltip,
   *  the dot gets `mouseleave` immediately, and hover feels "dead" unless the tooltip receives enter in the same tick. */
  const anchorGap = 14;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const tw = Math.min(Math.max(tipW, 200), Math.min(360, vw - 2 * m));
  const th = Math.max(tipH, 80);
  const cx = ar.left + ar.width / 2;
  let left = cx - tw / 2;
  left = Math.max(m, Math.min(left, vw - tw - m));

  const overlapsAnchor = (topPx: number) => {
    const tipLeft = left;
    const tipRight = left + tw;
    const tipTop = topPx;
    const tipBottom = topPx + th;
    const xOverlap = tipRight > ar.left - 2 && tipLeft < ar.right + 2;
    const yOverlap = tipBottom > ar.top - 2 && tipTop < ar.bottom + 2;
    return xOverlap && yOverlap;
  };

  let placement: 'above' | 'below' = 'below';
  let top = ar.bottom + anchorGap;
  if (top + th > vh - m) {
    placement = 'above';
    top = ar.top - th - anchorGap;
  }
  if (top < m) {
    placement = 'below';
    top = ar.bottom + anchorGap;
    if (top + th > vh - m) {
      top = Math.max(m, vh - th - m);
    }
  }

  if (overlapsAnchor(top)) {
    const belowTop = ar.bottom + anchorGap;
    const aboveTop = ar.top - th - anchorGap;
    const fitsBelow = belowTop + th <= vh - m;
    const fitsAbove = aboveTop >= m;
    if (fitsBelow && (!fitsAbove || belowTop + th / 2 <= vh / 2)) {
      placement = 'below';
      top = belowTop;
    } else if (fitsAbove) {
      placement = 'above';
      top = aboveTop;
    } else {
      placement = 'below';
      top = Math.max(m, Math.min(belowTop, vh - th - m));
    }
  }

  const arrowLeft = Math.round(
    Math.min(Math.max(cx - left - TOOLTIP_ARROW_HALF, 10), tw - 10 - TOOLTIP_ARROW_W)
  );
  return { left, top, placement, arrowLeft };
}

/** Pointer toward the hotspot; placement = tooltip above anchor (arrow below card) or below anchor (arrow above card). */
function HotspotTooltipArrow({
  direction,
  className
}: {
  direction: 'down' | 'up';
  className?: string;
}) {
  const stroke = 'rgba(203, 213, 225, 0.95)';
  if (direction === 'down') {
    return (
      <svg
        width={TOOLTIP_ARROW_W}
        height={TOOLTIP_ARROW_H}
        viewBox={`0 0 ${TOOLTIP_ARROW_W} ${TOOLTIP_ARROW_H}`}
        className={cn('shrink-0 text-white drop-shadow-[0_1px_1px_rgba(15,23,42,0.06)]', className)}
        aria-hidden
      >
        <path
          d={`M0 0.5 L${TOOLTIP_ARROW_HALF} ${TOOLTIP_ARROW_H} L${TOOLTIP_ARROW_W} 0.5 Z`}
          fill="currentColor"
          stroke={stroke}
          strokeWidth={1}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width={TOOLTIP_ARROW_W}
      height={TOOLTIP_ARROW_H}
      viewBox={`0 0 ${TOOLTIP_ARROW_W} ${TOOLTIP_ARROW_H}`}
      className={cn('shrink-0 text-white drop-shadow-[0_1px_1px_rgba(15,23,42,0.06)]', className)}
      aria-hidden
    >
      <path
        d={`M0 ${TOOLTIP_ARROW_H - 0.5} L${TOOLTIP_ARROW_HALF} 0.5 L${TOOLTIP_ARROW_W} ${TOOLTIP_ARROW_H - 0.5} Z`}
        fill="currentColor"
        stroke={stroke}
        strokeWidth={1}
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SetPinned = (value: string | null | ((prev: string | null) => string | null)) => void;

/**
 * Each hotspot owns hover + portaled tooltip so position is set synchronously from the anchor rect
 * (avoids parent/tipRef timing bugs). Tooltip body content is unchanged (HotspotTooltipBody).
 */
function HotspotWithTooltip({
  h,
  pinnedId,
  setPinnedId
}: {
  h: HotspotConfig;
  pinnedId: string | null;
  setPinnedId: SetPinned;
}) {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const tipRef = useRef<HTMLDivElement | null>(null);
  const tipRafRef = useRef({ outer: 0, inner: 0 });
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [hovering, setHovering] = useState(false);
  const [tipBox, setTipBox] = useState<TipBox | null>(null);

  const pinned = pinnedId === h.id;
  const showTip = hovering || pinned;

  const clearLeaveTimer = useCallback(() => {
    if (leaveTimerRef.current !== null) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  }, []);

  const scheduleLeave = useCallback(() => {
    clearLeaveTimer();
    leaveTimerRef.current = setTimeout(() => setHovering(false), 600);
  }, [clearLeaveTimer]);

  const placeFromAnchor = useCallback(() => {
    const el = anchorRef.current;
    if (!el) return;
    const ar = el.getBoundingClientRect();
    const tip = tipRef.current;
    if (!tip) {
      setTipBox(layoutTipNearAnchor(ar, 340, 280));
      return;
    }
    const tr = tip.getBoundingClientRect();
    const w = tr.width > 4 ? tr.width : 340;
    const hgt = tr.height > 4 ? tr.height : 280;
    setTipBox(layoutTipNearAnchor(ar, w, hgt));
  }, []);

  const onOpenHover = useCallback(() => {
    clearLeaveTimer();
    setPinnedId((p) => (p !== null && p !== h.id ? null : p));
    setHovering(true);
    const el = anchorRef.current;
    if (el) {
      setTipBox(layoutTipNearAnchor(el.getBoundingClientRect(), 340, 280));
    }
  }, [clearLeaveTimer, h.id, setPinnedId]);

  useLayoutEffect(() => {
    if (!showTip) {
      setTipBox(null);
      return;
    }
    placeFromAnchor();
    tipRafRef.current.outer = requestAnimationFrame(() => {
      tipRafRef.current.inner = requestAnimationFrame(() => placeFromAnchor());
    });
    const onScrollOrResize = () => placeFromAnchor();
    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('scroll', onScrollOrResize, true);
    const tip = tipRef.current;
    const ro =
      typeof ResizeObserver !== 'undefined' && tip ? new ResizeObserver(onScrollOrResize) : null;
    if (tip) ro?.observe(tip);
    return () => {
      cancelAnimationFrame(tipRafRef.current.outer);
      cancelAnimationFrame(tipRafRef.current.inner);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('scroll', onScrollOrResize, true);
      ro?.disconnect();
    };
  }, [showTip, h.id, placeFromAnchor]);

  useEffect(() => () => clearLeaveTimer(), [clearLeaveTimer]);

  const portal =
    showTip &&
    tipBox &&
    typeof document !== 'undefined' &&
    createPortal(
      <div
        ref={(node) => {
          tipRef.current = node;
          if (node) requestAnimationFrame(() => placeFromAnchor());
        }}
        role="tooltip"
        id={`navigator-hotspot-tip-${h.id}`}
        className="fixed flex w-[min(360px,calc(100vw-20px))] max-w-[calc(100vw-20px)] flex-col items-stretch text-left text-[13px] text-slate-900 opacity-100"
        style={{ left: tipBox.left, top: tipBox.top, zIndex: TOOLTIP_Z }}
        onPointerEnter={() => {
          clearLeaveTimer();
          setHovering(true);
        }}
        onPointerLeave={scheduleLeave}
        onMouseEnter={() => {
          clearLeaveTimer();
          setHovering(true);
        }}
        onMouseLeave={scheduleLeave}
      >
        {tipBox.placement === 'below' ? (
          <div className="shrink-0 leading-none" style={{ marginLeft: tipBox.arrowLeft }}>
            <HotspotTooltipArrow direction="up" className="-mb-px" />
          </div>
        ) : null}
        <div className="rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3.5 shadow-[0_20px_50px_-16px_rgba(15,23,42,0.28)] ring-1 ring-slate-950/[0.04]">
          <HotspotTooltipBody h={h} />
        </div>
        {tipBox.placement === 'above' ? (
          <div className="shrink-0 leading-none" style={{ marginLeft: tipBox.arrowLeft }}>
            <HotspotTooltipArrow direction="down" className="-mt-px" />
          </div>
        ) : null}
      </div>,
      document.body
    );

  return (
    <>
      <button
        ref={anchorRef}
        type="button"
        className={cn(
          'absolute z-[200] flex size-12 cursor-pointer items-center justify-center rounded-full outline-none touch-manipulation',
          'focus-visible:ring-2 focus-visible:ring-[#2753eb] focus-visible:ring-offset-2',
          showTip && 'ring-2 ring-white/90 ring-offset-2 ring-offset-transparent'
        )}
        style={{
          left: `${h.leftPct}%`,
          top: `${h.topPct}%`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'auto',
          backgroundColor: 'rgba(255,255,255,0.001)'
        }}
        aria-label={hotspotAriaLabel(h)}
        aria-expanded={showTip}
        aria-controls={`navigator-hotspot-tip-${h.id}`}
        onMouseEnter={onOpenHover}
        onMouseLeave={scheduleLeave}
        onPointerEnter={onOpenHover}
        onPointerLeave={scheduleLeave}
        onFocus={onOpenHover}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          clearLeaveTimer();
          setPinnedId((cur) => (cur === h.id ? null : h.id));
          setHovering(true);
          const el = anchorRef.current;
          if (el) setTipBox(layoutTipNearAnchor(el.getBoundingClientRect(), 340, 280));
        }}
      >
        <span
          className="pointer-events-none absolute inline-flex size-7 animate-ping rounded-full bg-[#2753eb]/40 opacity-55"
          aria-hidden
        />
        <span
          className="pointer-events-none relative inline-flex size-4 rounded-full border-2 border-white bg-[#2753eb] shadow-md"
          aria-hidden
        />
      </button>
      {portal}
    </>
  );
}

type NavigatorIntelligenceTeaserImageProps = {
  className?: string;
  onRequestTrial: () => void;
  /** When true, a slim bar above the preview image states the user is not subscribed (limited / preview experience). */
  notSubscribedLead?: boolean;
  /** Limited flow: hide the whole preview block; copy references the top Navigator banner. */
  onDismissPreview?: () => void;
  /** After submitting the 30-day trial form: primary CTA shows request sent; access is not instant. */
  trialRequestSubmitted?: boolean;
  /** Shapes lead strip + overlay copy when the 30-day preview has ended vs never subscribed. */
  navigatorUpsellContext?: 'limited' | 'trial_expired';
};

const SUPPORT_EMAIL = 'help@rategain.com';

export function NavigatorIntelligenceTeaserImage({
  className,
  onRequestTrial,
  notSubscribedLead = false,
  onDismissPreview,
  trialRequestSubmitted = false,
  navigatorUpsellContext = 'limited'
}: NavigatorIntelligenceTeaserImageProps) {
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [upgradeRequestModalOpen, setUpgradeRequestModalOpen] = useState(false);

  useEffect(() => {
    if (pinnedId === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPinnedId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pinnedId]);

  return (
    <div
      className={cn(
        'relative w-full rounded-lg border border-[#e2e8f0] bg-[#fafafa] shadow-[0_1px_3px_rgba(15,23,42,0.06)]',
        notSubscribedLead ? 'overflow-visible' : 'overflow-hidden',
        className
      )}
    >
      {notSubscribedLead ? (
        <div className="relative z-[1] border-b border-slate-200/90 bg-gradient-to-r from-slate-100 via-white to-[#eff6ff] px-3 py-2 text-center sm:px-4 sm:py-2.5">
          <p className="text-[11px] leading-snug text-slate-600 sm:text-[12px]">
            {navigatorUpsellContext === 'trial_expired' ? (
              <>
                Continue comparing your rates with competitors and tracking parity in one place. Upgrade to restore
                real-time insights across your dates and channels.
              </>
            ) : (
              <>
                The data below is illustrative and shows how competitor pricing and parity insights will appear after
                subscribing.
              </>
            )}
          </p>
        </div>
      ) : null}
      {/* Hotspot % positions are relative to this box only so a lead strip above does not shift dots. */}
      <div
        className={cn(
          'relative w-full',
          notSubscribedLead && 'overflow-visible rounded-b-lg'
        )}
      >
        {/* Tight to image height (no padding below); overlay centered in snapshot via inset-0 flex. */}
        <div className="relative w-full leading-none">
          <img
            src={PREVIEW_SRC}
            alt="Preview of Navigator competitor and parity analysis in UNO — same layout as subscribed users"
            className={cn(
              'relative z-0 block h-auto w-full align-top select-none object-contain object-left-top pointer-events-none',
              notSubscribedLead ? 'rounded-none' : 'rounded-lg'
            )}
            width={2900}
            height={438}
            loading="eager"
            decoding="async"
            draggable={false}
          />

          <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-2 py-2 sm:px-3 sm:py-2.5">
            <div
              className={cn(
                'pointer-events-auto flex w-[min(380px,calc(100%-0.5rem))] max-w-[min(400px,calc(100%-1rem))] flex-col items-stretch gap-2 rounded-xl border border-white/25',
                'bg-slate-900/78 px-3 py-3 shadow-[0_8px_28px_rgba(0,0,0,0.38)] backdrop-blur-md sm:px-3.5 sm:py-3'
              )}
            >
          <div className="text-center text-[11px] leading-snug text-white/90 sm:text-[12px]">
            {trialRequestSubmitted && navigatorUpsellContext !== 'trial_expired' ? (
              <p>
                We&apos;ve received your trial request. Navigator access is turned on by our team after review, so it
                won&apos;t appear immediately. The snapshot below stays illustrative. Questions?{' '}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-white underline decoration-white/45 underline-offset-2 transition-colors hover:decoration-white"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
            ) : navigatorUpsellContext === 'trial_expired' ? (
              <>
                <p className="text-[14px] font-semibold text-white">Your trial has ended</p>
                <p className="mt-1 text-[11px] leading-snug text-white/85 sm:text-[12px]">
                  You&apos;re no longer seeing real-time competitor pricing insights. Upgrade to continue tracking your
                  pricing and stay competitive.
                </p>
              </>
            ) : (
              <>
                <p className="text-[14px] font-semibold text-white">Unlock your pricing insights</p>
                <p className="mt-1 text-[11px] leading-snug text-white/85 sm:text-[12px]">
                  See your actual pricing gaps across dates and competitors
                </p>
              </>
            )}
          </div>
          {navigatorUpsellContext === 'trial_expired' ? (
            <button
              type="button"
              aria-label="Request upgrade to full Navigator version"
              className="inline-flex h-9 min-h-9 w-full min-w-0 cursor-pointer items-center justify-center rounded-md border-0 bg-[#2753eb] px-2 py-1.5 text-center text-[12px] font-semibold leading-tight text-white shadow-md transition-colors hover:bg-[#1e45c7] sm:h-10 sm:text-[13px]"
              onClick={(e) => {
                e.stopPropagation();
                setUpgradeRequestModalOpen(true);
              }}
            >
              👉 Upgrade to continue
            </button>
          ) : (
            <Button
              type="button"
              disabled={trialRequestSubmitted}
              aria-label={
                trialRequestSubmitted
                  ? 'Trial request already submitted; our team will enable access after review'
                  : 'Start your 30-day free trial to unlock competitor insights'
              }
              onClick={(e) => {
                e.stopPropagation();
                if (!trialRequestSubmitted) onRequestTrial();
              }}
              className="inline-flex h-9 min-h-9 w-full min-w-0 items-center justify-center bg-[#2753eb] px-2 py-1.5 text-center text-[12px] font-semibold leading-tight text-white shadow-md hover:bg-[#1e45c7] disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-white/90 disabled:shadow-none disabled:hover:bg-slate-600 sm:h-10 sm:text-[13px]"
            >
              <span className="min-w-0 px-0.5">
                {trialRequestSubmitted ? 'Request already sent' : '👉 Start 30-day free trial'}
              </span>
            </Button>
          )}
          {onDismissPreview ? (
            <div className="pointer-events-auto border-t border-white/15 pt-2">
              <button
                type="button"
                className="w-full rounded-md py-0.5 text-center text-[10px] font-semibold leading-snug text-white/90 underline decoration-white/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white/75 sm:text-[11px]"
                onClick={(e) => {
                  e.stopPropagation();
                  onDismissPreview();
                }}
              >
                Maybe later
              </button>
              <p className="mt-1 text-center text-[9px] leading-snug text-white/60 sm:text-[10px]">
                {navigatorUpsellContext === 'trial_expired'
                  ? 'Upgrade anytime from the top banner'
                  : 'You can access this preview anytime from the top blue banner.'}
              </p>
            </div>
          ) : null}
            </div>
          </div>

        <NavigatorUpgradeRequestModal open={upgradeRequestModalOpen} onOpenChange={setUpgradeRequestModalOpen} />

        {navigatorUpsellContext !== 'trial_expired'
          ? HOTSPOTS.map((h) => (
              <HotspotWithTooltip key={h.id} h={h} pinnedId={pinnedId} setPinnedId={setPinnedId} />
            ))
          : null}
        </div>
      </div>
    </div>
  );
}
