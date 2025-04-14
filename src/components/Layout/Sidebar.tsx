import { cn } from "@/lib/utils";
import { useState } from "react";

// ---- Inline SVGs for icons you already shared in earlier code ----

// HOME
const HomeIcon = (
  <svg
    width="13"
    height="15"
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 transition-colors duration-300" // changed w-7/h-7 to w-5/h-5 for consistency
  >
    <path
      d="M0.6604 7.63333C0.6604 6.50167 0.660401 5.93583 0.888734 5.43833C1.1179 4.94083 1.54707 4.57333 2.40623 3.83667L3.23957 3.1225C4.79373 1.79167 5.56873 1.125 6.49373 1.125C7.41873 1.125 8.19457 1.79083 9.7479 3.12167L10.5812 3.83583C11.4396 4.5725 11.8696 4.94 12.0979 5.4375C12.3271 5.935 12.3271 6.50083 12.3271 7.6325V11.1667C12.3271 12.7383 12.3271 13.5233 11.8387 14.0117C11.3504 14.5 10.5654 14.5 8.99373 14.5H3.99373C2.42207 14.5 1.63707 14.5 1.14873 14.0117C0.6604 13.5233 0.6604 12.7383 0.6604 11.1667V7.63333Z"
      stroke="currentColor"
    />
    <path
      d="M8.57707 14.5V10.3333C8.57707 10.1123 8.48927 9.90036 8.33299 9.74408C8.17671 9.5878 7.96475 9.5 7.74373 9.5H5.24373C5.02272 9.5 4.81076 9.5878 4.65448 9.74408C4.4982 9.90036 4.4104 10.1123 4.4104 10.3333V14.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ORDERS
const OrdersIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 transition-colors duration-300"
  >
    <path
      d="M14.1942 17.7898L14.6544 17.2147C15.0587 16.7093 15.9174 16.75 16.259 17.2907C16.6698 17.9412 17.6847 17.8119 17.9661 17.2135C17.9807 17.1824 17.9441 17.2602 17.9754 16.991C18.0067 16.7217 17.9937 16.6603 17.9676 16.5373L16.365 8.97008C15.9622 7.06829 15.7608 6.11738 15.0681 5.55869C14.3754 5 13.3977 5 11.4423 5H9.54499C7.58963 5 6.61194 5 5.9192 5.55869C5.22646 6.11738 5.02508 7.06829 4.62231 8.97008L3.01974 16.5373C2.99369 16.6603 2.98066 16.7217 3.01194 16.991C3.0432 17.2602 3.0066 17.1824 3.02124 17.2135C3.30269 17.8119 4.31745 17.9412 4.72836 17.2907C5.06992 16.75 5.92854 16.7093 6.33289 17.2147L6.7931 17.7898C7.37294 18.5145 8.58381 18.5145 9.16365 17.7898L9.23599 17.6993C9.85124 16.9304 11.1361 16.9304 11.7513 17.6993L11.8237 17.7898C12.4035 18.5145 13.6144 18.5145 14.1942 17.7898Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M2.5632 7.91669C2.07545 7.41001 2.16727 6.75746 2.16727 5.12649C2.16727 3.49552 2.16727 2.68004 2.65503 2.17336C3.14279 1.66669 3.92782 1.66669 5.49788 1.66669H15.4897C17.0597 1.66669 17.8448 1.66669 18.3326 2.17336C18.8203 2.68004 18.8203 3.49552 18.8203 5.12649C18.8203 6.75746 18.9116 7.41001 18.4238 7.91669"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M10.4937 8.33331H7.99365"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1604 11.6667H7.1604"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// PROPOSAL
const ProposalIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 transition-colors duration-300"
  >
    <path
      d="M16.9937 9.16667V5.83333C16.9937 3.99238 16.9937 3.07191 16.4215 2.49976C15.8494 1.92762 14.9289 1.92762 13.0879 1.92762H7.89942C6.05847 1.92762 5.138 1.92762 4.56585 2.49976C3.99371 3.07191 3.99371 3.99238 3.99371 5.83333V14.1667C3.99371 16.0076 3.99371 16.9281 4.56585 17.5002C5.138 18.0724 6.05847 18.0724 7.89942 18.0724H11.2328"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49365 6.66669H14.4937"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49365 10H10.4937"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9937 14.1667L16.9937 16.1667L18.9937 14.1667"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// EVENTS
const EventsIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 transition-colors duration-300"
  >
    <path
      d="M10.4937 18.3334C9.81182 18.3334 9.16049 18.0629 7.85776 17.5219C4.61502 16.1751 2.99365 15.5018 2.99365 14.3691V6.45388M10.4937 18.3334C11.1755 18.3334 11.8268 18.0629 13.1296 17.5219C16.3723 16.1751 17.9937 15.5018 17.9937 14.3691V6.45388M10.4937 18.3334V10.1406M2.99365 6.45388C2.99365 6.9571 3.66163 7.27488 4.99759 7.91042L7.43192 9.06852C8.93432 9.78327 9.68557 10.1406 10.4937 10.1406M2.99365 6.45388C2.99365 5.95065 3.66163 5.63289 4.99759 4.99734L6.74365 4.16669M17.9937 6.45388C17.9937 6.9571 17.3257 7.27488 15.9897 7.91042L13.5554 9.06852C12.053 9.78327 11.3017 10.1406 10.4937 10.1406M17.9937 6.45388C17.9937 5.95065 17.3257 5.63289 15.9897 4.99734L14.2437 4.16669M5.49365 10.9599L7.16032 11.7792"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4967 1.66669V7.49998M10.4967 7.49998C10.7159 7.50295 10.9322 7.34979 11.0917 7.1628L12.1602 5.8848M10.4967 7.49998C10.2852 7.49712 10.071 7.34475 9.90165 7.1628L8.8269 5.8848"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

// WALLET
const WalletIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 transition-colors duration-300"
  >
    <path
      d="M12.9937 12.5C12.9937 13.1903 13.5533 13.75 14.2437 13.75C14.934 13.75 15.4937 13.1903 15.4937 12.5C15.4937 11.8097 14.934 11.25 14.2437 11.25C13.5533 11.25 12.9937 11.8097 12.9937 12.5Z"
      stroke="currentColor"
    />
    <path
      d="M12.9968 6.5021C8.47381 6.18868 4.74757 5.51753 2.99365 4.99976V12.551C2.99365 14.213 2.99365 15.044 3.50997 15.7217C4.02629 16.3995 4.73468 16.5909 6.15146 16.9737C8.44051 17.5922 10.8466 17.9605 13.0025 18.1712C15.2369 18.3895 16.3541 18.4987 17.1739 17.7495C17.9937 17.0004 17.9937 15.797 17.9937 13.39V11.712C17.9937 9.37454 17.9937 8.20584 17.3211 7.48049C16.6486 6.75514 15.4313 6.67079 12.9968 6.5021Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.1818 6.66662C15.4966 5.48057 15.7814 3.32347 14.9328 2.25239C14.395 1.57352 13.5956 1.63874 12.8118 1.70767C8.69191 2.07001 5.78152 2.80605 4.15449 3.3061C3.45489 3.52112 2.99365 4.20431 2.99365 4.96699"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);

