import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Info } from 'lucide-react';
import { LegendIconMax, LegendIconMin, LegendIconMyRate } from './CompetitorChartLegendIcons';
import {
  DetailedCompetitorModal,
  type DetailedCompetitorRateCurrency
} from './DetailedCompetitorModal';

/** Matches onboarding UI blue (`OnboardingTour`: `#2753eb` icons / gradient). Prepends `brightness(0)` for raster logos. */
const NAVIGATOR_LOGO_BRAND_FILTER =
  'brightness(0) saturate(100%) invert(29%) sepia(90%) saturate(6194%) hue-rotate(225deg) brightness(98%) contrast(101%)';

/** Room-level view: min/max across competitors (each at their cheapest rate plan for the room). */
export type RoomLevelCompetitorRates = {
  min: number;
  avg: number;
  max: number;
  /** Competitor offer that sits at the market minimum (demo / future API). */
  competitorMinRatePlan: string;
  competitorMinChannel: string;
  competitorMaxRatePlan: string;
  competitorMaxChannel: string;
};

interface CandlestickChartProps {
  dates: Array<{ day: string; date: string; month: string }>;
  rates: number[];
  getCompetitorRates: (dateIndex: number, baseRate: number) => RoomLevelCompetitorRates;
  /** Per-day: which rate plan drives your cheapest grid rate, and channel. */
  myRateMeta?: Array<{ ratePlan: string; channel: string }>;
  /** When set, competitor min/max/avg use this baseline per date; `rates` only drives My Rate (blue line). */
  competitorBaseRates?: number[];
  /** When set, the View Details drawer allows editing Your Rates (Suite). Updates parent state so the main grid stays in sync. */
  onYourRatesChange?: (dateIndex: number, value: string) => void;
  showLegend?: boolean;
  roomType?: string;
  /** Shown in View Details drawer filters (inclusion = rate plan names after "Any"). */
  drawerInclusionPlanNames?: string[];
  ratePlan?: string;
  events?: Array<{
    name: string;
    dateRange: string;
    importance: 'high' | 'medium' | 'low';
    demandLevel: string;
    demandIndex: number;
    demandMultiplier: string;
    confidenceScore: string;
  } | null>;
  /** Drawer uses this for the header label and amount prefix; omit to keep the chart default (Euro). */
  rateCurrency?: DetailedCompetitorRateCurrency;
}

