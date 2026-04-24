/**
 * Navigator parity UI — Win / Meet / Loss.
 * Used by the parity drawer, stacked distribution bars, and table chart column tints.
 */
export const PARITY_WIN_HEX = '#4BCE64';
export const PARITY_MEET_HEX = '#FFC51E';
export const PARITY_LOSS_HEX = '#E52E2E';

export const PARITY_PALETTE = {
  win: PARITY_WIN_HEX,
  meet: PARITY_MEET_HEX,
  loss: PARITY_LOSS_HEX
} as const;

/** Stacked bar: Meet | Win | Loss (left → right). % labels: dark on meet/win, white on loss. */
export const PARITY_SEGMENT_PERCENT_CLASS = {
  meet: 'text-[10px] font-semibold tabular-nums text-[#1a1a1a]',
  win: 'text-[10px] font-semibold tabular-nums text-[#1a1a1a]',
  loss: 'text-[10px] font-semibold tabular-nums text-white'
} as const;
