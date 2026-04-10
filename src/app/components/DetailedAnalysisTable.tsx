import { LineChart, ChevronLeft, ChevronRight, X, Download } from 'lucide-react';
import { useState } from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function DetailedAnalysisTable() {
  const [hoveredStar, setHoveredStar] = useState<{ x: number; y: number } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('17 Feb 2026, Tue');

  // Rate Evolution Chart Data - matching the image
  const chartData = [
    { leadTime: '19 days', date: '29 Jan', alhambra: 150, avgCompset: 160, central: 140, holiday: 155, palermitano: 165, vive: 100 },
    { leadTime: '18 days', date: '30 Jan', alhambra: 150, avgCompset: 160, central: 140, holiday: 158, palermitano: 168, vive: 105 },
    { leadTime: '15 days', date: '02 Feb', alhambra: 148, avgCompset: 160, central: 142, holiday: 160, palermitano: 170, vive: 110 },
    { leadTime: '14 days', date: '03 Feb', alhambra: 149, avgCompset: 158, central: 143, holiday: 162, palermitano: 172, vive: 112 },
    { leadTime: '13 days', date: '04 Feb', alhambra: 151, avgCompset: 159, central: 145, holiday: 165, palermitano: 175, vive: 115 },
    { leadTime: '12 days', date: '05 Feb', alhambra: 152, avgCompset: 161, central: 100, holiday: 168, palermitano: 178, vive: 120 },
    { leadTime: '11 days', date: '06 Feb', alhambra: 150, avgCompset: 162, central: 105, holiday: 170, palermitano: 180, vive: 118 },
    { leadTime: '8 days', date: '09 Feb', alhambra: 148, avgCompset: 163, central: 155, holiday: 172, palermitano: 182, vive: 122 },
    { leadTime: '7 days', date: '10 Feb', alhambra: 147, avgCompset: 164, central: 158, holiday: 175, palermitano: 185, vive: 125 },
    { leadTime: '6 days', date: '11 Feb', alhambra: 149, avgCompset: 165, central: 160, holiday: 178, palermitano: 188, vive: 128 },
    { leadTime: '5 days', date: '12 Feb', alhambra: 150, avgCompset: 166, central: 162, holiday: 180, palermitano: 190, vive: 130 },
    { leadTime: '4 days', date: '13 Feb', alhambra: 152, avgCompset: 167, central: 165, holiday: 182, palermitano: 192, vive: 132 },
    { leadTime: '1 days', date: '16 Feb', alhambra: 155, avgCompset: 168, central: 168, holiday: 185, palermitano: 195, vive: 135 },
  ];

  return (
    <div className="border border-gray-200 rounded overflow-x-auto">
      {/* Table */}
      <table className="w-full min-w-[1200px]">
        {/* Header Row */}
        <thead>
          <tr className="bg-gray-50">
            <th className="px-3 py-3 text-left border-r border-b border-gray-200 min-w-[120px]">
              <span className="text-[13px] font-semibold text-gray-700">Date</span>
            </th>
            <th className="px-3 py-3 text-left border-r border-b border-gray-200 min-w-[90px]">
              <span className="text-[13px] font-semibold text-gray-700">Demand</span>
            </th>
            <th className="px-3 py-3 text-left border-r border-b border-gray-200 min-w-[100px]">
              <span className="text-[13px] font-semibold text-gray-700">Avg. Compset</span>
            </th>
            {/* Subscriber */}
            <th className="border-r border-b border-gray-200 min-w-[140px]" colSpan={2}>
              <div className="px-3 py-3 text-center">
                <span className="text-[13px] font-semibold text-gray-700">Subscriber</span>
              </div>
              <div className="flex border-t border-gray-200">
                <div className="flex-1 px-2 py-2 border-r border-gray-200 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rate (£)</span>
                </div>
                <div className="flex-1 px-2 py-2 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rank</span>
                </div>
              </div>
            </th>
            {/* Central Hotel */}
            <th className="border-r border-b border-gray-200 min-w-[140px]" colSpan={2}>
              <div className="px-3 py-3 text-center">
                <span className="text-[13px] font-semibold text-gray-700">Central Hotel</span>
              </div>
              <div className="flex border-t border-gray-200">
                <div className="flex-1 px-2 py-2 border-r border-gray-200 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rate (£)</span>
                </div>
                <div className="flex-1 px-2 py-2 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rank</span>
                </div>
              </div>
            </th>
            {/* Holiday Home */}
            <th className="border-r border-b border-gray-200 min-w-[140px]" colSpan={2}>
              <div className="px-3 py-3 text-center">
                <span className="text-[13px] font-semibold text-gray-700">Holiday Home ...</span>
              </div>
              <div className="flex border-t border-gray-200">
                <div className="flex-1 px-2 py-2 border-r border-gray-200 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rate (£)</span>
                </div>
                <div className="flex-1 px-2 py-2 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rank</span>
                </div>
              </div>
            </th>
            {/* Hotel Palermo */}
            <th className="border-r border-b border-gray-200 min-w-[140px]" colSpan={2}>
              <div className="px-3 py-3 text-center">
                <span className="text-[13px] font-semibold text-gray-700">Hotel Palerm...</span>
              </div>
              <div className="flex border-t border-gray-200">
                <div className="flex-1 px-2 py-2 border-r border-gray-200 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rate (£)</span>
                </div>
                <div className="flex-1 px-2 py-2 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rank</span>
                </div>
              </div>
            </th>
            {/* Vive Unique */}
            <th className="border-r border-b border-gray-200 min-w-[140px]" colSpan={2}>
              <div className="px-3 py-3 text-center">
                <span className="text-[13px] font-semibold text-gray-700">Vive Unique ...</span>
              </div>
              <div className="flex border-t border-gray-200">
                <div className="flex-1 px-2 py-2 border-r border-gray-200 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rate (£)</span>
                </div>
                <div className="flex-1 px-2 py-2 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rank</span>
                </div>
              </div>
            </th>
            {/* The Belgrave */}
            <th className="border-b border-gray-200 min-w-[140px]" colSpan={2}>
              <div className="px-3 py-3 text-center">
                <span className="text-[13px] font-semibold text-gray-700">The Belgrave...</span>
              </div>
              <div className="flex border-t border-gray-200">
                <div className="flex-1 px-2 py-2 border-r border-gray-200 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rate (£)</span>
                </div>
                <div className="flex-1 px-2 py-2 bg-gray-50">
                  <span className="text-[11px] font-medium text-gray-600">Rank</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {/* Row 1 - 16 Feb, Mon */}
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-2">
                <LineChart className="w-3.5 h-3.5 text-blue-600 cursor-pointer" onClick={() => { setModalOpen(true); setSelectedDate('16 Feb 2026, Mon'); }} />
                <span className="text-[13px] font-medium text-gray-900">16 Feb, Mon</span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <span className="text-[15px] font-semibold text-[#ef4444]">58</span>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">135</div>
              <div className="text-[11px] font-medium text-green-600">+2</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">78</div>
              <div className="text-[11px] font-medium text-green-600">+34</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">8</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">57</div>
              <div className="text-[11px] font-medium text-red-600">-5</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">5</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">43</div>
              <div className="text-[11px] font-medium text-green-600">+11</div>
            </td>
            <td className="px-3 py-3 text-center">
              <div className="text-[15px] font-semibold text-gray-900">3</div>
            </td>
          </tr>

          {/* Row 2 - 17 Feb, Tue */}
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-2">
                <LineChart className="w-3.5 h-3.5 text-blue-600 cursor-pointer" onClick={() => { setModalOpen(true); setSelectedDate('17 Feb 2026, Tue'); }} />
                <span className="text-[13px] font-medium text-gray-900">17 Feb, Tue</span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-semibold text-[#ef4444]">54</span>
                <span 
                  className="text-yellow-500 cursor-pointer relative"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredStar({ x: rect.left + rect.width / 2, y: rect.top });
                  }}
                  onMouseLeave={() => setHoveredStar(null)}
                >
                  ★
                </span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">153</div>
              <div className="text-[11px] font-medium text-green-600">+18</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">71</div>
              <div className="text-[11px] font-medium text-gray-400">-7</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">7</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">81</div>
              <div className="text-[11px] font-medium text-green-600">+24</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">10</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">60</div>
              <div className="text-[11px] font-medium text-green-600">+5</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">4</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">46</div>
              <div className="text-[11px] font-medium text-green-600">+3</div>
            </td>
            <td className="px-3 py-3 text-center">
              <div className="text-[15px] font-semibold text-gray-900">2</div>
            </td>
          </tr>

          {/* Row 3 - 18 Feb, Wed */}
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-2">
                <LineChart className="w-3.5 h-3.5 text-blue-600 cursor-pointer" onClick={() => { setModalOpen(true); setSelectedDate('18 Feb 2026, Wed'); }} />
                <span className="text-[13px] font-medium text-gray-900">18 Feb, Wed</span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-semibold text-[#ef4444]">54</span>
                <span 
                  className="text-yellow-500 cursor-pointer relative"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredStar({ x: rect.left + rect.width / 2, y: rect.top });
                  }}
                  onMouseLeave={() => setHoveredStar(null)}
                >
                  ★
                </span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">169</div>
              <div className="text-[11px] font-medium text-green-600">+16</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">63</div>
              <div className="text-[11px] font-medium text-gray-400">-8</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">6</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">82</div>
              <div className="text-[11px] font-medium text-green-600">+1</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">10</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">67</div>
              <div className="text-[11px] font-medium text-green-600">+7</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">7</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">43</div>
              <div className="text-[11px] font-medium text-green-600">+3</div>
            </td>
            <td className="px-3 py-3 text-center">
              <div className="text-[15px] font-semibold text-gray-900">2</div>
            </td>
          </tr>

          {/* Row 4 - 19 Feb, Thu */}
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-2">
                <LineChart className="w-3.5 h-3.5 text-blue-600 cursor-pointer" onClick={() => { setModalOpen(true); setSelectedDate('19 Feb 2026, Thu'); }} />
                <span className="text-[13px] font-medium text-gray-900">19 Feb, Thu</span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <span className="text-[15px] font-semibold text-[#f59e0b]">56</span>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">144</div>
              <div className="text-[11px] font-medium text-red-600">-25</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">63</div>
              <div className="text-[11px] font-medium text-gray-400">0</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">7</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">55</div>
              <div className="text-[11px] font-medium text-red-600">-27</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">4</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">78</div>
              <div className="text-[11px] font-medium text-green-600">+11</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">9</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">39</div>
              <div className="text-[11px] font-medium text-red-600">-4</div>
            </td>
            <td className="px-3 py-3 text-center">
              <div className="text-[15px] font-semibold text-gray-900">2</div>
            </td>
          </tr>

          {/* Row 5 - 20 Feb, Fri */}
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-2">
                <LineChart className="w-3.5 h-3.5 text-blue-600 cursor-pointer" onClick={() => { setModalOpen(true); setSelectedDate('20 Feb 2026, Fri'); }} />
                <span className="text-[13px] font-medium text-gray-900">20 Feb, Fri</span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <span className="text-[15px] font-semibold text-[#dc2626]">60</span>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">129</div>
              <div className="text-[11px] font-medium text-red-600">-15</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">79</div>
              <div className="text-[11px] font-medium text-green-600">+16</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">7</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">95</div>
              <div className="text-[11px] font-medium text-green-600">+40</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">11</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">67</div>
              <div className="text-[11px] font-medium text-red-600">-11</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">6</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">35</div>
              <div className="text-[11px] font-medium text-red-600">-4</div>
            </td>
            <td className="px-3 py-3 text-center">
              <div className="text-[15px] font-semibold text-gray-900">2</div>
            </td>
          </tr>

          {/* Row 6 - 21 Feb, Sat */}
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-2">
                <LineChart className="w-3.5 h-3.5 text-blue-600 cursor-pointer" onClick={() => { setModalOpen(true); setSelectedDate('21 Feb 2026, Sat'); }} />
                <span className="text-[13px] font-medium text-gray-900">21 Feb, Sat</span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <span className="text-[15px] font-semibold text-[#dc2626]">61</span>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">143</div>
              <div className="text-[11px] font-medium text-green-600">+14</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">102</div>
              <div className="text-[11px] font-medium text-green-600">+23</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">9</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">67</div>
              <div className="text-[11px] font-medium text-red-600">-28</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">2</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">84</div>
              <div className="text-[11px] font-medium text-green-600">+17</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">7</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
          </tr>

          {/* Row 7 - 22 Feb, Sun */}
          <tr className="hover:bg-gray-50">
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="flex items-center gap-2">
                <LineChart className="w-3.5 h-3.5 text-blue-600 cursor-pointer" onClick={() => { setModalOpen(true); setSelectedDate('22 Feb 2026, Sun'); }} />
                <span className="text-[13px] font-medium text-gray-900">22 Feb, Sun</span>
              </div>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <span className="text-[15px] font-semibold text-[#ef4444]">58</span>
            </td>
            <td className="px-3 py-3 border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">99</div>
              <div className="text-[11px] font-medium text-red-600">-44</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">46</div>
              <div className="text-[11px] font-medium text-red-600">-56</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200 bg-blue-50">
              <div className="text-[15px] font-semibold text-gray-900">5</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">47</div>
              <div className="text-[11px] font-medium text-red-600">-20</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">6</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">101</div>
              <div className="text-[11px] font-medium text-green-600">+17</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">16</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[13px] font-medium text-gray-500">Sold Out</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-400">--</div>
            </td>
            <td className="px-3 py-3 text-center border-r border-gray-200">
              <div className="text-[15px] font-semibold text-gray-900">35</div>
            </td>
            <td className="px-3 py-3 text-center">
              <div className="text-[15px] font-semibold text-gray-900">2</div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tooltip */}
      {hoveredStar && (
        <div
          className="fixed z-50 bg-gray-900 text-white px-3 py-2 rounded-md text-[12px] whitespace-nowrap pointer-events-none"
          style={{
            left: `${hoveredStar.x}px`,
            top: `${hoveredStar.y - 40}px`,
            transform: 'translateX(-50%)',
          }}
        >
          Ramadan Start (Tentative Date)
          <div
            className="absolute w-2 h-2 bg-gray-900 rotate-45"
            style={{
              left: '50%',
              bottom: '-4px',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-[950px] max-h-[90vh] overflow-auto">
            {/* Modal Header with Title, Date Navigation, and Buttons */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              {/* Left: Title */}
              <h2 className="text-[20px] font-bold text-gray-900">Rate Evolution</h2>
              
              {/* Center: Date Navigation */}
              <div className="flex items-center gap-3">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-[15px] font-semibold text-gray-900 min-w-[140px] text-center">{selectedDate}</span>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Right: Download and Close */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-[13px] font-medium transition-colors">
                  <Download className="w-4 h-4" />
                  Download CSV
                </button>
                <button 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setModalOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Subtitle */}
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
              <p className="text-[13px] text-gray-500">
                View rate trends across different lead times for selected <span className="font-semibold">Check-in Date</span>
              </p>
            </div>

            {/* Chart Container */}
            <div className="px-6 py-6 bg-white">
              <ResponsiveContainer width="100%" height={400}>
                <RechartsLineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis 
                    dataKey="leadTime" 
                    tick={{ fontSize: 11, fill: '#9ca3af' }}
                    stroke="#e5e7eb"
                    axisLine={false}
                    tickLine={false}
                    height={60}
                  />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 10, fill: '#d1d5db' }}
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
                    label={{ value: 'Rates (£)', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#9ca3af' } }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '8px'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ fontSize: '11px', paddingTop: '15px' }}
                    iconType="line"
                    iconSize={20}
                  />
                  {/* Alhambra Hotel - Blue */}
                  <Line 
                    type="monotone" 
                    dataKey="alhambra" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    activeDot={{ r: 4 }}
                    name="Alhambra Hotel"
                  />
                  {/* Avg. Compset - Cyan/Teal */}
                  <Line 
                    type="monotone" 
                    dataKey="avgCompset" 
                    stroke="#06b6d4" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    activeDot={{ r: 4 }}
                    name="Avg. Compset"
                  />
                  {/* Central Hotel - Green */}
                  <Line 
                    type="monotone" 
                    dataKey="central" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    activeDot={{ r: 4 }}
                    name="Central Hotel"
                  />
                  {/* Holiday Home - Orange */}
                  <Line 
                    type="monotone" 
                    dataKey="holiday" 
                    stroke="#f59e0b" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    activeDot={{ r: 4 }}
                    name="Holiday Home Sahurs Rue ..."
                  />
                  {/* Hotel Palermitano - Red/Orange */}
                  <Line 
                    type="monotone" 
                    dataKey="palermitano" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    activeDot={{ r: 4 }}
                    name="Hotel Palermitano by Dec..."
                  />
                  {/* Vive Unique - Purple */}
                  <Line 
                    type="monotone" 
                    dataKey="vive" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                    name="Vive Unique Holiday Home..."
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}