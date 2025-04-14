import React, { useState, useEffect, useRef } from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

  const notificationsRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const quickActionsRef = useRef<HTMLDivElement>(null);

  // Close any open panel if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (
        messagesRef.current &&
        !messagesRef.current.contains(event.target as Node)
      ) {
        setShowMessages(false);
      }
      if (
        quickActionsRef.current &&
        !quickActionsRef.current.contains(event.target as Node)
      ) {
        setShowQuickActions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    setShowMessages(false);
    setShowQuickActions(false);
  };

  const toggleMessages = () => {
    setShowMessages((prev) => !prev);
    setShowNotifications(false);
    setShowQuickActions(false);
  };

  const toggleQuickActions = () => {
    setShowQuickActions((prev) => !prev);
    setShowNotifications(false);
    setShowMessages(false);
  };

  return (
    <header className="flex items-center justify-between border-b border-[#E6E6E6] bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 h-[56px] sm:h-[60px] md:h-[64px]">
      {/* Left side: Logo and Welcome Message */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
        <button
          onClick={onMenuClick}
          className="p-1.5 hover:bg-[#F9F5FA] rounded-lg transition-colors md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#1A011E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="/image 1.png"
            alt="Logo"
            className="h-[36px] sm:h-[42px] md:h-[48px] w-auto object-contain"
          />
        </div>
        <div className="text-[#808080] text-xs sm:text-sm font-medium tracking-[-0.4px]">
          Welcome, <span className="text-[#1A011E]">Wisdom</span>
        </div>
      </div>

      {/* Right side: Search bar and interactive icons */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Search Bar (hidden on very small screens) */}
        <div className="relative hidden sm:flex-1 sm:block w-[398px] mx-2 sm:mx-4">
          <div className="flex items-center border border-[#F2F2F2] bg-[#FAFAFA] rounded-lg px-2 sm:px-2.5 md:px-3 py-1 gap-1.5 sm:gap-2 focus-within:border-[#6B047C] transition-colors w-full">
            <img
              src="/search-01.svg"
              alt="Search icon"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent border-none outline-none text-sm sm:text-base text-[#808080] placeholder:text-[#808080]"
            />
          </div>
        </div>

        {/* Notifications Icon */}
        <div ref={notificationsRef} className="relative">
          <button
            aria-label="Notifications"
            className="relative p-1.5 sm:p-2 hover:bg-[#F9F5FA] rounded-lg transition-colors"
            onClick={toggleNotifications}
          >
            <img
              src="/notification-02.svg"
              alt="Notifications"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />
            <span className="absolute -top-1 -right-1 w-3.5 sm:w-4 h-3.5 sm:h-4 bg-red-500 text-white text-[8px] sm:text-[10px] flex items-center justify-center rounded-full">
              2
            </span>
          </button>
          {showNotifications && (
            <div
              className="absolute right-0 top-full mt-2 w-[16rem] sm:w-[20rem] bg-white rounded-lg shadow-lg py-3 px-3 sm:py-4 sm:px-4 z-50"
            >
              {/* Heading uses nowrap to avoid splitting into single characters */}
              <div className="text-[#6B047C] font-medium mb-2 text-sm whitespace-nowrap">
                Notifications
              </div>
              {/* Notification items use normal whitespace and break-words */}
              <div className="space-y-2 text-sm whitespace-normal break-words">
                <div>
                  Notification item 1 with some long text to test wrapping.
                </div>
                <div>
                  Notification item 2 with additional text content to ensure proper fitting.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Messages Icon */}
        <div ref={messagesRef} className="relative">
          <button
            aria-label="Messages"
            className="relative p-1.5 sm:p-2 hover:bg-[#F9F5FA] rounded-lg transition-colors"
            onClick={toggleMessages}
          >
            <img
              src="/system-uicons_message.svg"
              alt="Messages"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />
            <span className="absolute -top-1 -right-1 w-3.5 sm:w-4 h-3.5 sm:h-4 bg-red-500 text-white text-[8px] sm:text-[10px] flex items-center justify-center rounded-full">
              1
            </span>
          </button>
          {showMessages && (
            <div
              className="absolute right-0 top-full mt-2 w-[16rem] sm:w-[20rem] bg-white rounded-lg shadow-lg py-3 px-3 sm:py-4 sm:px-4 z-50"
            >
              <div className="text-[#6B047C] font-medium mb-2 text-sm whitespace-nowrap">
                Messages
              </div>
              <div className="space-y-2 text-sm whitespace-normal break-words">
                <div>
                  Message item 1 with potentially lengthy text that needs wrapping.
                </div>
                <div>
                  Message item 2 with additional details that should not overflow.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile Image */}
        <img
          src="/Frame 106.png"
          alt="Profile"
          className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg object-cover"
        />

        {/* Quick Actions Icon */}
        <div ref={quickActionsRef} className="relative">
          <button
            className="hidden sm:flex items-center gap-1.5 sm:gap-2 border border-[#6B047C] text-[#6B047C] text-xs sm:text-sm font-medium px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-[#F9F5FA] transition-colors"
            onClick={toggleQuickActions}
          >
            <span>Quick actions</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${showQuickActions ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showQuickActions && (
            <div
              className="absolute right-0 top-full mt-2 w-[16rem] sm:w-[18rem] md:w-[20rem] bg-white rounded-lg shadow-lg py-2 px-2 sm:py-3 sm:px-3 md:py-4 md:px-4 z-50"
            >
              <div className="space-y-2 text-sm whitespace-normal break-words">
                {/* Profile Link */}
                <div className="flex items-center gap-3 p-2 hover:bg-[#F9F5FA] rounded-lg cursor-pointer group">
                  <img
                    src="/Frame 106.png"
                    alt="Profile"
                    className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#1A011E] group-hover:text-[#6B047C] font-medium transition-colors whitespace-nowrap">
                      Wisdom Umanah
                    </span>
                    <span className="text-[#808080] group-hover:text-[#6B047C] transition-colors">
                      My profile
                    </span>
                  </div>
                </div>
                {[
                  { label: "Dispute", icon: "/Frame 1000007971.svg" },
                  { label: "Help and support", icon: "/Frame 1000007971 (1).svg" },
                  { label: "Settings", icon: "/Frame 1000007971 (3).svg" },
                  { label: "Log out", icon: "/Frame 1000007971.svg" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2 hover:bg-[#F9F5FA] rounded-lg cursor-pointer group"
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-8 h-8 p-2 bg-[#F2F2F2] rounded-lg"
                    />
                    <span className="text-[#808080] group-hover:text-[#6B047C] transition-colors whitespace-normal break-words">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;