export function RateCandlestickChart({
  dates,
  rates,
  getCompetitorRates,
  myRateMeta,
  competitorBaseRates,
  onYourRatesChange,
  showLegend = true,
  roomType,
  drawerInclusionPlanNames,
  ratePlan,
  events,
  rateCurrency
}: CandlestickChartProps) {
  const [showDetailedView, setShowDetailedView] = useState(false);

  /** Room-level parity: your cheapest rate vs competitor mid (avg) of the spread. */
  const getRoomParity = (myRate: number, compAvg: number) => {
    const parityColors = { Win: '#f97316', Meet: '#22c55e', Loss: '#ef4444' };
    if (!compAvg || myRate <= 0) {
      return { type: 'Meet' as const, score: 78, color: parityColors.Meet };
    }
    const ratio = myRate / compAvg;
    if (ratio < 0.97) {
      return {
        type: 'Win' as const,
        score: Math.min(95, Math.round(68 + (1 - ratio) * 120)),
        color: parityColors.Win
      };
    }
    if (ratio > 1.03) {
      return {
        type: 'Loss' as const,
        score: Math.min(95, Math.round(62 + (ratio - 1) * 80)),
        color: parityColors.Loss
      };
    }
    return { type: 'Meet' as const, score: 84, color: parityColors.Meet };
  };

  // Calculate competitor data; baseline can be decoupled from "My Rate" (e.g. Suite edits)
  const chartData = rates.map((rate, idx) => {
    const comp = getCompetitorRates(idx, competitorBaseRates?.[idx] ?? rate);
    return {
      rate,
      ...comp,
      date: dates[idx],
      parity: getRoomParity(rate, comp.avg)
    };
  });

  // Use fixed Y-axis range - smaller range for taller lines
  const chartMin = 200;
  const chartMax = 500;
  const chartRange = chartMax - chartMin;

  // Map rate to SVG Y% (top = 0). Clamp raw values to axis so lines never draw outside the
  // chart area (prevents overlap with the rates row above). Inset 6–94% for breathing room.
  const valueToY = (value: number) => {
    if (chartRange === 0) return 50;
    const clamped = Math.min(chartMax, Math.max(chartMin, value));
    const raw = 100 - ((clamped - chartMin) / chartRange) * 100;
    return 6 + (raw / 100) * 88;
  };

  const chartHeight = 112;

  return (
    <>
      <tr className="border-b border-[#e0e0e0] bg-white" data-tour="competitor-analysis-row">
        <td colSpan={2} className="px-3 py-2.5 border-r border-[#e0e0e0] align-top bg-white">
          <div className="pl-2 pr-1 w-full min-w-0">
            <div
              className="rounded-md border border-[#e8e8e8] bg-[#fafafa] p-2.5"
              data-tour="competitor-analysis-panel"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[11px] font-semibold text-[#1a1a1a] leading-snug tracking-tight">
                    Competitor and Parity Analysis
                  </h3>
                  <p className="text-[10px] text-gray-500 mt-1 leading-snug">
                    Competitor min/max (from cheapest rate plan) vs your cheapest rate; column colors indicate parity.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowDetailedView(true)}
                  className="shrink-0 inline-flex items-center rounded-md border border-[#c5d8f0] bg-white px-2 py-1 text-[10px] font-medium text-[#1565C0] transition-colors hover:bg-[#f0f6fc] hover:border-[#90caf9]"
                  data-tour="view-details-button"
                >
                  View Details
                </button>
              </div>

              {showLegend && (
                <div className="mt-2 border-t border-slate-200/60 pt-2">
                  <p className="sr-only">
                    Legend — Competitor: max, min, my rate. Parity: column tint (win, meet, loss) from your cheapest rate vs competitor spread. Min and max compare each competitor’s lowest rate plan for the room with your lowest daily rate.
                  </p>
                  <div
                    className="rounded-lg border border-slate-200/70 bg-white px-2.5 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                    role="group"
                    aria-label="Chart legend"
                  >
                    {/* Labels stay aligned; full-width rule splits competitor vs parity */}
                    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 text-[10px] leading-none text-slate-600">
                      <span className="shrink-0 pt-px text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Competitor
                      </span>
                      <ul className="m-0 flex list-none items-center gap-x-3 p-0">
                        <li className="flex shrink-0 items-center gap-1">
                          <LegendIconMax className="h-[18px] w-[14px]" />
                          <span className="font-medium text-slate-700">Max</span>
                        </li>
                        <li className="flex shrink-0 items-center gap-1">
                          <LegendIconMyRate className="h-[18px] w-[14px]" />
                          <span className="font-medium text-slate-700">My rate</span>
                        </li>
                        <li className="flex shrink-0 items-center gap-1">
                          <LegendIconMin className="h-[18px] w-[14px]" />
                          <span className="font-medium text-slate-700">Min</span>
                        </li>
                      </ul>

                      <div
                        className="col-span-2 my-2.5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
                        role="separator"
                        aria-hidden
                      />

                      <span className="shrink-0 pt-px text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Parity
                      </span>
                      <ul className="m-0 flex list-none items-center gap-1.5 p-0">
                        <li>
                          <span className="inline-flex rounded-full border border-orange-200/90 bg-orange-50/90 px-2 py-0.5 text-[9px] font-medium text-orange-900">
                            Win
                          </span>
                        </li>
                        <li>
                          <span className="inline-flex rounded-full border border-emerald-200/90 bg-emerald-50/90 px-2 py-0.5 text-[9px] font-medium text-emerald-900">
                            Meet
                          </span>
                        </li>
                        <li>
                          <span className="inline-flex rounded-full border border-red-200/90 bg-red-50/90 px-2 py-0.5 text-[9px] font-medium text-red-900">
                            Loss
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <div
                className="mt-2 flex items-center justify-end gap-0.5"
                aria-label="Powered by Navigator"
              >
                <span className="shrink-0 text-[9px] font-medium leading-none text-slate-400/85">
                  Powered by
                </span>
                <img
                  src={`${import.meta.env.BASE_URL}navigator-logo.svg`}
                  alt="Navigator"
                  className="h-[14px] w-auto max-h-[16px] max-w-[min(150px,calc(100%-4.5rem))] shrink-0 object-contain"
                  style={{ filter: NAVIGATOR_LOGO_BRAND_FILTER }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </td>
        {chartData.map((data, idx) => {
          const myRateY = valueToY(data.rate);
          const maxY = valueToY(data.max);
          const minY = valueToY(data.min);

          // Get previous and next points for line connection
          const prevData = idx > 0 ? chartData[idx - 1] : null;
          const nextData = chartData[idx + 1];
          const prevMyRateY = prevData ? valueToY(prevData.rate) : null;
          const nextMyRateY = nextData ? valueToY(nextData.rate) : null;

          return (
            <ChartColumn
              key={idx}
              columnIndex={idx}
              data={data}
              myRateMeta={myRateMeta?.[idx]}
              myRateY={myRateY}
              maxY={maxY}
              minY={minY}
              prevMyRateY={prevMyRateY}
              nextMyRateY={nextMyRateY}
              hasPrev={!!prevData}
              hasNext={!!nextData}
              chartHeight={chartHeight}
              dataTour={idx === 0 ? 'rate-chart' : undefined}
            />
          );
        })}
      </tr>
      
      {/* Detailed Competitor Rates Modal - Rendered outside table row */}
      {showDetailedView && (
        <DetailedCompetitorModal
          dates={dates}
          rates={rates}
          chartData={chartData}
          roomType={roomType}
          inclusionPlanNames={drawerInclusionPlanNames}
          ratePlan={ratePlan}
          events={events}
          editableYourRates={!!onYourRatesChange}
          onYourRateChange={onYourRatesChange}
          onClose={() => setShowDetailedView(false)}
          rateCurrency={rateCurrency}
        />
      )}
    </>
  );
}

function ChartColumn({
  columnIndex,
  data,
  myRateMeta,
  myRateY,
  maxY,
  minY,
  prevMyRateY,
  nextMyRateY,
  hasPrev,
  hasNext,
  chartHeight,
  dataTour
}: {
  columnIndex: number;
  data: {
    rate: number;
    min: number;
    max: number;
    competitorMinRatePlan: string;
    competitorMinChannel: string;
    competitorMaxRatePlan: string;
    competitorMaxChannel: string;
    date: { day: string; date: string; month: string };
    parity: { type: string; score: number; color: string };
  };
  myRateMeta?: { ratePlan: string; channel: string };
  myRateY: number;
  maxY: number;
  minY: number;
  prevMyRateY: number | null;
  nextMyRateY: number | null;
  hasPrev: boolean;
  hasNext: boolean;
  chartHeight: number;
  dataTour?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipLayout, setTooltipLayout] = useState<{
    left: number;
    top: number;
    placement: 'above' | 'below';
  } | null>(null);
  /** Chart wrapper — table cells stretch to row height (legend column), so anchor tooltips here not on `<td>`. */
  const chartAnchorRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const revealClipId = useId().replace(/:/g, '');
  const revealDelayMs = columnIndex * 42;

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsHovered(false);
      closeTimerRef.current = null;
    }, 140);
  };

  useEffect(() => () => clearCloseTimer(), []);

  useLayoutEffect(() => {
    if (!isHovered) {
      setTooltipLayout(null);
      return;
    }

    const updatePosition = () => {
      const anchor = chartAnchorRef.current;
      const tip = tipRef.current;
      if (!anchor || !tip) return;

      const r = anchor.getBoundingClientRect();
      const tw = tip.offsetWidth;
      const th = tip.offsetHeight;
      /** Positive = nudge tooltip into the chart edge so it reads attached (px). */
      const tuckTowardChartPx = 10;
      const margin = 8;

      let left = r.left + r.width / 2 - tw / 2;
      left = Math.min(Math.max(left, margin), window.innerWidth - tw - margin);

      let top = r.top - th + tuckTowardChartPx;
      let placement: 'above' | 'below' = 'above';
      if (top < margin) {
        placement = 'below';
        top = r.bottom - tuckTowardChartPx;
        if (top + th > window.innerHeight - margin) {
          top = Math.max(margin, window.innerHeight - th - margin);
        }
      }

      setTooltipLayout({ left, top, placement });
    };

    updatePosition();
    const tip = tipRef.current;
    const ro = tip ? new ResizeObserver(updatePosition) : null;
    if (tip && ro) ro.observe(tip);
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      ro?.disconnect();
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isHovered, columnIndex, data.rate, data.min, data.max, data.parity.score, data.parity.type, myRateMeta]);

  const tooltipContent = (
    <div
      ref={tipRef}
      role="tooltip"
      className="pointer-events-auto relative w-[min(300px,calc(100vw-24px))] max-w-[calc(100vw-24px)] rounded-lg border border-white/15 bg-[#141622] px-3 py-2.5 text-left text-[11px] leading-normal text-white shadow-2xl"
      onMouseEnter={() => {
        clearCloseTimer();
        setIsHovered(true);
      }}
      onMouseLeave={scheduleClose}
      style={
        tooltipLayout
          ? {
              position: 'fixed',
              left: tooltipLayout.left,
              top: tooltipLayout.top,
              zIndex: 2147483000
            }
          : {
              position: 'fixed',
              left: -9999,
              top: 0,
              zIndex: 2147483000,
              visibility: 'hidden' as const
            }
      }
    >
      {tooltipLayout?.placement === 'below' && (
        <div className="pointer-events-none absolute bottom-full left-1/2 z-[1] mb-0 -translate-x-1/2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
          <div className="h-0 w-0 border-b-[12px] border-l-[12px] border-r-[12px] border-l-transparent border-r-transparent border-b-[#141622]" />
        </div>
      )}
      <div className="mb-2 flex items-center justify-between gap-3 border-b border-white/15 pb-2">
        <div className="min-w-0 flex-1 text-[12px] font-semibold leading-tight tracking-tight text-white">
          {data.date.day}, {data.date.date} {data.date.month}
        </div>
        <div
          className="flex shrink-0 items-stretch gap-2 rounded-lg border border-white/12 bg-black/30 py-1 pl-2 pr-2.5 shadow-inner shadow-black/20"
          role="group"
          title={`Room parity: ${data.parity.type} ${data.parity.score}%`}
          aria-label={`Room parity ${data.parity.type}, ${data.parity.score} percent`}
        >
          <span className="flex items-center text-[9px] font-semibold uppercase leading-none tracking-[0.16em] text-slate-500">
            Parity
          </span>
          <span className="w-px shrink-0 self-stretch bg-white/15" aria-hidden />
          <div className="flex items-center gap-1 leading-none">
            <span className="text-[11px] font-bold tabular-nums" style={{ color: data.parity.color }}>
              {data.parity.type}
            </span>
            <span className="text-[10px] font-medium text-slate-500" aria-hidden>
              ·
            </span>
            <span className="text-[12px] font-bold tabular-nums text-white">{data.parity.score}%</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="rounded-md border border-white/15 bg-white/[0.08] px-2.5 py-2">
          <div className="mb-1.5 text-[11px] font-semibold text-sky-300">Your rate (cheapest)</div>
          <div className="grid grid-cols-[5rem_1fr] gap-x-2 gap-y-1 text-[11px] text-slate-100">
            <span className="shrink-0 text-slate-400">Amount</span>
            <span className="font-semibold tabular-nums text-sky-300">€{data.rate}</span>
            {myRateMeta && (
              <>
                <span className="shrink-0 text-slate-400">Plan</span>
                <span className="break-words leading-snug text-slate-100">{myRateMeta.ratePlan}</span>
                <span className="shrink-0 text-slate-400">Channel</span>
                <span className="break-words leading-snug text-slate-100">{myRateMeta.channel}</span>
              </>
            )}
          </div>
          <div
            className="mt-1.5 flex items-start gap-1.5 border-t border-white/10 pt-1.5"
            role="note"
            aria-label="Your rate here may differ from your UNO (ARI) rate, as it is sourced from Navigator."
          >
            <Info
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400"
              strokeWidth={2.25}
              aria-hidden
            />
            <p className="m-0 min-w-0 flex-1 text-[10px] font-normal leading-snug text-slate-300">
              Your rate here may differ from your UNO (ARI) rate, as it is sourced from{' '}
              <span className="font-semibold text-sky-300">Navigator</span>.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-white/15 bg-white/[0.08] px-2.5 py-2">
          <div className="mb-1.5 text-[11px] font-semibold text-emerald-300">Competitor min</div>
          <div className="grid grid-cols-[5rem_1fr] gap-x-2 gap-y-1 text-[11px] text-slate-100">
            <span className="shrink-0 text-slate-400">Amount</span>
            <span className="font-semibold tabular-nums text-emerald-300">€{data.min}</span>
            <span className="shrink-0 text-slate-400">Rate plan</span>
            <span className="break-words leading-snug">{data.competitorMinRatePlan}</span>
            <span className="shrink-0 text-slate-400">Cheapest on</span>
            <span className="break-words leading-snug">{data.competitorMinChannel}</span>
          </div>
        </div>
        <div className="rounded-md border border-white/15 bg-white/[0.08] px-2.5 py-2">
          <div className="mb-1.5 text-[11px] font-semibold text-red-300">Competitor max</div>
          <div className="grid grid-cols-[5rem_1fr] gap-x-2 gap-y-1 text-[11px] text-slate-100">
            <span className="shrink-0 text-slate-400">Amount</span>
            <span className="font-semibold tabular-nums text-red-300">€{data.max}</span>
            <span className="shrink-0 text-slate-400">Rate plan</span>
            <span className="break-words leading-snug">{data.competitorMaxRatePlan}</span>
            <span className="shrink-0 text-slate-400">Cheapest on</span>
            <span className="break-words leading-snug">{data.competitorMaxChannel}</span>
          </div>
        </div>
      </div>
      {tooltipLayout?.placement === 'above' && (
        <div className="pointer-events-none absolute top-full left-1/2 z-[1] -mt-px -translate-x-1/2 drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]">
          <div className="h-0 w-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#141622]" />
        </div>
      )}
    </div>
  );

  return (
    <td
      className="px-0 py-2 border-r border-[#e0e0e0] relative align-middle"
      style={{ backgroundColor: `${data.parity.color}15` }}
      onMouseEnter={() => {
        clearCloseTimer();
        setIsHovered(true);
      }}
      onMouseLeave={scheduleClose}
      data-tour={dataTour}
    >
      {isHovered && typeof document !== 'undefined' && createPortal(tooltipContent, document.body)}

      {/* Chart SVG — centered in cell vs tall legend column; overflow hidden stops bleed into row above */}
      <div ref={chartAnchorRef} className="flex items-center justify-center w-full pt-1 pb-2">
      <svg
        width="100%"
        height={chartHeight}
        className="overflow-hidden block max-w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={revealClipId}>
            <rect
              x="0"
              y="0"
              width="0"
              height="100%"
              className="rate-chart-reveal-wipe"
              style={{ animationDelay: `${revealDelayMs}ms` }}
            />
          </clipPath>
        </defs>

        <g clipPath={`url(#${revealClipId})`}>
        {/* Vertical range line (from min to max) - always show */}
        <line
          x1="50%"
          y1={`${minY}%`}
          x2="50%"
          y2={`${maxY}%`}
          stroke="#90a4ae"
          strokeWidth="2"
        />

        {/* Max rate indicator (T-shape top) */}
        <line
          x1="calc(50% - 8px)"
          y1={`${maxY}%`}
          x2="calc(50% + 8px)"
          y2={`${maxY}%`}
          stroke="#f44336"
          strokeWidth="2.5"
        />
        <circle cx="50%" cy={`${maxY}%`} r="3" fill="#f44336" />

        {/* Min rate indicator (T-shape bottom) */}
        <line
          x1="calc(50% - 8px)"
          y1={`${minY}%`}
          x2="calc(50% + 8px)"
          y2={`${minY}%`}
          stroke="#4caf50"
          strokeWidth="2.5"
        />
        <circle cx="50%" cy={`${minY}%`} r="3" fill="#4caf50" />

        {/* Line from previous column to this column center */}
        {hasPrev && prevMyRateY !== null && (
          <line
            x1="0%"
            y1={`${prevMyRateY}%`}
            x2="50%"
            y2={`${myRateY}%`}
            stroke="#2196F3"
            strokeWidth="2.5"
          />
        )}

        {/* Line from this column center to next column (edge of this cell) */}
        {hasNext && nextMyRateY !== null && (
          <line
            x1="50%"
            y1={`${myRateY}%`}
            x2="100%"
            y2={`${myRateY}%`}
            stroke="#2196F3"
            strokeWidth="2.5"
          />
        )}

        {/* My rate dot */}
        <circle 
          cx="50%" 
          cy={`${myRateY}%`} 
          r="4" 
          fill="#2196F3" 
          stroke="white" 
          strokeWidth="2" 
        />
        </g>
      </svg>
      </div>
    </td>
  );
}