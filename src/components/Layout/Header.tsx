export const Header = () => {
  return (
    <header className="border-b-[color:var(--Grey-2,#E6E6E6)] bg-white w-full overflow-hidden px-[21px] py-[41px] rounded-[8px_0px_0px_0px] border-b border-solid">
      <div className="gap-5 flex">
        <div className="w-[17%]">
          <div className="text-[#808080] text-xl font-medium leading-[1.3] tracking-[-0.4px] mt-3">
            Welcome, <span className="text-[#1A011E]">Wisdom</span>
          </div>
        </div>

        <div className="w-[83%]">
          <div className="flex w-full items-stretch gap-[40px_69px] flex-wrap">
            <div className="items-center border border-[color:var(--Grey-1,#F2F2F2)] bg-neutral-50 flex gap-2.5 text-xs text-[#CCC] font-medium whitespace-nowrap tracking-[-0.24px] leading-[1.3] grow shrink basis-auto my-auto px-2 py-2.5 rounded-lg border-solid">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e99240e643f1081069ed54d43c2dd52d09d4a813?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt=""
              />
              <div className="self-stretch my-auto">Search</div>
            </div>

            <div className="flex items-center gap-8 grow shrink basis-auto">
              <div className="self-stretch flex items-center gap-4 my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/13e6603600c3da4a1ee847fc722705b7e606fd32?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/223e0e68f3d0fbcae82f9d1a6da7d9a9acb992cb?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/0e3e81f49673001f85dfba73457774a0c75caf12?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto rounded-lg"
                  alt=""
                />
              </div>

              <button className="justify-center items-center border border-[color:var(--Foundation-Purple-Normal,#6B047C)] self-stretch flex gap-2 text-base text-[#6B047C] font-medium tracking-[-0.32px] my-auto p-2 rounded-lg border-solid">
                <span>Quick actions</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ef84c47373aeebabba7abe3e3724c77127014c40?placeholderIfAbsent=true"
                  className="aspect-[2] object-contain w-8 self-stretch shrink-0 my-auto"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
