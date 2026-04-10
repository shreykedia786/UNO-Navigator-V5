import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight, Info, Star, Zap, FileText, Download, Calendar as CalendarIcon, TrendingUp, Grid3x3, ChevronDown, Globe, Users, Filter, Eye, Check } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DetailedAnalysisTable } from './DetailedAnalysisTable';

interface DayData {
  date: number;
  demand: 'low' | 'normal' | 'high' | 'very-high';
  demandIndex?: number;
  demandMultiplier?: number;
  event?: {
    name: string;
    dateRange: string;
  };
}

interface MonthData {
  month: string;
  year: number;
  days: (DayData | null)[];
}

const demandColors = {
  low: '#A8C5E6',
  normal: '#6B9FE3',
  high: '#4E7FCC',
  'very-high': '#3561B8',
};

const generateMockData = (): MonthData[] => {
  return [
    {
      month: 'February',
      year: 2026,
      days: [
        null, null, null, null, null, null, { date: 1, demand: 'low', demandIndex: 18, demandMultiplier: 0.8, confidence: 68 },
        { date: 2, demand: 'low', demandIndex: 15, demandMultiplier: 0.7, confidence: 72 }, { date: 3, demand: 'low', demandIndex: 17, demandMultiplier: 0.75, confidence: 65 }, { date: 4, demand: 'low', demandIndex: 19, demandMultiplier: 0.85, confidence: 58 }, 
        { date: 5, demand: 'low', demandIndex: 16, demandMultiplier: 0.72, confidence: 70 }, { date: 6, demand: 'low', demandIndex: 20, demandMultiplier: 0.88, confidence: 45 }, { date: 7, demand: 'low', demandIndex: 18, demandMultiplier: 0.8, confidence: 52 }, { date: 8, demand: 'low', demandIndex: 21, demandMultiplier: 0.9, confidence: 48 },
        { date: 9, demand: 'normal', demandIndex: 32, demandMultiplier: 1.2, confidence: 78 }, { date: 10, demand: 'normal', demandIndex: 28, demandMultiplier: 1.1, confidence: 82 }, 
        { date: 11, demand: 'normal', demandIndex: 30, demandMultiplier: 1.15, confidence: 75 }, { date: 12, demand: 'high', demandIndex: 42, demandMultiplier: 1.6, confidence: 88 },
        { date: 13, demand: 'high', demandIndex: 28, demandMultiplier: 1.8, confidence: 92, event: { name: 'Ibiza Carnival', dateRange: 'Feb 13 - Feb 21' } },
        { date: 14, demand: 'high', demandIndex: 38, demandMultiplier: 2.1, confidence: 95, event: { name: 'Ibiza Carnival', dateRange: 'Feb 13 - Feb 21' } },
        { date: 15, demand: 'very-high', demandIndex: 45, demandMultiplier: 2.5, confidence: 98, event: { name: 'Ibiza Carnival', dateRange: 'Feb 13 - Feb 21' } },
        { date: 16, demand: 'normal', demandIndex: 35, demandMultiplier: 1.3, confidence: 80 }, { date: 17, demand: 'normal', demandIndex: 32, demandMultiplier: 1.2, confidence: 76 },
        { date: 18, demand: 'normal', demandIndex: 28, demandMultiplier: 1.1, confidence: 62 }, { date: 19, demand: 'high', demandIndex: 40, demandMultiplier: 1.5, confidence: 85 },
        { date: 20, demand: 'high', demandIndex: 38, demandMultiplier: 1.45, confidence: 87 }, { date: 21, demand: 'normal', demandIndex: 30, demandMultiplier: 1.15, confidence: 74 }, { date: 22, demand: 'low', demandIndex: 19, demandMultiplier: 0.85, confidence: 56 },
        { date: 23, demand: 'low', demandIndex: 17, demandMultiplier: 0.75, confidence: 42 }, { date: 24, demand: 'low', demandIndex: 20, demandMultiplier: 0.88, confidence: 50 }, { date: 25, demand: 'low', demandIndex: 18, demandMultiplier: 0.8, confidence: 47 },
        { date: 26, demand: 'low', demandIndex: 21, demandMultiplier: 0.9, confidence: 55 }, { date: 27, demand: 'low', demandIndex: 19, demandMultiplier: 0.85, confidence: 60 }, { date: 28, demand: 'high', demandIndex: 42, demandMultiplier: 1.6, confidence: 90 },
      ],
    },
    {
      month: 'March',
      year: 2026,
      days: [
        null, null, null, null, null, null, { date: 1, demand: 'low', demandIndex: 20 },
        { date: 2, demand: 'normal', demandIndex: 30 }, { date: 3, demand: 'normal', demandIndex: 28 },
        { date: 4, demand: 'normal', demandIndex: 32 }, { date: 5, demand: 'normal', demandIndex: 35 },
        { date: 6, demand: 'normal', demandIndex: 33 }, { date: 7, demand: 'normal', demandIndex: 30 },
        { date: 8, demand: 'normal', demandIndex: 28 }, { date: 9, demand: 'low', demandIndex: 18 }, { date: 10, demand: 'low', demandIndex: 16 },
        { date: 11, demand: 'low', demandIndex: 19 }, { date: 12, demand: 'low', demandIndex: 21 }, { date: 13, demand: 'low', demandIndex: 20 },
        { date: 14, demand: 'low', demandIndex: 17 }, { date: 15, demand: 'low', demandIndex: 18 }, { date: 16, demand: 'low', demandIndex: 19 },
        { date: 17, demand: 'low', demandIndex: 20 }, { date: 18, demand: 'high', demandIndex: 40 },
        { date: 19, demand: 'high', demandIndex: 38 }, { date: 20, demand: 'normal', demandIndex: 32 },
        { date: 21, demand: 'low', demandIndex: 21 }, { date: 22, demand: 'low', demandIndex: 19 }, { date: 23, demand: 'low', demandIndex: 17 },
        { date: 24, demand: 'low', demandIndex: 18 }, { date: 25, demand: 'low', demandIndex: 20 }, { date: 26, demand: 'low', demandIndex: 16 },
        { date: 27, demand: 'low', demandIndex: 19 }, { date: 28, demand: 'low', demandIndex: 21 }, { date: 29, demand: 'very-high', demandIndex: 48 },
        { date: 30, demand: 'normal', demandIndex: 32 }, { date: 31, demand: 'normal', demandIndex: 28 },
      ],
    },
    {
      month: 'April',
      year: 2026,
      days: [
        null, null, { date: 1, demand: 'high', demandIndex: 40 },
        { date: 2, demand: 'very-high', demandIndex: 45 }, { date: 3, demand: 'very-high', demandIndex: 48 },
        { date: 4, demand: 'very-high', demandIndex: 50 }, { date: 5, demand: 'very-high', demandIndex: 47 },
        { date: 6, demand: 'high', demandIndex: 42 }, { date: 7, demand: 'high', demandIndex: 38 },
        { date: 8, demand: 'high', demandIndex: 40 }, { date: 9, demand: 'normal', demandIndex: 35 },
        { date: 10, demand: 'low', demandIndex: 21 }, { date: 11, demand: 'low', demandIndex: 18 }, { date: 12, demand: 'low', demandIndex: 19 },
        { date: 13, demand: 'low', demandIndex: 20 }, { date: 14, demand: 'normal', demandIndex: 28 },
        { date: 15, demand: 'normal', demandIndex: 30 }, { date: 16, demand: 'normal', demandIndex: 32 },
        { date: 17, demand: 'low', demandIndex: 17 }, { date: 18, demand: 'low', demandIndex: 16 }, { date: 19, demand: 'low', demandIndex: 19 },
        { date: 20, demand: 'normal', demandIndex: 28 }, { date: 21, demand: 'high', demandIndex: 38 },
        { date: 22, demand: 'high', demandIndex: 42 }, { date: 23, demand: 'very-high', demandIndex: 46 },
        { date: 24, demand: 'high', demandIndex: 40 }, { date: 25, demand: 'high', demandIndex: 38 },
        { date: 26, demand: 'normal', demandIndex: 32 }, { date: 27, demand: 'low', demandIndex: 21 },
        { date: 28, demand: 'low', demandIndex: 20 }, { date: 29, demand: 'low', demandIndex: 18 }, { date: 30, demand: 'low', demandIndex: 19 },
      ],
    },
  ];
};

