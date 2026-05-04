import { BarChart3, Lightbulb, Scale, ShieldCheck, TrendingDown } from 'lucide-react';

/**
 * Limited onboarding previews:
 *   • NavigatorIntroPreview     — Step 0 glimpse: combined mini chart + parity list
 *   • CompetitorPricingPreview  — multi-day market chart (mirrors RateCandlestickChart)
 *   • ChannelParityPreview      — per-OTA parity panel with a parity score bar
 *
 * Visuals use the same brand language as the live product so each step
 * doubles as a teaser for what users will see inside.
 */

const SECTION_KICKER = 'text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700';
const SECTION_AUX = 'text-[10px] leading-none text-slate-400';
const STAGE_LABEL = 'text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400';
const PILL_BASE =
  'inline-flex items-center gap-1 rounded-full px-2 py-[3px] text-[10px] font-semibold leading-none ring-1';
const PILL_RED = `${PILL_BASE} bg-red-50 text-red-700 ring-red-200`;
const PILL_GREEN = `${PILL_BASE} bg-emerald-50 text-emerald-700 ring-emerald-200`;

function ArrowDivider() {
  return (
    <div
      className="flex w-7 shrink-0 items-center justify-center self-stretch text-slate-300"
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 7h10M8 3l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function SectionHeader({ kicker, label }: { kicker: string; label: string }) {
  return (
    <div className="mb-2 flex items-baseline justify-between gap-3">
      <p className={SECTION_KICKER}>{kicker}</p>
      <p className={SECTION_AUX}>{label}</p>
    </div>
  );
}

function InsightCallout({ icon, title, body }: { icon: 'bulb' | 'down' | 'shield'; title: string; body: string }) {
  const Icon = icon === 'bulb' ? Lightbulb : icon === 'down' ? TrendingDown : ShieldCheck;
  const tone =
    icon === 'down'
      ? { wrap: 'border-red-100 bg-red-50/40', icon: 'bg-red-100 text-red-700', title: 'text-red-900' }
      : icon === 'shield'
        ? { wrap: 'border-emerald-100 bg-emerald-50/40', icon: 'bg-emerald-100 text-emerald-700', title: 'text-emerald-900' }
        : { wrap: 'border-amber-100 bg-amber-50/50', icon: 'bg-amber-100 text-amber-800', title: 'text-amber-900' };
  return (
    <div className={`mt-3 flex items-start gap-2.5 rounded-lg border px-2.5 py-2 ${tone.wrap}`}>
      <span className={`mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${tone.icon}`}>
        <Icon className="h-3 w-3" strokeWidth={2.4} />
      </span>
      <div className="min-w-0">
        <p className={`text-[11px] font-semibold leading-snug ${tone.title}`}>{title}</p>
        <p className="mt-0.5 text-[10.5px] leading-snug text-slate-600">{body}</p>
      </div>
    </div>
  );
}

/* ===========================================================================
 *  STEP 1 — COMPETITOR PRICING (multi-day mini chart)
 * ========================================================================= */

const COMP_DATES = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
/** Y for the competitor max (top of spread). Higher = pricier (so smaller y in SVG). */
const COMP_MAX_Y = [30, 28, 26, 26, 30, 32, 30];
const COMP_MIN_Y = [70, 72, 74, 74, 70, 68, 70];
/** Before — your rate sits at top (above max) on Sat (idx 3). */
const YOUR_Y_BEFORE = [50, 56, 48, 16, 60, 54, 50];
/** After — Sat moves into spread near competitor avg. */
const YOUR_Y_AFTER = [50, 56, 48, 50, 60, 54, 50];
const HIGHLIGHT_IDX = 3;

function MultiDayChart({ yourY, tone }: { yourY: number[]; tone: 'before' | 'after' }) {
  const w = 220;
  const h = 110;
  const colW = w / COMP_DATES.length;
  const dotColor = tone === 'before' ? '#ef4444' : '#2196F3';
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="block h-[112px] w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <line x1="0" y1="22" x2={w} y2="22" stroke="#eef2f6" strokeWidth="0.6" strokeDasharray="2 3" />
      <line x1="0" y1="78" x2={w} y2="78" stroke="#eef2f6" strokeWidth="0.6" strokeDasharray="2 3" />

      <rect
        x={HIGHLIGHT_IDX * colW + 2}
        y="6"
        width={colW - 4}
        height="100"
        rx="4"
        fill={tone === 'before' ? '#fef2f2' : '#ecfdf5'}
        opacity="0.6"
      />

      {COMP_DATES.map((d, i) => {
        const cx = i * colW + colW / 2;
        return (
          <g key={d}>
            <line x1={cx} y1={COMP_MAX_Y[i]} x2={cx} y2={COMP_MIN_Y[i]} stroke="#cbd5e1" strokeWidth="1.5" />
            <line
              x1={cx - 5}
              y1={COMP_MAX_Y[i]}
              x2={cx + 5}
              y2={COMP_MAX_Y[i]}
              stroke="#f44336"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1={cx - 5}
              y1={COMP_MIN_Y[i]}
              x2={cx + 5}
              y2={COMP_MIN_Y[i]}
              stroke="#4caf50"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text x={cx} y={h - 2} textAnchor="middle" fontSize="7" fill="#94a3b8" fontWeight="600">
              {d}
            </text>
          </g>
        );
      })}

      {/* Your-rate trend line */}
      <polyline
        points={yourY.map((y, i) => `${i * colW + colW / 2},${y}`).join(' ')}
        fill="none"
        stroke="#2196F3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {yourY.map((y, i) => (
        <circle
          key={i}
          cx={i * colW + colW / 2}
          cy={y}
          r={i === HIGHLIGHT_IDX ? 4.5 : 2.5}
          fill={i === HIGHLIGHT_IDX ? dotColor : '#2196F3'}
          stroke="#ffffff"
          strokeWidth={i === HIGHLIGHT_IDX ? 2 : 1.25}
        />
      ))}

      {/* Highlighted-date rate label */}
      <g transform={`translate(${HIGHLIGHT_IDX * colW + colW / 2 + 8} ${yourY[HIGHLIGHT_IDX] + 1})`}>
        <rect x="0" y="-7" rx="3" ry="3" width="36" height="14" fill="#0f172a" opacity="0.92" />
        <text x="18" y="2.5" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#ffffff">
          {tone === 'before' ? '₹3,800' : '₹3,300'}
        </text>
      </g>
    </svg>
  );
}