// ----------------------------------------------------------------------------
// Updated inline SVGs for Products and Review icons, replacing external images
// ----------------------------------------------------------------------------

// PRODUCTS – inline SVG icon for products (a simple box/package icon)
const ProductsIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 transition-colors duration-300"
  >
    <rect x="3" y="5" width="15" height="10" stroke="currentColor" />
    <path d="M3 5 L10.5 10 L18 5" stroke="currentColor" />
  </svg>
);

// REVIEW – inline SVG icon for review (a star icon)
const ReviewIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 transition-colors duration-300"
  >
    <path
      d="M12 2 L14.09 8.26 L20.18 8.27 L15.09 12.14 L17.18 18.36 L12 14.77 L6.82 18.36 L8.91 12.14 L3.82 8.27 L9.91 8.26 Z"
      stroke="currentColor"
      fill="none"
    />
  </svg>
);

// DISPUTE – the user gave a path to displeased.svg in their local folder, so let's assume it's in /public
const DisputeIcon = <img src="/displeased.svg" alt="Dispute" className="w-5 h-5" />;

// HELP & SUPPORT
const HelpIcon = (
  <img src="/Frame 1000007971 (1).svg" alt="Help and support" className="w-5 h-5" />
);

// SETTINGS
const SettingsIcon = (
  <img src="/Frame 1000007971 (2).svg" alt="Settings" className="w-5 h-5" />
);

