import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { day: 'Monday', revenue: 9000, walletBalance: 8500 },
  { day: 'Tuesday', revenue: 7500, walletBalance: 7000 },
  { day: 'Wednesday', revenue: 8300, walletBalance: 7800 },
  { day: 'Thursday', revenue: 6800, walletBalance: 6300 },
  { day: 'Friday', revenue: 8800, walletBalance: 8300 },
  { day: 'Saturday', revenue: 9200, walletBalance: 8700 },
  { day: 'Sunday', revenue: 7200, walletBalance: 6700 }
];

const timeFilterOptions = [
  'This week',
  'Last week',
  'This month',
  'Last month',
  'This year'
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-[#E6E6E6]">
        <p className="text-sm text-[#808080]">{label}</p>
        <p className="text-sm font-semibold">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export const EarningsChart = () => {
  const [activeView, setActiveView] = useState<'revenue' | 'wallet'>('revenue');
  const [timeFilter, setTimeFilter] = useState('This week');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="border border-[color:var(--Grey-2,#E6E6E6)] bg-white flex min-w-60 flex-col overflow-hidden items-stretch font-medium grow shrink w-[575px] px-6 py-[23px] rounded-lg border-solid">
      <div className="flex w-full items-stretch gap-[40px_100px] flex-wrap">
        <div className="flex flex-col items-stretch flex-1">
          <h3 className="text-base text-[#1A011E] tracking-[-0.32px] font-bold">
            Earnings
          </h3>
          <div className="flex items-center gap-4 text-[10px] tracking-[-0.2px] leading-[1.3] mt-[13px]">
            <button 
              onClick={() => setActiveView('revenue')}
              className={`self-stretch rounded border ${activeView === 'revenue' ? 'border-[#6B047C] bg-[#F9F5FA] text-[#1A011E]' : 'border-[#E6E6E6] text-[#CCC]'} gap-2.5 whitespace-nowrap my-auto p-2 border-solid`}
            >
              Revenue
            </button>
            <button 
              onClick={() => setActiveView('wallet')}
              className={`self-stretch rounded border ${activeView === 'wallet' ? 'border-[#6B047C] bg-[#F9F5FA] text-[#1A011E]' : 'border-[#E6E6E6] text-[#CCC]'} gap-2.5 whitespace-nowrap my-auto p-2 border-solid`}
            >
              Wallet balance
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#808080] tracking-[-0.24px] leading-[1.3] flex-1 relative">
          <span>Filter By</span>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
            className="justify-center items-center rounded border border-[#E6E6E6] bg-neutral-50 self-stretch flex gap-2.5 my-auto p-2.5 border-solid hover:bg-gray-100 transition-colors duration-200"
          >
            <span>{timeFilter}</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/1b1dcf8146f73f349c0eac69d870259f6e21eae9?placeholderIfAbsent=true"
              className={`aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              alt=""
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-[#E6E6E6] rounded-lg shadow-lg z-10">
              {timeFilterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setTimeFilter(option);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#F9F5FA] text-sm transition-colors duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={mockData}
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1C7C04" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#1C7C04" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E6E6" />
            <XAxis 
              dataKey="day" 
              axisLine={{ stroke: '#E6E6E6' }}
              tickLine={false}
              tick={{ fill: '#808080', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#808080', fontSize: 10 }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              dataKey={activeView === 'revenue' ? 'revenue' : 'walletBalance'}
              stroke="#1C7C04"
              strokeWidth={2}
              fill="url(#colorRevenue)"
              dot={{ stroke: '#1C7C04', strokeWidth: 2, r: 4, fill: '#fff' }}
              activeDot={{ stroke: '#1C7C04', strokeWidth: 2, r: 6, fill: '#fff' }}
              connectNulls={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
