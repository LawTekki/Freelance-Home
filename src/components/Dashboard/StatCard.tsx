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
    <div className="self-stretch flex items-center gap-2 justify-center w-[151px] my-auto">
      <div className="self-stretch flex w-[151px] items-center gap-2 my-auto">
        <div className="self-stretch flex items-center gap-2 my-auto">
          <img
            src={icon}
            className="aspect-[1] object-contain w-14 self-stretch shrink-0 my-auto"
            alt=""
          />
          <div className="self-stretch my-auto">
            <div className="text-[#808080] text-sm leading-[1.3] tracking-[-0.28px]">
              {label}
            </div>
            <div className="text-[#1A011E] text-base tracking-[-0.32px]">
              {value}
            </div>
          </div>
        </div>
        {change && (
          <div
            className={`self-stretch gap-2.5 text-[10px] tracking-[-0.2px] leading-[1.3] my-auto px-2 py-1 rounded-lg ${changeStyles[changeType]}`}
          >
            {change}
          </div>
        )}
      </div>
    </div>
  );
};
