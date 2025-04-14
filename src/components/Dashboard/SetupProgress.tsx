interface SetupTaskProps {
  icon: string;
  label: string;
  action?: string;
  isDone?: boolean;
}

const SetupTask = ({ icon, label, action, isDone }: SetupTaskProps) => (
  <div className="items-stretch rounded border-b-[color:var(--Grey-1,#F2F2F2)] flex w-full gap-5 overflow-hidden justify-between px-2 py-2.5 border-b border-solid">
    <div
      className={`flex items-center gap-2 ${isDone ? "line-through text-[#1A011E]" : "text-[#808080]"}`}
    >
      <img
        src={icon}
        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        alt=""
      />
      <div className="self-stretch my-auto">{label}</div>
    </div>
    {action && (
      <div className="text-[#6B047C] underline cursor-pointer">{action}</div>
    )}
    {isDone && <div>Done</div>}
  </div>
);

export const SetupProgress = () => {
  return (
    <section className="border border-[color:var(--Grey-2,#E6E6E6)] bg-white min-w-60 overflow-hidden grow shrink w-[376px] pt-8 pb-[70px] px-6 rounded-lg border-solid">
      <div className="flex w-full gap-5 font-medium">
        <div className="min-w-60 w-[263px]">
          <h3 className="text-base text-[#1A011E] tracking-[-0.32px] font-bold">
            Let's start with the basics
          </h3>
          <p className="text-[#808080] text-sm leading-[1.3] tracking-[-0.28px] mt-1">
            Get more by setting up a profile you love.
          </p>
        </div>
        <div className="flex flex-col items-stretch text-sm tracking-[-0.28px] leading-[1.3] justify-center flex-1">
          <div className="text-[#808080]">Your setup progress</div>
          <div className="bg-[#F5FFFB] gap-2.5 text-[#1C7C04] mt-1 p-1 rounded-[32px]">
            25% done
          </div>
        </div>
      </div>

      <div className="rounded bg-[#F0E6F2] flex w-full flex-col overflow-hidden mt-8">
        <div className="rounded bg-[#6B047C] flex w-[78px] shrink-0 h-1" />
      </div>

      <div className="w-full text-xs font-medium tracking-[-0.24px] leading-[1.3] mt-8">
        <SetupTask
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ac3fee4d8b16fba48280dac8f97302e337754e42?placeholderIfAbsent=true"
          label="Upload profile photo and cover video"
          isDone={true}
        />
        <SetupTask
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e0aba5fbb13c2bfb45579ff614bf8448df872bbf?placeholderIfAbsent=true"
          label="Upload your first event"
          action="Upload event"
        />
        <SetupTask
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e0aba5fbb13c2bfb45579ff614bf8448df872bbf?placeholderIfAbsent=true"
          label="Upload your first product"
          action="Upload product"
        />
        <SetupTask icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e0aba5fbb13c2bfb45579ff614bf8448df872bbf?placeholderIfAbsent=true" label="Add card" action="Add card" />
      </div>
    </section>
  );
};
