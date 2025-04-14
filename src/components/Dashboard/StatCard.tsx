interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "neutral" | "negative";
}

export const StatCard = ({
  icon,
  label,
  value,
  change,
  changeType = "positive",
}: StatCardProps) => {
  const changeStyles = {
    positive: "bg-[#F5FFFB] text-[#1C7C04]",
    neutral: "bg-[#F0F0F0] text-[#808080]",
    negative: "bg-[#FFF7F5] text-[#D43705]",
  };

  return (
    <div className="flex flex-col items-center gap-1 w-[80px] sm:w-[90px] md:w-[100px] lg:w-[120px] my-auto">
      <div className="flex flex-col items-center w-full gap-1 my-auto">
        <div className="flex items-center gap-1 my-auto">
          <img
            src={icon}
            className="aspect-[1] object-contain w-4 sm:w-5 md:w-6 lg:w-8 self-stretch shrink-0 my-auto"
            alt=""
          />
          <div className="flex flex-col items-center my-auto">
            <div className="text-[#808080] text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] leading-[1.3] tracking-[-0.28px] text-center">
              {label}
            </div>
            <div className="text-[#1A011E] text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] tracking-[-0.32px] text-center">
              {value}
            </div>
          </div>
        </div>
        {change && (
          <div
            className={`flex items-center justify-center gap-1 text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] tracking-[-0.2px] leading-[1.3] my-auto px-1 sm:px-1.5 py-0.5 rounded-lg ${changeStyles[changeType]}`}
          >
            {change}
          </div>
        )}
      </div>
    </div>
  );
};
