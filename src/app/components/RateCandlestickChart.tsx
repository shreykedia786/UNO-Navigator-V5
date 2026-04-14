import { useId, useState } from 'react';
import { LegendIconMax, LegendIconMin, LegendIconMyRate } from './CompetitorChartLegendIcons';
import { DetailedCompetitorModal } from './DetailedCompetitorModal';

interface CandlestickChartProps {
  dates: Array<{ day: string; date: string; month: string }>;
  rates: number[];
  getCompetitorRates: (dateIndex: number, baseRate: number) => { min: number; avg: number; max: number };
  /** When set, competitor min/max/avg use this baseline per date; `rates` only drives My Rate (blue line). */
  competitorBaseRates?: number[];
  /** When set, the View Details drawer allows editing Your Rates (Suite). Updates parent state so the main grid stays in sync. */
  onYourRatesChange?: (dateIndex: number, value: string) => void;
  showLegend?: boolean;
  roomType?: string;
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
}

export function RateCandlestickChart({
  dates,
  rates,
  getCompetitorRates,
  competitorBaseRates,
  onYourRatesChange,
  showLegend = true,
  roomType,
  ratePlan,
  events
}: CandlestickChartProps) {
  const [showDetailedView, setShowDetailedView] = useState(false);

  // Generate random parity data for each date
  const getParityData = (idx: number) => {
    const parityTypes = ['Win', 'Meet', 'Loss'];
    const parityColors = {
      Win: '#f97316',
      Meet: '#22c55e',
      Loss: '#ef4444'
    };

    // Use index to create consistent but varied results
    const seed = idx * 17 + 13; // Some variation
    const typeIndex = seed % 3;
    const parityType = parityTypes[typeIndex];

    // Generate parity score between 60-95%
    const parityScore = 60 + (seed % 36);

    return {
      type: parityType as 'Win' | 'Meet' | 'Loss',
      score: parityScore,
      color: parityColors[parityType as keyof typeof parityColors]
    };
  };

  // Calculate competitor data; baseline can be decoupled from "My Rate" (e.g. Suite edits)
  const chartData = rates.map((rate, idx) => ({
    rate,
    ...getCompetitorRates(idx, competitorBaseRates?.[idx] ?? rate),
    date: dates[idx],
    parity: getParityData(idx)
  }));

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
                    Competitor Rate & Parity Analysis
                  </h3>
                  <p className="text-[10px] text-gray-500 mt-1 leading-snug">
                    Compare your rates vs competitors and track parity status
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
                    Legend — Competitor: max, min, my rate. Parity: column background matches win, meet, or loss.
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
          ratePlan={ratePlan}
          events={events}
          editableYourRates={!!onYourRatesChange}
          onYourRateChange={onYourRatesChange}
          onClose={() => setShowDetailedView(false)}
        />
      )}
    </>
  );
}

function ChartColumn({
  columnIndex,
  data,
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
    date: { day: string; date: string; month: string };
    parity: { type: string; score: number; color: string };
  };
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
  const revealClipId = useId().replace(/:/g, '');
  const revealDelayMs = columnIndex * 42;

  return (
    <td
      className="px-0 py-2 border-r border-[#e0e0e0] relative align-middle"
      style={{ backgroundColor: `${data.parity.color}15` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-tour={dataTour}
    >
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-2 z-50 pointer-events-none">
          <div className="bg-[#1a1d2e] text-white text-[10px] rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
            <div className="font-semibold mb-1.5 pb-1.5 border-b border-gray-700">
              {data.date.day}, {data.date.date} {data.date.month}
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400">My Rate:</span>
                <span className="text-[#60a5fa] font-semibold">€{data.rate}</span>
              </div>
              <div className="h-px bg-gray-700 my-1.5"></div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400">Max (Comp):</span>
                <span className="text-green-400">€{data.max}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400">Min (Comp):</span>
                <span className="text-red-400">€{data.min}</span>
              </div>
              <div className="h-px bg-gray-700 my-1.5"></div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400">Parity Score:</span>
                <span className="text-white font-semibold">{data.parity.score}%</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400">Parity Status:</span>
                <span
                  className="font-semibold"
                  style={{ color: data.parity.color }}
                >
                  {data.parity.type}
                </span>
              </div>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#1a1d2e]"></div>
            </div>
          </div>
        </div>
      )}

      {/* Chart SVG — centered in cell vs tall legend column; overflow hidden stops bleed into row above */}
      <div className="flex items-center justify-center w-full pt-1 pb-2">
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
          stroke="#4caf50"
          strokeWidth="2.5"
        />
        <circle cx="50%" cy={`${maxY}%`} r="3" fill="#4caf50" />

        {/* Min rate indicator (T-shape bottom) */}
        <line
          x1="calc(50% - 8px)"
          y1={`${minY}%`}
          x2="calc(50% + 8px)"
          y2={`${minY}%`}
          stroke="#f44336"
          strokeWidth="2.5"
        />
        <circle cx="50%" cy={`${minY}%`} r="3" fill="#f44336" />

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