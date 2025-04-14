import { StatCard } from "./StatCard";

export const StatisticsCard = () => {
  return (
    <section className="border border-[color:var(--Grey-2,#E6E6E6)] bg-white w-full overflow-hidden font-medium p-6 rounded-lg border-solid">
      <div className="flex w-full items-stretch gap-5 flex-wrap justify-between">
        <div>
          <h2 className="text-[#1A011E] text-xl leading-[1.3] tracking-[-0.4px] font-bold">
            Your statistics
          </h2>
          <p className="text-[#808080] text-base tracking-[-0.32px] mt-1">
            Summary of your dashboard
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#808080] tracking-[-0.24px] leading-[1.3]">
          <span>Filter By</span>
          <button className="justify-center items-center rounded border border-[color:var(--Grey-2,#E6E6E6)] bg-neutral-50 self-stretch flex gap-2.5 my-auto p-2.5 border-solid">
            <span>This week</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/0e39ee91c2965dc86fd0b416248081c5ce1fd71f?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-10 flex-wrap mt-[30px]">
        <StatCard
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/962b7eb83d3086a8b1d5e3eb1387f1fd39b0c97d?placeholderIfAbsent=true"
          label="Sold Item"
          value="8,232"
          change="+23"
          changeType="positive"
        />
        <div className="border bg-[#E6E6E6] self-stretch w-0 shrink-0 h-10 my-auto border-solid" />
        <StatCard
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/a6f8313f927f68c7727349370f81cbd4734571ff?placeholderIfAbsent=true"
          label="Products"
          value="842"
          change="+23"
          changeType="positive"
        />
        <div className="border bg-[#E6E6E6] self-stretch w-0 shrink-0 h-10 my-auto border-solid" />
        <StatCard
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/063adb7f88261e05ba62b838354b473fe70c36a5?placeholderIfAbsent=true"
          label="Events"
          value="24"
          change="Nil"
          changeType="negative"
        />
        <div className="border bg-[#E6E6E6] self-stretch w-0 shrink-0 h-10 my-auto border-solid" />
        <StatCard
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/c8448d420ee88b3b779c47b2de2e4088cb0e100d?placeholderIfAbsent=true"
          label="Orders"
          value="8,232"
          change="+23"
          changeType="positive"
        />
        <div className="border bg-[#E6E6E6] self-stretch w-0 shrink-0 h-10 my-auto border-solid" />
        <StatCard
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/2cca095bcaa594fb397f6619b3651c742a77c8ff?placeholderIfAbsent=true"
          label="Customers"
          value="8,232"
          change="+23"
          changeType="positive"
        />
      </div>
    </section>
  );
};
