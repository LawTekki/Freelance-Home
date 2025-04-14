export const EarningsChart = () => {
  return (
    <section className="border border-[color:var(--Grey-2,#E6E6E6)] bg-white flex min-w-60 flex-col overflow-hidden items-stretch font-medium grow shrink w-[575px] px-6 py-[23px] rounded-lg border-solid">
      <div className="flex w-full items-stretch gap-[40px_100px] flex-wrap">
        <div className="flex flex-col items-stretch flex-1">
          <h3 className="text-base text-[#1A011E] tracking-[-0.32px] font-bold">
            Earnings
          </h3>
          <div className="flex items-center gap-4 text-[10px] tracking-[-0.2px] leading-[1.3] mt-[13px]">
            <button className="self-stretch rounded border border-[color:var(--Foundation-Purple-Normal,#6B047C)] bg-[#F9F5FA] gap-2.5 text-[#1A011E] whitespace-nowrap my-auto p-2 border-solid">
              Revenue
            </button>
            <button className="self-stretch rounded border border-[color:var(--Grey-2,#E6E6E6)] gap-2.5 text-[#CCC] my-auto p-2 border-solid">
              Wallet balance
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#808080] tracking-[-0.24px] leading-[1.3] flex-1">
          <span>Filter By</span>
          <button className="justify-center items-center rounded border border-[color:var(--Grey-2,#E6E6E6)] bg-neutral-50 self-stretch flex gap-2.5 my-auto p-2.5 border-solid">
            <span>This week</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/1b1dcf8146f73f349c0eac69d870259f6e21eae9?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[10px] text-[#808080] whitespace-nowrap tracking-[-0.2px] leading-[1.3] flex-wrap mt-4">
        <div className="self-stretch grow shrink w-7 my-auto">
          <div>$9,000</div>
          <div className="mt-[25px]">$8,000</div>
          <div className="mt-[25px]">$7,000</div>
          <div className="mt-[25px]">$6,000</div>
          <div className="mt-[25px]">$5,000</div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ef55d3c46459d716350c6955b5302c597520ec99?placeholderIfAbsent=true"
          className="aspect-[2.62] object-contain w-[562px] self-stretch min-w-60 grow shrink my-auto"
          alt="Earnings chart"
        />
      </div>

      <div className="flex gap-9 text-xs text-[#808080] whitespace-nowrap tracking-[-0.24px] leading-[1.3] mt-2">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Sunday",
          "Saturday",
        ].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    </section>
  );
};