function CompetitorPanel({
  variant,
  yourY,
  delta,
  badge,
  badgeTone,
  microCopy
}: {
  variant: 'before' | 'after';
  yourY: number[];
  delta: string;
  badge: string;
  badgeTone: 'red' | 'green';
  microCopy: string;
}) {
  return (
    <div className={`onboard-ba-panel-${variant} flex min-w-0 flex-1 flex-col rounded-xl border border-slate-200/80 bg-white p-2.5`}>
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className={STAGE_LABEL}>{variant === 'before' ? 'Before' : 'After'}</span>
        <span
          className={`text-[9.5px] font-semibold tabular-nums ${
            badgeTone === 'red' ? 'text-red-600' : 'text-emerald-700'
          }`}
        >
          {delta}
        </span>
      </div>
      <MultiDayChart yourY={yourY} tone={variant} />
      <span className={`mt-1.5 self-center ${badgeTone === 'red' ? PILL_RED : PILL_GREEN}`}>
        <span
          className={`h-1.5 w-1.5 rounded-full ${badgeTone === 'red' ? 'bg-red-500' : 'bg-emerald-500'}`}
          aria-hidden
        />
        {badge}
      </span>
      <p className="mt-1.5 text-center text-[10.5px] leading-snug text-slate-500">{microCopy}</p>
    </div>
  );
}

