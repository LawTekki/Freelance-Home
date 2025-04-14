import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: string;
  label: string;
  count?: number;
  isActive?: boolean;
}

const NavItem = ({ icon, label, count, isActive }: NavItemProps) => (
  <div
    className={cn(
      "rounded flex w-full items-center gap-2.5 px-2.5 py-2",
      isActive && "bg-[#F9F5FA] text-[#6B047C]",
      !isActive && "text-[#808080]",
    )}
  >
    <img
      src={icon}
      className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
      alt=""
    />
    <div className="self-stretch my-auto text-sm tracking-[-0.28px]">
      {label}
    </div>
    {count !== undefined && (
      <div className="rounded bg-[#F2F2F2] absolute z-0 text-[10px] tracking-[-0.2px] px-1 py-0.5 right-[25px]">
        {count}
      </div>
    )}
  </div>
);

const NavSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="w-[168px] max-w-full text-sm text-[#808080] font-medium tracking-[-0.28px] leading-[1.3]">
    <div className="self-stretch flex-1 shrink basis-[0%] w-full gap-2.5 text-xs text-[#CCC] tracking-[-0.24px] px-2.5">
      {title}
    </div>
    <div className="flex w-full flex-col items-stretch mt-2">{children}</div>
  </div>
);

export const Sidebar = () => {
  return (
    <nav className="border-r-[color:var(--Grey-2,#E6E6E6)] bg-white flex grow flex-col overflow-hidden w-full pr-[33px] pt-[39px] pb-[179px] rounded-[8px_0px_0px_0px] border-r border-solid">
      <div className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] ml-[46px]">
        Logo
      </div>

      <div className="flex w-full flex-col items-stretch justify-center mt-[82px]">
        <div className="flex w-full">
          <div className="flex flex-col w-7">
            <div className="bg-[#6B047C] flex min-h-8 w-1 rounded-sm" />
          </div>

          <div className="font-medium whitespace-nowrap leading-[1.3] w-[168px]">
            <NavSection title="GENERAL">
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/4f357d263105122f74076e3c27308a677d99f7f6?placeholderIfAbsent=true" label="Home" isActive={true} />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/3560db94eea27882d12734337f508f636601dc3f?placeholderIfAbsent=true" label="Orders" count={12} />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/6f6484cd49a61b3cadd21d22c7213cc6465c1954?placeholderIfAbsent=true" label="Products" />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e76f6e46927d52be14d591231e2d491afbd2e001?placeholderIfAbsent=true" label="Proposal" count={8} />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/49da76466526db470aba285662671ddb273ec90e?placeholderIfAbsent=true" label="Events" count={2} />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/c163349d80fb0bdb4dd6a709ee92e9a763243d09?placeholderIfAbsent=true" label="Wallet" />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/cffebea1ef697e86d1799651ed21eef34a4ca2ea?placeholderIfAbsent=true" label="Review" count={6} />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/84c02049285aba43a4e07cd09368a851aceea266?placeholderIfAbsent=true" label="Dispute" count={3} />
            </NavSection>

            <NavSection title="HELP">
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/0bb378cc8989c4fe969884de33fbabf85a46637b?placeholderIfAbsent=true" label="Help and support" />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/56b75932e589027c3e0df7756cd167fd559ac283?placeholderIfAbsent=true" label="Settings" />
              <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/5221f2366d15039f236392522b296a4c2c90ab13?placeholderIfAbsent=true" label="Log out" />
            </NavSection>
          </div>
        </div>
      </div>
    </nav>
  );
};
