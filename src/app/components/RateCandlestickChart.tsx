import { useState } from 'react';
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
        <td colSpan={2} className="px-4 py-3 border-r border-[#e0e0e0] align-top bg-white">
          <div className="pl-4">
            <div className="flex items-center justify-between mb-1.5">
              <div>
                <div className="text-[11px] font-semibold text-[#333333] mb-0.5">Competitor Rate & Parity Analysis</div>
                <div className="text-[10px] text-gray-500">Compare your rates vs competitors and track parity status</div>
              </div>
              <button
                onClick={() => setShowDetailedView(true)}
                className="text-[10px] text-[#2196F3] hover:text-[#1976D2] font-medium hover:underline whitespace-nowrap ml-4"
                data-tour="view-details-button"
              >
                View Details
              </button>
            </div>

            {/* Simple Legend */}
            {showLegend && (
              <div className="pt-1.5 border-t border-gray-200">
                <div className="flex gap-6">
                  {/* Rate Legends */}
                  <div className="flex-1">
                    <div className="text-[9px] font-semibold text-gray-700 uppercase tracking-wide mb-2">COMPETITOR LEGENDS</div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-green-500 shrink-0"></div>
                        <span className="text-[9px] text-gray-600">Max Competitor Rate</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center shrink-0">
                          <div className="w-1.5 h-0.5 bg-[#2196F3]"></div>
                          <div className="w-1.5 h-1.5 bg-[#2196F3] rounded-full"></div>
                          <div className="w-1.5 h-0.5 bg-[#2196F3]"></div>
                        </div>
                        <span className="text-[9px] text-gray-600">My Rate</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-red-500 shrink-0"></div>
                        <span className="text-[9px] text-gray-600">Min Competitor Rate</span>
                      </div>
                    </div>
                  </div>

                  {/* Parity Legends */}
                  <div className="flex-1">
                    <div className="text-[9px] font-semibold text-gray-700 uppercase tracking-wide mb-2">PARITY LEGENDS</div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1.5 bg-[#f97316] shrink-0 rounded-sm"></div>
                        <span className="text-[9px] text-gray-600">Win</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1.5 bg-[#22c55e] shrink-0 rounded-sm"></div>
                        <span className="text-[9px] text-gray-600">Meet</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1.5 bg-[#ef4444] shrink-0 rounded-sm"></div>
                        <span className="text-[9px] text-gray-600">Loss</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
        {/* Calculate pixel heights for proper rendering */}
        <defs>
          <clipPath id="chart-area">
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>

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
      </svg>
      </div>
    </td>
  );
}