export function CompetitorPricingPreview() {
  return (
    <div className="onboard-limited-pricing-visual w-full max-w-[460px] mx-auto" aria-hidden>
      <SectionHeader kicker="Competitor pricing" label="Wed → Tue · King" />
      <div className="flex items-stretch gap-1.5">
        <CompetitorPanel
          variant="before"
          yourY={YOUR_Y_BEFORE}
          delta="+₹500 on Sat"
          badge="Above market"
          badgeTone="red"
          microCopy="Saturday is priced higher than every competitor."
        />
        <ArrowDivider />
        <CompetitorPanel
          variant="after"
          yourY={YOUR_Y_AFTER}
          delta="−₹500 on Sat"
          badge="In market range"
          badgeTone="green"
          microCopy="Now sitting near the competitor average."
        />
      </div>

      <InsightCallout
        icon="down"
        title="Why this matters"
        body="Nights priced above the competitor range quietly drop conversion — guests pick the cheaper option in seconds."
      />

      <p className="mt-3 text-center text-[12.5px] font-semibold leading-snug text-slate-800">
        Spot the dates where your rate is working against you
      </p>
    </div>
  );
}

/* ===========================================================================
 *  STEP 2 — CHANNEL PARITY (per-OTA panel + parity score)
 * ========================================================================= */

type ChannelRowData = {
  name: string;
  rate: string;
  status: 'match' | 'lower';
};

function ChannelRow({ name, rate, status, isYours }: ChannelRowData & { isYours?: boolean }) {
  const isLower = status === 'lower';
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-md px-2 py-1.5 ring-1 ${
        isLower
          ? 'bg-red-50/70 ring-red-200/80'
          : isYours
            ? 'bg-slate-50 ring-slate-200/70'
            : 'bg-white ring-slate-200/70'
      }`}
    >
      <div className="flex min-w-0 items-center gap-1.5">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
            isLower ? 'bg-red-500' : isYours ? 'bg-sky-500' : 'bg-emerald-500'
          }`}
          aria-hidden
        />
        <span
          className={`truncate text-[10.5px] font-medium ${
            isLower ? 'text-red-700' : isYours ? 'text-sky-800' : 'text-slate-700'
          }`}
        >
          {name}
          {isYours ? <span className="ml-1 text-[9px] font-semibold uppercase tracking-wide text-slate-400">You</span> : null}
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        {isLower ? (
          <span className="rounded-sm bg-red-100 px-1 py-px text-[8.5px] font-bold uppercase tracking-wide text-red-700">
            −₹350
          </span>
        ) : null}
        <span
          className={`text-[10.5px] font-bold tabular-nums ${
            isLower ? 'text-red-700' : isYours ? 'text-sky-800' : 'text-slate-700'
          }`}
        >
          {rate}
        </span>
      </div>
    </div>
  );
}