interface DemandForecastDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemandForecastDrawer({ open, onOpenChange }: DemandForecastDrawerProps) {
  const [months] = useState<MonthData[]>(generateMockData());
  const [hoveredDay, setHoveredDay] = useState<{ day: DayData; x: number; y: number } | null>(null);
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [activeTab, setActiveTab] = useState<'demand' | 'competitor' | 'events' | 'sync'>('demand');
  const [showCompRates, setShowCompRates] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [rateTypeExpanded, setRateTypeExpanded] = useState(true);
  const [roomTypeExpanded, setRoomTypeExpanded] = useState(true);
  const [selectedRateType, setSelectedRateType] = useState<'low' | 'bar'>('low');
  const [selectedRoomType, setSelectedRoomType] = useState<string>('any');
  const [filtersButtonRef, setFiltersButtonRef] = useState<HTMLButtonElement | null>(null);
  const [ratesView, setRatesView] = useState<'calendar' | 'grid' | 'trend'>('calendar');
  const [showCompetitorSelector, setShowCompetitorSelector] = useState(false);
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>([
    'subscriber',
    'compsetAvg',
    'centralHotel',
    'holidayHome',
    'hotelPalermo',
    'viveUnique',
    'belgrave'
  ]);
  const [competitorButtonRef, setCompetitorButtonRef] = useState<HTMLButtonElement | null>(null);
  const [dateRangeDropdownOpen, setDateRangeDropdownOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('Next 15 Days - 17 Feb \'26 - 03 Mar \'26');
  const [dateRangeButtonRef, setDateRangeButtonRef] = useState<HTMLButtonElement | null>(null);
  const [compareDropdownOpen, setCompareDropdownOpen] = useState(false);
  const [selectedCompare, setSelectedCompare] = useState('Week on Week (WoW)');
  const [compareButtonRef, setCompareButtonRef] = useState<HTMLButtonElement | null>(null);
  const [competitorCalendarDropdownOpen, setCompetitorCalendarDropdownOpen] = useState(false);
  const [competitorCalendarButtonRef, setCompetitorCalendarButtonRef] = useState<HTMLButtonElement | null>(null);
  const [selectedCompetitorDateRange, setSelectedCompetitorDateRange] = useState('Next 7 Days');
  const [showCustomCalendar, setShowCustomCalendar] = useState(false);
  const [customStartDate, setCustomStartDate] = useState<Date | null>(null);
  const [customEndDate, setCustomEndDate] = useState<Date | null>(null);
  const [calendarMonth, setCalendarMonth] = useState(new Date(2026, 1)); // February 2026
  const [hoveredRateCell, setHoveredRateCell] = useState<{ hotel: string; day: number; x: number; y: number } | null>(null);
  const [rateModalOpen, setRateModalOpen] = useState(false);
  const [selectedRateDate, setSelectedRateDate] = useState('17 Feb 2026, Tue');
  const [vsComparisonDropdownOpen, setVsComparisonDropdownOpen] = useState(false);
  const [selectedVsComparison, setSelectedVsComparison] = useState('Vs. Yesterday');
  const [vsComparisonButtonRef, setVsComparisonButtonRef] = useState<HTMLButtonElement | null>(null);
  const [channelDropdownOpen, setChannelDropdownOpen] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    'Booking.com', 'Expedia', 'Agoda', 'Hotels.com', 'Airbnb', 'TripAdvisor', 'Priceline', 'Direct Booking'
  ]);
  const [channelButtonRef, setChannelButtonRef] = useState<HTMLButtonElement | null>(null);
  const [compsetDropdownOpen, setCompsetDropdownOpen] = useState(false);
  const [selectedCompset, setSelectedCompset] = useState('Primary');
  const [compsetButtonRef, setCompsetButtonRef] = useState<HTMLButtonElement | null>(null);

  // Rate Evolution Chart Data - matching the expected image exactly
  const chartData = [
    { leadTime: '19 days', date: '29 Jan', alhambra: 150, avgCompset: 165, central: 160, holiday: 172, palermitano: 185, vive: 100 },
    { leadTime: '18 days', date: '30 Jan', alhambra: 152, avgCompset: 165, central: 160, holiday: 172, palermitano: 185, vive: 100 },
    { leadTime: '15 days', date: '02 Feb', alhambra: 152, avgCompset: 165, central: 160, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '14 days', date: '03 Feb', alhambra: 152, avgCompset: 165, central: 160, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '13 days', date: '04 Feb', alhambra: 152, avgCompset: 165, central: 160, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '12 days', date: '05 Feb', alhambra: 150, avgCompset: 165, central: 110, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '11 days', date: '06 Feb', alhambra: 150, avgCompset: 165, central: 105, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '8 days', date: '09 Feb', alhambra: 152, avgCompset: 165, central: 158, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '7 days', date: '10 Feb', alhambra: 152, avgCompset: 165, central: 160, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '6 days', date: '11 Feb', alhambra: 152, avgCompset: 165, central: 160, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '5 days', date: '12 Feb', alhambra: 152, avgCompset: 165, central: 160, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '4 days', date: '13 Feb', alhambra: 152, avgCompset: 165, central: 160, holiday: 173, palermitano: 185, vive: 100 },
    { leadTime: '1 days', date: '16 Feb', alhambra: 152, avgCompset: 165, central: 160, holiday: 173, palermitano: 185, vive: 100 },
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Rate cell tooltip data
  const getRateCellData = (hotel: string, day: number) => {
    const hotelNames: { [key: string]: string } = {
      'subscriber': 'Sunrise Resort',
      'centralHotel': 'Central Hotel',
      'holidayHome': 'Holiday Home',
      'hotelPalermo': 'Hotel Palermo',
      'viveUnique': 'Vive Unique',
      'belgrave': 'Belgrave Apartments',
      '51buckingham': '51 Buckingham Gate',
      'lsm': 'LSM Properties',
      'qnlondon': 'QN London',
      'claverleysuites': 'Claverley Court Suites'
    };

    const rooms: { [key: string]: string } = {
      'subscriber': 'STANDARD ROOM (STR)',
      'centralHotel': 'DELUXE DOUBLE',
      'holidayHome': 'TWO BEDROOM APARTMENT',
      'hotelPalermo': 'SUPERIOR ROOM',
      'viveUnique': 'STUDIO APARTMENT',
      'belgrave': 'ONE BEDROOM FLAT',
      '51buckingham': 'EXECUTIVE SUITE',
      'lsm': 'DELUXE APARTMENT',
      'qnlondon': 'CLASSIC ROOM',
      'claverleysuites': 'PREMIUM SUITE'
    };

    const channels = ['Agoda', 'Booking.com', 'Expedia', 'Hotels.com', 'Direct'];
    const inclusions = ['Room Only', 'Bed & Breakfast', 'Half Board', 'Full Board', 'All Inclusive'];
    
    const eventsList = [
      { name: 'Ramadan Start (Tentative Date)', additionalCount: 1 },
      { name: 'Tech Conference 2026', additionalCount: 0 },
      { name: 'Music Festival', additionalCount: 2 },
      { name: 'Art Exhibition', additionalCount: 0 },
      { name: 'Food & Wine Festival', additionalCount: 1 }
    ];

    const rates: { [key: string]: { [key: number]: number } } = {
      'subscriber': { 16: 78, 17: 71, 18: 63, 19: 63, 20: 79, 21: 102, 22: 46 },
      'centralHotel': { 16: 112, 17: 105, 18: 98, 19: 110, 20: 125, 21: 145, 22: 89 },
      'holidayHome': { 16: 95, 17: 88, 18: 82, 19: 91, 20: 103, 21: 128, 22: 75 },
      'hotelPalermo': { 16: 108, 17: 102, 18: 96, 19: 105, 20: 118, 21: 138, 22: 85 },
      'viveUnique': { 16: 92, 17: 86, 18: 79, 19: 88, 20: 99, 21: 122, 22: 71 },
      'belgrave': { 16: 118, 17: 111, 18: 103, 19: 114, 20: 128, 21: 152, 22: 93 },
      '51buckingham': { 16: 145, 17: 138, 18: 128, 19: 142, 20: 158, 21: 185, 22: 115 },
      'lsm': { 16: 128, 17: 121, 18: 112, 19: 125, 20: 139, 21: 165, 22: 102 },
      'qnlondon': { 16: 135, 17: 128, 18: 119, 19: 132, 20: 147, 21: 173, 22: 108 },
      'claverleysuites': { 16: 152, 17: 145, 18: 135, 19: 149, 20: 166, 21: 195, 22: 122 }
    };

    const avgCompsetRates: { [key: number]: number } = {
      16: 135, 17: 153, 18: 169, 19: 144, 20: 129, 21: 143, 22: 99
    };

    const descriptions = [
      'Standard Double | Non-refundable (Low price!) Book and pay now Non-refundable (Low price!) Lowest price available! Our last 3 rooms! Tax 20% This special offer includes an extra-low price, but cannot be amended or cancelled. In case of a no-show, the ...',
      'Deluxe Room with Sea View | Breakfast included Free cancellation until 24 hours before check-in. Full prepayment required. Limited availability - only 2 rooms left at this price! Includes daily breakfast for 2 guests. Late check-out subject to ...',
      'Executive Suite | Members Rate Save 15% on this exclusive rate! Flexible cancellation up to 48 hours before arrival. Includes complimentary WiFi, parking, and access to executive lounge. Room can accommodate up to 3 guests with extra bed available ...',
      'Family Room | Best Available Rate Standard cancellation policy applies. Payment at property. This spacious room features two queen beds and can accommodate families up to 4 people. Includes access to all hotel facilities and services ...'
    ];

    const rate = rates[hotel]?.[day] || 0;
    const avgCompset = avgCompsetRates[day] || 0;
    const event = eventsList[day % eventsList.length];

    return {
      hotelName: hotelNames[hotel] || 'Alhambra Hotel',
      rate: rate,
      roomType: rooms[hotel] || 'STANDARD ROOM (STR)',
      inclusion: inclusions[day % inclusions.length],
      channel: channels[day % channels.length],
      avgCompset: avgCompset,
      event: event,
      description: descriptions[day % descriptions.length]
    };
  };

  const dateRangeOptions = [
    { label: 'Next 15 Days', dateRange: '17 Feb - 03 Mar', value: 'Next 15 Days - 17 Feb \'26 - 03 Mar \'26' },
    { label: 'Next 30 Days', dateRange: '17 Feb - 18 Mar', value: 'Next 30 Days - 17 Feb \'26 - 19 Mar \'26' },
    { label: 'Next 60 Days', dateRange: '17 Feb - 17 Apr', value: 'Next 60 Days - 17 Feb \'26 - 18 Apr \'26' },
    { label: 'Next 75 Days', dateRange: '17 Feb - 02 May', value: 'Next 75 Days - 17 Feb \'26 - 02 May \'26' },
  ];

  const compareOptions = [
    { label: 'Week on Week (WoW)', value: 'Week on Week (WoW)' },
    { label: 'Month on Month (MoM)', value: 'Month on Month (MoM)' },
    { label: 'Year on Year (YoY)', value: 'Year on Year (YoY)' },
  ];

  const vsComparisonOptions = [
    { label: 'Vs. Yesterday', value: 'Vs. Yesterday' },
    { label: 'Vs. Last 1 week', value: 'Vs. Last 1 week' },
    { label: 'Vs. Last 4 week', value: 'Vs. Last 4 week' },
    { label: 'Vs. Last quarter', value: 'Vs. Last quarter' },
  ];

  const competitorCalendarOptions = [
    { label: 'Next 7 Days', dateRange: '17 Feb - 23 Feb', value: 'Next 7 Days' },
    { label: 'Next 14 Days', dateRange: '17 Feb - 02 Mar', value: 'Next 14 Days' },
    { label: 'Next 28 Days', dateRange: '17 Feb - 16 Mar', value: 'Next 28 Days' },
  ];

  const channelOptions = [
    { label: 'All Channels', value: 'All Channels' },
    { label: 'Booking.com', value: 'Booking.com' },
    { label: 'Expedia', value: 'Expedia' },
    { label: 'Agoda', value: 'Agoda' },
    { label: 'Hotels.com', value: 'Hotels.com' },
    { label: 'Airbnb', value: 'Airbnb' },
    { label: 'TripAdvisor', value: 'TripAdvisor' },
    { label: 'Priceline', value: 'Priceline' },
    { label: 'Direct Booking', value: 'Direct Booking' },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-[9998]" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-[1100px] bg-white shadow-xl z-[9999] overflow-y-auto">
          <Dialog.Title className="sr-only">Demand Analysis - Ibiza</Dialog.Title>
          <Dialog.Description className="sr-only">
            Market demand insights with competitive intelligence and forecasting for Ibiza
          </Dialog.Description>
          
          <div className="flex flex-col h-full">
            {/* Tabs and Close Button */}
            <div className="sticky top-0 z-10 bg-white flex items-center justify-between border-b border-gray-200 px-6">
              <div className="flex items-center">
                <button
                  onClick={() => setActiveTab('demand')}
                  className={`px-4 py-3 text-[14px] font-medium border-b-2 transition-colors ${
                    activeTab === 'demand'
                      ? 'border-[#2753eb] text-[#2753eb]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Demand Forecast
                </button>
                <button
                  onClick={() => setActiveTab('competitor')}
                  className={`px-4 py-3 text-[14px] font-medium border-b-2 transition-colors ${
                    activeTab === 'competitor'
                      ? 'border-[#2753eb] text-[#2753eb]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Competitor Intelligence
                </button>
                <button
                  onClick={() => setActiveTab('sync')}
                  className={`px-4 py-3 text-[14px] font-medium border-b-2 transition-colors ${
                    activeTab === 'sync'
                      ? 'border-[#2753eb] text-[#2753eb]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Sync & Audit Logs
                </button>
              </div>
              <Dialog.Close asChild>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>

            {/* Tab Content */}
            {activeTab === 'demand' && (
              <>
                {/* Tab Header */}
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-[18px] font-semibold text-[#1a1a1a]">
                      Demand Analysis - Ibiza
                    </h2>
                    <div 
                      className="relative"
                      onMouseEnter={() => setShowInfoTooltip(true)}
                      onMouseLeave={() => setShowInfoTooltip(false)}
                    >
                      <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
                      {showInfoTooltip && (
                        <div className="absolute left-0 top-6 w-[320px] bg-[#1a1a1a] text-white text-[13px] leading-relaxed rounded-lg shadow-xl p-4 z-[10001]">
                          Comprehensive analysis of market demand patterns, competitor pricing strategies, and forecasting models to optimize revenue management and pricing decisions for Ibiza.
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-500">Market demand insights and forecasting for Ibiza</p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between px-6 pb-4">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="flex-1 px-6 pb-6">
                  <div className="grid grid-cols-3 gap-8">
                    {months.map((monthData, monthIdx) => (
                      <div key={monthIdx} className="flex flex-col">
                        {/* Month Header */}
                        <div className="text-center mb-4">
                          <h3 className="text-[15px] font-semibold text-[#1a1a1a]">
                            {monthData.month} {monthData.year}
                          </h3>
                        </div>

                        {/* Week Days */}
                        <div className="grid grid-cols-7 gap-1.5 mb-2">
                          {weekDays.map((day) => (
                            <div key={day} className="text-center">
                              <span className="text-[11px] font-medium text-gray-500">{day}</span>
                            </div>
                          ))}
                        </div>

                        {/* Calendar Days */}
                        <div className="grid grid-cols-7 gap-1.5">
                          {monthData.days.map((day, dayIdx) => (
                            <div key={dayIdx} className="aspect-square flex items-center justify-center">
                              {day ? (
                                <div
                                  className="relative w-full h-full flex items-center justify-center rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all"
                                  style={{ backgroundColor: demandColors[day.demand] }}
                                  onMouseEnter={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setHoveredDay({
                                      day,
                                      x: rect.left + rect.width / 2,
                                      y: rect.top,
                                    });
                                  }}
                                  onMouseLeave={() => setHoveredDay(null)}
                                >
                                  <span className="text-[12px] font-medium text-white">{day.date}</span>
                                  {day.event && (
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                                      <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="w-full h-full" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: demandColors.low }} />
                      <span className="text-[12px] text-gray-600">Low</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: demandColors.normal }} />
                      <span className="text-[12px] text-gray-600">Normal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: demandColors.high }} />
                      <span className="text-[12px] text-gray-600">High</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: demandColors['very-high'] }} />
                      <span className="text-[12px] text-gray-600">Very High</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                      <span className="text-[12px] text-gray-600">Events/Holidays</span>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="my-10 border-t border-gray-200"></div>

                  {/* Market Summary */}
                  <div>
                    {/* Header with Filters */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-1">Market Summary</h3>
                        <p className="text-[13px] text-gray-500">Key performance indicators and market positioning</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button 
                          ref={setDateRangeButtonRef}
                          onClick={() => setDateRangeDropdownOpen(!dateRangeDropdownOpen)}
                          className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <CalendarIcon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-[#1a1a1a] text-[13px]">{selectedDateRange}</span>
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        </button>
                        <button 
                          ref={setCompareButtonRef}
                          onClick={() => setCompareDropdownOpen(!compareDropdownOpen)}
                          className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <CalendarIcon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-[#1a1a1a] text-[13px]">Vs. {selectedCompare.split(' ')[0]}</span>
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      {/* Demand Index */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-2">
                              <span className="text-[13px] font-medium text-gray-700">Demand Index</span>
                              <Info className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                            <div className="text-[28px] font-semibold text-[#1a1a1a] mb-1.5">57.13</div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-[12px] font-medium text-green-600">0.3%</span>
                              <span className="text-[12px] text-gray-500">vs WOW</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Market ADR */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-[18px] font-semibold text-green-600">£</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-2">
                              <span className="text-[13px] font-medium text-gray-700">Market ADR</span>
                              <Info className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                            <div className="text-[28px] font-semibold text-[#1a1a1a] mb-1.5">£ 124</div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-[12px] font-medium text-green-600">3.24%</span>
                              <span className="text-[12px] text-gray-500">vs WOW</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Market RevPAR */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-2">
                              <span className="text-[13px] font-medium text-gray-700">Market RevPAR</span>
                              <Info className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                            <div className="text-[28px] font-semibold text-[#1a1a1a]">£ 100.99</div>
                          </div>
                        </div>
                      </div>

                      {/* Market Occupancy */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Users className="w-5 h-5 text-amber-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-2">
                              <span className="text-[13px] font-medium text-gray-700">Market Occupancy</span>
                              <Info className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                            <div className="text-[28px] font-semibold text-[#1a1a1a]">68.73%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="my-10 border-t border-gray-200"></div>

                  {/* Top Events and Holidays */}
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-5">Top Events and Holidays</h3>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {/* Carnival / Shrove Tuesday / Pancake Day */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CalendarIcon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[14px] font-medium text-[#1a1a1a] mb-1">
                              Carnival / Shrove Tuesday / Pancake Day
                            </h4>
                            <p className="text-[12px] text-gray-500">Tue, 17 Feb '26</p>
                          </div>
                        </div>
                      </div>

                      {/* Lunar New Year */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CalendarIcon className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[14px] font-medium text-[#1a1a1a] mb-1">
                              Lunar New Year
                            </h4>
                            <p className="text-[12px] text-gray-500">Tue, 17 Feb '26</p>
                          </div>
                        </div>
                      </div>

                      {/* Carnival / Ash Wednesday */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Star className="w-5 h-5 text-amber-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[14px] font-medium text-[#1a1a1a] mb-1">
                              Carnival / Ash Wednesday
                            </h4>
                            <p className="text-[12px] text-gray-500">Wed, 18 Feb '26</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'competitor' && (
              <div className="flex-1 px-6 pb-6">
                {/* Tab Header */}
                <div className="pt-6 pb-4">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[18px] font-semibold text-[#1a1a1a]">Competitor Rate Trends</h2>
                      <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] border border-gray-300 rounded hover:bg-gray-50">
                      <Zap className="w-3.5 h-3.5" />
                      Lightning Refresh
                    </button>
                  </div>
                  <p className="text-[13px] text-gray-500">Track rate movements and competitive positioning across time periods</p>
                </div>

                {/* Rates Calendar Section */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  {/* Filters Bar */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                    {/* Date Range */}
                    <button 
                      ref={setCompetitorCalendarButtonRef}
                      onClick={() => setCompetitorCalendarDropdownOpen(!competitorCalendarDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 text-[13px]"
                    >
                      <CalendarIcon className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">
                        {selectedCompetitorDateRange === 'Next 7 Days' && '17 Feb - 23 Feb'}
                        {selectedCompetitorDateRange === 'Next 14 Days' && '17 Feb - 02 Mar'}
                        {selectedCompetitorDateRange === 'Next 28 Days' && '17 Feb - 16 Mar'}
                        {selectedCompetitorDateRange === 'Custom Date Range' && (customStartDate && customEndDate ? `${customStartDate.getDate()} Feb - ${customEndDate.getDate()} ${customEndDate.getMonth() === 2 ? 'Mar' : 'Feb'}` : 'Custom Date Range')}
                      </span>
                    </button>

                    {/* Vs. Yesterday */}
                    <button 
                      ref={setVsComparisonButtonRef}
                      onClick={() => setVsComparisonDropdownOpen(!vsComparisonDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 text-[13px]"
                    >
                      <span className="text-gray-700">{selectedVsComparison}</span>
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* All Channels */}
                    <button 
                      ref={setChannelButtonRef}
                      onClick={() => setChannelDropdownOpen(!channelDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 text-[13px]"
                    >
                      <Globe className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">
                        {(() => {
                          // Get all individual channel values (excluding "All Channels")
                          const allIndividualChannels = channelOptions
                            .filter(opt => opt.value !== 'All Channels')
                            .map(opt => opt.value);
                          
                          // Check if all individual channels are selected
                          const allSelected = allIndividualChannels.every(ch => selectedChannels.includes(ch));
                          
                          if (allSelected) {
                            return 'All Channels';
                          } else if (selectedChannels.length === 1) {
                            return selectedChannels[0];
                          } else if (selectedChannels.length > 1) {
                            return `${selectedChannels.length} Channels`;
                          } else {
                            return 'Select Channels';
                          }
                        })()}
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Compset */}
                    <button 
                      ref={setCompsetButtonRef}
                      onClick={() => setCompsetDropdownOpen(!compsetDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 text-[13px]"
                    >
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">{selectedCompset}</span>
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* More Filters */}
                    <button 
                      className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 text-[13px]"
                      onClick={() => setShowFiltersModal(true)}
                      ref={setFiltersButtonRef}
                    >
                      <Filter className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">More Filters</span>
                    </button>
                  </div>

                  {/* Rates Calendar Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] font-medium text-[#1a1a1a]">
                        Rates Calendar
                      </h4>
                      <span className="text-[11px] text-gray-500">(in € from 16 Feb to 22 Feb)</span>
                      <Info className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-4">
                      {/* Legend */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <span className="text-[11px] text-gray-600">Highest Rate</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-[11px] text-gray-600">Lowest Rate</span>
                        </div>
                      </div>
                      {/* View Switcher */}
                      <div className="flex items-center gap-1 border border-gray-300 rounded p-0.5">
                        <button 
                          className={`p-1 rounded ${ratesView === 'calendar' ? 'bg-[#2753eb] text-white' : 'hover:bg-gray-100'}`}
                          onClick={() => setRatesView('calendar')}
                        >
                          <CalendarIcon className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          className={`p-1 rounded ${ratesView === 'trend' ? 'bg-[#2753eb] text-white' : 'hover:bg-gray-100'}`}
                          onClick={() => setRatesView('trend')}
                        >
                          <TrendingUp className={`w-3.5 h-3.5 ${ratesView === 'trend' ? 'text-white' : 'text-gray-600'}`} />
                        </button>
                        <button 
                          className={`p-1 rounded ${ratesView === 'grid' ? 'bg-[#2753eb] text-white' : 'hover:bg-gray-100'}`}
                          onClick={() => setRatesView('grid')}
                        >
                          <Grid3x3 className={`w-3.5 h-3.5 ${ratesView === 'grid' ? 'text-white' : 'text-gray-600'}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Week Calendar */}
                  {ratesView === 'calendar' && (
                  <div className="border border-gray-200 rounded overflow-hidden">
                    {/* Week Days Header */}
                    <div className="bg-gray-50 border-b border-gray-200">
                      <div className="grid grid-cols-8">
                        <div className="px-4 py-3 border-r border-gray-200">
                          <span className="text-[12px] font-medium text-gray-600">Week</span>
                        </div>
                        <div className="px-4 py-3 border-r border-gray-200 text-center">
                          <span className="text-[12px] font-medium text-gray-600">Mon</span>
                        </div>
                        <div className="px-4 py-3 border-r border-gray-200 text-center">
                          <span className="text-[12px] font-medium text-gray-600">Tue</span>
                        </div>
                        <div className="px-4 py-3 border-r border-gray-200 text-center">
                          <span className="text-[12px] font-medium text-gray-600">Wed</span>
                        </div>
                        <div className="px-4 py-3 border-r border-gray-200 text-center">
                          <span className="text-[12px] font-medium text-gray-600">Thu</span>
                        </div>
                        <div className="px-4 py-3 border-r border-gray-200 text-center">
                          <span className="text-[12px] font-medium text-gray-600">Fri</span>
                        </div>
                        <div className="px-4 py-3 border-r border-gray-200 text-center">
                          <span className="text-[12px] font-medium text-gray-600">Sat</span>
                        </div>
                        <div className="px-4 py-3 text-center">
                          <span className="text-[12px] font-medium text-gray-600">Sun</span>
                        </div>
                      </div>
                    </div>

                    {/* Week Row */}
                    <div className="grid grid-cols-8">
                      {/* Week Label */}
                      <div className="px-4 py-4 border-r border-gray-200">
                        <div className="text-[11px] text-gray-600 mb-1">16 Feb-22 Feb</div>
                        <button className="text-[11px] text-[#2753eb] hover:underline" onClick={() => setShowCompRates(!showCompRates)}>
                          Show Comp. Rates
                        </button>
                      </div>

                      {/* Monday - 16 */}
                      <div 
                        className="px-4 py-4 border-r border-gray-200 text-center relative cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setRateModalOpen(true);
                          setSelectedRateDate('16 Feb 2026, Mon');
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredRateCell({ 
                            hotel: 'subscriber', 
                            day: 16, 
                            x: rect.left + rect.width / 2, 
                            y: rect.top 
                          });
                        }}
                        onMouseLeave={() => setHoveredRateCell(null)}
                      >
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <div className="bg-[#2753eb] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-medium">
                            16
                          </div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-[18px] font-semibold text-gray-900 mb-0.5">78</div>
                        <div className="text-[11px] text-green-600">+34</div>
                      </div>

                      {/* Tuesday - 17 */}
                      <div 
                        className="px-4 py-4 border-r border-gray-200 text-center relative cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setRateModalOpen(true);
                          setSelectedRateDate('17 Feb 2026, Tue');
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredRateCell({ 
                            hotel: 'subscriber', 
                            day: 17, 
                            x: rect.left + rect.width / 2, 
                            y: rect.top 
                          });
                        }}
                        onMouseLeave={() => setHoveredRateCell(null)}
                      >
                        <div className="text-[13px] text-gray-600 mb-2">17</div>
                        <div className="text-[18px] font-semibold text-gray-900 mb-0.5">71</div>
                        <div className="text-[11px] text-gray-400">---</div>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                          <span className="text-[10px] text-gray-500">STR</span>
                        </div>
                      </div>

                      {/* Wednesday - 18 */}
                      <div 
                        className="px-4 py-4 border-r border-gray-200 text-center relative cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setRateModalOpen(true);
                          setSelectedRateDate('18 Feb 2026, Wed');
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredRateCell({ 
                            hotel: 'subscriber', 
                            day: 18, 
                            x: rect.left + rect.width / 2, 
                            y: rect.top 
                          });
                        }}
                        onMouseLeave={() => setHoveredRateCell(null)}
                      >
                        <div className="text-[13px] text-gray-600 mb-2">18</div>
                        <div className="text-[18px] font-semibold text-gray-900 mb-0.5">63</div>
                        <div className="text-[11px] text-gray-400">---</div>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                        </div>
                      </div>

                      {/* Thursday - 19 */}
                      <div 
                        className="px-4 py-4 border-r border-gray-200 text-center relative cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setRateModalOpen(true);
                          setSelectedRateDate('19 Feb 2026, Thu');
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredRateCell({ 
                            hotel: 'subscriber', 
                            day: 19, 
                            x: rect.left + rect.width / 2, 
                            y: rect.top 
                          });
                        }}
                        onMouseLeave={() => setHoveredRateCell(null)}
                      >
                        <div className="text-[13px] text-gray-600 mb-2">19</div>
                        <div className="text-[18px] font-semibold text-gray-900 mb-0.5">63</div>
                        <div className="text-[11px] text-gray-400">---</div>
                      </div>

                      {/* Friday - 20 */}
                      <div 
                        className="px-4 py-4 border-r border-gray-200 text-center relative cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setRateModalOpen(true);
                          setSelectedRateDate('20 Feb 2026, Fri');
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredRateCell({ 
                            hotel: 'subscriber', 
                            day: 20, 
                            x: rect.left + rect.width / 2, 
                            y: rect.top 
                          });
                        }}
                        onMouseLeave={() => setHoveredRateCell(null)}
                      >
                        <div className="text-[13px] text-gray-600 mb-2">20</div>
                        <div className="text-[18px] font-semibold text-gray-900 mb-0.5">79</div>
                        <div className="text-[11px] text-red-600">+16</div>
                      </div>

                      {/* Saturday - 21 */}
                      <div 
                        className="px-4 py-4 border-r border-gray-200 text-center relative cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setRateModalOpen(true);
                          setSelectedRateDate('21 Feb 2026, Sat');
                        }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredRateCell({ 
                            hotel: 'subscriber', 
                            day: 21, 
                            x: rect.left + rect.width / 2, 
                            y: rect.top 
                          });
                        }}
                        onMouseLeave={() => setHoveredRateCell(null)}
                      >
                        <div className="text-[13px] text-gray-600 mb-2">21</div>
                        <div className="text-[18px] font-semibold text-gray-900 mb-0.5">102</div>
                        <div className="text-[11px] text-gray-400">---</div>
                      </div>

                      {/* Sunday - 22 */}
                      <div 
                        className="px-4 py-4 text-center relative cursor-pointer hover:bg-gray-50 transition-colors"
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredRateCell({ 
                            hotel: 'subscriber', 
                            day: 22, 
                            x: rect.left + rect.width / 2, 
                            y: rect.top 
                          });
                        }}
                        onMouseLeave={() => setHoveredRateCell(null)}
                      >
                        <div className="text-[13px] text-gray-600 mb-2">22</div>
                        <div className="text-[18px] font-semibold text-gray-900 mb-0.5">46</div>
                        <div className="text-[11px] text-red-600">+36</div>
                      </div>
                    </div>

                    {/* Competitor Rates - Expandable Section */}
                    {showCompRates && (
                      <>
                        {/* Avg. Compset Row */}
                        <div className="grid grid-cols-8 bg-blue-50">
                          <div className="px-4 py-3 border-r border-gray-200">
                            <span className="text-[12px] font-medium text-gray-700">Avg. Compset</span>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">135</div>
                            <div className="text-[10px] text-green-600">+2</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">153</div>
                            <div className="text-[10px] text-gray-400">-18</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">169</div>
                            <div className="text-[10px] text-green-600">+6</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">144</div>
                            <div className="text-[10px] text-gray-400">-25</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">129</div>
                            <div className="text-[10px] text-gray-400">-16</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">143</div>
                            <div className="text-[10px] text-green-600">+14</div>
                          </div>
                          <div className="px-4 py-3 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">99</div>
                            <div className="text-[10px] text-gray-400">-43</div>
                          </div>
                        </div>

                        {/* 51 Buckingham Row */}
                        <div className="grid grid-cols-8 border-t border-gray-200">
                          <div className="px-4 py-3 border-r border-gray-200">
                            <span className="text-[12px] text-gray-700">51 Buckingham ...</span>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: '51buckingham', day: 16, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="text-[14px] font-semibold text-gray-900">393</div>
                            <div className="text-[10px] text-gray-400">-5</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: '51buckingham', day: 17, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="flex items-center justify-center gap-1">
                              <div className="text-[14px] font-semibold text-gray-900">423</div>
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            </div>
                            <div className="text-[10px] text-green-600">+30</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: '51buckingham', day: 18, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="text-[14px] font-semibold text-gray-900">371</div>
                            <div className="text-[10px] text-gray-400">-52</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: '51buckingham', day: 19, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="text-[14px] font-semibold text-gray-900">393</div>
                            <div className="text-[10px] text-green-600">+22</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: '51buckingham', day: 20, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="flex items-center justify-center gap-1">
                              <div className="text-[14px] font-semibold text-gray-900">387</div>
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            </div>
                            <div className="text-[10px] text-gray-400">-6</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: '51buckingham', day: 21, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="flex items-center justify-center gap-1">
                              <div className="text-[14px] font-semibold text-gray-900">398</div>
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            </div>
                            <div className="text-[10px] text-green-600">+11</div>
                          </div>
                          <div 
                            className="px-4 py-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: '51buckingham', day: 22, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="flex items-center justify-center gap-1">
                              <div className="text-[14px] font-semibold text-gray-900">387</div>
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            </div>
                            <div className="text-[10px] text-gray-400">-11</div>
                          </div>
                        </div>

                        {/* Apollo Hotel Row */}
                        <div className="grid grid-cols-8 border-t border-gray-200">
                          <div className="px-4 py-3 border-r border-gray-200">
                            <span className="text-[12px] text-gray-700">Apollo Hotel</span>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">84</div>
                            <div className="text-[10px] text-gray-400">-25</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">109</div>
                            <div className="text-[10px] text-green-600">+25</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">109</div>
                            <div className="text-[10px] text-gray-400">0</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">95</div>
                            <div className="text-[10px] text-gray-400">-9</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">87</div>
                            <div className="text-[10px] text-gray-400">-8</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">107</div>
                            <div className="text-[10px] text-green-600">+20</div>
                          </div>
                          <div className="px-4 py-3 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">46</div>
                            <div className="text-[10px] text-gray-400">-61</div>
                          </div>
                        </div>

                        {/* Blakes Hotel Row */}
                        <div className="grid grid-cols-8 border-t border-gray-200">
                          <div className="px-4 py-3 border-r border-gray-200">
                            <span className="text-[12px] text-gray-700">Blakes Hotel</span>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                        </div>

                        {/* Central Hotel Row */}
                        <div className="grid grid-cols-8 border-t border-gray-200">
                          <div className="px-4 py-3 border-r border-gray-200">
                            <span className="text-[12px] text-gray-700">Central Hotel</span>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: 'centralHotel', day: 16, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="text-[14px] font-semibold text-gray-900">57</div>
                            <div className="text-[10px] text-gray-400">-3</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: 'centralHotel', day: 17, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="text-[14px] font-semibold text-gray-900">81</div>
                            <div className="text-[10px] text-green-600">+24</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: 'centralHotel', day: 18, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="flex items-center justify-center gap-1">
                              <div className="text-[14px] font-semibold text-gray-900">82</div>
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-[10px] text-green-600">+1</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: 'centralHotel', day: 19, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="text-[14px] font-semibold text-gray-900">55</div>
                            <div className="text-[10px] text-gray-400">-27</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: 'centralHotel', day: 20, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="flex items-center justify-center gap-1">
                              <div className="text-[14px] font-semibold text-gray-900">95</div>
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-[10px] text-green-600">+40</div>
                          </div>
                          <div 
                            className="px-4 py-3 border-r border-gray-200 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredRateCell({ hotel: 'centralHotel', day: 21, x: rect.left + rect.width / 2, y: rect.top });
                            }}
                            onMouseLeave={() => setHoveredRateCell(null)}
                          >
                            <div className="text-[14px] font-semibold text-gray-900">67</div>
                            <div className="text-[10px] text-gray-400">-28</div>
                          </div>
                          <div className="px-4 py-3 text-center">
                            <div className="text-[14px] font-semibold text-gray-900">47</div>
                            <div className="text-[10px] text-gray-400">-20</div>
                          </div>
                        </div>

                        {/* Chambre d'Hot Row */}
                        <div className="grid grid-cols-8 border-t border-gray-200">
                          <div className="px-4 py-3 border-r border-gray-200">
                            <span className="text-[12px] text-gray-700">Chambre d'Hot...</span>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 border-r border-gray-200 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                          <div className="px-4 py-3 text-center">
                            <div className="text-[13px] text-gray-500">Sold Out</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  )}

                  {/* Grid View */}
                  {ratesView === 'grid' && (
                    <DetailedAnalysisTable />
                  )}

                  {/* Trend View */}
                  {ratesView === 'trend' && (() => {
                    // Trend data for the line chart
                    const trendData = [
                      {
                        date: '16 Feb',
                        subscriber: 78,
                        compsetAvg: 145,
                        centralHotel: 57,
                        holidayHome: 142,
                        hotelPalermo: 168,
                        viveUnique: 225,
                        belgrave: 195
                      },
                      {
                        date: '17 Feb',
                        subscriber: 71,
                        compsetAvg: 142,
                        centralHotel: 54,
                        holidayHome: 138,
                        hotelPalermo: 156,
                        viveUnique: 219,
                        belgrave: 188
                      },
                      {
                        date: '18 Feb',
                        subscriber: 63,
                        compsetAvg: 140,
                        centralHotel: 49,
                        holidayHome: 142,
                        hotelPalermo: 168,
                        viveUnique: 225,
                        belgrave: 195
                      },
                      {
                        date: '19 Feb',
                        subscriber: 63,
                        compsetAvg: 139,
                        centralHotel: 55,
                        holidayHome: 138,
                        hotelPalermo: 168,
                        viveUnique: 215,
                        belgrave: 178
                      },
                      {
                        date: '20 Feb',
                        subscriber: 79,
                        compsetAvg: 147,
                        centralHotel: 95,
                        holidayHome: 116,
                        hotelPalermo: 182,
                        viveUnique: 228,
                        belgrave: 182
                      },
                      {
                        date: '21 Feb',
                        subscriber: 102,
                        compsetAvg: 136,
                        centralHotel: 88,
                        holidayHome: 132,
                        hotelPalermo: 148,
                        viveUnique: 208,
                        belgrave: 195
                      },
                      {
                        date: '22 Feb',
                        subscriber: 88,
                        compsetAvg: 129,
                        centralHotel: 82,
                        holidayHome: 125,
                        hotelPalermo: 138,
                        viveUnique: 192,
                        belgrave: 175
                      }
                    ];

                    const allCompetitors = [
                      { key: 'subscriber', name: 'Subscriber', color: '#2753eb' },
                      { key: 'compsetAvg', name: 'Compset Avg. Rate', color: '#14b8a6' },
                      { key: 'centralHotel', name: 'Central Hotel', color: '#10b981' },
                      { key: 'holidayHome', name: 'Holiday Home Sahurs Rue ...', color: '#f59e0b' },
                      { key: 'hotelPalermo', name: 'Hotel Palermitano by DecO', color: '#8b5cf6' },
                      { key: 'viveUnique', name: 'Vive Unique', color: '#ec4899' },
                      { key: 'belgrave', name: 'The Belgrave', color: '#06b6d4' },
                      { key: 'hotelMarquis', name: 'Hotel Marquis', color: '#ef4444' },
                      { key: 'grandPlaza', name: 'Grand Plaza Hotel', color: '#f97316' },
                      { key: 'sunsetInn', name: 'Sunset Inn & Suites', color: '#84cc16' },
                      { key: 'oceanView', name: 'Ocean View Resort', color: '#22d3ee' },
                      { key: 'cityCenter', name: 'City Center Hotel', color: '#a855f7' },
                      { key: 'parkside', name: 'Parkside Residences', color: '#ec4899' },
                      { key: 'riverside', name: 'Riverside Hotel', color: '#6366f1' },
                      { key: 'hillside', name: 'Hillside Manor', color: '#14b8a6' },
                      { key: 'beachfront', name: 'Beachfront Hotel & Spa', color: '#f59e0b' },
                      { key: 'downtown', name: 'Downtown Suites', color: '#10b981' },
                      { key: 'harbourview', name: 'Harbour View Inn', color: '#06b6d4' },
                      { key: 'lakeside', name: 'Lakeside Resort', color: '#8b5cf6' },
                      { key: 'mountaintop', name: 'Mountaintop Lodge', color: '#ef4444' }
                    ];

                    const totalCompetitors = 38;
                    const filteredCompetitors = allCompetitors.filter(c => selectedCompetitors.includes(c.key));

                    const handleToggleCompetitor = (key: string) => {
                      if (selectedCompetitors.includes(key)) {
                        setSelectedCompetitors(selectedCompetitors.filter(k => k !== key));
                      } else {
                        if (selectedCompetitors.length < 10) {
                          setSelectedCompetitors([...selectedCompetitors, key]);
                        }
                      }
                    };

                    const handleSelectAll = () => {
                      if (selectedCompetitors.length === allCompetitors.length) {
                        setSelectedCompetitors([]);
                      } else {
                        setSelectedCompetitors(allCompetitors.map(c => c.key));
                      }
                    };

                    return (
                      <div className="border border-gray-200 rounded overflow-hidden">
                        {/* Competitor Selector */}
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                          <button 
                            ref={setCompetitorButtonRef}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-[15px] font-medium shadow-sm"
                            onClick={() => setShowCompetitorSelector(!showCompetitorSelector)}
                          >
                            <Eye className="w-5 h-5 text-gray-700" />
                            <span className="text-gray-900">Competitors ({selectedCompetitors.length}/{totalCompetitors})</span>
                            <ChevronDown className="w-5 h-5 text-gray-700 ml-1" />
                          </button>
                        </div>

                        {/* Competitor Selection Modal (Fixed Positioned) */}
                        {showCompetitorSelector && competitorButtonRef && (() => {
                          const rect = competitorButtonRef.getBoundingClientRect();
                          return (
                            <>
                              {/* Backdrop */}
                              <div 
                                className="fixed inset-0 z-[10000]" 
                                onClick={() => setShowCompetitorSelector(false)}
                              />
                              
                              {/* Dropdown Panel */}
                              <div 
                                className="fixed w-[480px] bg-white rounded-xl shadow-2xl border border-gray-200 z-[10001] overflow-hidden"
                                style={{
                                  top: `${rect.bottom + 8}px`,
                                  left: `${rect.left}px`
                                }}
                              >
                                {/* Header */}
                                <div className="px-5 pt-5 pb-3 border-b border-gray-200">
                                  <h3 className="text-[18px] font-semibold text-gray-900 mb-1">Select Competitors</h3>
                                  <p className="text-[13px] text-gray-500">{selectedCompetitors.length} of {totalCompetitors} competitors selected</p>
                                </div>

                                {/* Competitor List */}
                                <div className="max-h-[320px] overflow-y-auto px-5 py-3">
                                  {/* Select All */}
                                  <div className="flex items-center gap-3 py-2.5 border-b border-gray-100">
                                    <input
                                      type="checkbox"
                                      checked={selectedCompetitors.length === allCompetitors.length}
                                      onChange={handleSelectAll}
                                      className="w-4 h-4 rounded border-2 border-gray-300 text-[#2753eb] focus:ring-2 focus:ring-[#2753eb] focus:ring-offset-0 cursor-pointer"
                                    />
                                    <span className="text-[15px] font-medium text-gray-900">Select All</span>
                                  </div>

                                  {/* Competitor Items */}
                                  {allCompetitors.map((competitor) => (
                                    <div 
                                      key={competitor.key}
                                      className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-b-0"
                                    >
                                      <div className="flex items-center gap-2.5">
                                        <input
                                          type="checkbox"
                                          checked={selectedCompetitors.includes(competitor.key)}
                                          onChange={() => handleToggleCompetitor(competitor.key)}
                                          className="w-4 h-4 rounded border-2 border-gray-300 text-[#2753eb] focus:ring-2 focus:ring-[#2753eb] focus:ring-offset-0 cursor-pointer"
                                        />
                                        <div 
                                          className="w-4 h-4 rounded-full flex-shrink-0"
                                          style={{ backgroundColor: competitor.color }}
                                        />
                                        <span className="text-[15px] text-gray-900">{competitor.name}</span>
                                      </div>
                                      {selectedCompetitors.includes(competitor.key) && (
                                        <span className="px-2.5 py-0.5 bg-teal-100 text-teal-700 text-[11px] font-medium rounded-full">
                                          Active
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>

                                {/* Footer */}
                                <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
                                  <p className="text-[12px] text-gray-600 text-center">
                                    Initially shows 4 channels. Select up to 10 total channels for display.
                                  </p>
                                </div>
                              </div>
                            </>
                          );
                        })()}

                        {/* Chart Container */}
                        <div className="p-6 bg-white">
                          <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={trendData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                              <XAxis 
                                dataKey="date" 
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                stroke="#9ca3af"
                              />
                              <YAxis 
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                stroke="#9ca3af"
                                label={{ value: 'Rate (€)', angle: -90, position: 'insideLeft', style: { fontSize: 12, fill: '#6b7280' } }}
                              />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: '#ffffff', 
                                  border: '1px solid #e5e7eb',
                                  borderRadius: '8px',
                                  fontSize: '12px'
                                }}
                              />
                              <Legend 
                                verticalAlign="bottom" 
                                height={36}
                                iconType="line"
                                wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
                              />
                              {filteredCompetitors.map((comp) => (
                                <Line
                                  key={comp.key}
                                  type="monotone"
                                  dataKey={comp.key}
                                  name={comp.name}
                                  stroke={comp.color}
                                  strokeWidth={2}
                                  dot={{ r: 4, fill: comp.color }}
                                  activeDot={{ r: 6 }}
                                  connectNulls={false}
                                />
                              ))}
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="flex-1 px-6 pb-6">
                {/* Tab Header */}
                <div className="pt-6 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-[18px] font-semibold text-[#1a1a1a]">
                      Event Logs - Ibiza
                    </h2>
                    <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                  <p className="text-[13px] text-gray-500">Track all system activities and changes</p>
                </div>

                <div className="flex items-center justify-center h-64 text-gray-500">
                  Event Logs content coming soon...
                </div>
              </div>
            )}

            {activeTab === 'sync' && (
              <div className="flex-1 px-6 pb-6">
                {/* Tab Header */}
                <div className="pt-6 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-[18px] font-semibold text-[#1a1a1a]">
                      Sync & Audit Logs
                    </h2>
                    <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                  <p className="text-[13px] text-gray-500">Source of truth and accountability layer for all data refreshes</p>
                </div>

                {/* Usage Counter Card */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500 rounded-full p-2">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-gray-900">Lightning Refresh Status</div>
                        <div className="text-[12px] text-gray-600">Fair Usage Policy (24-hour window)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[24px] font-bold text-blue-600">1 of 3</div>
                      <div className="text-[12px] text-gray-600">Refreshes Remaining</div>
                    </div>
                  </div>
                </div>

                {/* Lightning Refresh Log Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <h3 className="text-[15px] font-semibold text-gray-900">Lightning Refresh Log</h3>
                    <span className="text-[12px] text-gray-500">(Manual Refreshes)</span>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Timestamp</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">User</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Status</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Data Source</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Records Updated</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Market Changes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-[13px] text-gray-900">19 Feb 2026, 09:24 AM</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Sarah Mitchell</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              Success
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Live Crawl API</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">247 rates</td>
                          <td className="px-4 py-3">
                            <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium">View Delta</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-[13px] text-gray-900">18 Feb 2026, 03:15 PM</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">John Anderson</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              Success
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Live Crawl API</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">238 rates</td>
                          <td className="px-4 py-3">
                            <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium">View Delta</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 bg-red-50">
                          <td className="px-4 py-3 text-[13px] text-gray-900">17 Feb 2026, 11:42 AM</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Sarah Mitchell</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 text-red-700 text-[11px] font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                              Failed
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Live Crawl API</td>
                          <td className="px-4 py-3 text-[13px] text-gray-400">—</td>
                          <td className="px-4 py-3 text-[12px] text-red-600">API Timeout</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sync History Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                    <h3 className="text-[15px] font-semibold text-gray-900">Sync History</h3>
                    <span className="text-[12px] text-gray-500">(Automated 24-hour Cycle)</span>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Sync Time</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Type</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Status</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Duration</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Records</th>
                          <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-700">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-[13px] text-gray-900">19 Feb 2026, 12:00 AM</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Standard Sync</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              Completed
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">4m 32s</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">1,245</td>
                          <td className="px-4 py-3">
                            <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium">View Log</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-[13px] text-gray-900">18 Feb 2026, 12:00 AM</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Standard Sync</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              Completed
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">4m 18s</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">1,238</td>
                          <td className="px-4 py-3">
                            <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium">View Log</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-[13px] text-gray-900">17 Feb 2026, 12:00 AM</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Standard Sync</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              Completed
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">4m 45s</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">1,232</td>
                          <td className="px-4 py-3">
                            <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium">View Log</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-[13px] text-gray-900">16 Feb 2026, 12:00 AM</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Standard Sync</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              Completed
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">4m 22s</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">1,229</td>
                          <td className="px-4 py-3">
                            <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium">View Log</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-[13px] text-gray-900">15 Feb 2026, 12:00 AM</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">Standard Sync</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              Completed
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">4m 38s</td>
                          <td className="px-4 py-3 text-[13px] text-gray-700">1,221</td>
                          <td className="px-4 py-3">
                            <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium">View Log</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Data Delta Alerts Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                    <h3 className="text-[15px] font-semibold text-gray-900">Data Delta Alerts</h3>
                    <span className="text-[12px] text-gray-500">(Significant Market Shifts)</span>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Alert 1 */}
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-500 rounded-full p-1.5 mt-0.5">
                          <TrendingUp className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-[13px] font-semibold text-gray-900">Significant Rate Increase Detected</div>
                            <div className="text-[11px] text-gray-500">2 hours ago</div>
                          </div>
                          <div className="text-[12px] text-gray-700">
                            Avg. Comp Set rate for <span className="font-semibold">March 12th</span> increased by <span className="font-semibold text-orange-600">£20</span> (from £165 to £185)
                          </div>
                          <div className="text-[11px] text-gray-500 mt-1">
                            Affected Hotels: Central Hotel (+£25), Holiday Home (+£18), Hotel Palermo (+£22)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Alert 2 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-500 rounded-full p-1.5 mt-0.5">
                          <TrendingUp className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-[13px] font-semibold text-gray-900">Demand Spike Identified</div>
                            <div className="text-[11px] text-gray-500">5 hours ago</div>
                          </div>
                          <div className="text-[12px] text-gray-700">
                            Demand Index for <span className="font-semibold">February 28th</span> jumped from <span className="font-semibold">32</span> to <span className="font-semibold text-blue-600">42</span> (+31%)
                          </div>
                          <div className="text-[11px] text-gray-500 mt-1">
                            Recommendation: Consider rate adjustment for optimal revenue
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Alert 3 */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-500 rounded-full p-1.5 mt-0.5">
                          <Eye className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-[13px] font-semibold text-gray-900">New Competitor Availability</div>
                            <div className="text-[11px] text-gray-500">1 day ago</div>
                          </div>
                          <div className="text-[12px] text-gray-700">
                            <span className="font-semibold">Vive Unique</span> opened up new inventory for March 15-20 at <span className="font-semibold text-green-600">£100/night</span>
                          </div>
                          <div className="text-[11px] text-gray-500 mt-1">
                            This is 39% below your current rate of £165/night
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tooltip */}
          {hoveredDay && (
            <div
              className="fixed bg-[#1a1a1a] text-white rounded-lg shadow-xl p-4 z-[10000] pointer-events-none w-[220px]"
              style={{
                left: `${hoveredDay.x}px`,
                top: `${hoveredDay.y - 10}px`,
                transform: 'translate(-50%, -100%)',
              }}
            >
              <div className="text-[16px] font-semibold mb-1">
                {months.find((m) => m.days.includes(hoveredDay.day))?.month}{' '}
                {hoveredDay.day.date}
              </div>
              <div className="text-[14px] capitalize">
                {hoveredDay.day.demand.replace('-', ' ')} Demand
              </div>
              {/* Demand metrics section */}
              {hoveredDay.day.demandIndex && (
                <>
                  <div className="border-t border-gray-700 my-2" />
                  <div className="text-[14px]">
                    Demand Index : {hoveredDay.day.demandIndex}
                  </div>
                  {hoveredDay.day.demandMultiplier && (
                    <div className="text-[14px] mt-1">
                      Demand Multiplier : {hoveredDay.day.demandMultiplier}x
                    </div>
                  )}
                  {hoveredDay.day.confidence !== undefined && (
                    <div className="text-[11px] mt-2">
                      <span className="text-gray-400">Confidence Score: </span>
                      <span
                        className={
                          hoveredDay.day.confidence > 75
                            ? 'text-green-500'
                            : hoveredDay.day.confidence >= 50
                            ? 'text-amber-500'
                            : 'text-red-500'
                        }
                      >
                        {hoveredDay.day.confidence}%
                      </span>
                    </div>
                  )}
                </>
              )}
              {hoveredDay.day.event && (
                <div className="border-t border-gray-600 pt-2 mt-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[14px] font-medium text-orange-400">
                        {hoveredDay.day.event.name}
                      </div>
                      <div className="text-[12px] text-gray-300">
                        {hoveredDay.day.event.dateRange}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Date Range Dropdown */}
          {dateRangeDropdownOpen && dateRangeButtonRef && (() => {
            const buttonRect = dateRangeButtonRef.getBoundingClientRect();
            const dropdownWidth = 280;
            
            // Calculate position
            let top = buttonRect.bottom + 8;
            let left = buttonRect.left;
            
            // Adjust if dropdown would go off the right edge
            const spaceRight = window.innerWidth - buttonRect.left;
            if (spaceRight < dropdownWidth) {
              left = Math.max(8, buttonRect.right - dropdownWidth);
            }
            
            // Adjust if dropdown would go off the bottom edge
            const spaceBelow = window.innerHeight - buttonRect.bottom - 8;
            const estimatedDropdownHeight = 300;
            if (spaceBelow < estimatedDropdownHeight) {
              top = Math.max(8, buttonRect.top - estimatedDropdownHeight - 8);
            }
            
            return (
              <div 
                className="fixed inset-0 z-[10001]" 
                onClick={() => setDateRangeDropdownOpen(false)}
              >
                <div 
                  className="absolute bg-white rounded-xl shadow-2xl w-[280px] border border-gray-200 p-4" 
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-3">Check-in Date</h3>
                  
                  {/* Options */}
                  <div className="space-y-2">
                    {dateRangeOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedDateRange(option.value);
                          setDateRangeDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left rounded-lg transition-all ${
                          selectedDateRange === option.value
                            ? 'bg-[#2F6FED] border border-[#2F6FED]'
                            : 'bg-white border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`text-[14px] font-semibold mb-0.5 ${
                          selectedDateRange === option.value ? 'text-white' : 'text-[#1a1a1a]'
                        }`}>
                          {option.label}
                        </div>
                        <div className={`text-[12px] ${
                          selectedDateRange === option.value ? 'text-white/90' : 'text-gray-500'
                        }`}>
                          {option.dateRange}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Compare Dropdown */}
          {compareDropdownOpen && compareButtonRef && (() => {
            const buttonRect = compareButtonRef.getBoundingClientRect();
            const dropdownWidth = 280;
            
            // Calculate position
            let top = buttonRect.bottom + 8;
            let left = buttonRect.left;
            
            // Adjust if dropdown would go off the right edge
            const spaceRight = window.innerWidth - buttonRect.left;
            if (spaceRight < dropdownWidth) {
              left = Math.max(8, buttonRect.right - dropdownWidth);
            }
            
            // Adjust if dropdown would go off the bottom edge
            const spaceBelow = window.innerHeight - buttonRect.bottom - 8;
            const estimatedDropdownHeight = 220;
            if (spaceBelow < estimatedDropdownHeight) {
              top = Math.max(8, buttonRect.top - estimatedDropdownHeight - 8);
            }
            
            return (
              <div 
                className="fixed inset-0 z-[10001]" 
                onClick={() => setCompareDropdownOpen(false)}
              >
                <div 
                  className="absolute bg-white rounded-xl shadow-2xl w-[280px] border border-gray-200 p-4" 
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-3">Compare with</h3>
                  
                  {/* Options */}
                  <div className="space-y-2">
                    {compareOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCompare(option.value);
                          setCompareDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left rounded-lg transition-all ${
                          selectedCompare === option.value
                            ? 'bg-[#2F6FED] border-2 border-[#2F6FED]'
                            : 'bg-white border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`text-[14px] font-medium ${
                          selectedCompare === option.value ? 'text-white' : 'text-[#1a1a1a]'
                        }`}>
                          {option.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Vs Comparison Dropdown */}
          {vsComparisonDropdownOpen && vsComparisonButtonRef && (() => {
            const buttonRect = vsComparisonButtonRef.getBoundingClientRect();
            const dropdownWidth = 280;
            
            // Calculate position
            let top = buttonRect.bottom + 8;
            let left = buttonRect.left;
            
            // Adjust if dropdown would go off the right edge
            const spaceRight = window.innerWidth - buttonRect.left;
            if (spaceRight < dropdownWidth) {
              left = Math.max(8, buttonRect.right - dropdownWidth);
            }
            
            // Adjust if dropdown would go off the bottom edge
            const spaceBelow = window.innerHeight - buttonRect.bottom - 8;
            const estimatedDropdownHeight = 250;
            if (spaceBelow < estimatedDropdownHeight) {
              top = Math.max(8, buttonRect.top - estimatedDropdownHeight - 8);
            }
            
            return (
              <div 
                className="fixed inset-0 z-[10001]" 
                onClick={() => setVsComparisonDropdownOpen(false)}
              >
                <div 
                  className="absolute bg-white rounded-xl shadow-2xl w-[280px] border border-gray-200 p-4" 
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-3">Compare with</h3>
                  
                  {/* Options */}
                  <div className="space-y-2">
                    {vsComparisonOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedVsComparison(option.value);
                          setVsComparisonDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left rounded-lg transition-all ${
                          selectedVsComparison === option.value
                            ? 'bg-[#2F6FED] border-2 border-[#2F6FED]'
                            : 'bg-white border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`text-[14px] font-medium ${
                          selectedVsComparison === option.value ? 'text-white' : 'text-[#1a1a1a]'
                        }`}>
                          {option.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Channel Dropdown */}
          {channelDropdownOpen && channelButtonRef && (() => {
            const buttonRect = channelButtonRef.getBoundingClientRect();
            const dropdownWidth = 280;
            
            // Calculate position
            let top = buttonRect.bottom + 8;
            let left = buttonRect.left;
            
            // Adjust if dropdown would go off the right edge
            const spaceRight = window.innerWidth - buttonRect.left;
            if (spaceRight < dropdownWidth) {
              left = Math.max(8, buttonRect.right - dropdownWidth);
            }
            
            // Adjust if dropdown would go off the bottom edge
            const spaceBelow = window.innerHeight - buttonRect.bottom - 8;
            const estimatedDropdownHeight = 400;
            if (spaceBelow < estimatedDropdownHeight) {
              top = Math.max(8, buttonRect.top - estimatedDropdownHeight - 8);
            }
            
            return (
              <div 
                className="fixed inset-0 z-[10001]" 
                onClick={() => setChannelDropdownOpen(false)}
              >
                <div 
                  className="absolute bg-white rounded-xl shadow-2xl w-[280px] border border-gray-200 p-4" 
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-3">Select Channels</h3>
                  
                  {/* Options */}
                  <div className="space-y-2">
                    {channelOptions.map((option, index) => {
                      const isAllChannels = option.value === 'All Channels';
                      
                      // Get all individual channel values (excluding "All Channels")
                      const allIndividualChannels = channelOptions
                        .filter(opt => opt.value !== 'All Channels')
                        .map(opt => opt.value);
                      
                      // Check if all individual channels are selected
                      const allIndividualsSelected = allIndividualChannels.every(ch => selectedChannels.includes(ch));
                      
                      const isChecked = isAllChannels 
                        ? allIndividualsSelected
                        : selectedChannels.includes(option.value);
                      
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            if (isAllChannels) {
                              // Toggle All Channels - select or deselect all individual channels
                              if (allIndividualsSelected) {
                                setSelectedChannels([]);
                              } else {
                                setSelectedChannels(allIndividualChannels);
                              }
                            } else {
                              // Handle individual channel selection
                              if (selectedChannels.includes(option.value)) {
                                // Uncheck this channel
                                const newChannels = selectedChannels.filter(c => c !== option.value);
                                setSelectedChannels(newChannels.length === 0 ? allIndividualChannels : newChannels);
                              } else {
                                // Check this channel
                                const newChannels = [...selectedChannels, option.value];
                                setSelectedChannels(newChannels);
                              }
                            }
                          }}
                          className={`w-full px-4 py-3 text-left rounded-lg transition-all flex items-center gap-3 ${
                            isChecked
                              ? 'bg-[#EEF4FF] border-2 border-[#2F6FED]'
                              : 'bg-white border border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {/* Checkbox */}
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            isChecked 
                              ? 'bg-[#2F6FED] border-[#2F6FED]' 
                              : 'border-gray-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                          </div>
                          
                          {/* Label */}
                          <div className={`text-[14px] font-medium ${
                            isChecked ? 'text-[#2F6FED]' : 'text-[#1a1a1a]'
                          }`}>
                            {option.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Compset Dropdown */}
          {compsetDropdownOpen && compsetButtonRef && (() => {
            const buttonRect = compsetButtonRef.getBoundingClientRect();
            const dropdownWidth = 200;
            
            // Calculate position
            let top = buttonRect.bottom + 8;
            let left = buttonRect.left;
            
            // Adjust if dropdown would go off the right edge
            const spaceRight = window.innerWidth - buttonRect.left;
            if (spaceRight < dropdownWidth) {
              left = Math.max(8, buttonRect.right - dropdownWidth);
            }
            
            // Adjust if dropdown would go off the bottom edge
            const spaceBelow = window.innerHeight - buttonRect.bottom - 8;
            const estimatedDropdownHeight = 150;
            if (spaceBelow < estimatedDropdownHeight) {
              top = Math.max(8, buttonRect.top - estimatedDropdownHeight - 8);
            }
            
            const compsetOptions = [
              { label: 'Primary', value: 'Primary' },
              { label: 'Secondary', value: 'Secondary' },
            ];
            
            return (
              <div 
                className="fixed inset-0 z-[10001]" 
                onClick={() => setCompsetDropdownOpen(false)}
              >
                <div 
                  className="absolute bg-white rounded-xl shadow-2xl border border-gray-200 p-3" 
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                    width: `${dropdownWidth}px`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-3">Select Compset</h3>
                  
                  {/* Options */}
                  <div className="space-y-2">
                    {compsetOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCompset(option.value);
                          setCompsetDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left rounded-lg transition-all ${
                          selectedCompset === option.value
                            ? 'bg-[#EEF4FF] border-2 border-[#2F6FED]'
                            : 'bg-white border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`text-[14px] font-medium ${
                          selectedCompset === option.value ? 'text-[#2F6FED]' : 'text-[#1a1a1a]'
                        }`}>
                          {option.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Competitor Calendar Dropdown */}
          {competitorCalendarDropdownOpen && competitorCalendarButtonRef && (() => {
            const buttonRect = competitorCalendarButtonRef.getBoundingClientRect();
            const dropdownWidth = showCustomCalendar ? 650 : 280;
            
            // Calculate position
            let top = buttonRect.bottom + 8;
            let left = buttonRect.left;
            
            // Adjust if dropdown would go off the right edge
            const spaceRight = window.innerWidth - buttonRect.left;
            if (spaceRight < dropdownWidth) {
              left = Math.max(8, buttonRect.right - dropdownWidth);
            }
            
            // Adjust if dropdown would go off the bottom edge
            const spaceBelow = window.innerHeight - buttonRect.bottom - 8;
            const estimatedDropdownHeight = 450;
            if (spaceBelow < estimatedDropdownHeight) {
              top = Math.max(8, buttonRect.top - estimatedDropdownHeight - 8);
            }
            
            return (
              <div 
                className="fixed inset-0 z-[10001]" 
                onClick={() => {
                  setCompetitorCalendarDropdownOpen(false);
                  setShowCustomCalendar(false);
                }}
              >
                <div 
                  className="absolute bg-white rounded-xl shadow-2xl border border-gray-200" 
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                    width: showCustomCalendar ? '650px' : '280px',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex">
                    {/* Left Side - Options List */}
                    <div className="p-4 border-r border-gray-200" style={{ width: showCustomCalendar ? '280px' : '280px' }}>
                      <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-3">Check-in Date</h3>
                      
                      <div className="space-y-2">
                        {competitorCalendarOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedCompetitorDateRange(option.value);
                              setShowCustomCalendar(false);
                              setCompetitorCalendarDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left rounded-lg transition-all ${
                              selectedCompetitorDateRange === option.value && !showCustomCalendar
                                ? 'bg-[#2F6FED] border border-[#2F6FED]'
                                : 'bg-white border border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            <div className={`text-[14px] font-semibold mb-0.5 ${
                              selectedCompetitorDateRange === option.value && !showCustomCalendar ? 'text-white' : 'text-[#1a1a1a]'
                            }`}>
                              {option.label}
                            </div>
                            <div className={`text-[12px] ${
                              selectedCompetitorDateRange === option.value && !showCustomCalendar ? 'text-white/90' : 'text-gray-500'
                            }`}>
                              {option.dateRange}
                            </div>
                          </button>
                        ))}
                        
                        {/* Custom Date Range Button */}
                        <button
                          onClick={() => {
                            setShowCustomCalendar(true);
                            setSelectedCompetitorDateRange('Custom Date Range');
                          }}
                          className={`w-full px-4 py-3 text-left rounded-lg transition-all ${
                            showCustomCalendar
                              ? 'bg-[#2F6FED] border border-[#2F6FED]'
                              : 'bg-white border border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <div className={`text-[14px] font-semibold ${
                            showCustomCalendar ? 'text-white' : 'text-[#1a1a1a]'
                          }`}>
                            Custom Date Range
                          </div>
                        </button>
                      </div>
                    </div>
                    
                    {/* Right Side - Calendar (only shown when Custom Date Range is selected) */}
                    {showCustomCalendar && (
                      <div className="p-4" style={{ width: '370px' }}>
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-4">
                          <button 
                            onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1))}
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4 text-gray-600" />
                          </button>
                          <h4 className="text-[14px] font-semibold text-[#1a1a1a]">
                            {calendarMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </h4>
                          <button 
                            onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1))}
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        
                        {/* Weekday Headers */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <div key={day} className="text-center text-[11px] font-medium text-gray-500 py-1">
                              {day}
                            </div>
                          ))}
                        </div>
                        
                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1 mb-4">
                          {(() => {
                            const year = calendarMonth.getFullYear();
                            const month = calendarMonth.getMonth();
                            const firstDay = new Date(year, month, 1).getDay();
                            const daysInMonth = new Date(year, month + 1, 0).getDate();
                            const startOffset = firstDay === 0 ? 6 : firstDay - 1;
                            
                            const days = [];
                            
                            // Previous month days
                            const prevMonthDays = new Date(year, month, 0).getDate();
                            for (let i = startOffset - 1; i >= 0; i--) {
                              days.push(
                                <div key={`prev-${i}`} className="text-center py-2 text-[13px] text-gray-300">
                                  {prevMonthDays - i}
                                </div>
                              );
                            }
                            
                            // Current month days
                            const today = 17; // Feb 17, 2026
                            for (let day = 1; day <= daysInMonth; day++) {
                              const isToday = day === today && month === 1;
                              const isSelected = customStartDate?.getDate() === day || customEndDate?.getDate() === day;
                              const isInRange = customStartDate && customEndDate && 
                                day >= customStartDate.getDate() && day <= customEndDate.getDate();
                              
                              days.push(
                                <button
                                  key={day}
                                  onClick={() => {
                                    const selectedDate = new Date(year, month, day);
                                    if (!customStartDate || (customStartDate && customEndDate)) {
                                      setCustomStartDate(selectedDate);
                                      setCustomEndDate(null);
                                    } else if (selectedDate > customStartDate) {
                                      setCustomEndDate(selectedDate);
                                    } else {
                                      setCustomStartDate(selectedDate);
                                      setCustomEndDate(null);
                                    }
                                  }}
                                  className={`text-center py-2 text-[13px] rounded-lg transition-all ${
                                    isToday 
                                      ? 'bg-gray-200 text-gray-900 font-semibold'
                                      : isSelected
                                      ? 'bg-[#2F6FED] text-white font-semibold'
                                      : isInRange
                                      ? 'bg-blue-100 text-gray-900'
                                      : 'text-gray-700 hover:bg-gray-100'
                                  }`}
                                >
                                  {day}
                                </button>
                              );
                            }
                            
                            // Next month days
                            const remainingCells = 42 - days.length;
                            for (let i = 1; i <= remainingCells; i++) {
                              days.push(
                                <div key={`next-${i}`} className="text-center py-2 text-[13px] text-gray-300">
                                  {i}
                                </div>
                              );
                            }
                            
                            return days;
                          })()}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-200">
                          <button
                            onClick={() => {
                              setShowCustomCalendar(false);
                              setCustomStartDate(null);
                              setCustomEndDate(null);
                            }}
                            className="px-4 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              if (customStartDate && customEndDate) {
                                setCompetitorCalendarDropdownOpen(false);
                                setShowCustomCalendar(false);
                              }
                            }}
                            className="px-4 py-2 text-[13px] font-medium text-white bg-[#2F6FED] hover:bg-[#2557d6] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!customStartDate || !customEndDate}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Filters Modal */}
          {showFiltersModal && filtersButtonRef && (() => {
            const buttonRect = filtersButtonRef.getBoundingClientRect();
            const modalWidth = 480;
            const modalMaxHeight = window.innerHeight * 0.9;
            const spaceBelow = window.innerHeight - buttonRect.bottom - 8;
            const spaceRight = window.innerWidth - buttonRect.left;
            
            // Calculate position
            let top = buttonRect.bottom + 8;
            let left = buttonRect.left;
            
            // Adjust if modal would go off the right edge
            if (spaceRight < modalWidth) {
              left = Math.max(8, buttonRect.right - modalWidth);
            }
            
            // Adjust if modal would go off the bottom edge
            if (spaceBelow < Math.min(600, modalMaxHeight)) {
              top = Math.max(8, buttonRect.top - Math.min(600, modalMaxHeight) - 8);
            }
            
            return (
              <div 
                className="fixed inset-0 bg-black/20 z-[10001]" 
                onClick={() => setShowFiltersModal(false)}
              >
                <div 
                  className="absolute bg-white rounded-lg shadow-xl w-[480px] max-h-[90vh] overflow-y-auto" 
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-[18px] font-semibold text-[#1a1a1a]">Filters</h3>
                </div>

                {/* Filter Sections */}
                <div className="px-6 py-4 space-y-4">
                  {/* Rate Types Section */}
                  <div className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                      onClick={() => setRateTypeExpanded(!rateTypeExpanded)}
                    >
                      <span className="text-[14px] font-medium text-[#1a1a1a]">Rate Types</span>
                      <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${rateTypeExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {rateTypeExpanded && (
                      <div className="px-4 pb-4 space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="rateType"
                            checked={selectedRateType === 'low'}
                            onChange={() => setSelectedRateType('low')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">Lowest (LOW)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="rateType"
                            checked={selectedRateType === 'bar'}
                            onChange={() => setSelectedRateType('bar')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">Best Available Rate (BAR)</span>
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Room Types Section */}
                  <div className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                      onClick={() => setRoomTypeExpanded(!roomTypeExpanded)}
                    >
                      <span className="text-[14px] font-medium text-[#1a1a1a]">Room Types</span>
                      <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${roomTypeExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {roomTypeExpanded && (
                      <div className="px-4 pb-4 space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'any'}
                            onChange={() => setSelectedRoomType('any')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">Any</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'apt'}
                            onChange={() => setSelectedRoomType('apt')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">APARTMENT (APT)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'bgl'}
                            onChange={() => setSelectedRoomType('bgl')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">BUNGLOW (BGL)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'dlr'}
                            onChange={() => setSelectedRoomType('dlr')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">DELUXE ROOM (DLR)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'exe'}
                            onChange={() => setSelectedRoomType('exe')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">Executive Room (Exe)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'str'}
                            onChange={() => setSelectedRoomType('str')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">STANDARD ROOM (STR)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'std'}
                            onChange={() => setSelectedRoomType('std')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">STUDIO (STD)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'ste'}
                            onChange={() => setSelectedRoomType('ste')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">SUITE (STE)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'spr'}
                            onChange={() => setSelectedRoomType('spr')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">SUPERIOR ROOM (SPR)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoomType === 'vla'}
                            onChange={() => setSelectedRoomType('vla')}
                            className="w-4 h-4 text-[#2753eb] border-gray-300 focus:ring-[#2753eb]"
                          />
                          <span className="text-[14px] text-gray-700">VILLA (VLA)</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 py-4 border-t border-gray-200 flex items-center gap-3">
                  <button
                    className="flex-1 px-4 py-2 text-[14px] font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50"
                    onClick={() => {
                      setSelectedRateType('low');
                      setSelectedRoomType('any');
                    }}
                  >
                    Reset
                  </button>
                  <button
                    className="flex-1 px-4 py-2 text-[14px] font-medium text-white bg-[#2753eb] rounded hover:bg-[#1f42c0]"
                    onClick={() => setShowFiltersModal(false)}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
            );
          })()}

          {/* Rate Cell Hover Tooltip */}
          {hoveredRateCell && (() => {
            const data = getRateCellData(hoveredRateCell.hotel, hoveredRateCell.day);
            const tooltipWidth = 420;
            const tooltipHeight = 340;
            
            // Get day of week
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dateObj = new Date(2026, 1, hoveredRateCell.day); // Feb 2026
            const dayName = dayNames[dateObj.getDay()];
            
            // Position tooltip above the cell, centered
            let left = hoveredRateCell.x - tooltipWidth / 2;
            let top = hoveredRateCell.y - tooltipHeight - 12;
            
            // Keep tooltip within viewport
            if (left < 8) left = 8;
            if (left + tooltipWidth > window.innerWidth - 8) {
              left = window.innerWidth - tooltipWidth - 8;
            }
            if (top < 8) {
              top = hoveredRateCell.y + 80; // Show below if no room above
            }
            
            return (
              <div 
                className="fixed z-[10002] bg-white rounded-lg shadow-2xl border border-gray-200"
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  width: `${tooltipWidth}px`,
                  pointerEvents: 'none'
                }}
              >
                {/* Header */}
                <div className="px-4 pt-4 pb-3">
                  <div className="text-[16px] font-bold text-gray-900 mb-2">
                    {hoveredRateCell.day} Feb 2026, {dayName}
                  </div>
                  <div className="text-[14px] text-gray-700 mb-3">
                    {data.hotelName}
                  </div>
                </div>

                {/* Table Section */}
                <div className="px-4 pb-3">
                  {/* Column Headers */}
                  <div className="grid grid-cols-4 gap-3 mb-2">
                    <div className="text-[11px] font-medium text-gray-600">Lowest Rate</div>
                    <div className="text-[11px] font-medium text-gray-600">Room</div>
                    <div className="text-[11px] font-medium text-gray-600">Inclusion</div>
                    <div className="text-[11px] font-medium text-gray-600">Channel</div>
                  </div>
                  
                  {/* Data Row */}
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    <div className="text-[16px] font-bold text-gray-900">£ {data.rate}</div>
                    <div className="text-[11px] font-semibold text-gray-900 leading-tight">{data.roomType}</div>
                    <div className="text-[11px] text-gray-700">{data.inclusion}</div>
                    <div className="text-[11px] text-gray-700">{data.channel}</div>
                  </div>
                  
                  {/* Avg Compset Row */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[12px] text-gray-700">£ {data.avgCompset} - Avg. Compset</span>
                  </div>
                  
                  {/* Event Row */}
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400 flex-shrink-0" />
                    <span className="text-[11px] text-gray-700">{data.event.name}</span>
                    {data.event.additionalCount > 0 && (
                      <span className="text-[11px] text-gray-500">(+{data.event.additionalCount} more)</span>
                    )}
                  </div>
                </div>

                {/* Description Section */}
                <div className="px-4 pb-4">
                  <div className="text-[11px] text-gray-600 leading-relaxed">
                    {data.description}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Rate Evolution Modal */}
          {rateModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-[10003] p-8">
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-[1000px] max-h-[90vh] overflow-auto">
                {/* Modal Header - All in One Row */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                  {/* Left: Title */}
                  <h2 className="text-[18px] font-bold text-gray-900">Rate Evolution</h2>
                  
                  {/* Center: Date Navigation */}
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[15px] font-semibold text-gray-900 px-2">{selectedRateDate}</span>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Right: Download and Close */}
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-[13px] font-medium transition-colors">
                      <Download className="w-4 h-4" />
                      Download CSV
                    </button>
                    <button 
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setRateModalOpen(false)}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Subtitle - Regular text, no background */}
                <div className="px-6 pt-4 pb-2">
                  <p className="text-[13px] text-gray-500">
                    View rate trends across different lead times for selected <span className="font-semibold">Check-in Date</span>
                  </p>
                </div>

                {/* Chart Container */}
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ResponsiveContainer width="100%" height={380}>
                    <LineChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 65 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis 
                        dataKey="leadTime" 
                        tick={{ fontSize: 11, fill: '#6b7280' }}
                        stroke="#e5e7eb"
                        axisLine={false}
                        tickLine={false}
                      />
                      <XAxis 
                        dataKey="date" 
                        tick={{ fontSize: 10, fill: '#9ca3af' }}
                        stroke="transparent"
                        axisLine={false}
                        tickLine={false}
                        xAxisId="date"
                        dy={15}
                      />
                      <YAxis 
                        tick={{ fontSize: 11, fill: '#9ca3af' }}
                        stroke="#e5e7eb"
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 900]}
                        ticks={[0, 250, 500, 900]}
                        label={{ value: 'Rates (£)', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#9ca3af' }, offset: 10 }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e5e7eb', 
                          borderRadius: '6px',
                          fontSize: '11px',
                          padding: '8px 12px'
                        }}
                      />
                      <Legend 
                        wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }}
                        iconType="line"
                        iconSize={16}
                      />
                      {/* Alhambra Hotel - Blue Dashed */}
                      <Line 
                        type="monotone" 
                        dataKey="alhambra" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        strokeDasharray="5 3"
                        dot={{ fill: '#3b82f6', r: 3 }}
                        activeDot={{ r: 5 }}
                        name="Alhambra Hotel"
                      />
                      {/* Avg. Compset - Cyan Dashed */}
                      <Line 
                        type="monotone" 
                        dataKey="avgCompset" 
                        stroke="#06b6d4" 
                        strokeWidth={2}
                        strokeDasharray="5 3"
                        dot={{ fill: '#06b6d4', r: 3 }}
                        activeDot={{ r: 5 }}
                        name="Avg. Compset"
                      />
                      {/* Central Hotel - Green Dashed */}
                      <Line 
                        type="monotone" 
                        dataKey="central" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        strokeDasharray="5 3"
                        dot={{ fill: '#10b981', r: 3 }}
                        activeDot={{ r: 5 }}
                        name="Central Hotel"
                      />
                      {/* Holiday Home - Orange Dashed */}
                      <Line 
                        type="monotone" 
                        dataKey="holiday" 
                        stroke="#f59e0b" 
                        strokeWidth={2}
                        strokeDasharray="5 3"
                        dot={{ fill: '#f59e0b', r: 3 }}
                        activeDot={{ r: 5 }}
                        name="Holiday Home Sahurs Rue ..."
                      />
                      {/* Hotel Palermitano - Red Dashed */}
                      <Line 
                        type="monotone" 
                        dataKey="palermitano" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        strokeDasharray="5 3"
                        dot={{ fill: '#ef4444', r: 3 }}
                        activeDot={{ r: 5 }}
                        name="Hotel Palermitano by Dec..."
                      />
                      {/* Vive Unique - Purple SOLID (not dashed) */}
                      <Line 
                        type="monotone" 
                        dataKey="vive" 
                        stroke="#8b5cf6" 
                        strokeWidth={2}
                        dot={{ fill: '#8b5cf6', r: 3 }}
                        activeDot={{ r: 5 }}
                        name="Vive Unique Holiday Home..."
                      />
                      {/* Additional hotels - grayed out in legend (no data to display) */}
                      <Line 
                        type="monotone" 
                        dataKey="belgrove" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="The Belgrove Hotel"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="fairway" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Fairway Hotel"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="holidayInn" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Holiday Inn Express Lon..."
                      />
                      <Line 
                        type="monotone" 
                        dataKey="princess" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Princess Hotel"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="test" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="test Hotel"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="testHotel" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="test"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="oyo" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="OYO 101 Test Property -Tr..."
                      />
                      <Line 
                        type="monotone" 
                        dataKey="jesmine" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Jesmine-Deme Hotel"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="stavanger" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Scandic Stavanger Airpor..."
                      />
                      <Line 
                        type="monotone" 
                        dataKey="flesland" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Scandic Flesland Airport"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="continental" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Scandic Continental"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="grandCentral" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Scandic Grand Central"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="norge" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Hotel Norge by Scandic"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="downtown" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Downtown Camper By Scand..."
                      />
                      <Line 
                        type="monotone" 
                        dataKey="grandCentralHe" 
                        stroke="#d1d5db" 
                        strokeWidth={0}
                        dot={false}
                        hide={true}
                        name="Scandic Grand Central He..."
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}