// LOG OUT
const LogoutIcon = (
  <img src="/Frame 1000007971 (3).svg" alt="Log out" className="w-5 h-5" />
);

// ----------------------------------------------------------------------------
// Now update navItems array to match each label with the correct icon
// ----------------------------------------------------------------------------
const navItems = [
  {
    icon: HomeIcon,
    label: "Home",
  },
  {
    icon: OrdersIcon,
    label: "Orders",
    number: "12",
  },
  {
    icon: ProductsIcon,
    label: "Products",
  },
  {
    icon: ProposalIcon,
    label: "Proposal",
    number: "8",
  },
  {
    icon: EventsIcon,
    label: "Events",
    number: "2",
  },
  {
    icon: WalletIcon,
    label: "Wallet",
    number: "6",
  },
  {
    icon: ReviewIcon,
    label: "Review",
    number: "3",
  },
  {
    icon: DisputeIcon,
    label: "Dispute",
    number: "3",
  },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className="h-full flex flex-col p-4 w-full bg-white overflow-y-auto">
      {/* ------------ GENERAL SECTION ------------ */}
      <div className="mb-6">
        <div className="px-2 mb-3 text-sm text-[#999999] font-medium uppercase">
          General
        </div>
        <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-1.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={cn(
                "relative flex w-full items-center gap-1.5 px-2 py-1.5 rounded cursor-pointer",
                "sm:gap-2 sm:px-2.5 sm:py-2 md:gap-2.5 md:px-3 md:py-2.5",
                activeItem === item.label
                  ? "bg-[#F9F5FA] text-[#6B047C]"
                  : "text-[#808080] hover:bg-[#F9F5FA] hover:text-[#6B047C]"
              )}
              onClick={() => setActiveItem(item.label)}
            >
              {/* If icon is a string, interpret as img, otherwise it's our JSX */}
              {typeof item.icon === "string" ? (
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5 flex items-center justify-center">
                  {item.icon}
                </div>
              )}
              <div className="text-xs tracking-[-0.24px] sm:text-sm md:text-base">
                {item.label}
              </div>
              {item.number && (
                <div className="absolute right-[20px] rounded bg-[#F2F2F2] text-[#808080] text-[8px] tracking-[-0.2px] px-1 py-0.5 sm:right-[25px] sm:text-[9px] md:right-[30px] md:text-[10px]">
                  {item.number}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ------------ HELP SECTION ------------ */}
      <div className="mt-6">
        <div className="px-2 mb-3 text-sm text-[#999999] font-medium uppercase">
          Help
        </div>
        <div className="flex flex-col gap-2">
          {/* Help and support */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-[#666666] hover:bg-[#F9F5FA] hover:text-[#6B047C] transition-colors">
            {HelpIcon}
            <span className="text-sm">Help and support</span>
          </div>
          {/* Settings */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-[#666666] hover:bg-[#F9F5FA] hover:text-[#6B047C] transition-colors">
            {SettingsIcon}
            <span className="text-sm">Settings</span>
          </div>
          {/* Log out */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-[#666666] hover:bg-[#F9F5FA] hover:text-[#6B047C] transition-colors">
            {LogoutIcon}
            <span className="text-sm">Log out</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