function ParityScoreBar({ score }: { score: number }) {
  const tone = score >= 95 ? 'emerald' : score >= 80 ? 'amber' : 'red';
  const fill = tone === 'emerald' ? '#10b981' : tone === 'amber' ? '#f59e0b' : '#ef4444';
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-[9.5px] font-semibold uppercase tracking-wide text-slate-500">Parity score</span>
        <span className="text-[11px] font-bold tabular-nums text-slate-800">{score}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${score}%`, backgroundColor: fill }}
        />
      </div>
    </div>
  );
}

function ParityPanel({
  variant,
  score,
  channels,
  badge,
  badgeTone,
  microCopy
}: {
  variant: 'before' | 'after';
  score: number;
  channels: ChannelRowData[];
  badge: string;
  badgeTone: 'red' | 'green';
  microCopy: string;
}) {
  return (
    <div className={`onboard-ba-panel-${variant} flex min-w-0 flex-1 flex-col rounded-xl border border-slate-200/80 bg-white p-2.5`}>
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <span className={STAGE_LABEL}>{variant === 'before' ? 'Before' : 'After'}</span>
        <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">{channels.length + 1} channels</span>
      </div>
      <div className="mb-2">
        <ParityScoreBar score={score} />
      </div>
      <div className="space-y-1">
        <ChannelRow name="Direct" rate="₹3,300" status="match" isYours />
        {channels.map((c) => (
          <ChannelRow key={c.name} {...c} />
        ))}
      </div>
      <span className={`mt-2 self-center ${badgeTone === 'red' ? PILL_RED : PILL_GREEN}`}>
        <span
          className={`h-1.5 w-1.5 rounded-full ${badgeTone === 'red' ? 'bg-red-500' : 'bg-emerald-500'}`}
          aria-hidden
        />
        {badge}
      </span>
      <p className="mt-1.5 text-center text-[10.5px] leading-snug text-slate-500">{microCopy}</p>
    </div>
  );
}

export function ChannelParityPreview() {
  return (
    <div className="onboard-limited-pricing-visual w-full max-w-[460px] mx-auto" aria-hidden>
      <SectionHeader kicker="Channel parity" label="Across your OTAs" />
      <div className="flex items-stretch gap-1.5">
        <ParityPanel
          variant="before"
          score={72}
          badge="Parity broken"
          badgeTone="red"
          microCopy="MakeMyTrip is selling your room ₹350 cheaper."
          channels={[
            { name: 'Booking.com', rate: '₹3,300', status: 'match' },
            { name: 'Expedia', rate: '₹3,300', status: 'match' },
            { name: 'MakeMyTrip', rate: '₹2,950', status: 'lower' }
          ]}
        />
        <ArrowDivider />
        <ParityPanel
          variant="after"
          score={100}
          badge="Parity met"
          badgeTone="green"
          microCopy="All channels aligned with your direct rate."
          channels={[
            { name: 'Booking.com', rate: '₹3,300', status: 'match' },
            { name: 'Expedia', rate: '₹3,300', status: 'match' },
            { name: 'MakeMyTrip', rate: '₹3,300', status: 'match' }
          ]}
        />
      </div>

      <InsightCallout
        icon="shield"
        title="Why this matters"
        body="When OTAs undercut your direct rate, you lose margin and brand trust — and guests learn to skip your website."
      />

      <p className="mt-3 text-center text-[12.5px] font-semibold leading-snug text-slate-800">
        Catch undercutting OTAs before they steal your direct bookings
      </p>
    </div>
  );
}

/* ===========================================================================
 *  STEP 0 — NAVIGATOR INTRO (glimpse: mini chart + mini parity list)
 * ========================================================================= */

function IntroCompetitorRow({
  label,
  rate,
  dotColor,
  highlight
}: {
  label: string;
  rate: string;
  dotColor: 'red' | 'blue' | 'green';
  highlight?: boolean;
}) {
  const dotClass =
    dotColor === 'red' ? 'bg-red-500' : dotColor === 'green' ? 'bg-emerald-500' : 'bg-sky-500';
  const textClass = highlight ? 'text-sky-800' : 'text-slate-700';
  return (
    <div className="flex items-center justify-between gap-2 rounded-md px-1.5 py-0.5">
      <div className="flex min-w-0 items-center gap-1.5">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} aria-hidden />
        <span className={`truncate text-[10px] font-medium ${textClass}`}>{label}</span>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <span className={`text-[10px] font-bold tabular-nums ${textClass}`}>{rate}</span>
        {highlight ? (
          <span className="text-[9px] font-bold leading-none text-red-600" aria-hidden>
            ↑
          </span>
        ) : null}
      </div>
    </div>
  );
}

function IntroChannelRow({
  name,
  rate,
  status,
  isYours
}: {
  name: string;
  rate: string;
  status: 'match' | 'lower';
  isYours?: boolean;
}) {
  const isLower = status === 'lower';
  return (
    <div className="flex items-center justify-between gap-2 rounded-md px-1.5 py-0.5">
      <div className="flex min-w-0 items-center gap-1.5">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
            isLower ? 'bg-red-500' : isYours ? 'bg-sky-500' : 'bg-emerald-500'
          }`}
          aria-hidden
        />
        <span
          className={`truncate text-[10px] font-medium ${
            isLower ? 'text-red-700' : isYours ? 'text-sky-800' : 'text-slate-700'
          }`}
        >
          {name}
        </span>
      </div>
      <span
        className={`shrink-0 text-[10px] font-bold tabular-nums ${
          isLower ? 'text-red-700' : isYours ? 'text-sky-800' : 'text-slate-700'
        }`}
      >
        {rate}
      </span>
    </div>
  );
}

function IntroVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/40 p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-3">
        <div className="flex flex-col">
          <div className="mb-1.5 flex items-center gap-1">
            <span className="flex h-4 w-4 items-center justify-center rounded-md bg-blue-50 text-[#2753eb] ring-1 ring-blue-200/70">
              <BarChart3 className="h-2.5 w-2.5" strokeWidth={2.4} />
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">Competitor</span>
          </div>
          <div className="space-y-0.5">
            <IntroCompetitorRow label="Competitor max" rate="₹3,500" dotColor="red" />
            <IntroCompetitorRow label="Your rate" rate="₹3,800" dotColor="blue" highlight />
            <IntroCompetitorRow label="Competitor min" rate="₹2,900" dotColor="green" />
          </div>
          <p className="mt-1.5 text-[8.5px] font-medium uppercase tracking-wide text-slate-400">
            Above competitor max
          </p>
        </div>

        <div className="w-px self-stretch bg-gradient-to-b from-transparent via-slate-200 to-transparent" aria-hidden />

        <div className="flex flex-col">
          <div className="mb-1.5 flex items-center gap-1">
            <span className="flex h-4 w-4 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/70">
              <Scale className="h-2.5 w-2.5" strokeWidth={2.4} />
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">Channel parity</span>
          </div>
          <div className="space-y-0.5">
            <IntroChannelRow name="Direct" rate="₹3,300" status="match" isYours />
            <IntroChannelRow name="Booking.com" rate="₹3,300" status="match" />
            <IntroChannelRow name="MakeMyTrip" rate="₹2,950" status="lower" />
          </div>
          <p className="mt-1.5 text-[8.5px] font-medium uppercase tracking-wide text-slate-400">
            3 channels · 1 undercutting
          </p>
        </div>
      </div>
    </div>
  );
}

function ValuePoint({
  icon,
  iconTone,
  title,
  body
}: {
  icon: 'chart' | 'scale';
  iconTone: 'blue' | 'emerald';
  title: string;
  body: string;
}) {
  const Icon = icon === 'chart' ? BarChart3 : Scale;
  const tone =
    iconTone === 'blue'
      ? 'bg-blue-50 text-[#2753eb] ring-blue-200/70'
      : 'bg-emerald-50 text-emerald-700 ring-emerald-200/80';
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200/90 bg-white p-3 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ${tone}`}>
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <h4 className="text-[12.5px] font-bold leading-snug text-slate-900">{title}</h4>
        <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600">{body}</p>
      </div>
    </div>
  );
}

export function NavigatorIntroPreview() {
  return (
    <div className="onboard-limited-pricing-visual w-full max-w-[460px] mx-auto">
      <p className="mb-2.5 text-center text-[12.5px] leading-snug text-slate-600">
        Monitor competitor pricing and fix parity issues across channels.
      </p>

      <IntroVisual />

      <div className="mt-3 grid gap-2">
        <ValuePoint
          icon="chart"
          iconTone="blue"
          title="Spot pricing gaps"
          body="See when your rates are higher or lower than competitors."
        />
        <ValuePoint
          icon="scale"
          iconTone="emerald"
          title="Fix parity across channels"
          body="Keep your prices consistent across OTAs."
        />
      </div>
    </div>
  );
}

/** Backward-compat alias — kept so any existing imports continue to work. */
export const PricingGapWelcomeAnimation = CompetitorPricingPreview;
